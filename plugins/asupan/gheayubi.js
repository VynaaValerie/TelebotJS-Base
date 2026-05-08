module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("gheayubi", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/asupan/gheayubi`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 30000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithVideo(new InputFile(buffer, "gheayubi.mp4"), {
        caption: "🎬 *Gheayubi*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Gheayubi* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
