module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("husbu", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/anime/husbu`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithPhoto(new InputFile(buffer, "husbu.jpg"), {
        caption: "🎌 *Husbu*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Husbu* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
