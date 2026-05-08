module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("kurumi", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/anime/kurumi`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithPhoto(new InputFile(buffer, "kurumi.jpg"), {
        caption: "🎌 *Kurumi*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Kurumi* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
