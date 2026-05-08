module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("ukhty", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/asupan/ukhty`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 30000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithVideo(new InputFile(buffer, "ukhty.mp4"), {
        caption: "🎬 *Ukhty*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Ukhty* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
