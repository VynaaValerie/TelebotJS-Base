module.exports = ({ bot, config, db, helper }) => {
  bot.command("profile", async (ctx) => {
    const user = db.getUser(ctx.from.id);
    if (!user) return ctx.reply("❌ Profil tidak ditemukan. Coba /start dulu.");

    const isOwner = helper.isOwner(ctx.from.id);
    const today = new Date().toDateString();
    const usageToday = user.usageDate === today ? user.usageToday : 0;
    const limit = user.customLimit ?? (user.isPremium ? config.premiumLimit : config.dailyLimit);

    let badge;
    if (isOwner) badge = "🔑 Owner";
    else if (user.isPremium) badge = "👑 Premium";
    else badge = "🆓 Free";

    const barFilled = Math.min(10, Math.round((usageToday / limit) * 10));
    const bar = "█".repeat(barFilled) + "░".repeat(10 - barFilled);

    return ctx.reply(
      `👤 *Profil Kamu*\n\n` +
      `🆔 ID: \`${user.id}\`\n` +
      `📛 Nama: ${user.firstName}${user.lastName ? " " + user.lastName : ""}\n` +
      `🔖 Username: ${user.username ? "@" + user.username : "-"}\n` +
      `🏅 Status: *${badge}*\n\n` +
      `📊 *Penggunaan Hari Ini:*\n` +
      `[${bar}] ${usageToday}/${limit}\n\n` +
      `📈 Total Pakai: *${user.totalUsage}x*\n` +
      `📅 Bergabung: ${new Date(user.registeredAt).toLocaleDateString("id-ID")}`,
      { parse_mode: "Markdown" }
    );
  });
};
