module.exports = ({ bot, config, axios }) => {
  bot.command("bibleai", async (ctx) => {
    const args = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!args) return ctx.reply("Kirim pertanyaan: `/bibleai <pertanyaan>`\nOpsional tambah bahasa: `/bibleai What is love? | id`", { parse_mode: "Markdown" });

    const parts = args.split("|");
    const question = parts[0].trim();
    const translation = parts[1]?.trim() || "id";

    const thinking = await ctx.reply("📖 _Mencari jawaban..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/ai/bibleai`, {
        params: { apikey: config.vtechApiKey, question, translation },
        timeout: 20000,
      });
      const answer = data?.result || data?.answer || data?.response || data?.data || "Tidak ada jawaban.";
      await ctx.api.deleteMessage(ctx.chat.id, thinking.message_id).catch(() => {});
      return ctx.reply(`📖 *Bible AI*\n\n${answer}`, { parse_mode: "Markdown" });
    } catch (err) {
      await ctx.api.deleteMessage(ctx.chat.id, thinking.message_id).catch(() => {});
      return ctx.reply(`❌ Error: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
