module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("spotifydl", async (ctx) => {
    const url = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!url) return ctx.reply("🎵 Format: `/spotifydl <url spotify>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("⬇️ _Mengunduh dari Spotify..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/download/spotify`, {
        params: { apikey: config.vtechApiKey, url }, timeout: 30000,
      });
      const r = data?.result || data?.data || data;
      const audioUrl = r.url || r.download || r.audio || r.mp3;
      if (!audioUrl) throw new Error("Audio tidak ditemukan");
      const audioRes = await axios.get(audioUrl, { responseType: "arraybuffer", timeout: 120000 });
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      const title = r.title || r.name || "Spotify Track";
      const artist = r.artist || r.artists || r.author || "-";
      return ctx.replyWithAudio(new InputFile(Buffer.from(audioRes.data), `${title}.mp3`), {
        caption: `🎵 *${title}*\n👤 *Artis:* ${artist}`,
        parse_mode: "Markdown", title, performer: artist,
      });
    } catch (err) {
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
