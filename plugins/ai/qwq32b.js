module.exports = ({ bot, config, axios }) => {
  bot.command("qwq", async (ctx) => {
    const input = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!input) return ctx.reply("Kirim pesanmu: `/qwq <teks>`", { parse_mode: "Markdown" });

    const thinking = await ctx.reply("🌀 _QwQ 32B berpikir..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/ai/qwq32b`, {
        params: { apikey: config.vtechApiKey, prompt: input, system: "You are a helpful assistant.", temperature: 0.7 },
        timeout: 30000,
      });
      const answer = data?.result || data?.answer || data?.response || data?.data || data?.text || "Tidak ada jawaban.";
      await ctx.api.deleteMessage(ctx.chat.id, thinking.message_id).catch(() => {});
      return ctx.reply(`🌀 *QwQ 32B*\n\n${answer}`, { parse_mode: "Markdown" });
    } catch (err) {
      await ctx.api.deleteMessage(ctx.chat.id, thinking.message_id).catch(() => {});
      return ctx.reply(`❌ Error: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
