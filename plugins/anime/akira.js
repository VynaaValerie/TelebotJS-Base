module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("akira", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/anime/akira`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithPhoto(new InputFile(buffer, "akira.jpg"), {
        caption: "🎌 *Akira*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Akira* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
