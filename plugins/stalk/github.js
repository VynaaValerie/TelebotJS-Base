module.exports = ({ bot, config, axios }) => {
  bot.command("github", async (ctx) => {
    const username = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!username) return ctx.reply("🐙 Format: `/github <username>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("🔍 _Mencari profil GitHub..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/stalk/github`, {
        params: { apikey: config.vtechApiKey, username }, timeout: 15000,
      });
      const r = data?.result || data?.data || data;
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      ctx.reply(
        `🐙 *GitHub: @${r.login || username}*\n\n` +
        `👤 *Nama:* ${r.name || "-"}\n` +
        `📝 *Bio:* ${r.bio || "-"}\n` +
        `📍 *Lokasi:* ${r.location || "-"}\n` +
        `🏢 *Perusahaan:* ${r.company || "-"}\n` +
        `📦 *Repo Publik:* ${r.public_repos ?? "-"}\n` +
        `👥 *Followers:* ${r.followers ?? "-"}\n` +
        `👣 *Following:* ${r.following ?? "-"}\n` +
        `🔗 [Lihat Profil](${r.html_url || `https://github.com/${username}`})`,
        { parse_mode: "Markdown", disable_web_page_preview: true }
      );
    } catch (err) {
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
