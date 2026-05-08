module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("chitoge", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/anime/chitoge`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithPhoto(new InputFile(buffer, "chitoge.jpg"), {
        caption: "🎌 *Chitoge*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Chitoge* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
