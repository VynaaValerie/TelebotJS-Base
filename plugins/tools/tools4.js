module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("2fa", async (ctx) => {
    const token = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!token) return ctx.reply("🔐 Format: `/2fa <token>`\nContoh: `/2fa JBSWY3DPEHPK3PXP`", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/tools/2fa`, { params: { apikey: config.vtechApiKey, token }, timeout: 10000 });
      const r = data?.result || data?.data || data;
      ctx.reply(`🔐 *2FA Code*\n\n🔑 *Token:* \`${token}\`\n⏱ *Code:* \`${r?.code || r?.otp || r?.result || JSON.stringify(r)}\``, { parse_mode: "Markdown" });
    } catch (err) { ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("base64encode", async (ctx) => {
    const text = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!text) return ctx.reply("🔒 Format: `/base64encode <teks>`", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/tools/base`, { params: { apikey: config.vtechApiKey, encode: text, type: "base64" }, timeout: 10000 });
      const r = data?.result || data?.data || data;
      ctx.reply(`🔒 *Base64 Encode*\n\n\`\`\`\n${r?.encoded || r?.result || JSON.stringify(r)}\n\`\`\``, { parse_mode: "Markdown" });
    } catch (err) { ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("base64decode", async (ctx) => {
    const text = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!text) return ctx.reply("🔓 Format: `/base64decode <encoded>`", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/tools/base`, { params: { apikey: config.vtechApiKey, decode: text, type: "base64" }, timeout: 10000 });
      const r = data?.result || data?.data || data;
      ctx.reply(`🔓 *Base64 Decode*\n\n\`\`\`\n${r?.decoded || r?.result || JSON.stringify(r)}\n\`\`\``, { parse_mode: "Markdown" });
    } catch (err) { ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("bypasscity", async (ctx) => {
    const url = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!url) return ctx.reply("🔓 Format: `/bypasscity <url>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("⚡ _Bypass link..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/tools/bypasscity`, { params: { apikey: config.vtechApiKey, url }, timeout: 30000 });
      const r = data?.result || data?.data || data;
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      ctx.reply(`🔓 *Bypass City*\n\n🔗 ${r?.url || r?.link || r?.bypass || JSON.stringify(r)}`, { parse_mode: "Markdown", disable_web_page_preview: true });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("cekewallet", async (ctx) => {
    const args = ctx.message.text.split(" ").slice(1);
    if (args.length < 2) return ctx.reply("💳 Format: `/cekewallet <wallet> <nomer>`\nContoh: `/cekewallet dana 08123456789`", { parse_mode: "Markdown" });
    const [wallet, nomer] = args;
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/tools/cek-ewallet`, { params: { apikey: config.vtechApiKey, wallet, nomer }, timeout: 15000 });
      const r = data?.result || data?.data || data;
      ctx.reply(`💳 *Cek E-Wallet: ${wallet.toUpperCase()}*\n\n📱 *Nomor:* ${nomer}\n👤 *Nama:* ${r?.name || r?.nama || r?.result || JSON.stringify(r)}`, { parse_mode: "Markdown" });
    } catch (err) { ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("cekpln", async (ctx) => {
    const id = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!id) return ctx.reply("⚡ Format: `/cekpln <id pelanggan>`", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/tools/cekbillpln`, { params: { apikey: config.vtechApiKey, id }, timeout: 15000 });
      const r = data?.result || data?.data || data;
      ctx.reply(`⚡ *Cek Bill PLN*\n\n🆔 *ID:* ${id}\n👤 *Nama:* ${r?.name || r?.nama || "-"}\n💰 *Tagihan:* ${r?.tagihan || r?.bill || r?.amount || "-"}`, { parse_mode: "Markdown" });
    } catch (err) { ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("cekredirect", async (ctx) => {
    const url = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!url) return ctx.reply("🔍 Format: `/cekredirect <url>`", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/tools/cekredirect`, { params: { apikey: config.vtechApiKey, url }, timeout: 15000 });
      const r = data?.result || data?.data || data;
      ctx.reply(`🔍 *Cek Redirect*\n\n🔗 *Asal:* ${url}\n➡️ *Tujuan:* ${r?.redirect || r?.final_url || r?.url || JSON.stringify(r)}`, { parse_mode: "Markdown", disable_web_page_preview: true });
    } catch (err) { ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("ephotoradio", async (ctx) => {
    const url = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!url) return ctx.reply("📻 Format: `/ephotoradio <url ephoto360>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("📻 _Memproses Ephoto Radio..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/tools/ephoto-radio`, { params: { apikey: config.vtechApiKey, url }, timeout: 30000 });
      const r = data?.result || data?.data || data;
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      ctx.reply(`📻 *Ephoto Radio*\n\n${JSON.stringify(r).slice(0, 1500)}`, { parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("hdvideo", async (ctx) => {
    const url = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!url) return ctx.reply("🎬 Format: `/hdvideo <url video>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("🎬 _Meningkatkan kualitas video..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/tools/hdvideo`, { params: { apikey: config.vtechApiKey, url }, timeout: 60000 });
      const r = data?.result || data?.data || data;
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      const vidUrl = r?.url || r?.video || r?.result;
      ctx.reply(`🎬 *HD Video*\n\n🔗 [Download HD](${vidUrl || JSON.stringify(r)})`, { parse_mode: "Markdown", disable_web_page_preview: true });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("jadwalshalatv2", async (ctx) => {
    const kota = ctx.message.text.split(" ").slice(1).join(" ").trim() || "cilacap";
    const wait = await ctx.reply("🕌 _Mengambil jadwal shalat v2..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/tools/jadwalshalatv2`, { params: { apikey: config.vtechApiKey, kota }, timeout: 15000 });
      const r = data?.result || data?.data || data;
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      ctx.reply(`🕌 *Jadwal Shalat V2: ${kota}*\n\n🌅 *Subuh:* ${r?.subuh || r?.fajr || "-"}\n☀️ *Dzuhur:* ${r?.dzuhur || r?.dhuhr || "-"}\n🌤 *Ashar:* ${r?.ashar || r?.asr || "-"}\n🌇 *Maghrib:* ${r?.maghrib || "-"}\n🌙 *Isya:* ${r?.isya || r?.isha || "-"}`, { parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("ss2code", async (ctx) => {
    const url = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!url) return ctx.reply("💻 Format: `/ss2code <url gambar screenshot>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("💻 _Mengubah screenshot jadi kode..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/tools/ss2code`, { params: { apikey: config.vtechApiKey, url }, timeout: 60000 });
      const r = data?.result || data?.data || data;
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      const code = (r?.code || r?.result || r?.html || JSON.stringify(r)).slice(0, 3000);
      ctx.reply(`💻 *Screenshot to Code*\n\n\`\`\`html\n${code}\n\`\`\``, { parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("sstablet", async (ctx) => {
    const url = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!url) return ctx.reply("📱 Format: `/sstablet <url>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("📱 _Screenshot versi Tablet..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/tools/sstablet`, { params: { apikey: config.vtechApiKey, url }, timeout: 60000 });
      const r = data?.result || data?.data || data;
      const imgUrl = r?.url || r?.screenshot || r?.image;
      if (!imgUrl) throw new Error("Screenshot gagal");
      const imgRes = await axios.get(imgUrl, { responseType: "arraybuffer", timeout: 60000 });
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      return ctx.replyWithPhoto(new InputFile(Buffer.from(imgRes.data), "tablet.jpg"), { caption: `📱 *Screenshot Tablet:* ${url}`, parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("tinyurlalias", async (ctx) => {
    const args = ctx.message.text.split(" ").slice(1);
    if (args.length < 2) return ctx.reply("🔗 Format: `/tinyurlalias <url> <alias>`", { parse_mode: "Markdown" });
    const [link, alias] = args;
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/linkshort/tinyurlwithalias`, { params: { apikey: config.vtechApiKey, link, alias }, timeout: 15000 });
      const r = data?.result || data?.data || data;
      ctx.reply(`🔗 *TinyURL Custom*\n\n✅ ${r?.url || r?.shortUrl || r?.link || JSON.stringify(r)}`, { parse_mode: "Markdown", disable_web_page_preview: true });
    } catch (err) { ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("video2audio", async (ctx) => {
    const url = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!url) return ctx.reply("🎵 Format: `/video2audio <url video>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("🎵 _Mengkonversi video ke audio..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/tools/video2audio`, { params: { apikey: config.vtechApiKey, url }, timeout: 60000 });
      const r = data?.result || data?.data || data;
      const audioUrl = r?.url || r?.audio || r?.result;
      if (!audioUrl) throw new Error("Audio tidak ditemukan");
      const audioRes = await axios.get(audioUrl, { responseType: "arraybuffer", timeout: 120000 });
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      return ctx.replyWithAudio(new InputFile(Buffer.from(audioRes.data), "audio.mp3"), { caption: "🎵 *Video to Audio*", parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("voiceremover", async (ctx) => {
    const url = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!url) return ctx.reply("🎤 Format: `/voiceremover <url audio>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("🎤 _Menghapus vokal..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/tools/voiceremover`, { params: { apikey: config.vtechApiKey, url }, timeout: 60000 });
      const r = data?.result || data?.data || data;
      const audioUrl = r?.url || r?.audio || r?.result;
      if (!audioUrl) throw new Error("Audio tidak ditemukan");
      const audioRes = await axios.get(audioUrl, { responseType: "arraybuffer", timeout: 120000 });
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      return ctx.replyWithAudio(new InputFile(Buffer.from(audioRes.data), "instrumental.mp3"), { caption: "🎤 *Voice Remover (Instrumental)*", parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("web2zip", async (ctx) => {
    const url = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!url) return ctx.reply("📦 Format: `/web2zip <url website>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("📦 _Mengunduh website jadi ZIP..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/tools/web2zip`, { params: { apikey: config.vtechApiKey, url }, timeout: 120000 });
      const r = data?.result || data?.data || data;
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      const zipUrl = r?.url || r?.zip || r?.download || r?.result;
      ctx.reply(`📦 *Web to ZIP*\n\n🔗 [Download ZIP](${zipUrl || JSON.stringify(r)})`, { parse_mode: "Markdown", disable_web_page_preview: true });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("webp2mp4", async (ctx) => {
    const url = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!url) return ctx.reply("🎬 Format: `/webp2mp4 <url webp>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("🎬 _Mengkonversi WebP ke MP4..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/tools/webp2mp4`, { params: { apikey: config.vtechApiKey, url }, timeout: 60000 });
      const r = data?.result || data?.data || data;
      const vidUrl = r?.url || r?.video || r?.result;
      if (!vidUrl) throw new Error("Video tidak ditemukan");
      const vidRes = await axios.get(vidUrl, { responseType: "arraybuffer", timeout: 120000 });
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      return ctx.replyWithVideo(new InputFile(Buffer.from(vidRes.data), "output.mp4"), { caption: "🎬 *WebP to MP4*", parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("webp2png", async (ctx) => {
    const url = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!url) return ctx.reply("🖼 Format: `/webp2png <url webp>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("🖼 _Mengkonversi WebP ke PNG..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/tools/webp2png`, { params: { apikey: config.vtechApiKey, url }, timeout: 60000 });
      const r = data?.result || data?.data || data;
      const imgUrl = r?.url || r?.image || r?.result;
      if (!imgUrl) throw new Error("Gambar tidak ditemukan");
      const imgRes = await axios.get(imgUrl, { responseType: "arraybuffer", timeout: 60000 });
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      return ctx.replyWithPhoto(new InputFile(Buffer.from(imgRes.data), "output.png"), { caption: "🖼 *WebP to PNG*", parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("createsubdo", async (ctx) => {
    const args = ctx.message.text.split(" ").slice(1);
    if (args.length < 4) return ctx.reply("🌐 Format: `/createsubdo <subdomain> <domain> <type> <content>`\nContoh: `/createsubdo demo vynaa.web.id A 1.1.1.1`", { parse_mode: "Markdown" });
    const [subdomain, domain, type, content] = args;
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/tools/create-subdo`, { params: { apikey: config.vtechApiKey, subdomain, domain, type, content, proxied: "true" }, timeout: 15000 });
      const r = data?.result || data?.data || data;
      ctx.reply(`🌐 *Create Subdomain*\n\n✅ ${subdomain}.${domain}\n📊 Type: ${type} → ${content}\n${JSON.stringify(r).slice(0, 500)}`, { parse_mode: "Markdown" });
    } catch (err) { ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });
};
