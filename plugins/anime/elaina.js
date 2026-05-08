module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("elaina", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/anime/elaina`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithPhoto(new InputFile(buffer, "elaina.jpg"), {
        caption: "🎌 *Elaina*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Elaina* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
