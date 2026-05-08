module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("cecanjeni", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/cecan/jeni`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      return ctx.replyWithPhoto(new InputFile(Buffer.from(data), "cecan_jeni.jpg"), {
        caption: "💖 *Cecan Jeni*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Cecan Jeni* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
