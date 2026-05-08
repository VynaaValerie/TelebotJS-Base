module.exports = ({ bot, config, axios }) => {
  bot.command("groq", async (ctx) => {
    const input = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!input) return ctx.reply("Kirim pesanmu: `/groq <teks>`", { parse_mode: "Markdown" });

    const thinking = await ctx.reply("⚡ _Groq memproses..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/ai/groq-compound`, {
        params: { apikey: config.vtechApiKey, text: input, systemPrompt: "You are a helpful assistant.", sessionId: String(ctx.from.id) },
        timeout: 30000,
      });
      const answer = data?.result || data?.answer || data?.response || data?.data || data?.text || "Tidak ada jawaban.";
      await ctx.api.deleteMessage(ctx.chat.id, thinking.message_id).catch(() => {});
      return ctx.reply(`⚡ *Groq Compound*\n\n${answer}`, { parse_mode: "Markdown" });
    } catch (err) {
      await ctx.api.deleteMessage(ctx.chat.id, thinking.message_id).catch(() => {});
      return ctx.reply(`❌ Error: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
