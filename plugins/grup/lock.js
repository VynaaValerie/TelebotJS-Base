const { isAdmin, isGroup } = require("../../utils/grupHelper");
const groupDb = require("../../utils/groupDb");

const LOCK_TYPES = ["sticker", "gif", "photo", "video", "audio", "document", "url", "forward", "bot"];

module.exports = ({ bot }) => {

  // ── /lock <tipe> ──────────────────────────────────────────────────────────
  bot.command("lock", async (ctx) => {
    if (!isGroup(ctx)) return ctx.reply("❌ Hanya bisa di grup.");
    if (!await isAdmin(ctx, ctx.from.id)) return ctx.reply("❌ Hanya admin.");
    const type = ctx.message.text.split(" ")[1]?.toLowerCase();
    if (!type || !LOCK_TYPES.includes(type)) {
      return ctx.reply(`⚠️ Tipe lock tersedia:\n${LOCK_TYPES.map((t) => `\`${t}\``).join(" ")}`, { parse_mode: "Markdown" });
    }
    groupDb.updateLock(ctx.chat.id, type, true);
    return ctx.reply(`🔒 *${type}* berhasil dikunci.`, { parse_mode: "Markdown" });
  });

  // ── /unlock <tipe> ────────────────────────────────────────────────────────
  bot.command("unlock", async (ctx) => {
    if (!isGroup(ctx)) return ctx.reply("❌ Hanya bisa di grup.");
    if (!await isAdmin(ctx, ctx.from.id)) return ctx.reply("❌ Hanya admin.");
    const type = ctx.message.text.split(" ")[1]?.toLowerCase();
    if (!type || !LOCK_TYPES.includes(type)) {
      return ctx.reply(`⚠️ Tipe lock tersedia:\n${LOCK_TYPES.map((t) => `\`${t}\``).join(" ")}`, { parse_mode: "Markdown" });
    }
    groupDb.updateLock(ctx.chat.id, type, false);
    return ctx.reply(`🔓 *${type}* berhasil dibuka.`, { parse_mode: "Markdown" });
  });

  // ── /locks ────────────────────────────────────────────────────────────────
  bot.command("locks", async (ctx) => {
    if (!isGroup(ctx)) return ctx.reply("❌ Hanya bisa di grup.");
    const locks = groupDb.getGroup(ctx.chat.id).settings.locks;
    const list = LOCK_TYPES.map((t) => `${locks[t] ? "🔒" : "🔓"} \`${t}\``).join("\n");
    return ctx.reply(`🔐 *Status Lock ${ctx.chat.title}:*\n\n${list}`, { parse_mode: "Markdown" });
  });
};
