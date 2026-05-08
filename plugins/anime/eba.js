module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("eba", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/anime/eba`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithPhoto(new InputFile(buffer, "eba.jpg"), {
        caption: "🎌 *Eba*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Eba* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
