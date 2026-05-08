module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("mikasa", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/anime/mikasa`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithPhoto(new InputFile(buffer, "mikasa.jpg"), {
        caption: "🎌 *Mikasa*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Mikasa* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
