module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("glitch", async (ctx) => {
    const text = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!text) return ctx.reply("⚡ Kirim teks: `/glitch <teks>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("⚡ _Membuat efek glitch..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/textpro/glitch3`, {
        params: { apikey: config.vtechApiKey, text }, responseType: "arraybuffer", timeout: 20000,
      });
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      return ctx.replyWithPhoto(new InputFile(Buffer.from(data), "glitch.jpg"), {
        caption: `⚡ *Glitch:* ${text}`, parse_mode: "Markdown",
      });
    } catch (err) {
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
