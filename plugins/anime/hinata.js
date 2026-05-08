module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("hinata", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/anime/hinata`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithPhoto(new InputFile(buffer, "hinata.jpg"), {
        caption: "🎌 *Hinata*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Hinata* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
