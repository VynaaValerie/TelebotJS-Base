const { getPhotoUrl } = require("../../utils/mediaHelper");
module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("ship", async (ctx) => {
    const wait = await ctx.reply("💕 _Mengukur kecocokan..._", { parse_mode: "Markdown" });
    try {
      const avatar1 = await getPhotoUrl(ctx, config);
      const avatar2 = ctx.message.reply_to_message?.from
        ? `https://t.me/i/userpic/320/${ctx.message.reply_to_message.from.username || ctx.message.reply_to_message.from.id}.jpg`
        : null;
      if (!avatar1) return ctx.api.editMessageText(ctx.chat.id, wait.message_id, "❌ Kirim foto dan reply ke foto orang lain!", { parse_mode: "Markdown" });
      const persen = Math.floor(Math.random() * 101);
      const { data } = await axios.get(`${config.vtechApiUrl}/api/canvas/ship`, {
        params: { apikey: config.vtechApiKey, avatar1, avatar2: avatar2 || avatar1, persen },
        responseType: "arraybuffer", timeout: 30000,
      });
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      return ctx.replyWithPhoto(new InputFile(Buffer.from(data), "ship.jpg"), {
        caption: `💕 *Tingkat Kecocokan: ${persen}%*`, parse_mode: "Markdown",
      });
    } catch (err) {
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
