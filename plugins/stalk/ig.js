module.exports = ({ bot, config, axios }) => {
  bot.command("stalkg", async (ctx) => {
    const username = ctx.message.text.split(" ").slice(1).join(" ").trim().replace("@", "");
    if (!username) return ctx.reply("📸 Format: `/stalkg <username>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("🔍 _Mencari profil Instagram..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/stalk/ig`, {
        params: { apikey: config.vtechApiKey, username }, timeout: 20000,
      });
      const r = data?.result || data?.data || data;
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      ctx.reply(
        `📸 *Instagram: @${r.username || username}*\n\n` +
        `👤 *Nama:* ${r.full_name || r.fullName || "-"}\n` +
        `📝 *Bio:* ${r.biography || r.bio || "-"}\n` +
        `📍 *Lokasi:* ${r.location || "-"}\n` +
        `📷 *Post:* ${r.media_count || r.posts || "-"}\n` +
        `👥 *Followers:* ${r.follower_count || r.followers || "-"}\n` +
        `👣 *Following:* ${r.following_count || r.following || "-"}\n` +
        `✅ *Verified:* ${r.is_verified || r.verified ? "Ya" : "Tidak"}`,
        { parse_mode: "Markdown" }
      );
    } catch (err) {
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
