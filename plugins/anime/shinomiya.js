module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("shinomiya", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/anime/shinomiya`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithPhoto(new InputFile(buffer, "shinomiya.jpg"), {
        caption: "🎌 *Shinomiya*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Shinomiya* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
