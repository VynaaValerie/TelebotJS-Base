module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("cecanjapan", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/cecan/japan`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      return ctx.replyWithPhoto(new InputFile(Buffer.from(data), "cecan_japan.jpg"), {
        caption: "🇯🇵 *Cecan Japan*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Cecan Japan* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
