module.exports = ({ bot, config, axios }) => {
  bot.command("stalkff", async (ctx) => {
    const id = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!id) return ctx.reply("🔫 Format: `/stalkff <id>`\nContoh: `/stalkff 919044185`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("🔍 _Mencari data Free Fire..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/stalk/ff`, {
        params: { apikey: config.vtechApiKey, id }, timeout: 15000,
      });
      const r = data?.result || data?.data || data;
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      ctx.reply(
        `🔫 *Free Fire Stalk*\n\n` +
        `👤 *Nama:* ${r.name || r.nickname || "-"}\n` +
        `🆔 *ID:* ${r.id || id}\n` +
        `🏆 *Level:* ${r.level || "-"}\n` +
        `⭐ *Rank:* ${r.rank || r.rankName || "-"}\n` +
        `❤️ *Likes:* ${r.likes || "-"}\n` +
        `🎖 *Guild:* ${r.guild || r.clan || "-"}`,
        { parse_mode: "Markdown" }
      );
    } catch (err) {
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
