module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("sasuke", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/anime/sasuke`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithPhoto(new InputFile(buffer, "sasuke.jpg"), {
        caption: "🎌 *Sasuke*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Sasuke* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
