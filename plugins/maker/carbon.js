module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("carbon", async (ctx) => {
    const text = ctx.message.text.split(" ").slice(1).join(" ").trim()
      || ctx.message.reply_to_message?.text;
    if (!text) return ctx.reply("💻 Format: `/carbon <kode>`\nAtau reply ke pesan kode", { parse_mode: "Markdown" });
    const wait = await ctx.reply("💻 _Membuat carbon code..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/maker/carbon`, {
        params: { apikey: config.vtechApiKey, text }, responseType: "arraybuffer", timeout: 30000,
      });
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      return ctx.replyWithPhoto(new InputFile(Buffer.from(data), "carbon.png"), {
        caption: "💻 *Carbon Code*", parse_mode: "Markdown",
      });
    } catch (err) {
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
