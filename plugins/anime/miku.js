module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("miku", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/anime/miku`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithPhoto(new InputFile(buffer, "miku.jpg"), {
        caption: "🎌 *Miku*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Miku* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
