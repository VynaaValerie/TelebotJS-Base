const { Bot, InputFile, Composer } = require("grammy");
const axios = require("axios");
const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const cfonts = require("cfonts");
const chokidar = require("chokidar");

const config = require("./settings/vynaa.json");
const db = require("./utils/db");
const helper = require("./utils/helper");
const { DynamicRouter, makeBotProxy } = require("./utils/hotLoader");
const registerMiddleware = require("./middleware/register");
const limitMiddleware = require("./middleware/limit");
const loadingMiddleware = require("./middleware/loading");
const grupProtectMiddleware = require("./middleware/grupProtect");

// ─── GLOBAL GAME SESSION STORE (shared across all game plugins) ───────────────
const gameSessions = new Map();

// ─── BANNER ──────────────────────────────────────────────────────────────────
console.clear();
cfonts.say("Vynaa\nAI", {
  font: "block",
  align: "center",
  colors: ["white"],
  letterSpacing: 1,
});
cfonts.say(`Simple Bot By @VynaChan`, {
  font: "console",
  align: "center",
  colors: ["green"],
});

const line = chalk.gray("─".repeat(48));
console.log(line);

// ─── INIT BOT ────────────────────────────────────────────────────────────────
const bot = new Bot(config.token);
const router = new DynamicRouter();
const ctx_inject = { bot, config, db, helper, axios, InputFile, gameSessions };

// ─── MIDDLEWARE: REGISTER + LOADING + GRUP PROTECT ───────────────────────────
bot.use(registerMiddleware);
bot.use(grupProtectMiddleware);
bot.use(loadingMiddleware);

// ─── GAME ANSWER CHECKER ─────────────────────────────────────────────────────
bot.on("message:text", async (ctx, next) => {
  const text = ctx.message.text?.toLowerCase().trim();
  if (!text || text.startsWith("/")) return next();
  for (const [key, session] of gameSessions) {
    if (!key.startsWith(`${ctx.chat.id}:`)) continue;
    if (text === session.jawaban) {
      clearTimeout(session.timeout);
      gameSessions.delete(key);
      return ctx.reply(
        `✅ *Benar!* Jawaban: *${session.jawaban}*\n🎉 ${ctx.from.first_name} menang!`,
        { parse_mode: "Markdown" }
      );
    }
  }
  return next();
});

// ─── DYNAMIC COMMAND ROUTER ──────────────────────────────────────────────────
bot.use(async (ctx, next) => {
  const text = ctx.message?.text || ctx.channelPost?.text;
  if (text) {
    const rawCmd = text.trim().split(/\s/)[0];
    if (rawCmd.startsWith("/")) {
      const cmd = rawCmd.slice(1).split("@")[0].toLowerCase();
      const entry = router.get(cmd);
      if (entry) {
        if (entry.withLimit) return limitMiddleware(ctx, () => entry.handler(ctx));
        return entry.handler(ctx);
      }
    }
  }
  return next();
});

// ─── DYNAMIC CALLBACK QUERY ROUTER ───────────────────────────────────────────
bot.on("callback_query:data", async (ctx, next) => {
  const handled = await router.dispatchCallback(ctx);
  if (!handled) return next();
});

// ─── MIDDLEWARE: ACTIVITY LOG ────────────────────────────────────────────────
bot.use(async (ctx, next) => {
  const from = ctx.from;
  const chat = ctx.chat;
  const msg = ctx.message || ctx.channelPost;

  if (from && msg) {
    const name = [from.first_name, from.last_name].filter(Boolean).join(" ");
    const username = from.username ? `@${from.username}` : `ID:${from.id}`;
    const text = msg.text || msg.caption || "[non-text]";
    const time = new Date().toLocaleTimeString("id-ID", { timeZone: config.timezone });

    let typeLabel;
    if (chat?.type === "private")                         typeLabel = chalk.cyan("Private");
    else if (chat?.type === "group" || chat?.type === "supergroup") typeLabel = chalk.yellow(`Grup » ${chat.title}`);
    else if (chat?.type === "channel")                    typeLabel = chalk.magenta(`Channel » ${chat.title}`);
    else                                                  typeLabel = chalk.gray("Unknown");

    const isCmd = text.startsWith("/");
    const textFormatted = isCmd ? chalk.greenBright(text) : chalk.white(text);

    console.log(
      chalk.gray(`[${time}]`) + " " +
      typeLabel + " " +
      chalk.gray("│") + " " +
      chalk.bold(name) + " " +
      chalk.gray(`(${username})`) + " " +
      chalk.gray("→") + " " +
      textFormatted
    );
  }

  return next();
});

// ─── LOAD PLUGINS ────────────────────────────────────────────────────────────
function loadPlugins(categoryDir, label, withLimit = false) {
  const fullDir = path.join(__dirname, categoryDir);
  if (!fs.existsSync(fullDir)) {
    console.log(chalk.yellow(`  ⚠  Folder tidak ditemukan: ${categoryDir}`));
    return 0;
  }

  const files = fs.readdirSync(fullDir).filter((f) => f.endsWith(".js"));
  let ok = 0, fail = 0;

  for (const file of files) {
    const filePath = path.join(fullDir, file);
    try {
      const proxyBot = makeBotProxy(router, filePath, withLimit, bot);
      const inject = { ...ctx_inject, bot: proxyBot };
      require(filePath)(inject);
      ok++;
    } catch (err) {
      console.log(chalk.red(`  ✖ ${file} → ${err.message}`));
      fail++;
    }
  }

  const status = fail > 0
    ? chalk.green(`${ok} loaded`) + chalk.red(`, ${fail} gagal`)
    : chalk.green(`${ok} loaded`);

  console.log(
    chalk.bold.white(`  ${label}`) +
    chalk.gray(" › ") +
    status +
    (withLimit ? chalk.gray(" [limit]") : "")
  );

  return ok;
}

