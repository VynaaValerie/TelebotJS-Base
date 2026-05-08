module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("cecanrose", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/cecan/rose`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      return ctx.replyWithPhoto(new InputFile(Buffer.from(data), "cecan_rose.jpg"), {
        caption: "🌹 *Cecan Rose*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Cecan Rose* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
