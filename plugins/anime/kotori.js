module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("kotori", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/anime/kotori`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithPhoto(new InputFile(buffer, "kotori.jpg"), {
        caption: "🎌 *Kotori*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Kotori* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
