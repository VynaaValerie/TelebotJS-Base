module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("cecanjiso", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/cecan/jiso`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      return ctx.replyWithPhoto(new InputFile(Buffer.from(data), "cecan_jiso.jpg"), {
        caption: "💖 *Cecan Jiso*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Cecan Jiso* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
