module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("isuzu", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/anime/isuzu`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithPhoto(new InputFile(buffer, "isuzu.jpg"), {
        caption: "🎌 *Isuzu*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Isuzu* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
