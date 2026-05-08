module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("yumeko", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/anime/yumeko`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithPhoto(new InputFile(buffer, "yumeko.jpg"), {
        caption: "🎌 *Yumeko*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Yumeko* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
