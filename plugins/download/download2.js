module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("ttdl", async (ctx) => {
    const url = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!url) return ctx.reply("🎵 Format: `/ttdl <url tiktok>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("⬇️ _Mengunduh TikTok..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/download/tiktok`, { params: { apikey: config.vtechApiKey, url }, timeout: 30000 });
      const r = data?.result || data?.data || data;
      const vidUrl = r?.video?.noWatermark || r?.url || r?.download || r?.video;
      if (!vidUrl) throw new Error("Video tidak ditemukan");
      const vidRes = await axios.get(vidUrl, { responseType: "arraybuffer", timeout: 120000 });
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      return ctx.replyWithVideo(new InputFile(Buffer.from(vidRes.data), "tiktok.mp4"), { caption: `🎵 *TikTok Download*\n👤 ${r?.author?.nickname || r?.author || "-"}`, parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("ytdl", async (ctx) => {
    const url = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!url) return ctx.reply("🎬 Format: `/ytdl <url youtube>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("⬇️ _Mengunduh YouTube..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/download/yt`, { params: { apikey: config.vtechApiKey, url }, timeout: 60000 });
      const r = data?.result || data?.data || data;
      const vidUrl = r?.url || r?.download || r?.video;
      if (!vidUrl) throw new Error("Video tidak ditemukan");
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      ctx.reply(`🎬 *YouTube Download*\n\n📽 *${r?.title || "-"}*\n⏱ ${r?.duration || "-"}\n\n🔗 [Download Video](${vidUrl})`, { parse_mode: "Markdown", disable_web_page_preview: true });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("ytmp3", async (ctx) => {
    const url = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!url) return ctx.reply("🎵 Format: `/ytmp3 <url youtube>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("⬇️ _Mengunduh audio YouTube..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/download/ytdlv2`, { params: { apikey: config.vtechApiKey, url }, timeout: 60000 });
      const r = data?.result || data?.data || data;
      const audioUrl = r?.url || r?.audio || r?.download;
      if (!audioUrl) throw new Error("Audio tidak ditemukan");
      const audioRes = await axios.get(audioUrl, { responseType: "arraybuffer", timeout: 120000 });
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      return ctx.replyWithAudio(new InputFile(Buffer.from(audioRes.data), `${r?.title || "audio"}.mp3`), { caption: `🎵 *${r?.title || "YouTube MP3"}*`, parse_mode: "Markdown", title: r?.title, performer: r?.artist });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("twdl", async (ctx) => {
    const url = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!url) return ctx.reply("🐦 Format: `/twdl <url twitter>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("⬇️ _Mengunduh dari Twitter..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/download/twitter`, { params: { apikey: config.vtechApiKey, url }, timeout: 30000 });
      const r = data?.result || data?.data || data;
      const mediaUrl = r?.url || r?.video || r?.hd || r?.sd;
      if (!mediaUrl) throw new Error("Media tidak ditemukan");
      const mediaRes = await axios.get(mediaUrl, { responseType: "arraybuffer", timeout: 120000 });
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      return ctx.replyWithVideo(new InputFile(Buffer.from(mediaRes.data), "twitter.mp4"), { caption: "🐦 *Twitter Download*", parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("capcut", async (ctx) => {
    const url = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!url) return ctx.reply("✂️ Format: `/capcut <url capcut>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("⬇️ _Mengunduh dari CapCut..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/download/capcut`, { params: { apikey: config.vtechApiKey, url }, timeout: 60000 });
      const r = data?.result || data?.data || data;
      const vidUrl = r?.url || r?.video || r?.download;
      if (!vidUrl) throw new Error("Video tidak ditemukan");
      const vidRes = await axios.get(vidUrl, { responseType: "arraybuffer", timeout: 120000 });
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      return ctx.replyWithVideo(new InputFile(Buffer.from(vidRes.data), "capcut.mp4"), { caption: `✂️ *CapCut Download*\n📽 ${r?.title || "-"}`, parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("scdl", async (ctx) => {
    const url = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!url) return ctx.reply("🎵 Format: `/scdl <url soundcloud>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("⬇️ _Mengunduh dari SoundCloud..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/download/soundcloud`, { params: { apikey: config.vtechApiKey, url }, timeout: 60000 });
      const r = data?.result || data?.data || data;
      const audioUrl = r?.url || r?.audio || r?.download;
      if (!audioUrl) throw new Error("Audio tidak ditemukan");
      const audioRes = await axios.get(audioUrl, { responseType: "arraybuffer", timeout: 120000 });
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      return ctx.replyWithAudio(new InputFile(Buffer.from(audioRes.data), `${r?.title || "soundcloud"}.mp3`), { caption: `🎵 *SoundCloud Download*\n🎶 ${r?.title || "-"}`, parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("pindl", async (ctx) => {
    const url = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!url) return ctx.reply("📌 Format: `/pindl <url pinterest>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("⬇️ _Mengunduh dari Pinterest..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/download/pinterest`, { params: { apikey: config.vtechApiKey, url }, timeout: 30000 });
      const r = data?.result || data?.data || data;
      const imgUrl = r?.url || r?.image || r?.download;
      if (!imgUrl) throw new Error("Gambar tidak ditemukan");
      const imgRes = await axios.get(imgUrl, { responseType: "arraybuffer", timeout: 60000 });
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      return ctx.replyWithPhoto(new InputFile(Buffer.from(imgRes.data), "pinterest.jpg"), { caption: "📌 *Pinterest Download*", parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("douyindl", async (ctx) => {
    const url = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!url) return ctx.reply("🎵 Format: `/douyindl <url douyin>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("⬇️ _Mengunduh dari Douyin..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/download/douyin`, { params: { apikey: config.vtechApiKey, url }, timeout: 60000 });
      const r = data?.result || data?.data || data;
      const vidUrl = r?.url || r?.video || r?.download;
      if (!vidUrl) throw new Error("Video tidak ditemukan");
      const vidRes = await axios.get(vidUrl, { responseType: "arraybuffer", timeout: 120000 });
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      return ctx.replyWithVideo(new InputFile(Buffer.from(vidRes.data), "douyin.mp4"), { caption: "🎵 *Douyin Download*", parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });
};
