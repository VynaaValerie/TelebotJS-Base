module.exports = ({ bot, config, axios }) => {
  bot.command("gita", async (ctx) => {
    const input = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!input) return ctx.reply("Kirim pertanyaanmu: `/gita <pertanyaan>`", { parse_mode: "Markdown" });

    const thinking = await ctx.reply("✨ _Sedang berpikir..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/ai/gita`, {
        params: { apikey: config.vtechApiKey, q: input },
        timeout: 20000,
      });
      const answer = data?.result || data?.answer || data?.response || data?.data || "Tidak ada jawaban.";
      await ctx.api.deleteMessage(ctx.chat.id, thinking.message_id).catch(() => {});
      return ctx.reply(`🌿 *Gita AI*\n\n${answer}`, { parse_mode: "Markdown" });
    } catch (err) {
      await ctx.api.deleteMessage(ctx.chat.id, thinking.message_id).catch(() => {});
      return ctx.reply(`❌ Error: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
