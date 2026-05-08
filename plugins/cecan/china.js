module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("cecanchina", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/cecan/china`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      return ctx.replyWithPhoto(new InputFile(Buffer.from(data), "cecan_china.jpg"), {
        caption: "🇨🇳 *Cecan China*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Cecan China* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
