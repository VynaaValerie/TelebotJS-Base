module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("inori", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/anime/inori`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithPhoto(new InputFile(buffer, "inori.jpg"), {
        caption: "🎌 *Inori*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Inori* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
