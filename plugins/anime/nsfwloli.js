module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("nsfwloli", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/anime/nsfwloli`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithPhoto(new InputFile(buffer, "nsfwloli.jpg"), {
        caption: "🎌 *Nsfwloli*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Nsfwloli* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
