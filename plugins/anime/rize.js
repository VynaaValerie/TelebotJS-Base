module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("rize", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/anime/rize`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithPhoto(new InputFile(buffer, "rize.jpg"), {
        caption: "🎌 *Rize*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Rize* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
