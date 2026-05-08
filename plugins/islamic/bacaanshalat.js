module.exports = ({ bot, config, axios }) => {
  bot.command("bacaanshalat", async (ctx) => {
    try {
      const res = await axios.get(`${config.vtechApiUrl}/api/islamic/bacaanshalat`, {
        params: { apikey: config.vtechApiKey }, timeout: 25000,
      });
      const list = res.data?.result || res.data?.data || [];
      if (!list.length) return ctx.reply("❌ Data tidak tersedia.");
      const item = list[Math.floor(Math.random() * list.length)];
      const name  = item.name || item.nama || item.title || `Bacaan #${item.id || ""}`;
      const arab  = item.arabic || item.arab || "";
      const latin = item.latin || "";
      const arti  = item.terjemahan || item.translation || item.arti || "";
      return ctx.reply(
        `🕌 *Bacaan Shalat*\n\n` +
        `📖 *${name}*\n\n` +
        `${arab}\n\n` +
        `🔤 _${latin}_\n\n` +
        `💡 ${arti}`,
        { parse_mode: "Markdown" }
      );
    } catch (e) {
      return ctx.reply(`❌ Gagal mengambil data: \`${e.message}\``, { parse_mode: "Markdown" });
    }
  });
};
