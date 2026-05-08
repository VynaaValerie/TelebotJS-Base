module.exports = ({ bot, config, axios }) => {
  bot.command("tahlil", async (ctx) => {
    try {
      const res = await axios.get(`${config.vtechApiUrl}/api/islamic/tahlil`, {
        params: { apikey: config.vtechApiKey }, timeout: 25000,
      });
      const list = res.data?.result?.data || res.data?.result || res.data?.data || [];
      if (!list.length) return ctx.reply("❌ Data tidak tersedia.");
      // Kirim 1 item random
      const item = list[Math.floor(Math.random() * list.length)];
      const title  = item.title || item.name || item.nama || `Bacaan #${item.id || ""}`;
      const arab   = item.arabic || item.arab || "";
      const arti   = item.translation || item.terjemahan || item.arti || "";
      return ctx.reply(
        `🕌 *Tahlil*\n\n` +
        `📖 *${title}*\n\n` +
        `${arab}\n\n` +
        `💡 _${arti}_`,
        { parse_mode: "Markdown" }
      );
    } catch (e) {
      return ctx.reply(`❌ Gagal mengambil data: \`${e.message}\``, { parse_mode: "Markdown" });
    }
  });
};
