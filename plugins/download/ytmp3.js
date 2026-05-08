module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("ytmp3", async (ctx) => {
    const url = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!url)
      return ctx.reply("🎵 Kirim link YouTube: `/ytmp3 <url>`", { parse_mode: "Markdown" });

    const wait = await ctx.reply("⬇️ _Mengunduh audio YouTube..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/download/ytdlv2`, {
        params: { apikey: config.vtechApiKey, url },
        timeout: 30000,
      });

      if (!data?.status || !data?.result) throw new Error("Gagal mengambil data");

      const result = data.result;
      const mp3 = result.mp3 || result.audio || result.download?.mp3;
      if (!mp3) throw new Error("Link MP3 tidak tersedia");

      const downloadUrl = mp3.url || mp3.download || mp3;

      await ctx.api.editMessageText(ctx.chat.id, wait.message_id, "⬇️ _Mengunduh file MP3..._", {
        parse_mode: "Markdown",
      }).catch(() => {});

      const audioRes = await axios.get(downloadUrl, {
        responseType: "arraybuffer",
        timeout: 120000,
      });

      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});

      const title = result.title || "audio";
      const author = result.author || result.channel || "-";
      const duration = result.duration || "-";

      const caption =
        `🎵 *${title}*\n` +
        `👤 *Channel:* ${author}\n` +
        `⏱ *Durasi:* ${duration}\n` +
        `📁 *Format:* MP3`;

      return ctx.replyWithAudio(
        new InputFile(Buffer.from(audioRes.data), `${title}.mp3`),
        {
          caption,
          parse_mode: "Markdown",
          title,
          performer: author,
        }
      );
    } catch (err) {
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      return ctx.reply(`❌ Gagal download MP3: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
