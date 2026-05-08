const { isAdmin, isGroup } = require("../../utils/grupHelper");
const groupDb = require("../../utils/groupDb");

module.exports = ({ bot }) => {

  // ── /filter <keyword> <respon> ────────────────────────────────────────────
  bot.command("filter", async (ctx) => {
    if (!isGroup(ctx)) return ctx.reply("❌ Hanya bisa di grup.");
    if (!await isAdmin(ctx, ctx.from.id)) return ctx.reply("❌ Hanya admin.");
    const args = ctx.message.text.split(" ").slice(1);
    const keyword = args[0];
    const response = args.slice(1).join(" ").trim();
    if (!keyword || !response) return ctx.reply("⚠️ Format: `/filter <keyword> <respon>`", { parse_mode: "Markdown" });
    groupDb.addFilter(ctx.chat.id, keyword, response);
    return ctx.reply(`✅ Filter *${keyword}* ditambahkan.`, { parse_mode: "Markdown" });
  });

  // ── /stop <keyword> ───────────────────────────────────────────────────────
  bot.command("stop", async (ctx) => {
    if (!isGroup(ctx)) return ctx.reply("❌ Hanya bisa di grup.");
    if (!await isAdmin(ctx, ctx.from.id)) return ctx.reply("❌ Hanya admin.");
    const keyword = ctx.message.text.split(" ")[1];
    if (!keyword) return ctx.reply("⚠️ Format: `/stop <keyword>`", { parse_mode: "Markdown" });
    groupDb.removeFilter(ctx.chat.id, keyword);
    return ctx.reply(`✅ Filter *${keyword}* dihapus.`, { parse_mode: "Markdown" });
  });

  // ── /filters ──────────────────────────────────────────────────────────────
  bot.command("filters", async (ctx) => {
    if (!isGroup(ctx)) return ctx.reply("❌ Hanya bisa di grup.");
    const filters = groupDb.getFilters(ctx.chat.id);
    const keys = Object.keys(filters);
    if (keys.length === 0) return ctx.reply("📭 Belum ada filter di grup ini.");
    const list = keys.map((k) => `• \`${k}\` → ${filters[k]}`).join("\n");
    return ctx.reply(`🔍 *Filter Aktif (${keys.length}):*\n\n${list}`, { parse_mode: "Markdown" });
  });
};
