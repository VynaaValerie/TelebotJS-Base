module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("boruto", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/anime/boruto`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithPhoto(new InputFile(buffer, "boruto.jpg"), {
        caption: "🎌 *Boruto*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Boruto* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
