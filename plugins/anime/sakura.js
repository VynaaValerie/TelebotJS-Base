module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("sakura", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/anime/sakura`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithPhoto(new InputFile(buffer, "sakura.jpg"), {
        caption: "🎌 *Sakura*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Sakura* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
