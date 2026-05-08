module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("ayuzawa", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/anime/ayuzawa`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithPhoto(new InputFile(buffer, "ayuzawa.jpg"), {
        caption: "🎌 *Ayuzawa*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Ayuzawa* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
