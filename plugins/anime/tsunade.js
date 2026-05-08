module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("tsunade", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/anime/tsunade`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithPhoto(new InputFile(buffer, "tsunade.jpg"), {
        caption: "🎌 *Tsunade*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Tsunade* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
