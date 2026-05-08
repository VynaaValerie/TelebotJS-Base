module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("erza", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/anime/erza`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithPhoto(new InputFile(buffer, "erza.jpg"), {
        caption: "🎌 *Erza*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Erza* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
