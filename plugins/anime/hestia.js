module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("hestia", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/anime/hestia`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithPhoto(new InputFile(buffer, "hestia.jpg"), {
        caption: "🎌 *Hestia*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Hestia* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
