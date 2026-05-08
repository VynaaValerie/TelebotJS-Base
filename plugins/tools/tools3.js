const { getPhotoUrl } = require("../../utils/mediaHelper");
module.exports = ({ bot, config, axios, InputFile }) => {
  const reminiVersions = [
    { cmd: "remiiv2", ep: "remini-v2", label: "Remini v2" },
    { cmd: "remiiv3", ep: "remini-v3", label: "Remini v3" },
    { cmd: "remiiv4", ep: "remini-v4", label: "Remini v4" },
  ];
  for (const { cmd, ep, label } of reminiVersions) {
    bot.command(cmd, async (ctx) => {
      const wait = await ctx.reply(`✨ _${label} memproses foto..._`, { parse_mode: "Markdown" });
      try {
        const url = await getPhotoUrl(ctx, config);
        if (!url) return ctx.api.editMessageText(ctx.chat.id, wait.message_id, "❌ Balas/kirim foto dulu!", { parse_mode: "Markdown" });
        const { data } = await axios.get(`${config.vtechApiUrl}/api/tools/${ep}`, { params: { apikey: config.vtechApiKey, url }, timeout: 60000 });
        const r = data?.result || data?.data || data;
        const imgUrl = r?.url || r?.image || r?.result;
        if (!imgUrl) throw new Error("Hasil tidak ditemukan");
        const imgRes = await axios.get(imgUrl, { responseType: "arraybuffer", timeout: 60000 });
        await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
        return ctx.replyWithPhoto(new InputFile(Buffer.from(imgRes.data), `${ep}.jpg`), { caption: `✨ *${label}*`, parse_mode: "Markdown" });
      } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
    });
  }

  bot.command("nsfwdetect", async (ctx) => {
    const wait = await ctx.reply("🔍 _Mendeteksi konten NSFW..._", { parse_mode: "Markdown" });
    try {
      const url = await getPhotoUrl(ctx, config);
      if (!url) return ctx.api.editMessageText(ctx.chat.id, wait.message_id, "❌ Balas/kirim foto dulu!", { parse_mode: "Markdown" });
      const { data } = await axios.get(`${config.vtechApiUrl}/api/tools/nsfw-detect`, { params: { apikey: config.vtechApiKey, url }, timeout: 30000 });
      const r = data?.result || data?.data || data;
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      const isNsfw = r?.isNsfw || r?.nsfw || r?.result;
      ctx.reply(`🔍 *NSFW Detect*\n\n🖼 *Status:* ${isNsfw ? "🔞 NSFW!" : "✅ Aman"}\n📊 *Score:* ${r?.score || r?.confidence || "-"}`, { parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("recolor", async (ctx) => {
    const wait = await ctx.reply("🎨 _Mewarnai foto..._", { parse_mode: "Markdown" });
    try {
      const url = await getPhotoUrl(ctx, config);
      if (!url) return ctx.api.editMessageText(ctx.chat.id, wait.message_id, "❌ Balas/kirim foto dulu!", { parse_mode: "Markdown" });
      const { data } = await axios.get(`${config.vtechApiUrl}/api/tools/recolor`, { params: { apikey: config.vtechApiKey, url }, timeout: 60000 });
      const r = data?.result || data?.data || data;
      const imgUrl = r?.url || r?.image || r?.result;
      if (!imgUrl) throw new Error("Hasil tidak ditemukan");
      const imgRes = await axios.get(imgUrl, { responseType: "arraybuffer", timeout: 60000 });
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      return ctx.replyWithPhoto(new InputFile(Buffer.from(imgRes.data), "recolor.jpg"), { caption: "🎨 *Recolor (Colorize)*", parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("img2prompt", async (ctx) => {
    const wait = await ctx.reply("🔍 _Menganalisis gambar..._", { parse_mode: "Markdown" });
    try {
      const url = await getPhotoUrl(ctx, config);
      if (!url) return ctx.api.editMessageText(ctx.chat.id, wait.message_id, "❌ Balas/kirim foto dulu!", { parse_mode: "Markdown" });
      const { data } = await axios.get(`${config.vtechApiUrl}/api/tools/img2prompt`, { params: { apikey: config.vtechApiKey, url }, timeout: 30000 });
      const r = data?.result || data?.data || data;
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      const prompt = r?.prompt || r?.text || r?.result || JSON.stringify(r).slice(0, 1000);
      ctx.reply(`🔍 *Image to Prompt*\n\n\`\`\`\n${prompt}\n\`\`\``, { parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("randomaddress", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/tools/random-address`, { params: { apikey: config.vtechApiKey }, timeout: 15000 });
      const r = data?.result || data?.data || data;
      const addr = r?.address || r?.street || r?.full_address || JSON.stringify(r).slice(0, 1000);
      ctx.reply(`🏠 *Random Address*\n\n📍 ${addr}`, { parse_mode: "Markdown" });
    } catch (err) { ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("whatmusic", async (ctx) => {
    const wait = await ctx.reply("🎵 _Mendeteksi musik..._", { parse_mode: "Markdown" });
    try {
      const url = await getPhotoUrl(ctx, config);
      if (!url) return ctx.api.editMessageText(ctx.chat.id, wait.message_id, "❌ Kirim audio atau balas pesan audio!", { parse_mode: "Markdown" });
      const { data } = await axios.get(`${config.vtechApiUrl}/api/tools/whatmusic`, { params: { apikey: config.vtechApiKey, url }, timeout: 30000 });
      const r = data?.result || data?.data || data;
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      ctx.reply(`🎵 *What Music*\n\n🎶 *Judul:* ${r?.title || "-"}\n👤 *Artis:* ${r?.artist || "-"}\n💿 *Album:* ${r?.album || "-"}`, { parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("whoissubdo", async (ctx) => {
    const domain = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!domain) return ctx.reply("🌐 Format: `/whoissubdo <domain>`", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/tools/whois-subdo`, { params: { apikey: config.vtechApiKey, domain }, timeout: 15000 });
      const r = data?.result || data?.data || data;
      ctx.reply(`🌐 *Whois Subdomain: ${domain}*\n\n${JSON.stringify(r).slice(0, 2000)}`, { parse_mode: "Markdown" });
    } catch (err) { ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("subdomainfinder", async (ctx) => {
    const domain = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!domain) return ctx.reply("🔍 Format: `/subdomainfinder <domain>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("🔍 _Mencari subdomain..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/tools/subdomain-finder`, { params: { apikey: config.vtechApiKey, domain }, timeout: 30000 });
      const r = data?.result || data?.data || data;
      const arr = Array.isArray(r) ? r.slice(0, 20) : [r];
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      ctx.reply(`🔍 *Subdomain Finder: ${domain}*\n\n\`\`\`\n${arr.join("\n")}\n\`\`\``, { parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("yttranscript", async (ctx) => {
    const url = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!url) return ctx.reply("📝 Format: `/yttranscript <url youtube>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("📝 _Mengambil transcript YouTube..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/tools/yt-transcript`, { params: { apikey: config.vtechApiKey, url }, timeout: 30000 });
      const r = data?.result || data?.data || data;
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      const transcript = (r?.transcript || r?.text || r?.result || JSON.stringify(r)).slice(0, 3000);
      ctx.reply(`📝 *YouTube Transcript*\n\n${transcript}`, { parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("cuttly", async (ctx) => {
    const link = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!link) return ctx.reply("🔗 Format: `/cuttly <url>`", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/linkshort/cuttly`, { params: { apikey: config.vtechApiKey, link }, timeout: 15000 });
      const r = data?.result || data?.data || data;
      ctx.reply(`🔗 *Cuttly*\n\n✅ Pendek: ${r?.url || r?.shortUrl || r?.link || JSON.stringify(r)}`, { parse_mode: "Markdown", disable_web_page_preview: true });
    } catch (err) { ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });
};
