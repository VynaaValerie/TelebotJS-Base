module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("keneki", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/anime/keneki`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithPhoto(new InputFile(buffer, "keneki.jpg"), {
        caption: "🎌 *Keneki*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Keneki* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
