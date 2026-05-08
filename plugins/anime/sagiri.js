module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("sagiri", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/anime/sagiri`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithPhoto(new InputFile(buffer, "sagiri.jpg"), {
        caption: "🎌 *Sagiri*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Sagiri* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
