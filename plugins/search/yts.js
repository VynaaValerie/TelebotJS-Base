module.exports = ({ bot, config, axios }) => {
  bot.command("yts", async (ctx) => {
    const query = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!query) return ctx.reply("🎬 Format: `/yts <judul>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("🔍 _Mencari di YouTube..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/search/yts`, {
        params: { apikey: config.vtechApiKey, query }, timeout: 15000,
      });
      const results = data?.result || data?.data || data;
      const list = Array.isArray(results) ? results.slice(0, 5) : [results];
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      const text = list.map((v, i) =>
        `${i + 1}. *${v.title || v.judul || "-"}*\n` +
        `   ⏱ ${v.duration || v.durasi || "-"} | 👁 ${v.views || v.viewer || "-"}\n` +
        `   🔗 ${v.url || v.link || "-"}`
      ).join("\n\n");
      ctx.reply(`🎬 *Hasil Pencarian YouTube:* _${query}_\n\n${text}`, { parse_mode: "Markdown", disable_web_page_preview: true });
    } catch (err) {
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
