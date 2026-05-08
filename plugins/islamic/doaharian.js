module.exports = ({ bot, config, axios }) => {
  bot.command("doaharian", async (ctx) => {
    try {
      const res = await axios.get(`${config.vtechApiUrl}/api/islamic/doaharian`, {
        params: { apikey: config.vtechApiKey }, timeout: 25000,
      });
      const list = res.data?.result?.data || res.data?.result || res.data?.data || [];
      if (!list.length) return ctx.reply("❌ Data tidak tersedia.");
      const item = list[Math.floor(Math.random() * list.length)];
      const title  = item.title || item.nama || item.name || "Doa";
      const arab   = item.arabic || item.arab || "";
      const latin  = item.latin || "";
      const arti   = item.translation || item.terjemahan || item.arti || "";
      return ctx.reply(
        `🤲 *Doa Harian*\n\n` +
        `📖 *${title}*\n\n` +
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
