const { isAdmin, isBotAdmin, getTarget, getReason, mentionUser, isGroup } = require("../../utils/grupHelper");
const groupDb = require("../../utils/groupDb");

module.exports = ({ bot }) => {

  // ── /warn ─────────────────────────────────────────────────────────────────
  bot.command("warn", async (ctx) => {
    if (!isGroup(ctx)) return ctx.reply("❌ Hanya bisa di grup.");
    if (!await isAdmin(ctx, ctx.from.id)) return ctx.reply("❌ Hanya admin.");
    const target = getTarget(ctx);
    if (!target) return ctx.reply("⚠️ Reply ke user untuk warn.", { parse_mode: "Markdown" });
    if (await isAdmin(ctx, target.id)) return ctx.reply("❌ Tidak bisa warn admin.");

    const reason = getReason(ctx, !!ctx.message.reply_to_message);
    const result = groupDb.addWarn(ctx.chat.id, target.id, reason || "Tidak ada alasan");

    if (result.count >= result.max) {
      await ctx.banChatMember(target.id).catch(() => {});
      groupDb.resetWarns(ctx.chat.id, target.id);
      return ctx.reply(
        `🚫 ${mentionUser(target.id, target.name)} mencapai batas warn (${result.max}/${result.max}) dan telah di-ban!`,
        { parse_mode: "HTML" }
      );
    }

    return ctx.reply(
      `⚠️ ${mentionUser(target.id, target.name)} mendapat peringatan!\n` +
      `📊 Warn: *${result.count}/${result.max}*\n` +
      (reason ? `📝 Alasan: ${reason}` : ""),
      { parse_mode: "HTML" }
    );
  });

  // ── /unwarn ───────────────────────────────────────────────────────────────
  bot.command("unwarn", async (ctx) => {
    if (!isGroup(ctx)) return ctx.reply("❌ Hanya bisa di grup.");
    if (!await isAdmin(ctx, ctx.from.id)) return ctx.reply("❌ Hanya admin.");
    const target = getTarget(ctx);
    if (!target) return ctx.reply("⚠️ Reply ke user untuk unwarn.");
    const warns = groupDb.removeWarn(ctx.chat.id, target.id);
    const settings = groupDb.getGroup(ctx.chat.id).settings;
    return ctx.reply(
      `✅ Satu warn ${mentionUser(target.id, target.name)} dihapus.\n📊 Sisa: *${warns.length}/${settings.maxwarn}*`,
      { parse_mode: "HTML" }
    );
  });

  // ── /warns ────────────────────────────────────────────────────────────────
  bot.command("warns", async (ctx) => {
    if (!isGroup(ctx)) return ctx.reply("❌ Hanya bisa di grup.");
    const target = getTarget(ctx) || { id: ctx.from.id, name: ctx.from.first_name };
    const warns = groupDb.getWarns(ctx.chat.id, target.id);
    const settings = groupDb.getGroup(ctx.chat.id).settings;

    if (warns.length === 0) {
      return ctx.reply(`✅ ${mentionUser(target.id, target.name)} tidak punya warn.`, { parse_mode: "HTML" });
    }

    const list = warns.map((w, i) => `${i + 1}. ${w.reason} — ${new Date(w.date).toLocaleDateString("id-ID")}`).join("\n");
    return ctx.reply(
      `⚠️ Warn ${mentionUser(target.id, target.name)}: *${warns.length}/${settings.maxwarn}*\n\n${list}`,
      { parse_mode: "HTML" }
    );
  });

  // ── /resetwarn ────────────────────────────────────────────────────────────
  bot.command("resetwarn", async (ctx) => {
    if (!isGroup(ctx)) return ctx.reply("❌ Hanya bisa di grup.");
    if (!await isAdmin(ctx, ctx.from.id)) return ctx.reply("❌ Hanya admin.");
    const target = getTarget(ctx);
    if (!target) return ctx.reply("⚠️ Reply ke user untuk reset warn.");
    groupDb.resetWarns(ctx.chat.id, target.id);
    return ctx.reply(`✅ Semua warn ${mentionUser(target.id, target.name)} direset.`, { parse_mode: "HTML" });
  });

  // ── /setwarnlimit ─────────────────────────────────────────────────────────
  bot.command("setwarnlimit", async (ctx) => {
    if (!isGroup(ctx)) return ctx.reply("❌ Hanya bisa di grup.");
    if (!await isAdmin(ctx, ctx.from.id)) return ctx.reply("❌ Hanya admin.");
    const num = parseInt(ctx.message.text.split(" ")[1]);
    if (isNaN(num) || num < 1 || num > 10) return ctx.reply("⚠️ Format: `/setwarnlimit <1-10>`", { parse_mode: "Markdown" });
    groupDb.updateSettings(ctx.chat.id, { maxwarn: num });
    return ctx.reply(`✅ Batas warn diset ke *${num}x*.`, { parse_mode: "Markdown" });
  });
};
