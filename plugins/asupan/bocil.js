module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("bocil", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/asupan/bocil`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 30000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithVideo(new InputFile(buffer, "bocil.mp4"), {
        caption: "🎬 *Bocil*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Bocil* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
