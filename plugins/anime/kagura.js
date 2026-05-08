module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("kagura", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/anime/kagura`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithPhoto(new InputFile(buffer, "kagura.jpg"), {
        caption: "🎌 *Kagura*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Kagura* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
