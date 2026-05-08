module.exports = ({ bot, config, axios }) => {
  bot.command("ai4chat", async (ctx) => {
    const input = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!input) return ctx.reply("Kirim pesanmu: `/ai4chat <teks>`", { parse_mode: "Markdown" });

    const thinking = await ctx.reply("🤖 _Memproses..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/ai/ai4chat`, {
        params: { apikey: config.vtechApiKey, text: input },
        timeout: 20000,
      });
      const answer = data?.result || data?.answer || data?.response || data?.data || data?.text || "Tidak ada jawaban.";
      await ctx.api.deleteMessage(ctx.chat.id, thinking.message_id).catch(() => {});
      return ctx.reply(`🤖 *AI4Chat*\n\n${answer}`, { parse_mode: "Markdown" });
    } catch (err) {
      await ctx.api.deleteMessage(ctx.chat.id, thinking.message_id).catch(() => {});
      return ctx.reply(`❌ Error: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
