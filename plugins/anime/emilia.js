module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("emilia", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/anime/emilia`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithPhoto(new InputFile(buffer, "emilia.jpg"), {
        caption: "🎌 *Emilia*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Emilia* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
