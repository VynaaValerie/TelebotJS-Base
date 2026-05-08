const { getPhotoUrl } = require("../../utils/mediaHelper");
module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("beautiful", async (ctx) => {
    const wait = await ctx.reply("⏳ _Memproses..._", { parse_mode: "Markdown" });
    try {
      const image = await getPhotoUrl(ctx, config);
      if (!image) return ctx.api.editMessageText(ctx.chat.id, wait.message_id, "❌ Balas/kirim foto dulu ya!", { parse_mode: "Markdown" });
      const { data } = await axios.get(`${config.vtechApiUrl}/api/canvas/beautiful`, {
        params: { apikey: config.vtechApiKey, image }, responseType: "arraybuffer", timeout: 30000,
      });
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      return ctx.replyWithPhoto(new InputFile(Buffer.from(data), "beautiful.jpg"), { caption: "✨ *Beautiful*", parse_mode: "Markdown" });
    } catch (err) {
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
