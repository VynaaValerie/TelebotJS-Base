module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("pokemon", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/anime/pokemon`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithPhoto(new InputFile(buffer, "pokemon.jpg"), {
        caption: "🎌 *Pokemon*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Pokemon* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
