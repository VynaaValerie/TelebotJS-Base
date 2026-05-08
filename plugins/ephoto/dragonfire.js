module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("dragonfire", async (ctx) => {
    const text = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!text) return ctx.reply("🔥 Kirim teks: `/dragonfire <teks>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("🔥 _Membakar teks..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/ephoto/dragonfire`, {
        params: { apikey: config.vtechApiKey, text }, responseType: "arraybuffer", timeout: 20000,
      });
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      return ctx.replyWithPhoto(new InputFile(Buffer.from(data), "dragonfire.jpg"), {
        caption: `🔥 *Dragon Fire:* ${text}`, parse_mode: "Markdown",
      });
    } catch (err) {
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
