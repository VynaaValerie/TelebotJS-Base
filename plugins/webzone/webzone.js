module.exports = ({ bot, config, axios }) => {
  bot.command("gsmarena", async (ctx) => {
    const query = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!query) return ctx.reply("📱 Format: `/gsmarena <nama hp>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("🔍 _Mencari spesifikasi HP..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/webzone/gsmarena`, { params: { apikey: config.vtechApiKey, query }, timeout: 20000 });
      const r = data?.result || data?.data || data;
      const list = Array.isArray(r) ? r.slice(0, 3) : [r];
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      const txt = list.map((d, i) => `${i + 1}. *${d.name || d.title || "-"}*\n   🔗 ${d.url || d.link || "-"}`).join("\n\n");
      ctx.reply(`📱 *GSMArena: ${query}*\n\n${txt}`, { parse_mode: "Markdown", disable_web_page_preview: true });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("whois", async (ctx) => {
    const query = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!query) return ctx.reply("🌐 Format: `/whois <domain>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("🔍 _Mencari info domain..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/webzone/whois`, { params: { apikey: config.vtechApiKey, query }, timeout: 15000 });
      const r = data?.result || data?.data || data;
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      const info = typeof r === "string" ? r : Object.entries(r).slice(0, 10).map(([k, v]) => `*${k}:* ${v}`).join("\n");
      ctx.reply(`🌐 *Whois: ${query}*\n\n${info}`, { parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("whatanime", async (ctx) => {
    const { getPhotoUrl } = require("../../utils/mediaHelper");
    const wait = await ctx.reply("🔍 _Mencari anime..._", { parse_mode: "Markdown" });
    try {
      const url = await getPhotoUrl(ctx, config);
      if (!url) return ctx.api.editMessageText(ctx.chat.id, wait.message_id, "❌ Kirim/reply foto scene anime dulu!", { parse_mode: "Markdown" });
      const { data } = await axios.get(`${config.vtechApiUrl}/api/webzone/whatanime`, { params: { apikey: config.vtechApiKey, query: url }, timeout: 30000 });
      const r = data?.result || data?.data || data;
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      const anime = r?.title || r?.anilist?.title?.romaji || r?.filename || JSON.stringify(r).slice(0, 300);
      ctx.reply(`🎌 *What Anime?*\n\n📺 *Judul:* ${anime}\n⏱ *Episode:* ${r?.episode || "-"}\n🕐 *Timestamp:* ${r?.from || "-"}`, { parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("growstock", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/webzone/grow-and-garden-stock`, { params: { apikey: config.vtechApiKey }, timeout: 15000 });
      const r = data?.result || data?.data || data;
      const list = Array.isArray(r) ? r.slice(0, 10) : Object.entries(r).slice(0, 10);
      ctx.reply(`🌱 *Grow & Garden Stock*\n\n${JSON.stringify(list, null, 2).slice(0, 3000)}`, { parse_mode: "Markdown" });
    } catch (err) { ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });
};
