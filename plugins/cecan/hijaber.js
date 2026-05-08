module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("cecanhijaber", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/cecan/hijaber`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      return ctx.replyWithPhoto(new InputFile(Buffer.from(data), "cecan_hijaber.jpg"), {
        caption: "🧕 *Cecan Hijaber*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Cecan Hijaber* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
