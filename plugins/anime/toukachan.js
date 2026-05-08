module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("toukachan", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/anime/toukachan`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithPhoto(new InputFile(buffer, "toukachan.jpg"), {
        caption: "🎌 *Toukachan*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Toukachan* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
