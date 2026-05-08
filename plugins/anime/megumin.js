module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("megumin", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/anime/megumin`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithPhoto(new InputFile(buffer, "megumin.jpg"), {
        caption: "🎌 *Megumin*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Megumin* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
