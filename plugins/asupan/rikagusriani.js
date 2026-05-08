module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("rikagusriani", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/asupan/rikagusriani`, {
        params: { apikey: config.vtechApiKey },
        responseType: "arraybuffer",
        timeout: 30000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithVideo(new InputFile(buffer, "rikagusriani.mp4"), {
        caption: "🎬 *Rikagusriani*",
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ *Rikagusriani* gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
