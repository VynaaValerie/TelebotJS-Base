module.exports = ({ bot, config, axios }) => {
  bot.command("glm47", async (ctx) => {
    const input = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!input) return ctx.reply("Kirim pesanmu: `/glm47 <teks>`", { parse_mode: "Markdown" });

    const thinking = await ctx.reply("⚡ _GLM memproses..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/ai/glm47flash`, {
        params: { apikey: config.vtechApiKey, prompt: input, system: "You are a helpful assistant.", temperature: 0.7 },
        timeout: 30000,
      });
      const answer = data?.result || data?.answer || data?.response || data?.data || data?.text || "Tidak ada jawaban.";
      await ctx.api.deleteMessage(ctx.chat.id, thinking.message_id).catch(() => {});
      return ctx.reply(`⚡ *GLM 4.7 Flash*\n\n${answer}`, { parse_mode: "Markdown" });
    } catch (err) {
      await ctx.api.deleteMessage(ctx.chat.id, thinking.message_id).catch(() => {});
      return ctx.reply(`❌ Error: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
