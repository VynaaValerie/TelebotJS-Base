const { isAdmin, isGroup } = require("../../utils/grupHelper");
const groupDb = require("../../utils/groupDb");

module.exports = ({ bot }) => {

  // ── /antilink on/off ──────────────────────────────────────────────────────
  bot.command("antilink", async (ctx) => {
    if (!isGroup(ctx)) return ctx.reply("❌ Hanya bisa di grup.");
    if (!await isAdmin(ctx, ctx.from.id)) return ctx.reply("❌ Hanya admin.");
    const arg = ctx.message.text.split(" ")[1]?.toLowerCase();
    if (!["on", "off"].includes(arg)) return ctx.reply("⚠️ Format: `/antilink on` atau `/antilink off`", { parse_mode: "Markdown" });
    const val = arg === "on";
    groupDb.updateSettings(ctx.chat.id, { antilink: val });
    return ctx.reply(`🔗 Anti-link ${val ? "✅ diaktifkan" : "❌ dinonaktifkan"}.`);
  });

  // ── /antiflood <angka/off> ────────────────────────────────────────────────
  bot.command("antiflood", async (ctx) => {
    if (!isGroup(ctx)) return ctx.reply("❌ Hanya bisa di grup.");
    if (!await isAdmin(ctx, ctx.from.id)) return ctx.reply("❌ Hanya admin.");
    const arg = ctx.message.text.split(" ")[1];
    if (!arg) return ctx.reply("⚠️ Format: `/antiflood <angka>` atau `/antiflood off`", { parse_mode: "Markdown" });
    const val = arg.toLowerCase() === "off" ? 0 : parseInt(arg);
    if (arg.toLowerCase() !== "off" && (isNaN(val) || val < 2)) return ctx.reply("⚠️ Angka minimal 2.");
    groupDb.updateSettings(ctx.chat.id, { antiflood: val });
    return ctx.reply(val === 0
      ? "⚡ Anti-flood ❌ dinonaktifkan."
      : `⚡ Anti-flood ✅ diaktifkan. Limit: *${val} pesan/5 detik*.`, { parse_mode: "Markdown" }
    );
  });

  // ── /antiforward on/off ───────────────────────────────────────────────────
  bot.command("antiforward", async (ctx) => {
    if (!isGroup(ctx)) return ctx.reply("❌ Hanya bisa di grup.");
    if (!await isAdmin(ctx, ctx.from.id)) return ctx.reply("❌ Hanya admin.");
    const arg = ctx.message.text.split(" ")[1]?.toLowerCase();
    if (!["on", "off"].includes(arg)) return ctx.reply("⚠️ Format: `/antiforward on` atau `/antiforward off`", { parse_mode: "Markdown" });
    const val = arg === "on";
    groupDb.updateSettings(ctx.chat.id, { antiforward: val });
    return ctx.reply(`🔄 Anti-forward ${val ? "✅ diaktifkan" : "❌ dinonaktifkan"}.`);
  });

  // ── /blacklist <kata> ─────────────────────────────────────────────────────
  bot.command("blacklist", async (ctx) => {
    if (!isGroup(ctx)) return ctx.reply("❌ Hanya bisa di grup.");
    const args = ctx.message.text.split(" ").slice(1);

    // Tanpa argumen → tampilkan daftar
    if (args.length === 0) {
      const list = groupDb.getBlacklist(ctx.chat.id);
      if (list.length === 0) return ctx.reply("📭 Belum ada kata terlarang.");
      return ctx.reply(`⛔ *Kata Terlarang (${list.length}):*\n\n${list.map((w) => `• \`${w}\``).join("\n")}`, { parse_mode: "Markdown" });
    }

    if (!await isAdmin(ctx, ctx.from.id)) return ctx.reply("❌ Hanya admin.");
    const word = args.join(" ").trim().toLowerCase();
    groupDb.addBlacklist(ctx.chat.id, word);
    return ctx.reply(`⛔ Kata *${word}* ditambahkan ke blacklist.`, { parse_mode: "Markdown" });
  });

  // ── /unblacklist <kata> ───────────────────────────────────────────────────
  bot.command("unblacklist", async (ctx) => {
    if (!isGroup(ctx)) return ctx.reply("❌ Hanya bisa di grup.");
    if (!await isAdmin(ctx, ctx.from.id)) return ctx.reply("❌ Hanya admin.");
    const word = ctx.message.text.split(" ").slice(1).join(" ").trim().toLowerCase();
    if (!word) return ctx.reply("⚠️ Format: `/unblacklist <kata>`", { parse_mode: "Markdown" });
    groupDb.removeBlacklist(ctx.chat.id, word);
    return ctx.reply(`✅ Kata *${word}* dihapus dari blacklist.`, { parse_mode: "Markdown" });
  });
};
