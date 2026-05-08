module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("deidara", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/anime/deidara`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithPhoto(new InputFile(buffer, "deidara.jpg"), {
        caption: "🎌 *Deidara*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Deidara* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
