module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("itori", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/anime/itori`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithPhoto(new InputFile(buffer, "itori.jpg"), {
        caption: "🎌 *Itori*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Itori* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
