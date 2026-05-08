module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("fbdl", async (ctx) => {
    const url = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!url) return ctx.reply("📘 Format: `/fbdl <url facebook>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("⬇️ _Mengunduh dari Facebook..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/download/fbdown`, {
        params: { apikey: config.vtechApiKey, url }, timeout: 30000,
      });
      const r = data?.result || data?.data || data;
      const mediaUrl = r.url || r.hd || r.sd || r.video || r.download;
      if (!mediaUrl) throw new Error("Media tidak ditemukan");
      const mediaRes = await axios.get(mediaUrl, { responseType: "arraybuffer", timeout: 120000 });
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      return ctx.replyWithVideo(new InputFile(Buffer.from(mediaRes.data), "fb.mp4"), {
        caption: `📘 *Facebook Download*\n📺 Kualitas: ${r.hd ? "HD" : "SD"}`,
        parse_mode: "Markdown",
      });
    } catch (err) {
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
