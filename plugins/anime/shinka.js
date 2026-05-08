module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("shinka", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/anime/shinka`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithPhoto(new InputFile(buffer, "shinka.jpg"), {
        caption: "🎌 *Shinka*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Shinka* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
