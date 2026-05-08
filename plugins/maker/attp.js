module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("attp", async (ctx) => {
    const text = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!text) return ctx.reply("🎬 Format: `/attp <teks>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("🎬 _Membuat stiker animasi..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/maker/attp`, {
        params: { apikey: config.vtechApiKey, text }, responseType: "arraybuffer", timeout: 30000,
      });
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      return ctx.replyWithVideo(new InputFile(Buffer.from(data), "attp.mp4"), {
        caption: `🎬 *ATTP:* ${text}`, parse_mode: "Markdown",
      });
    } catch (err) {
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
