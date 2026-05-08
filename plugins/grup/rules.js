const { isAdmin, isGroup } = require("../../utils/grupHelper");
const groupDb = require("../../utils/groupDb");

module.exports = ({ bot }) => {

  // ── /setrules <teks> ──────────────────────────────────────────────────────
  bot.command("setrules", async (ctx) => {
    if (!isGroup(ctx)) return ctx.reply("❌ Hanya bisa di grup.");
    if (!await isAdmin(ctx, ctx.from.id)) return ctx.reply("❌ Hanya admin.");
    const text = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!text) return ctx.reply("⚠️ Format: `/setrules <teks aturan>`", { parse_mode: "Markdown" });
    groupDb.updateSettings(ctx.chat.id, { rules: text });
    return ctx.reply("✅ Peraturan grup berhasil diset!");
  });

  // ── /rules ────────────────────────────────────────────────────────────────
  bot.command("rules", async (ctx) => {
    const settings = isGroup(ctx)
      ? groupDb.getGroup(ctx.chat.id).settings
      : null;
    if (!settings || !settings.rules) {
      return ctx.reply("📭 Grup ini belum memiliki peraturan.\nAdmin bisa set dengan `/setrules`", { parse_mode: "Markdown" });
    }
    return ctx.reply(
      `📋 *Peraturan ${ctx.chat.title}:*\n\n${settings.rules}`,
      { parse_mode: "Markdown" }
    );
  });

  // ── /clearrules ───────────────────────────────────────────────────────────
  bot.command("clearrules", async (ctx) => {
    if (!isGroup(ctx)) return ctx.reply("❌ Hanya bisa di grup.");
    if (!await isAdmin(ctx, ctx.from.id)) return ctx.reply("❌ Hanya admin.");
    groupDb.updateSettings(ctx.chat.id, { rules: "" });
    return ctx.reply("✅ Peraturan grup dihapus.");
  });
};
