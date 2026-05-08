module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("cecan", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/asupan/cecan`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 30000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithVideo(new InputFile(buffer, "cecan.mp4"), {
        caption: "🎬 *Cecan*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Cecan* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
