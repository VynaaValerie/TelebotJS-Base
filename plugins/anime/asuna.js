module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("asuna", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/anime/asuna`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithPhoto(new InputFile(buffer, "asuna.jpg"), {
        caption: "🎌 *Asuna*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Asuna* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
