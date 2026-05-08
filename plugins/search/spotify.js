module.exports = ({ bot, config, axios }) => {
  bot.command("spotifysearch", async (ctx) => {
    const query = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!query) return ctx.reply("🎵 Format: `/spotifysearch <judul lagu>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("🔍 _Mencari di Spotify..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/search/spotify`, {
        params: { apikey: config.vtechApiKey, query }, timeout: 15000,
      });
      const results = data?.result || data?.data || data;
      const list = Array.isArray(results) ? results.slice(0, 5) : [results];
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      const text = list.map((v, i) =>
        `${i + 1}. 🎵 *${v.name || v.title || "-"}*\n` +
        `   👤 ${v.artist || v.artists || v.author || "-"}\n` +
        `   💿 ${v.album || "-"} | ⏱ ${v.duration || "-"}`
      ).join("\n\n");
      ctx.reply(`🎶 *Hasil Spotify:* _${query}_\n\n${text}`, { parse_mode: "Markdown" });
    } catch (err) {
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
