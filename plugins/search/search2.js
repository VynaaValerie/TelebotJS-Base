module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("kbbi", async (ctx) => {
    const text = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!text) return ctx.reply("📖 Format: `/kbbi <kata>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("🔍 _Mencari di KBBI..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/search/kbbi`, { params: { apikey: config.vtechApiKey, text }, timeout: 15000 });
      const r = data?.result || data?.data || data;
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      const arti = r?.arti || r?.definisi || r?.makna || r?.meaning || JSON.stringify(r).slice(0, 1500);
      ctx.reply(`📖 *KBBI: ${text}*\n\n${arti}`, { parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("lirik", async (ctx) => {
    const lirik = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!lirik) return ctx.reply("🎵 Format: `/lirik <judul lagu>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("🔍 _Mencari lirik..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/search/lirik`, { params: { apikey: config.vtechApiKey, lirik }, timeout: 15000 });
      const r = data?.result || data?.data || data;
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      const isi = (r?.lirik || r?.lyrics || r?.lyric || JSON.stringify(r)).slice(0, 3000);
      ctx.reply(`🎵 *${r?.judul || r?.title || lirik}*\n👤 ${r?.artis || r?.artist || "-"}\n\n${isi}`, { parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("chord", async (ctx) => {
    const song = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!song) return ctx.reply("🎸 Format: `/chord <judul lagu>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("🔍 _Mencari chord..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/search/chord`, { params: { apikey: config.vtechApiKey, song }, timeout: 15000 });
      const r = data?.result || data?.data || data;
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      const isi = (r?.chord || r?.content || JSON.stringify(r)).slice(0, 3000);
      ctx.reply(`🎸 *${r?.judul || r?.title || song}*\n\n${isi}`, { parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("jarak", async (ctx) => {
    const args = ctx.message.text.split(" ").slice(1);
    if (args.length < 3) return ctx.reply("📍 Format: `/jarak <dari> ke <ke>`\nContoh: `/jarak bandung ke jakarta`", { parse_mode: "Markdown" });
    const fromIdx = args.indexOf("ke");
    const from = fromIdx > 0 ? args.slice(0, fromIdx).join(" ") : args[0];
    const to = fromIdx > 0 ? args.slice(fromIdx + 1).join(" ") : args[1];
    const wait = await ctx.reply("🗺 _Menghitung jarak..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/search/jarak`, { params: { apikey: config.vtechApiKey, from, to }, timeout: 15000 });
      const r = data?.result || data?.data || data;
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      ctx.reply(`📍 *Jarak ${from} → ${to}*\n\n📏 ${r?.jarak || r?.distance || JSON.stringify(r)}`, { parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("kodepos", async (ctx) => {
    const query = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!query) return ctx.reply("📮 Format: `/kodepos <nama wilayah>`", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/search/kodepos`, { params: { apikey: config.vtechApiKey, query }, timeout: 15000 });
      const r = data?.result || data?.data || data;
      const list = Array.isArray(r) ? r.slice(0, 5) : [r];
      const txt = list.map((d, i) => `${i + 1}. *${d.urban || d.kelurahan || d.nama || "-"}*, ${d.city || d.kabupaten || "-"} - *${d.postalCode || d.kodepos || "-"}*`).join("\n");
      ctx.reply(`📮 *Kode Pos: ${query}*\n\n${txt}`, { parse_mode: "Markdown" });
    } catch (err) { ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("gempa", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/search/gempa`, { params: { apikey: config.vtechApiKey }, timeout: 15000 });
      const r = data?.result || data?.data || data;
      const g = Array.isArray(r) ? r[0] : r;
      ctx.reply(`🌍 *Gempa Terkini*\n\n📅 *Waktu:* ${g?.waktu || g?.time || "-"}\n🌋 *Magnitudo:* ${g?.magnitudo || g?.mag || "-"}\n📍 *Lokasi:* ${g?.wilayah || g?.location || "-"}\n💧 *Kedalaman:* ${g?.kedalaman || g?.depth || "-"}`, { parse_mode: "Markdown" });
    } catch (err) { ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("heroml", async (ctx) => {
    const hero = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!hero) return ctx.reply("⚔️ Format: `/heroml <nama hero>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("🔍 _Mencari info hero..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/search/heroml`, { params: { apikey: config.vtechApiKey, hero }, timeout: 15000 });
      const r = data?.result || data?.data || data;
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      ctx.reply(`⚔️ *Hero ML: ${hero}*\n\n${JSON.stringify(r, null, 2).slice(0, 2000)}`, { parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("happymod", async (ctx) => {
    const query = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!query) return ctx.reply("📱 Format: `/happymod <nama app>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("🔍 _Mencari di HappyMod..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/search/happymod`, { params: { apikey: config.vtechApiKey, query }, timeout: 15000 });
      const r = data?.result || data?.data || data;
      const list = Array.isArray(r) ? r.slice(0, 5) : [r];
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      const txt = list.map((d, i) => `${i + 1}. *${d.name || d.title || "-"}*\n   ⭐ ${d.rating || "-"} | 📥 ${d.downloads || "-"}\n   🔗 ${d.url || d.link || "-"}`).join("\n\n");
      ctx.reply(`📱 *HappyMod: ${query}*\n\n${txt}`, { parse_mode: "Markdown", disable_web_page_preview: true });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("bingimg", async (ctx) => {
    const text = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!text) return ctx.reply("🖼 Format: `/bingimg <kata kunci>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("🔍 _Mencari gambar..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/search/bing-img`, { params: { apikey: config.vtechApiKey, text }, timeout: 15000 });
      const r = data?.result || data?.data || data;
      const imgUrl = Array.isArray(r) ? r[0]?.url || r[0]?.image : r?.url || r?.image;
      if (!imgUrl) throw new Error("Gambar tidak ditemukan");
      const imgRes = await axios.get(imgUrl, { responseType: "arraybuffer", timeout: 30000 });
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      return ctx.replyWithPhoto(new InputFile(Buffer.from(imgRes.data), "bing.jpg"), { caption: `🖼 *Bing Image: ${text}*`, parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });
};
