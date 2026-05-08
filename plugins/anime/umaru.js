module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("umaru", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/anime/umaru`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithPhoto(new InputFile(buffer, "umaru.jpg"), {
        caption: "🎌 *Umaru*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Umaru* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
