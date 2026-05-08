const { isAdmin, isGroup } = require("../../utils/grupHelper");
const groupDb = require("../../utils/groupDb");

module.exports = ({ bot }) => {

  // ── /save <nama> <konten> ─────────────────────────────────────────────────
  bot.command("save", async (ctx) => {
    if (!isGroup(ctx)) return ctx.reply("❌ Hanya bisa di grup.");
    if (!await isAdmin(ctx, ctx.from.id)) return ctx.reply("❌ Hanya admin.");
    const args = ctx.message.text.split(" ").slice(1);
    const name = args[0];
    const content = args.slice(1).join(" ").trim()
      || ctx.message.reply_to_message?.text
      || ctx.message.reply_to_message?.caption;
    if (!name || !content) return ctx.reply("⚠️ Format: `/save <nama> <konten>`\nAtau reply pesan + `/save <nama>`", { parse_mode: "Markdown" });
    groupDb.saveNote(ctx.chat.id, name, content);
    return ctx.reply(`✅ Note *${name}* berhasil disimpan.`, { parse_mode: "Markdown" });
  });

  // ── /get <nama> atau #nama ────────────────────────────────────────────────
  bot.command("get", async (ctx) => {
    if (!isGroup(ctx)) return ctx.reply("❌ Hanya bisa di grup.");
    const name = ctx.message.text.split(" ")[1];
    if (!name) return ctx.reply("⚠️ Format: `/get <nama>`", { parse_mode: "Markdown" });
    const note = groupDb.getNote(ctx.chat.id, name);
    if (!note) return ctx.reply(`❌ Note *${name}* tidak ditemukan.`, { parse_mode: "Markdown" });
    return ctx.reply(`📝 *${name}*\n\n${note}`, { parse_mode: "Markdown" });
  });

  // ── Trigger #namanote ─────────────────────────────────────────────────────
  bot.on("message:text", async (ctx, next) => {
    if (!isGroup(ctx)) return next();
    const match = ctx.message.text.match(/^#(\w+)/);
    if (!match) return next();
    const note = groupDb.getNote(ctx.chat.id, match[1]);
    if (note) await ctx.reply(`📝 *${match[1]}*\n\n${note}`, { parse_mode: "Markdown" });
    return next();
  });

  // ── /notes ────────────────────────────────────────────────────────────────
  bot.command("notes", async (ctx) => {
    if (!isGroup(ctx)) return ctx.reply("❌ Hanya bisa di grup.");
    const notes = groupDb.getNotes(ctx.chat.id);
    const keys = Object.keys(notes);
    if (keys.length === 0) return ctx.reply("📭 Belum ada note di grup ini.");
    const list = keys.map((k) => `• \`#${k}\``).join("\n");
    return ctx.reply(`📝 *Daftar Note (${keys.length}):*\n\n${list}`, { parse_mode: "Markdown" });
  });

  // ── /delnote <nama> ───────────────────────────────────────────────────────
  bot.command("delnote", async (ctx) => {
    if (!isGroup(ctx)) return ctx.reply("❌ Hanya bisa di grup.");
    if (!await isAdmin(ctx, ctx.from.id)) return ctx.reply("❌ Hanya admin.");
    const name = ctx.message.text.split(" ")[1];
    if (!name) return ctx.reply("⚠️ Format: `/delnote <nama>`", { parse_mode: "Markdown" });
    groupDb.deleteNote(ctx.chat.id, name);
    return ctx.reply(`🗑️ Note *${name}* berhasil dihapus.`, { parse_mode: "Markdown" });
  });
};
