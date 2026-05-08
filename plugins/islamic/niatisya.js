module.exports = ({ bot, config, axios }) => {
  bot.command("niatisya", async (ctx) => {
    try {
      const res = await axios.get(`${config.vtechApiUrl}/api/islamic/niatisya`, {
        params: { apikey: config.vtechApiKey }, timeout: 25000,
      });
      const item = (res.data?.result?.[0]) || res.data?.result || {};
      return ctx.reply(
        `🕌 *${item.name || "Niat Shalat Isya"}*\n\n` +
        `${item.arabic || ""}\n\n` +
        `🔤 _${item.latin || ""}_\n\n` +
        `💡 ${item.terjemahan || item.arti || ""}`,
        { parse_mode: "Markdown" }
      );
    } catch (e) {
      return ctx.reply(`❌ Gagal mengambil data: \`${e.message}\``, { parse_mode: "Markdown" });
    }
  });
};
