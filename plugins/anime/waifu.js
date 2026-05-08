module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("waifu", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/anime/waifu`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithPhoto(new InputFile(buffer, "waifu.jpg"), {
        caption: "🎌 *Waifu*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Waifu* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
