const { isAdmin, isBotAdmin, getTarget, getReason, parseDuration, mentionUser, formatUntil, isGroup } = require("../../utils/grupHelper");

module.exports = ({ bot }) => {

  const NO_PERMS = { can_send_messages: false, can_send_audios: false, can_send_documents: false, can_send_photos: false, can_send_videos: false, can_send_video_notes: false, can_send_voice_notes: false, can_send_polls: false, can_send_other_messages: false };
  const FULL_PERMS = { can_send_messages: true, can_send_audios: true, can_send_documents: true, can_send_photos: true, can_send_videos: true, can_send_video_notes: true, can_send_voice_notes: true, can_send_polls: true, can_send_other_messages: true };

  // ── /ban ──────────────────────────────────────────────────────────────────
  bot.command("ban", async (ctx) => {
    if (!isGroup(ctx)) return ctx.reply("❌ Hanya bisa di grup.");
    if (!await isAdmin(ctx, ctx.from.id)) return ctx.reply("❌ Hanya admin.");
    if (!await isBotAdmin(ctx)) return ctx.reply("❌ Bot bukan admin.");
    const target = getTarget(ctx);
    if (!target) return ctx.reply("⚠️ Reply ke user atau: `/ban <id>`", { parse_mode: "Markdown" });
    if (await isAdmin(ctx, target.id)) return ctx.reply("❌ Tidak bisa ban admin.");
    const reason = getReason(ctx, !!ctx.message.reply_to_message);
    await ctx.banChatMember(target.id).catch(() => {});
    return ctx.reply(
      `🚫 ${mentionUser(target.id, target.name)} telah di-ban!\n` +
      (reason ? `📝 Alasan: ${reason}` : ""),
      { parse_mode: "HTML" }
    );
  });

  // ── /unban ────────────────────────────────────────────────────────────────
  bot.command("unban", async (ctx) => {
    if (!isGroup(ctx)) return ctx.reply("❌ Hanya bisa di grup.");
    if (!await isAdmin(ctx, ctx.from.id)) return ctx.reply("❌ Hanya admin.");
    if (!await isBotAdmin(ctx)) return ctx.reply("❌ Bot bukan admin.");
    const target = getTarget(ctx);
    if (!target) return ctx.reply("⚠️ Format: `/unban <id>`", { parse_mode: "Markdown" });
    await ctx.unbanChatMember(target.id).catch(() => {});
    return ctx.reply(`✅ ${mentionUser(target.id, target.name)} berhasil di-unban.`, { parse_mode: "HTML" });
  });

  // ── /kick ─────────────────────────────────────────────────────────────────
  bot.command("kick", async (ctx) => {
    if (!isGroup(ctx)) return ctx.reply("❌ Hanya bisa di grup.");
    if (!await isAdmin(ctx, ctx.from.id)) return ctx.reply("❌ Hanya admin.");
    if (!await isBotAdmin(ctx)) return ctx.reply("❌ Bot bukan admin.");
    const target = getTarget(ctx);
    if (!target) return ctx.reply("⚠️ Reply ke user atau: `/kick <id>`", { parse_mode: "Markdown" });
    if (await isAdmin(ctx, target.id)) return ctx.reply("❌ Tidak bisa kick admin.");
    await ctx.banChatMember(target.id).catch(() => {});
    await ctx.unbanChatMember(target.id).catch(() => {});
    return ctx.reply(`👢 ${mentionUser(target.id, target.name)} telah di-kick!`, { parse_mode: "HTML" });
  });

  // ── /mute ─────────────────────────────────────────────────────────────────
  bot.command("mute", async (ctx) => {
    if (!isGroup(ctx)) return ctx.reply("❌ Hanya bisa di grup.");
    if (!await isAdmin(ctx, ctx.from.id)) return ctx.reply("❌ Hanya admin.");
    if (!await isBotAdmin(ctx)) return ctx.reply("❌ Bot bukan admin.");
    const target = getTarget(ctx);
    if (!target) return ctx.reply("⚠️ Reply ke user atau: `/mute <id>`", { parse_mode: "Markdown" });
    if (await isAdmin(ctx, target.id)) return ctx.reply("❌ Tidak bisa mute admin.");
    await ctx.restrictChatMember(target.id, { permissions: NO_PERMS }).catch(() => {});
    return ctx.reply(`🔇 ${mentionUser(target.id, target.name)} telah di-mute!`, { parse_mode: "HTML" });
  });

  // ── /unmute ───────────────────────────────────────────────────────────────
  bot.command("unmute", async (ctx) => {
    if (!isGroup(ctx)) return ctx.reply("❌ Hanya bisa di grup.");
    if (!await isAdmin(ctx, ctx.from.id)) return ctx.reply("❌ Hanya admin.");
    if (!await isBotAdmin(ctx)) return ctx.reply("❌ Bot bukan admin.");
    const target = getTarget(ctx);
    if (!target) return ctx.reply("⚠️ Reply ke user atau: `/unmute <id>`", { parse_mode: "Markdown" });
    await ctx.restrictChatMember(target.id, { permissions: FULL_PERMS }).catch(() => {});
    return ctx.reply(`🔊 ${mentionUser(target.id, target.name)} berhasil di-unmute.`, { parse_mode: "HTML" });
  });

  // ── /tban <waktu> ─────────────────────────────────────────────────────────
  bot.command("tban", async (ctx) => {
    if (!isGroup(ctx)) return ctx.reply("❌ Hanya bisa di grup.");
    if (!await isAdmin(ctx, ctx.from.id)) return ctx.reply("❌ Hanya admin.");
    if (!await isBotAdmin(ctx)) return ctx.reply("❌ Bot bukan admin.");
    const target = getTarget(ctx);
    if (!target) return ctx.reply("⚠️ Reply ke user + waktu: `/tban 1h`", { parse_mode: "Markdown" });
    if (await isAdmin(ctx, target.id)) return ctx.reply("❌ Tidak bisa ban admin.");
    const args = ctx.message.text.split(" ");
    const durStr = ctx.message.reply_to_message ? args[1] : args[2];
    const seconds = parseDuration(durStr);
    if (!seconds) return ctx.reply("⚠️ Format waktu: `1m` `1h` `1d`", { parse_mode: "Markdown" });
    const until_date = Math.floor(Date.now() / 1000) + seconds;
    await ctx.banChatMember(target.id, { until_date }).catch(() => {});
    return ctx.reply(
      `⏱ ${mentionUser(target.id, target.name)} di-ban sampai *${formatUntil(seconds)}*`,
      { parse_mode: "HTML" }
    );
  });

  // ── /tmute <waktu> ────────────────────────────────────────────────────────
  bot.command("tmute", async (ctx) => {
    if (!isGroup(ctx)) return ctx.reply("❌ Hanya bisa di grup.");
    if (!await isAdmin(ctx, ctx.from.id)) return ctx.reply("❌ Hanya admin.");
    if (!await isBotAdmin(ctx)) return ctx.reply("❌ Bot bukan admin.");
    const target = getTarget(ctx);
    if (!target) return ctx.reply("⚠️ Reply ke user + waktu: `/tmute 1h`", { parse_mode: "Markdown" });
    if (await isAdmin(ctx, target.id)) return ctx.reply("❌ Tidak bisa mute admin.");
    const args = ctx.message.text.split(" ");
    const durStr = ctx.message.reply_to_message ? args[1] : args[2];
    const seconds = parseDuration(durStr);
    if (!seconds) return ctx.reply("⚠️ Format waktu: `1m` `1h` `1d`", { parse_mode: "Markdown" });
    const until_date = Math.floor(Date.now() / 1000) + seconds;
    await ctx.restrictChatMember(target.id, { permissions: NO_PERMS, until_date }).catch(() => {});
    return ctx.reply(
      `⏱ ${mentionUser(target.id, target.name)} di-mute sampai *${formatUntil(seconds)}*`,
      { parse_mode: "HTML" }
    );
  });
};
