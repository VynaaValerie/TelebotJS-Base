module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("cecanviet", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/cecan/vietnam`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      return ctx.replyWithPhoto(new InputFile(Buffer.from(data), "cecan_vietnam.jpg"), {
        caption: "🇻🇳 *Cecan Vietnam*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Cecan Vietnam* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
