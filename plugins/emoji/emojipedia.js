module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("emojipedia", async (ctx) => {
    const emoji = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!emoji) return ctx.reply("🔍 Format: `/emojipedia 😊`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("⏳ _Mencari emoji..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/emoji/emojipedia`, {
        params: { apikey: config.vtechApiKey, emoji }, responseType: "arraybuffer", timeout: 20000,
      });
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      return ctx.replyWithPhoto(new InputFile(Buffer.from(data), "emoji.png"), {
        caption: `📖 *Emojipedia:* ${emoji}`, parse_mode: "Markdown",
      });
    } catch (err) {
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
