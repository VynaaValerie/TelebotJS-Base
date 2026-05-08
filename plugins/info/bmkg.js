module.exports = ({ bot, config, axios }) => {
  bot.command("bmkg", async (ctx) => {
    const wait = await ctx.reply("🌤 _Mengambil data gempa..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/info/bmkg`, {
        params: { apikey: config.vtechApiKey }, timeout: 15000,
      });
      const d = data?.result || data?.data || data;
      const gempa = Array.isArray(d) ? d[0] : d;
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      const text =
        `🌍 *Info Gempa Terbaru - BMKG*\n\n` +
        `📍 *Wilayah:* ${gempa?.Wilayah || gempa?.area || "-"}\n` +
        `💥 *Magnitudo:* ${gempa?.Magnitude || gempa?.magnitude || "-"}\n` +
        `📏 *Kedalaman:* ${gempa?.Kedalaman || gempa?.depth || "-"}\n` +
        `🕐 *Waktu:* ${gempa?.Tanggal || ""} ${gempa?.Jam || gempa?.time || ""}\n` +
        `⚠️ *Potensi:* ${gempa?.Potensi || gempa?.potential || "-"}`;
      ctx.reply(text, { parse_mode: "Markdown" });
    } catch (err) {
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      ctx.reply(`❌ Gagal ambil data BMKG: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
