module.exports = ({ bot, config, axios }) => {
  bot.command("growweather", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/webzone/grow-and-garden-weather`, { params: { apikey: config.vtechApiKey }, timeout: 15000 });
      const r = data?.result || data?.data || data;
      ctx.reply(`🌱 *Grow & Garden Weather*\n\n${JSON.stringify(r, null, 2).slice(0, 2000)}`, { parse_mode: "Markdown" });
    } catch (err) { ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("nhentaisearch", async (ctx) => {
    const query = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!query) return ctx.reply("🔍 Format: `/nhentaisearch <kata kunci>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("🔍 _Mencari..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/webzone/nhentai-search`, { params: { apikey: config.vtechApiKey, query }, timeout: 15000 });
      const arr = data?.result || data?.data || data;
      const list = Array.isArray(arr) ? arr.slice(0, 5) : [arr];
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      const txt = list.map((d, i) => `${i + 1}. *${d.title || d.name || "-"}*\n   🆔 ${d.id || "-"} | 📄 ${d.pages || d.num_pages || "-"} hal`).join("\n\n");
      ctx.reply(`🔍 *NHentai Search: ${query}*\n\n${txt}`, { parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("nhentaidetail", async (ctx) => {
    const query = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!query) return ctx.reply("📖 Format: `/nhentaidetail <id>`\nContoh: `/nhentaidetail 441508`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("🔍 _Mengambil detail..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/webzone/nhentai-detail`, { params: { apikey: config.vtechApiKey, query }, timeout: 15000 });
      const r = data?.result || data?.data || data;
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      ctx.reply(`📖 *NHentai #${query}*\n\n📚 *Judul:* ${r?.title || "-"}\n🏷 *Tags:* ${(r?.tags || []).slice(0, 5).join(", ") || "-"}\n📄 *Halaman:* ${r?.num_pages || r?.pages || "-"}`, { parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });
};
