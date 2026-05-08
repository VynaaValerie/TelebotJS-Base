module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("cecanindo", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/cecan/indonesia`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      return ctx.replyWithPhoto(new InputFile(Buffer.from(data), "cecan_indonesia.jpg"), {
        caption: "🇮🇩 *Cecan Indonesia*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Cecan Indonesia* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
