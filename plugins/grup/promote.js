const { isAdmin, isBotAdmin, getTarget, isGroup, mentionUser } = require("../../utils/grupHelper");

module.exports = ({ bot }) => {

  // ── /promote ──────────────────────────────────────────────────────────────
  bot.command("promote", async (ctx) => {
    if (!isGroup(ctx)) return ctx.reply("❌ Hanya bisa di grup.");
    if (!await isAdmin(ctx, ctx.from.id)) return ctx.reply("❌ Hanya admin.");
    if (!await isBotAdmin(ctx)) return ctx.reply("❌ Bot bukan admin.");

    const target = getTarget(ctx);
    if (!target) return ctx.reply("⚠️ Reply ke user atau: `/promote <id>`", { parse_mode: "Markdown" });
    if (target.isBot) return ctx.reply("❌ Tidak bisa promote bot.");

    try {
      await ctx.promoteChatMember(target.id, {
        can_change_info: false,
        can_delete_messages: true,
        can_invite_users: true,
        can_restrict_members: true,
        can_pin_messages: true,
        can_manage_chat: true,
        can_manage_video_chats: false,
      });
      return ctx.reply(
        `⭐ ${mentionUser(target.id, target.name)} berhasil dipromote jadi admin!`,
        { parse_mode: "HTML" }
      );
    } catch (e) {
      return ctx.reply(`❌ Gagal promote: ${e.message}`);
    }
  });

  // ── /demote ───────────────────────────────────────────────────────────────
  bot.command("demote", async (ctx) => {
    if (!isGroup(ctx)) return ctx.reply("❌ Hanya bisa di grup.");
    if (!await isAdmin(ctx, ctx.from.id)) return ctx.reply("❌ Hanya admin.");
    if (!await isBotAdmin(ctx)) return ctx.reply("❌ Bot bukan admin.");

    const target = getTarget(ctx);
    if (!target) return ctx.reply("⚠️ Reply ke user atau: `/demote <id>`", { parse_mode: "Markdown" });

    try {
      await ctx.promoteChatMember(target.id, {
        can_change_info: false,
        can_delete_messages: false,
        can_invite_users: false,
        can_restrict_members: false,
        can_pin_messages: false,
        can_manage_chat: false,
        can_manage_video_chats: false,
        can_post_messages: false,
        can_edit_messages: false,
      });
      return ctx.reply(
        `👤 ${mentionUser(target.id, target.name)} berhasil di-demote jadi member biasa.`,
        { parse_mode: "HTML" }
      );
    } catch (e) {
      return ctx.reply(`❌ Gagal demote: ${e.message}`);
    }
  });

  // ── /settitle <judul> ─────────────────────────────────────────────────────
  bot.command("settitle", async (ctx) => {
    if (!isGroup(ctx)) return ctx.reply("❌ Hanya bisa di grup.");
    if (!await isAdmin(ctx, ctx.from.id)) return ctx.reply("❌ Hanya admin.");
    if (!await isBotAdmin(ctx)) return ctx.reply("❌ Bot bukan admin.");

    const reply = ctx.message.reply_to_message;
    if (!reply) return ctx.reply("⚠️ Reply ke admin untuk set judul.");
    const title = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!title) return ctx.reply("⚠️ Format: `/settitle <judul>` (reply ke admin)", { parse_mode: "Markdown" });

    try {
      await ctx.setChatAdministratorCustomTitle(reply.from.id, title);
      return ctx.reply(
        `✅ Judul ${mentionUser(reply.from.id, reply.from.first_name)} diset ke: <b>${title}</b>`,
        { parse_mode: "HTML" }
      );
    } catch (e) {
      return ctx.reply(`❌ Gagal: ${e.message}`);
    }
  });
};
