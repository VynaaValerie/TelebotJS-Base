module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("santuy", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/asupan/santuy`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 30000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithVideo(new InputFile(buffer, "santuy.mp4"), {
        caption: "🎬 *Santuy*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Santuy* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
