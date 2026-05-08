module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("waifu2", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/anime/waifu2`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithPhoto(new InputFile(buffer, "waifu2.jpg"), {
        caption: "🎌 *Waifu2*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Waifu2* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
