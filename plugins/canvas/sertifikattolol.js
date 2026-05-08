module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("sertifikat", async (ctx) => {
    const text = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!text) return ctx.reply("📜 Kirim nama: `/sertifikat <nama>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("⏳ _Membuat sertifikat..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/canvas/sertifikat-tolol`, {
        params: { apikey: config.vtechApiKey, text }, responseType: "arraybuffer", timeout: 30000,
      });
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      return ctx.replyWithPhoto(new InputFile(Buffer.from(data), "sertifikat.jpg"), {
        caption: `📜 *Sertifikat Tolol untuk:* ${text}`, parse_mode: "Markdown",
      });
    } catch (err) {
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
