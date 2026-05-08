module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("ytmp4", async (ctx) => {
    const url = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!url)
      return ctx.reply("🎬 Kirim link YouTube: `/ytmp4 <url>`", { parse_mode: "Markdown" });

    const wait = await ctx.reply("⬇️ _Mengunduh video YouTube..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/download/ytdlv2`, {
        params: { apikey: config.vtechApiKey, url },
        timeout: 30000,
      });

      if (!data?.status || !data?.result) throw new Error("Gagal mengambil data");

      const result = data.result;
      const mp4 = result.mp4 || result.video || result.download?.mp4;
      if (!mp4) throw new Error("Link MP4 tidak tersedia");

      const downloadUrl = mp4.url || mp4.download || mp4;

      await ctx.api.editMessageText(ctx.chat.id, wait.message_id, "⬇️ _Mengunduh file MP4..._", {
        parse_mode: "Markdown",
      }).catch(() => {});

      const videoRes = await axios.get(downloadUrl, {
        responseType: "arraybuffer",
        timeout: 120000,
      });

      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});

      const title = result.title || "video";
      const author = result.author || result.channel || "-";
      const duration = result.duration || "-";
      const views = result.views ? Number(result.views).toLocaleString("id-ID") : "-";

      const caption =
        `🎬 *${title}*\n` +
        `👤 *Channel:* ${author}\n` +
        `⏱ *Durasi:* ${duration}\n` +
        `👁 *Views:* ${views}\n` +
        `📁 *Format:* MP4`;

      return ctx.replyWithVideo(
        new InputFile(Buffer.from(videoRes.data), `${title}.mp4`),
        {
          caption,
          parse_mode: "Markdown",
        }
      );
    } catch (err) {
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      return ctx.reply(`❌ Gagal download MP4: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
