module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("natajadeh", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/asupan/natajadeh`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 30000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithVideo(new InputFile(buffer, "natajadeh.mp4"), {
        caption: "🎬 *Natajadeh*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Natajadeh* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
