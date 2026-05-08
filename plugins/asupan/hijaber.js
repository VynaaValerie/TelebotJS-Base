module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("hijaber", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/asupan/hijaber`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 30000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithVideo(new InputFile(buffer, "hijaber.mp4"), {
        caption: "🎬 *Hijaber*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Hijaber* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
