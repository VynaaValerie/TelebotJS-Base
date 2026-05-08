module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("cecanjustine", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/cecan/justinaxie`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      return ctx.replyWithPhoto(new InputFile(Buffer.from(data), "cecan_justinaxie.jpg"), {
        caption: "💖 *Cecan Justina Xie*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Cecan Justina Xie* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
