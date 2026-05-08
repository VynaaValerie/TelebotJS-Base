const { getPhotoUrl } = require("../../utils/mediaHelper");
module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("gpt", async (ctx) => {
    const text = ctx.message.text.split(" ").slice(1).join(" ").trim() || ctx.message.reply_to_message?.text;
    if (!text) return ctx.reply("🤖 Format: `/gpt <pertanyaan>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("💭 _GPT sedang berpikir..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/search/gpt`, { params: { apikey: config.vtechApiKey, text }, timeout: 30000 });
      const r = data?.result || data?.data || data;
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      const jawaban = r?.result || r?.message || r?.response || r?.answer || r?.content || JSON.stringify(r).slice(0, 3000);
      ctx.reply(`🤖 *GPT*\n\n💬 *Q:* ${text}\n\n💡 *A:* ${jawaban}`, { parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("bingchat", async (ctx) => {
    const text = ctx.message.text.split(" ").slice(1).join(" ").trim() || ctx.message.reply_to_message?.text;
    if (!text) return ctx.reply("🔵 Format: `/bingchat <pertanyaan>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("💭 _Bing AI sedang berpikir..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/search/bing-chat`, { params: { apikey: config.vtechApiKey, text }, timeout: 30000 });
      const r = data?.result || data?.data || data;
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      const jawaban = r?.result || r?.message || r?.response || r?.answer || JSON.stringify(r).slice(0, 3000);
      ctx.reply(`🔵 *Bing Chat*\n\n${jawaban}`, { parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("blackbox", async (ctx) => {
    const text = ctx.message.text.split(" ").slice(1).join(" ").trim() || ctx.message.reply_to_message?.text;
    if (!text) return ctx.reply("🖤 Format: `/blackbox <pertanyaan>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("💭 _Blackbox AI sedang berpikir..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/search/blackbox-chat`, { params: { apikey: config.vtechApiKey, text }, timeout: 30000 });
      const r = data?.result || data?.data || data;
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      const jawaban = r?.result || r?.message || r?.response || r?.answer || JSON.stringify(r).slice(0, 3000);
      ctx.reply(`🖤 *Blackbox AI*\n\n${jawaban}`, { parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("leptonai", async (ctx) => {
    const text = ctx.message.text.split(" ").slice(1).join(" ").trim() || ctx.message.reply_to_message?.text;
    if (!text) return ctx.reply("⚡ Format: `/leptonai <pertanyaan>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("💭 _Lepton AI sedang berpikir..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/search/lepton-ai`, { params: { apikey: config.vtechApiKey, text }, timeout: 30000 });
      const r = data?.result || data?.data || data;
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      const jawaban = r?.result || r?.message || r?.response || r?.answer || JSON.stringify(r).slice(0, 3000);
      ctx.reply(`⚡ *Lepton AI*\n\n${jawaban}`, { parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("bardai", async (ctx) => {
    const text = ctx.message.text.split(" ").slice(1).join(" ").trim() || ctx.message.reply_to_message?.text;
    if (!text) return ctx.reply("🔮 Format: `/bardai <pertanyaan>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("💭 _Bard AI sedang berpikir..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/search/bard-ai`, { params: { apikey: config.vtechApiKey, text }, timeout: 30000 });
      const r = data?.result || data?.data || data;
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      const jawaban = r?.result || r?.message || r?.response || r?.answer || JSON.stringify(r).slice(0, 3000);
      ctx.reply(`🔮 *Bard AI*\n\n${jawaban}`, { parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("bardimg", async (ctx) => {
    const text = ctx.message.text.split(" ").slice(1).join(" ").trim() || ctx.message.reply_to_message?.text || "jelaskan gambar ini";
    const wait = await ctx.reply("🔮 _Bard AI menganalisis gambar..._", { parse_mode: "Markdown" });
    try {
      const url = await getPhotoUrl(ctx, config);
      if (!url) return ctx.api.editMessageText(ctx.chat.id, wait.message_id, "❌ Balas/kirim foto dulu!", { parse_mode: "Markdown" });
      const { data } = await axios.get(`${config.vtechApiUrl}/api/search/bard-img`, { params: { apikey: config.vtechApiKey, url, text }, timeout: 30000 });
      const r = data?.result || data?.data || data;
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      const jawaban = r?.result || r?.message || r?.response || r?.answer || JSON.stringify(r).slice(0, 3000);
      ctx.reply(`🔮 *Bard Image Q&A*\n\n💬 _${text}_\n\n${jawaban}`, { parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("cai", async (ctx) => {
    const args = ctx.message.text.split(" ").slice(1);
    if (args.length < 2) return ctx.reply("🎭 Format: `/cai <char> | <pesan>`\nContoh: `/cai Kirito | halo siapa namamu?`", { parse_mode: "Markdown" });
    const full = args.join(" ");
    const sepIdx = full.indexOf("|");
    const char = sepIdx > 0 ? full.slice(0, sepIdx).trim() : args[0];
    const prompt = sepIdx > 0 ? full.slice(sepIdx + 1).trim() : args.slice(1).join(" ");
    const wait = await ctx.reply(`🎭 _${char} sedang berpikir..._`, { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/search/c-ai`, { params: { apikey: config.vtechApiKey, prompt, char }, timeout: 30000 });
      const r = data?.result || data?.data || data;
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      const jawaban = r?.result || r?.message || r?.response || r?.answer || JSON.stringify(r).slice(0, 3000);
      ctx.reply(`🎭 *Character AI: ${char}*\n\n💬 *Kamu:* ${prompt}\n\n🗣 *${char}:* ${jawaban}`, { parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("agedetect", async (ctx) => {
    const wait = await ctx.reply("👤 _Mendeteksi usia dari foto..._", { parse_mode: "Markdown" });
    try {
      const url = await getPhotoUrl(ctx, config);
      if (!url) return ctx.api.editMessageText(ctx.chat.id, wait.message_id, "❌ Balas/kirim foto dulu!", { parse_mode: "Markdown" });
      const { data } = await axios.get(`${config.vtechApiUrl}/api/search/agedetect`, { params: { apikey: config.vtechApiKey, url }, timeout: 30000 });
      const r = data?.result || data?.data || data;
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      ctx.reply(`👤 *Age Detect*\n\n🎂 *Estimasi Usia:* ${r?.age || r?.predicted_age || r?.result || JSON.stringify(r).slice(0, 500)}`, { parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("openaiimg", async (ctx) => {
    const text = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!text) return ctx.reply("🎨 Format: `/openaiimg <prompt>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("🎨 _OpenAI membuat gambar..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/search/openai-image`, { params: { apikey: config.vtechApiKey, text }, timeout: 60000 });
      const r = data?.result || data?.data || data;
      const imgUrl = r?.url || r?.image || r?.result;
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      if (imgUrl) {
        const imgRes = await axios.get(imgUrl, { responseType: "arraybuffer", timeout: 60000 });
        return ctx.replyWithPhoto(new InputFile(Buffer.from(imgRes.data), "openai.jpg"), { caption: `🎨 *OpenAI Image:* ${text}`, parse_mode: "Markdown" });
      }
      ctx.reply(`🎨 *OpenAI Image*\n\n${JSON.stringify(r).slice(0, 1000)}`, { parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("pinsearch", async (ctx) => {
    const text1 = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!text1) return ctx.reply("📌 Format: `/pinsearch <kata kunci>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("🔍 _Mencari di Pinterest..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/search/pinterest`, { params: { apikey: config.vtechApiKey, text1 }, timeout: 15000 });
      const arr = data?.result || data?.data || data;
      const imgUrl = Array.isArray(arr) ? arr[0]?.url || arr[0]?.image : arr?.url || arr?.image;
      if (imgUrl) {
        const imgRes = await axios.get(imgUrl, { responseType: "arraybuffer", timeout: 60000 });
        await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
        return ctx.replyWithPhoto(new InputFile(Buffer.from(imgRes.data), "pin.jpg"), { caption: `📌 *Pinterest: ${text1}*`, parse_mode: "Markdown" });
      }
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      ctx.reply(`📌 *Pinterest: ${text1}*\n\n${JSON.stringify(arr).slice(0, 1000)}`, { parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });
};
