module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("cecanmy", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/cecan/malaysia`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      return ctx.replyWithPhoto(new InputFile(Buffer.from(data), "cecan_malaysia.jpg"), {
        caption: "🇲🇾 *Cecan Malaysia*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Cecan Malaysia* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
