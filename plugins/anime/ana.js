module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("ana", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/anime/ana`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithPhoto(new InputFile(buffer, "ana.jpg"), {
        caption: "🎌 *Ana*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Ana* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
