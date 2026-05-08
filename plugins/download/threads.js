module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("threads", async (ctx) => {
    const url = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!url)
      return ctx.reply("🧵 Kirim link Threads: `/threads <url>`", { parse_mode: "Markdown" });

    const wait = await ctx.reply("⬇️ _Mengunduh media Threads..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/download/threads`, {
        params: { apikey: config.vtechApiKey, url },
        timeout: 30000,
      });

      if (!data?.status || !data?.result) throw new Error("Gagal mengambil data Threads");

      const result = data.result;

      const mediaUrl =
        result.video ||
        result.media?.video ||
        result.download?.video ||
        result.media?.image ||
        result.image ||
        result.download?.image ||
        result.url;

      if (!mediaUrl) throw new Error("Media tidak tersedia");

      const isVideo =
        typeof mediaUrl === "string" &&
        (mediaUrl.includes(".mp4") ||
          result.type === "video" ||
          result.media?.type === "video");

      await ctx.api.editMessageText(ctx.chat.id, wait.message_id, "⬇️ _Mengunduh file..._", {
        parse_mode: "Markdown",
      }).catch(() => {});

      const mediaRes = await axios.get(mediaUrl, {
        responseType: "arraybuffer",
        timeout: 120000,
      });

      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});

      const caption =
        result.caption || result.text || result.description
          ? `🧵 *${(result.caption || result.text || result.description).slice(0, 200)}*\n` +
            `👤 *Akun:* ${result.author || result.username || "-"}`
          : `🧵 *Threads Media*\n👤 *Akun:* ${result.author || result.username || "-"}`;

      const file = new InputFile(Buffer.from(mediaRes.data), isVideo ? "threads.mp4" : "threads.jpg");

      if (isVideo) {
        return ctx.replyWithVideo(file, { caption, parse_mode: "Markdown" });
      } else {
        return ctx.replyWithPhoto(file, { caption, parse_mode: "Markdown" });
      }
    } catch (err) {
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      return ctx.reply(`❌ Gagal download Threads: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
