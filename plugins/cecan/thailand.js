module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("cecanthai", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/cecan/thailand`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      return ctx.replyWithPhoto(new InputFile(Buffer.from(data), "cecan_thailand.jpg"), {
        caption: "🇹🇭 *Cecan Thailand*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Cecan Thailand* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
