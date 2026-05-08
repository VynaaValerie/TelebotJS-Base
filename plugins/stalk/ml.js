module.exports = ({ bot, config, axios }) => {
  bot.command("stalkml", async (ctx) => {
    const args = ctx.message.text.split(" ").slice(1);
    if (args.length < 2) return ctx.reply("⚔️ Format: `/stalkml <id> <server>`\nContoh: `/stalkml 214885010 2253`", { parse_mode: "Markdown" });
    const [id, server] = args;
    const wait = await ctx.reply("🔍 _Mencari data ML..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/stalk/ml`, {
        params: { apikey: config.vtechApiKey, id, server }, timeout: 15000,
      });
      const r = data?.result || data?.data || data;
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      ctx.reply(
        `⚔️ *Mobile Legends Stalk*\n\n` +
        `👤 *Nama:* ${r.name || r.nickname || "-"}\n` +
        `🆔 *ID:* ${r.id || id}\n` +
        `🏆 *Level:* ${r.level || "-"}\n` +
        `⭐ *Rank:* ${r.rank || r.rankName || "-"}\n` +
        `🎖 *BP:* ${r.bp || "-"}\n` +
        `🌟 *Season:* ${r.season || "-"}`,
        { parse_mode: "Markdown" }
      );
    } catch (err) {
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
