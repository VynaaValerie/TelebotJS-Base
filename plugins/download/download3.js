module.exports = ({ bot, config, axios, InputFile }) => {
  const urlDl = [
    { cmd: "dlallin", ep: "allin", label: "All-in Downloader" },
    { cmd: "dlcocofun", ep: "cocofun", label: "Cocofun" },
    { cmd: "dldonghua", ep: "donghua", label: "Donghua" },
    { cmd: "dllikee", ep: "likee", label: "Likee" },
    { cmd: "dlrednote", ep: "rednote", label: "RedNote" },
    { cmd: "dlscribd", ep: "scribd", label: "Scribd" },
    { cmd: "dlsfilemobi", ep: "sfilemobi", label: "Sfile.mobi" },
    { cmd: "dlslideshare", ep: "slideshare", label: "SlideShare" },
    { cmd: "dlsnackvideo", ep: "snackvideo", label: "SnackVideo" },
    { cmd: "dlthreads", ep: "threads", label: "Threads" },
    { cmd: "dltiktokslide", ep: "tiktokslide", label: "TikTok Slide" },
    { cmd: "dltwitter2", ep: "twitter2", label: "Twitter X v2" },
    { cmd: "dlvidey", ep: "videy", label: "Videy" },
    { cmd: "dlxnxx", ep: "xnxxdl", label: "XNXX" },
    { cmd: "dlxvideos", ep: "xvideosdl", label: "XVideos" },
    { cmd: "dlytv5", ep: "ytdlv5", label: "YouTube v5" },
    { cmd: "dlfb", ep: "fbdown", label: "Facebook" },
    { cmd: "dlfb2", ep: "fbdown2", label: "Facebook v2" },
    { cmd: "dlfb3", ep: "fbdown3", label: "Facebook v3" },
    { cmd: "dlfb4", ep: "fbdown4", label: "Facebook v4" },
    { cmd: "dlgdrive", ep: "gdrive", label: "Google Drive" },
    { cmd: "dlpastebin", ep: "pastebin", label: "Pastebin" },
  ];
  for (const { cmd, ep, label } of urlDl) {
    bot.command(cmd, async (ctx) => {
      const url = ctx.message.text.split(" ").slice(1).join(" ").trim();
      if (!url) return ctx.reply(`🔗 Format: \`/${cmd} <url>\`\nContoh download dari *${label}*`, { parse_mode: "Markdown" });
      const wait = await ctx.reply(`⬇️ _Mengunduh dari ${label}..._`, { parse_mode: "Markdown" });
      try {
        const { data } = await axios.get(`${config.vtechApiUrl}/api/download/${ep}`, { params: { apikey: config.vtechApiKey, url }, timeout: 60000 });
        const r = data?.result || data?.data || data;
        await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
        const link = r?.url || r?.video || r?.audio || r?.download || r?.link || r?.file;
        const title = r?.title || r?.name || label;
        ctx.reply(`✅ *${label}*\n📥 *${title}*\n\n🔗 [Download](${link || JSON.stringify(r).slice(0, 200)})`, { parse_mode: "Markdown", disable_web_page_preview: true });
      } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
    });
  }

  bot.command("dlstoryanime", async (ctx) => {
    const wait = await ctx.reply("⬇️ _Mengambil story anime..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/download/storyanime`, { params: { apikey: config.vtechApiKey }, timeout: 30000 });
      const r = data?.result || data?.data || data;
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      const link = r?.url || r?.video || r?.download;
      if (!link) return ctx.reply(`📜 *Story Anime*\n\n${JSON.stringify(r).slice(0, 1000)}`, { parse_mode: "Markdown" });
      const vidRes = await axios.get(link, { responseType: "arraybuffer", timeout: 120000 });
      return ctx.replyWithVideo(new InputFile(Buffer.from(vidRes.data), "storyanime.mp4"), { caption: "🎌 *Story Anime*", parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("dltelesticker", async (ctx) => {
    const url = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!url) return ctx.reply("🎭 Format: `/dltelesticker <url sticker pack>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("⬇️ _Mengunduh stiker Telegram..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/download/telesticker`, { params: { apikey: config.vtechApiKey, url }, timeout: 60000 });
      const r = data?.result || data?.data || data;
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      ctx.reply(`🎭 *Telegram Sticker*\n\n${JSON.stringify(r).slice(0, 1500)}`, { parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("dlytplay", async (ctx) => {
    const query = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!query) return ctx.reply("🎵 Format: `/dlytplay <judul lagu>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("🔍 _Mencari dan mengunduh lagu..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/download/ytplay`, { params: { apikey: config.vtechApiKey, query }, timeout: 60000 });
      const r = data?.result || data?.data || data;
      const audioUrl = r?.url || r?.audio || r?.download;
      if (!audioUrl) throw new Error("Audio tidak ditemukan");
      const audioRes = await axios.get(audioUrl, { responseType: "arraybuffer", timeout: 120000 });
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      return ctx.replyWithAudio(new InputFile(Buffer.from(audioRes.data), `${r?.title || query}.mp3`), { caption: `🎵 *YT Play: ${r?.title || query}*`, parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });
};
