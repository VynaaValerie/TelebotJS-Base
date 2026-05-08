module.exports = ({ bot, config, db, helper }) => {
  bot.command("start", async (ctx) => {
    const user = db.getUser(ctx.from.id);
    const isPremium = user?.isPremium || false;
    const badge = isPremium ? "👑 Premium" : "🆓 Free";
    const ownerBadge = helper.isOwner(ctx.from.id) ? "\n🔑 *Owner Mode Aktif*" : "";

    return ctx.reply(
      `✨ *Selamat datang di ${config.botName}!*\n\n` +
      `Halo, ${ctx.from.first_name}! 👋\n` +
      `Status kamu: *${badge}*${ownerBadge}\n\n` +
      `🤖 Bot ini memiliki berbagai fitur AI & tools keren.\n` +
      `Ketik /help untuk melihat semua fitur yang tersedia.\n\n` +
      `📢 Channel: ${config.channelLink}\n` +
      `👤 Owner: ${config.ownerLink}`,
      { parse_mode: "Markdown" }
    );
  });
};
