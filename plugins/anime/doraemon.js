module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("doraemon", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/anime/doraemon`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithPhoto(new InputFile(buffer, "doraemon.jpg"), {
        caption: "🎌 *Doraemon*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Doraemon* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
