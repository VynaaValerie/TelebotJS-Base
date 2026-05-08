module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("madara", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/anime/madara`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithPhoto(new InputFile(buffer, "madara.jpg"), {
        caption: "🎌 *Madara*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Madara* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
