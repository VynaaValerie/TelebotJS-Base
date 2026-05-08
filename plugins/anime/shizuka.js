module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("shizuka", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/anime/shizuka`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithPhoto(new InputFile(buffer, "shizuka.jpg"), {
        caption: "🎌 *Shizuka*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Shizuka* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
