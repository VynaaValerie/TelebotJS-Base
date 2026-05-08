module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("onepiece", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/anime/onepiece`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithPhoto(new InputFile(buffer, "onepiece.jpg"), {
        caption: "🎌 *Onepiece*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Onepiece* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
