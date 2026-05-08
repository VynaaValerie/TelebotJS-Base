module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("emojimix", async (ctx) => {
    const args = ctx.message.text.split(" ").slice(1);
    if (args.length < 2) return ctx.reply("🎨 Format: `/emojimix 😊 😂`", { parse_mode: "Markdown" });
    const [emoji1, emoji2] = args;
    const wait = await ctx.reply("⏳ _Mencampur emoji..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/emoji/emojimix`, {
        params: { apikey: config.vtechApiKey, emoji1, emoji2 }, responseType: "arraybuffer", timeout: 20000,
      });
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      return ctx.replyWithPhoto(new InputFile(Buffer.from(data), "emojimix.png"), {
        caption: `🎨 *Emoji Mix:* ${emoji1} + ${emoji2}`, parse_mode: "Markdown",
      });
    } catch (err) {
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
