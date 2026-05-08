module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("anony", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/asupan/anony`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 30000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithVideo(new InputFile(buffer, "anony.mp4"), {
        caption: "🎬 *Anony*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Anony* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
