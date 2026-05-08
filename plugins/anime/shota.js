module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("shota", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/anime/shota`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithPhoto(new InputFile(buffer, "shota.jpg"), {
        caption: "🎌 *Shota*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Shota* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
