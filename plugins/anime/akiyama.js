module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("akiyama", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/anime/akiyama`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithPhoto(new InputFile(buffer, "akiyama.jpg"), {
        caption: "🎌 *Akiyama*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Akiyama* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
