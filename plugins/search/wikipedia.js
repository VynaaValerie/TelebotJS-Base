module.exports = ({ bot, config, axios }) => {
  bot.command("wiki", async (ctx) => {
    const text = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!text) return ctx.reply("🔍 Format: `/wiki <kata kunci>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("🔍 _Mencari di Wikipedia..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/search/wikipedia`, {
        params: { apikey: config.vtechApiKey, text }, timeout: 15000,
      });
      const r = data?.result || data?.data || data;
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      const desc = (r.description || r.extract || r.summary || JSON.stringify(r)).slice(0, 800);
      ctx.reply(
        `📖 *${r.title || text}*\n\n${desc}` +
        (r.url ? `\n\n🔗 [Baca selengkapnya](${r.url})` : ""),
        { parse_mode: "Markdown", disable_web_page_preview: true }
      );
    } catch (err) {
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
