module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("kakasih", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/anime/kakasih`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithPhoto(new InputFile(buffer, "kakasih.jpg"), {
        caption: "🎌 *Kakasih*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Kakasih* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
