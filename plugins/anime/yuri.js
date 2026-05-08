module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("yuri", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/anime/yuri`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithPhoto(new InputFile(buffer, "yuri.jpg"), {
        caption: "🎌 *Yuri*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Yuri* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
