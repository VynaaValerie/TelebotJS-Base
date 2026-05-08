module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("cecanryujin", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/cecan/ryujin`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      return ctx.replyWithPhoto(new InputFile(Buffer.from(data), "cecan_ryujin.jpg"), {
        caption: "💖 *Cecan Ryujin*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Cecan Ryujin* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
