module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("tiktokdl", async (ctx) => {
    const url = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!url)
      return ctx.reply("🎵 Kirim link TikTok: `/tiktokdl <url>`", { parse_mode: "Markdown" });

    const wait = await ctx.reply("⬇️ _Mengunduh video TikTok..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/download/tiktok`, {
        params: { apikey: config.vtechApiKey, url },
        timeout: 30000,
      });

      if (!data?.status || !data?.result) throw new Error("Gagal mengambil data TikTok");

      const result = data.result;
      const videoUrl =
        result.video?.noWatermark ||
        result.video?.watermark ||
        result.video?.url ||
        result.download?.video ||
        result.url;

      if (!videoUrl) throw new Error("Link video tidak tersedia");

      await ctx.api.editMessageText(ctx.chat.id, wait.message_id, "⬇️ _Mengunduh file video..._", {
        parse_mode: "Markdown",
      }).catch(() => {});

      const videoRes = await axios.get(videoUrl, {
        responseType: "arraybuffer",
        timeout: 120000,
      });

      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});

      const title = result.title || result.desc || result.description || "TikTok Video";
      const author = result.author?.nickname || result.author?.username || result.nickname || "-";
      const likes = result.statistics?.likeCount || result.likes || "-";
      const plays = result.statistics?.playCount || result.plays || "-";

      const caption =
        `🎵 *${title.length > 100 ? title.slice(0, 100) + "..." : title}*\n` +
        `👤 *Pembuat:* ${author}\n` +
        (likes !== "-" ? `❤️ *Likes:* ${Number(likes).toLocaleString("id-ID")}\n` : "") +
        (plays !== "-" ? `▶️ *Plays:* ${Number(plays).toLocaleString("id-ID")}\n` : "") +
        `📁 *Format:* MP4 (No Watermark)`;

      return ctx.replyWithVideo(
        new InputFile(Buffer.from(videoRes.data), "tiktok.mp4"),
        {
          caption,
          parse_mode: "Markdown",
        }
      );
    } catch (err) {
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      return ctx.reply(`❌ Gagal download TikTok: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