console.log(chalk.bold.blueBright("\n  ◈ Memuat Plugin\n"));
loadPlugins("plugins/general",  "General  ", false);
loadPlugins("plugins/owner",    "Owner    ", false);
loadPlugins("plugins/berita",   "Berita   ", false);
loadPlugins("plugins/cecan",    "Cecan    ", false);
loadPlugins("plugins/islamic",  "Islamic  ", false);
loadPlugins("plugins/ai",       "AI       ", true);
loadPlugins("plugins/anime",    "Anime    ", true);
loadPlugins("plugins/asupan",   "Asupan   ", true);
loadPlugins("plugins/download", "Download ", false);
loadPlugins("plugins/maker",    "Maker    ", false);
loadPlugins("plugins/canvas",   "Canvas   ", false);
loadPlugins("plugins/emoji",    "Emoji    ", false);
loadPlugins("plugins/ephoto",   "Ephoto   ", false);
loadPlugins("plugins/game",     "Game     ", false);
loadPlugins("plugins/info",     "Info     ", false);
loadPlugins("plugins/search",   "Search   ", false);
loadPlugins("plugins/stalk",    "Stalk    ", false);
loadPlugins("plugins/sticker",  "Sticker  ", false);
loadPlugins("plugins/story",    "Story    ", false);
loadPlugins("plugins/tts",      "TTS      ", false);
loadPlugins("plugins/textpro",  "TextPro  ", false);
loadPlugins("plugins/tools",    "Tools    ", false);
loadPlugins("plugins/grup",     "Grup     ", false);
loadPlugins("plugins/nsfw",     "NSFW     ", false);
loadPlugins("plugins/wallpaper","Wallpaper", false);
loadPlugins("plugins/random",   "Random   ", false);
loadPlugins("plugins/news",     "News     ", false);
loadPlugins("plugins/primbon",  "Primbon  ", false);
loadPlugins("plugins/photooxy", "Photooxy ", false);
loadPlugins("plugins/vokal",    "Vokal    ", false);
loadPlugins("plugins/webzone",  "Webzone  ", false);
console.log();
console.log(line);

// ─── HOT RELOAD WATCHER ──────────────────────────────────────────────────────
function hotReload(filePath, withLimit = false) {
  router.unregister(filePath);
  try { delete require.cache[require.resolve(filePath)]; } catch {}
  try {
    const proxyBot = makeBotProxy(router, filePath, withLimit, bot);
    const inject = { ...ctx_inject, bot: proxyBot };
    require(filePath)(inject);
    console.log(chalk.green(`  ✔ Loaded: ${path.relative(__dirname, filePath)}`));
  } catch (err) {
    console.log(chalk.red(`  ✖ Error: ${path.basename(filePath)} → ${err.message}`));
  }
}

chokidar.watch(path.join(__dirname, "plugins"), {
  ignoreInitial: true,
  depth: 2,
  awaitWriteFinish: { stabilityThreshold: 500, pollInterval: 100 },
})
  .on("add", (fp) => {
    if (!fp.endsWith(".js")) return;
    console.log(chalk.cyan(`\n  + Plugin baru: ${path.relative(__dirname, fp)}`));
    hotReload(fp, false);
  })
  .on("change", (fp) => {
    if (!fp.endsWith(".js")) return;
    console.log(chalk.yellow(`\n  ~ Plugin diperbarui: ${path.relative(__dirname, fp)}`));
    hotReload(fp, false);
  });

console.log(chalk.gray("  ♻  Hot-reload aktif — tidak perlu restart saat edit plugin!\n"));
console.log(line);

// ─── ERROR HANDLER ───────────────────────────────────────────────────────────
bot.catch((err) => {
  const ctx = err.ctx;
  const errMsg = err.error?.message || String(err.error);
  const from = ctx?.from;
  const name = from ? [from.first_name, from.last_name].filter(Boolean).join(" ") : "Unknown";
  const time = new Date().toLocaleTimeString("id-ID", { timeZone: config.timezone });
  console.log(
    chalk.gray(`[${time}]`) + " " +
    chalk.bgRed.white(" ERROR ") + " " +
    chalk.bold(name) + " " +
    chalk.gray(`#${ctx?.update?.update_id}`) + "\n" +
    chalk.red(`         ${errMsg}`)
  );
  if (ctx) ctx.reply("⚠️ Terjadi kesalahan internal. Coba lagi nanti.").catch(() => {});
});

// ─── START ───────────────────────────────────────────────────────────────────
bot.start({
  allowed_updates: [
    "message", "edited_message", "channel_post", "edited_channel_post",
    "callback_query", "inline_query", "chat_member", "my_chat_member",
    "chat_join_request",
  ],
  onStart: (info) => {
    console.log(chalk.bold.greenBright(`\n  ✔ @${info.username} aktif!\n`));
    console.log(chalk.gray("  Owner   : ") + chalk.white(`${config.ownerName} (${config.ownerID})`));
    console.log(chalk.gray("  Limit   : ") + chalk.white(`Free ${config.dailyLimit}x`) + chalk.gray(" / ") + chalk.yellow(`Premium ${config.premiumLimit}x`));
    console.log(chalk.gray("  Waktu   : ") + chalk.white(new Date().toLocaleString("id-ID", { timeZone: config.timezone })));
    console.log("\n" + line + "\n");
  },
});
