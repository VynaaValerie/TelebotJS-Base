module.exports = ({ bot, db, helper, config }) => {

  // ── /stats ────────────────────────────────────────────────────────────────
  bot.command("stats", async (ctx) => {
    if (!helper.isOwner(ctx.from.id)) return ctx.reply("❌ Hanya owner yang bisa melihat statistik.");

    const users = db.getAllUsers();
    const groups = db.getAllGroups();
    const channels = db.getAllChannels();

    const totalUsers = Object.keys(users).length;
    const premiumCount = Object.values(users).filter((u) => u.isPremium).length;
    const blockedCount = Object.values(users).filter((u) => u.isBlocked).length;
    const customLimitCount = Object.values(users).filter((u) => u.customLimit !== null && u.customLimit !== undefined).length;
    const today = new Date().toDateString();
    const activeToday = Object.values(users).filter(
      (u) => u.usageDate === today && u.usageToday > 0
    ).length;

    const totalGroups = Object.keys(groups).length;
    const totalChannels = Object.keys(channels).length;
    const maintenance = config.maintenance ? "🔧 ON" : "✅ OFF";

    return ctx.reply(
      `📊 *Statistik Bot — ${config.botName}*\n\n` +
      `👤 *User:*\n` +
      `  Total: *${totalUsers}*\n` +
      `  👑 Premium: *${premiumCount}*\n` +
      `  🚫 Diblokir: *${blockedCount}*\n` +
      `  ⚙️ Custom Limit: *${customLimitCount}*\n` +
      `  🟢 Aktif Hari Ini: *${activeToday}*\n\n` +
      `👥 Total Grup: *${totalGroups}*\n` +
      `📢 Total Channel: *${totalChannels}*\n\n` +
      `🆓 Limit Free: *${config.dailyLimit}x/hari*\n` +
      `👑 Limit Premium: *${config.premiumLimit}x/hari*\n` +
      `🔧 Maintenance: ${maintenance}`,
      { parse_mode: "Markdown" }
    );
  });

  // ── /userinfo <id> atau reply ─────────────────────────────────────────────
  bot.command("userinfo", async (ctx) => {
    if (!helper.isOwner(ctx.from.id)) return ctx.reply("❌ Hanya owner yang bisa menggunakan perintah ini.");

    const reply = ctx.message.reply_to_message;
    const targetId = ctx.message.text.split(" ")[1] || reply?.from?.id?.toString();
    if (!targetId) return ctx.reply("⚠️ Format: `/userinfo <user_id>` atau reply ke user.", { parse_mode: "Markdown" });

    const user = db.getUser(targetId);
    if (!user) return ctx.reply(`❌ User \`${targetId}\` tidak ditemukan.`, { parse_mode: "Markdown" });

    const today = new Date().toDateString();
    const usageToday = user.usageDate === today ? user.usageToday : 0;
    const effectiveLimit = user.customLimit !== null && user.customLimit !== undefined
      ? `${user.customLimit}x (custom)`
      : user.isPremium ? `${config.premiumLimit}x (premium)` : `${config.dailyLimit}x (free)`;

    return ctx.reply(
      `👤 *Info User*\n\n` +
      `ID: \`${user.id}\`\n` +
      `Nama: ${user.firstName}${user.lastName ? " " + user.lastName : ""}\n` +
      `Username: ${user.username ? "@" + user.username : "-"}\n` +
      `Status: ${user.isPremium ? "👑 Premium" : "🆓 Free"}\n` +
      `Diblokir: ${user.isBlocked ? "🚫 Ya" : "✅ Tidak"}\n` +
      `Limit/hari: *${effectiveLimit}*\n\n` +
      `📅 Terdaftar: ${new Date(user.registeredAt).toLocaleString("id-ID", { timeZone: "Asia/Jakarta" })}\n` +
      `🕐 Terakhir Aktif: ${new Date(user.lastSeen).toLocaleString("id-ID", { timeZone: "Asia/Jakarta" })}\n\n` +
      `📈 Pakai Hari Ini: *${usageToday}x*\n` +
      `📊 Total Pakai: *${user.totalUsage}x*`,
      { parse_mode: "Markdown" }
    );
  });
};
