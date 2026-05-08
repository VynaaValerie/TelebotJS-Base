module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("euni", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/asupan/euni`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 30000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithVideo(new InputFile(buffer, "euni.mp4"), {
        caption: "🎬 *Euni*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Euni* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
