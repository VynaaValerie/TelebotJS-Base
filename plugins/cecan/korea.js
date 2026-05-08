module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("cecankorea", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/cecan/korea`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      return ctx.replyWithPhoto(new InputFile(Buffer.from(data), "cecan_korea.jpg"), {
        caption: "🇰🇷 *Cecan Korea*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Cecan Korea* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
