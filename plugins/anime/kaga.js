module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("kaga", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/anime/kaga`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithPhoto(new InputFile(buffer, "kaga.jpg"), {
        caption: "🎌 *Kaga*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Kaga* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
