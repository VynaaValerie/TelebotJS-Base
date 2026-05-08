module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("animegif", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/sticker/animegif`, {
        params: { apikey: config.vtechApiKey }, responseType: "arraybuffer", timeout: 20000,
      });
      return ctx.replyWithVideo(new InputFile(Buffer.from(data), "animegif.mp4"), {
        caption: "🎞 *Anime GIF*", parse_mode: "Markdown",
      });
    } catch (err) {
      ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
  bot.command("patrickgif", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/sticker/patrickgif`, {
        params: { apikey: config.vtechApiKey }, responseType: "arraybuffer", timeout: 20000,
      });
      return ctx.replyWithVideo(new InputFile(Buffer.from(data), "patrick.mp4"), {
        caption: "🌟 *Patrick GIF*", parse_mode: "Markdown",
      });
    } catch (err) {
      ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
