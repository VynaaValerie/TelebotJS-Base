module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("translate", async (ctx) => {
    const args = ctx.message.text.split(" ").slice(1);
    const lang = args[0] || "en";
    const text = args.slice(1).join(" ").trim() || ctx.message.reply_to_message?.text;
    if (!text) return ctx.reply("🌐 Format: `/translate <lang> <teks>`\nContoh: `/translate en aku suka makan`", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/tools/translate`, { params: { apikey: config.vtechApiKey, text, lang }, timeout: 15000 });
      const r = data?.result || data?.data || data;
      const hasil = r?.result || r?.translated || r?.text || r?.translation || JSON.stringify(r);
      ctx.reply(`🌐 *Translate → ${lang.toUpperCase()}*\n\n📝 *Asli:* ${text}\n✅ *Hasil:* ${hasil}`, { parse_mode: "Markdown" });
    } catch (err) { ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("cuaca", async (ctx) => {
    const query = ctx.message.text.split(" ").slice(1).join(" ").trim() || "jakarta";
    const wait = await ctx.reply("⛅ _Mengambil info cuaca..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/tools/cuaca`, { params: { apikey: config.vtechApiKey, query }, timeout: 15000 });
      const r = data?.result || data?.data || data;
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      ctx.reply(`⛅ *Cuaca: ${query}*\n\n🌡 *Suhu:* ${r?.suhu || r?.temp || r?.temperature || "-"}°C\n💨 *Cuaca:* ${r?.cuaca || r?.weather || r?.description || "-"}\n💧 *Kelembaban:* ${r?.humidity || "-"}%\n🌬 *Angin:* ${r?.wind || r?.angin || "-"}`, { parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("jadwalshalat", async (ctx) => {
    const kota = ctx.message.text.split(" ").slice(1).join(" ").trim() || "jakarta";
    const wait = await ctx.reply("🕌 _Mengambil jadwal shalat..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/tools/jadwalshalat`, { params: { apikey: config.vtechApiKey, kota }, timeout: 15000 });
      const r = data?.result || data?.data || data;
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      ctx.reply(`🕌 *Jadwal Shalat: ${kota}*\n\n🌅 *Subuh:* ${r?.subuh || r?.fajr || "-"}\n☀️ *Dzuhur:* ${r?.dzuhur || r?.dhuhr || "-"}\n🌤 *Ashar:* ${r?.ashar || r?.asr || "-"}\n🌇 *Maghrib:* ${r?.maghrib || "-"}\n🌙 *Isya:* ${r?.isya || r?.isha || "-"}`, { parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("remini", async (ctx) => {
    const { getPhotoUrl } = require("../../utils/mediaHelper");
    const wait = await ctx.reply("✨ _Meningkatkan kualitas foto..._", { parse_mode: "Markdown" });
    try {
      const url = await getPhotoUrl(ctx, config);
      if (!url) return ctx.api.editMessageText(ctx.chat.id, wait.message_id, "❌ Balas/kirim foto dulu!", { parse_mode: "Markdown" });
      const { data } = await axios.get(`${config.vtechApiUrl}/api/tools/remini`, { params: { apikey: config.vtechApiKey, url }, timeout: 60000 });
      const r = data?.result || data?.data || data;
      const imgUrl = r?.url || r?.image || r?.result;
      if (!imgUrl) throw new Error("Hasil tidak ditemukan");
      const imgRes = await axios.get(imgUrl, { responseType: "arraybuffer", timeout: 30000 });
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      return ctx.replyWithPhoto(new InputFile(Buffer.from(imgRes.data), "remini.jpg"), { caption: "✨ *Remini — HD Enhancement*", parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("removebg", async (ctx) => {
    const { getPhotoUrl } = require("../../utils/mediaHelper");
    const wait = await ctx.reply("✂️ _Menghapus background..._", { parse_mode: "Markdown" });
    try {
      const url = await getPhotoUrl(ctx, config);
      if (!url) return ctx.api.editMessageText(ctx.chat.id, wait.message_id, "❌ Balas/kirim foto dulu!", { parse_mode: "Markdown" });
      const { data } = await axios.get(`${config.vtechApiUrl}/api/tools/removebg`, { params: { apikey: config.vtechApiKey, url }, timeout: 60000 });
      const r = data?.result || data?.data || data;
      const imgUrl = r?.url || r?.image || r?.result;
      if (!imgUrl) throw new Error("Hasil tidak ditemukan");
      const imgRes = await axios.get(imgUrl, { responseType: "arraybuffer", timeout: 30000 });
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      return ctx.replyWithPhoto(new InputFile(Buffer.from(imgRes.data), "nobg.png"), { caption: "✂️ *Remove Background*", parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("ssweb", async (ctx) => {
    const url = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!url) return ctx.reply("📸 Format: `/ssweb <url>`\nContoh: `/ssweb https://google.com`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("📸 _Screenshot web..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/tools/ssweb`, { params: { apikey: config.vtechApiKey, url }, timeout: 60000 });
      const r = data?.result || data?.data || data;
      const imgUrl = r?.url || r?.screenshot || r?.image;
      if (!imgUrl) throw new Error("Screenshot gagal");
      const imgRes = await axios.get(imgUrl, { responseType: "arraybuffer", timeout: 30000 });
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      return ctx.replyWithPhoto(new InputFile(Buffer.from(imgRes.data), "ss.jpg"), { caption: `📸 *Screenshot:* ${url}`, parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("sswebhp", async (ctx) => {
    const url = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!url) return ctx.reply("📱 Format: `/sswebhp <url>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("📱 _Screenshot versi HP..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/tools/sshp`, { params: { apikey: config.vtechApiKey, url }, timeout: 60000 });
      const r = data?.result || data?.data || data;
      const imgUrl = r?.url || r?.screenshot || r?.image;
      if (!imgUrl) throw new Error("Screenshot gagal");
      const imgRes = await axios.get(imgUrl, { responseType: "arraybuffer", timeout: 30000 });
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      return ctx.replyWithPhoto(new InputFile(Buffer.from(imgRes.data), "sshp.jpg"), { caption: `📱 *Screenshot HP:* ${url}`, parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("tinyurl", async (ctx) => {
    const link = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!link) return ctx.reply("🔗 Format: `/tinyurl <url>`", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/linkshort/tinyurl`, { params: { apikey: config.vtechApiKey, link }, timeout: 15000 });
      const r = data?.result || data?.data || data;
      ctx.reply(`🔗 *TinyURL*\n\n🔹 Asli: ${link}\n✅ Pendek: ${r?.url || r?.shortUrl || r?.link || JSON.stringify(r)}`, { parse_mode: "Markdown", disable_web_page_preview: true });
    } catch (err) { ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("bitly", async (ctx) => {
    const link = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!link) return ctx.reply("🔗 Format: `/bitly <url>`", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/linkshort/bitly`, { params: { apikey: config.vtechApiKey, link }, timeout: 15000 });
      const r = data?.result || data?.data || data;
      ctx.reply(`🔗 *Bitly*\n\n✅ Pendek: ${r?.url || r?.shortUrl || r?.link || JSON.stringify(r)}`, { parse_mode: "Markdown", disable_web_page_preview: true });
    } catch (err) { ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("tempmail", async (ctx) => {
    const wait = await ctx.reply("📧 _Membuat email sementara..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/tools/create-temp-mail`, { params: { apikey: config.vtechApiKey }, timeout: 20000 });
      const r = data?.result || data?.data || data;
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      ctx.reply(`📧 *Temp Mail*\n\n✉️ *Email:* \`${r?.email || r?.address || JSON.stringify(r)}\`\n\n_Gunakan /cekmailtemp <email> untuk cek inbox_`, { parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("cekmailtemp", async (ctx) => {
    const email = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!email) return ctx.reply("📧 Format: `/cekmailtemp <email>`", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/tools/cek-msg-tmp-mail`, { params: { apikey: config.vtechApiKey, email }, timeout: 15000 });
      const r = data?.result || data?.data || data;
      const mails = Array.isArray(r) ? r.slice(0, 3) : [r];
      const txt = mails.map((m, i) => `${i + 1}. 📩 *${m.from || m.sender || "-"}*\n   📝 ${m.subject || m.title || "-"}`).join("\n\n");
      ctx.reply(`📧 *Inbox: ${email}*\n\n${txt || "Inbox kosong"}`, { parse_mode: "Markdown" });
    } catch (err) { ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("styletext", async (ctx) => {
    const text = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!text) return ctx.reply("✍️ Format: `/styletext <teks>`", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/tools/styletext`, { params: { apikey: config.vtechApiKey, text }, timeout: 15000 });
      const r = data?.result || data?.data || data;
      const styles = Array.isArray(r) ? r.slice(0, 10).map((s, i) => `${i + 1}. ${s}`).join("\n") : JSON.stringify(r).slice(0, 2000);
      ctx.reply(`✍️ *Style Text: ${text}*\n\n${styles}`, { parse_mode: "Markdown" });
    } catch (err) { ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("countdown", async (ctx) => {
    const args = ctx.message.text.split(" ").slice(1);
    if (args.length < 3) return ctx.reply("⏳ Format: `/countdown <tgl> <bln> <thn>`\nContoh: `/countdown 1 Januari 2026`", { parse_mode: "Markdown" });
    const [tanggal, bulan, tahun] = args;
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/tools/countdown`, { params: { apikey: config.vtechApiKey, tanggal, bulan, tahun }, timeout: 15000 });
      const r = data?.result || data?.data || data;
      ctx.reply(`⏳ *Countdown ke ${tanggal} ${bulan} ${tahun}*\n\n${JSON.stringify(r, null, 2).slice(0, 1000)}`, { parse_mode: "Markdown" });
    } catch (err) { ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("cvuang", async (ctx) => {
    const args = ctx.message.text.split(" ").slice(1);
    if (args.length < 3) return ctx.reply("💱 Format: `/cvuang <dari> <ke> <jumlah>`\nContoh: `/cvuang USD IDR 100`", { parse_mode: "Markdown" });
    const [from, to, jumlah] = args;
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/tools/cvuang`, { params: { apikey: config.vtechApiKey, from, to, jumlah }, timeout: 15000 });
      const r = data?.result || data?.data || data;
      ctx.reply(`💱 *Konversi Mata Uang*\n\n${jumlah} ${from} = *${r?.result || r?.converted || JSON.stringify(r)}* ${to}`, { parse_mode: "Markdown" });
    } catch (err) { ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("vccgen", async (ctx) => {
    const jumlah = ctx.message.text.split(" ").slice(1)[0] || "5";
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/tools/vccgen`, { params: { apikey: config.vtechApiKey, jumlah }, timeout: 15000 });
      const r = data?.result || data?.data || data;
      const list = Array.isArray(r) ? r.slice(0, 10).join("\n") : JSON.stringify(r).slice(0, 1500);
      ctx.reply(`💳 *VCC Generator (${jumlah})*\n\n\`\`\`\n${list}\n\`\`\``, { parse_mode: "Markdown" });
    } catch (err) { ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });
};
