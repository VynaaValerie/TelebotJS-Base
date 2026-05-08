module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("kaori", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/anime/kaori`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithPhoto(new InputFile(buffer, "kaori.jpg"), {
        caption: "🎌 *Kaori*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Kaori* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
