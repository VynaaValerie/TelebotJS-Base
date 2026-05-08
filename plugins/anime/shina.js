module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("shina", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/anime/shina`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithPhoto(new InputFile(buffer, "shina.jpg"), {
        caption: "🎌 *Shina*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Shina* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
