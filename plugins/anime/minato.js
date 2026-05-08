module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("minato", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/anime/minato`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithPhoto(new InputFile(buffer, "minato.jpg"), {
        caption: "🎌 *Minato*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Minato* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
