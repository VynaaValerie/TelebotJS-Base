module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("naruto", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/anime/naruto`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithPhoto(new InputFile(buffer, "naruto.jpg"), {
        caption: "🎌 *Naruto*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Naruto* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
