module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("googleweb", async (ctx) => {
    const text1 = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!text1) return ctx.reply("🔍 Format: `/googleweb <kata kunci>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("🔍 _Mencari di Google..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/search/google`, { params: { apikey: config.vtechApiKey, text1 }, timeout: 15000 });
      const arr = data?.result || data?.data || data;
      const list = Array.isArray(arr) ? arr.slice(0, 5) : [arr];
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      const txt = list.map((r, i) => `${i + 1}. *${r.title || "-"}*\n   📝 ${(r.snippet || r.description || "").slice(0, 100)}\n   🔗 ${r.link || r.url || "-"}`).join("\n\n");
      ctx.reply(`🔍 *Google: ${text1}*\n\n${txt}`, { parse_mode: "Markdown", disable_web_page_preview: true });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("googleimg", async (ctx) => {
    const text1 = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!text1) return ctx.reply("🖼 Format: `/googleimg <kata kunci>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("🔍 _Mencari gambar Google..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/search/googleimage`, { params: { apikey: config.vtechApiKey, text1 }, timeout: 15000 });
      const arr = data?.result || data?.data || data;
      const imgUrl = Array.isArray(arr) ? arr[0]?.url || arr[0]?.image : arr?.url || arr?.image;
      if (!imgUrl) throw new Error("Gambar tidak ditemukan");
      const imgRes = await axios.get(imgUrl, { responseType: "arraybuffer", timeout: 60000 });
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      return ctx.replyWithPhoto(new InputFile(Buffer.from(imgRes.data), "google.jpg"), { caption: `🖼 *Google Image: ${text1}*`, parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("playstore", async (ctx) => {
    const app = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!app) return ctx.reply("📱 Format: `/playstore <nama app>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("🔍 _Mencari di Play Store..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/search/playstore`, { params: { apikey: config.vtechApiKey, app }, timeout: 15000 });
      const arr = data?.result || data?.data || data;
      const list = Array.isArray(arr) ? arr.slice(0, 5) : [arr];
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      const txt = list.map((r, i) => `${i + 1}. *${r.title || r.name || "-"}*\n   ⭐ ${r.rating || "-"} | 📥 ${r.installs || "-"}`).join("\n\n");
      ctx.reply(`📱 *Play Store: ${app}*\n\n${txt}`, { parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("ringtone", async (ctx) => {
    const text1 = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!text1) return ctx.reply("🎵 Format: `/ringtone <nama>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("🔍 _Mencari ringtone..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/search/ringtone`, { params: { apikey: config.vtechApiKey, text1 }, timeout: 15000 });
      const arr = data?.result || data?.data || data;
      const list = Array.isArray(arr) ? arr.slice(0, 5) : [arr];
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      const txt = list.map((r, i) => `${i + 1}. *${r.title || r.name || "-"}*\n   🔗 ${r.url || r.download || r.link || "-"}`).join("\n\n");
      ctx.reply(`🎵 *Ringtone: ${text1}*\n\n${txt}`, { parse_mode: "Markdown", disable_web_page_preview: true });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("sfile", async (ctx) => {
    const text = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!text) return ctx.reply("📁 Format: `/sfile <nama file>`", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/search/sfile`, { params: { apikey: config.vtechApiKey, text }, timeout: 15000 });
      const arr = data?.result || data?.data || data;
      const list = Array.isArray(arr) ? arr.slice(0, 5) : [arr];
      const txt = list.map((r, i) => `${i + 1}. *${r.title || r.name || "-"}*\n   💾 ${r.size || "-"} | 🔗 ${r.url || r.link || "-"}`).join("\n\n");
      ctx.reply(`📁 *SFile: ${text}*\n\n${txt}`, { parse_mode: "Markdown", disable_web_page_preview: true });
    } catch (err) { ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("sfilemobi", async (ctx) => {
    const text1 = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!text1) return ctx.reply("📁 Format: `/sfilemobi <nama file>`", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/search/sfilemobi`, { params: { apikey: config.vtechApiKey, text1 }, timeout: 15000 });
      const arr = data?.result || data?.data || data;
      const list = Array.isArray(arr) ? arr.slice(0, 5) : [arr];
      const txt = list.map((r, i) => `${i + 1}. *${r.title || r.name || "-"}*\n   🔗 ${r.url || r.link || "-"}`).join("\n\n");
      ctx.reply(`📁 *Sfile Mobi: ${text1}*\n\n${txt}`, { parse_mode: "Markdown", disable_web_page_preview: true });
    } catch (err) { ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("searchsticker", async (ctx) => {
    const text1 = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!text1) return ctx.reply("🎭 Format: `/searchsticker <kata>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("🔍 _Mencari stiker..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/search/sticker`, { params: { apikey: config.vtechApiKey, text1 }, timeout: 15000 });
      const arr = data?.result || data?.data || data;
      const first = Array.isArray(arr) ? arr[0] : arr;
      const imgUrl = first?.url || first?.image;
      if (imgUrl) {
        const imgRes = await axios.get(imgUrl, { responseType: "arraybuffer", timeout: 60000 });
        await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
        return ctx.replyWithPhoto(new InputFile(Buffer.from(imgRes.data), "sticker.png"), { caption: `🎭 *Sticker: ${text1}*`, parse_mode: "Markdown" });
      }
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      ctx.reply(`🎭 *Sticker: ${text1}*\n\n${JSON.stringify(arr).slice(0, 1000)}`, { parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("tiktoksearch", async (ctx) => {
    const query = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!query) return ctx.reply("🎵 Format: `/tiktoksearch <kata kunci>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("🔍 _Mencari TikTok..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/search/tiktoks`, { params: { apikey: config.vtechApiKey, query }, timeout: 15000 });
      const arr = data?.result || data?.data || data;
      const list = Array.isArray(arr) ? arr.slice(0, 5) : [arr];
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      const txt = list.map((r, i) => `${i + 1}. *${r.title || r.desc || "-"}*\n   ❤️ ${r.likes || r.digg_count || "-"} | 👁 ${r.views || r.play_count || "-"}\n   🔗 ${r.url || r.share_url || "-"}`).join("\n\n");
      ctx.reply(`🎵 *TikTok Search: ${query}*\n\n${txt}`, { parse_mode: "Markdown", disable_web_page_preview: true });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("wikimedia", async (ctx) => {
    const text1 = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!text1) return ctx.reply("📚 Format: `/wikimedia <kata kunci>`", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/search/wikimedia`, { params: { apikey: config.vtechApiKey, text1 }, timeout: 15000 });
      const arr = data?.result || data?.data || data;
      const list = Array.isArray(arr) ? arr.slice(0, 5) : [arr];
      const txt = list.map((r, i) => `${i + 1}. *${r.title || r.name || "-"}*\n   🔗 ${r.url || r.link || "-"}`).join("\n\n");
      ctx.reply(`📸 *Wikimedia: ${text1}*\n\n${txt}`, { parse_mode: "Markdown", disable_web_page_preview: true });
    } catch (err) { ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("linkgroupwa", async (ctx) => {
    const text1 = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!text1) return ctx.reply("📲 Format: `/linkgroupwa <topik>`", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/search/linkgroupwa`, { params: { apikey: config.vtechApiKey, text1 }, timeout: 15000 });
      const arr = data?.result || data?.data || data;
      const list = Array.isArray(arr) ? arr.slice(0, 10) : [arr];
      const txt = list.map((r, i) => `${i + 1}. *${r.title || r.nama || "-"}*\n   📲 ${r.link || r.url || "-"}`).join("\n\n");
      ctx.reply(`📲 *Link Grup WA: ${text1}*\n\n${txt}`, { parse_mode: "Markdown", disable_web_page_preview: true });
    } catch (err) { ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("spotifysearch", async (ctx) => {
    const query = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!query) return ctx.reply("🎵 Format: `/spotifysearch <judul lagu>`", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/search/spotify`, { params: { apikey: config.vtechApiKey, query }, timeout: 15000 });
      const arr = data?.result || data?.data || data;
      const list = Array.isArray(arr) ? arr.slice(0, 5) : [arr];
      const txt = list.map((r, i) => `${i + 1}. *${r.name || r.title || "-"}*\n   👤 ${r.artist || r.artists?.map(a => a.name).join(", ") || "-"}\n   🔗 ${r.url || r.uri || "-"}`).join("\n\n");
      ctx.reply(`🎵 *Spotify Search: ${query}*\n\n${txt}`, { parse_mode: "Markdown", disable_web_page_preview: true });
    } catch (err) { ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("stablediffusion", async (ctx) => {
    const text = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!text) return ctx.reply("🎨 Format: `/stablediffusion <prompt>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("🎨 _Membuat gambar AI..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/search/stablediffusion`, { params: { apikey: config.vtechApiKey, text }, timeout: 60000 });
      const r = data?.result || data?.data || data;
      const imgUrl = r?.url || r?.image;
      if (imgUrl) {
        const imgRes = await axios.get(imgUrl, { responseType: "arraybuffer", timeout: 60000 });
        await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
        return ctx.replyWithPhoto(new InputFile(Buffer.from(imgRes.data), "sd.jpg"), { caption: `🎨 *Stable Diffusion*\n\n_${text}_`, parse_mode: "Markdown" });
      }
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      ctx.reply(`🎨 *Stable Diffusion*\n\n${JSON.stringify(r).slice(0, 1000)}`, { parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });
};
