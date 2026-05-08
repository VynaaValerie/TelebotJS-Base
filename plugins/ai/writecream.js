module.exports = ({ bot, config, axios }) => {
  bot.command("writecream", async (ctx) => {
    const input = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!input) return ctx.reply("Kirim teks: `/writecream <teks>`", { parse_mode: "Markdown" });

    const thinking = await ctx.reply("✍️ _Writecream memproses..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/ai/writecream`, {
        params: { apikey: config.vtechApiKey, text: input, logic: true },
        timeout: 30000,
      });
      const answer = data?.result || data?.answer || data?.response || data?.data || data?.text || "Tidak ada jawaban.";
      await ctx.api.deleteMessage(ctx.chat.id, thinking.message_id).catch(() => {});
      return ctx.reply(`✍️ *Writecream*\n\n${answer}`, { parse_mode: "Markdown" });
    } catch (err) {
      await ctx.api.deleteMessage(ctx.chat.id, thinking.message_id).catch(() => {});
      return ctx.reply(`❌ Error: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
