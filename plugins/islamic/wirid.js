module.exports = ({ bot, config, axios }) => {
  bot.command("wirid", async (ctx) => {
    try {
      const res = await axios.get(`${config.vtechApiUrl}/api/islamic/wirid`, {
        params: { apikey: config.vtechApiKey }, timeout: 25000,
      });
      const list = res.data?.result?.data || res.data?.result || res.data?.data || [];
      if (!list.length) return ctx.reply("❌ Data tidak tersedia.");
      const item = list[Math.floor(Math.random() * list.length)];
      const arab  = item.arabic || item.arab || "";
      const times = item.times ? `(${item.times}x)` : "";
      const tnc   = item.tnc || "";
      return ctx.reply(
        `📿 *Wirid Setelah Shalat*\n\n` +
        `${arab}\n\n` +
        `🔢 Dibaca: *${times || "1x"}*` +
        `${tnc ? `\n\n📝 _${tnc}_` : ""}`,
        { parse_mode: "Markdown" }
      );
    } catch (e) {
      return ctx.reply(`❌ Gagal mengambil data: \`${e.message}\``, { parse_mode: "Markdown" });
    }
  });
};
