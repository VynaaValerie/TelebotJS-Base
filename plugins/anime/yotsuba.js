module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("yotsuba", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/anime/yotsuba`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithPhoto(new InputFile(buffer, "yotsuba.jpg"), {
        caption: "🎌 *Yotsuba*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Yotsuba* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
