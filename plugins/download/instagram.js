module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("igdl", async (ctx) => {
    const url = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!url) return ctx.reply("📸 Format: `/igdl <url instagram>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("⬇️ _Mengunduh dari Instagram..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/download/igdowloader`, {
        params: { apikey: config.vtechApiKey, url }, timeout: 30000,
      });
      const r = data?.result || data?.data || data;
      const mediaUrl = r.url || r.video || r.image || (Array.isArray(r) ? r[0]?.url : null);
      if (!mediaUrl) throw new Error("Media tidak ditemukan");
      const mediaRes = await axios.get(mediaUrl, { responseType: "arraybuffer", timeout: 60000 });
      const ct = mediaRes.headers["content-type"] || "";
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      const buf = Buffer.from(mediaRes.data);
      const caption = `📸 *Instagram Download*`;
      if (ct.includes("video") || mediaUrl.includes(".mp4")) {
        return ctx.replyWithVideo(new InputFile(buf, "ig.mp4"), { caption, parse_mode: "Markdown" });
      } else {
        return ctx.replyWithPhoto(new InputFile(buf, "ig.jpg"), { caption, parse_mode: "Markdown" });
      }
    } catch (err) {
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
