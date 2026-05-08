module.exports = ({ bot, config, axios }) => {
  bot.command("tafsir", async (ctx) => {
    const args = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!args) {
      return ctx.reply(
        "⚠️ Format: `/tafsir <kata kunci>`\n\nContoh: `/tafsir adam` `/tafsir nabi musa`",
        { parse_mode: "Markdown" }
      );
    }
    try {
      const res = await axios.get(`${config.vtechApiUrl}/api/islamic/tafsirsurah`, {
        params: { apikey: config.vtechApiKey, text: args }, timeout: 25000,
      });
      const d = res.data;
      if (d?.status === false || !d?.result) {
        return ctx.reply(`❌ Tafsir untuk *${args}* tidak ditemukan.`, { parse_mode: "Markdown" });
      }
      const r = d.result;
      const content = typeof r === "string" ? r : JSON.stringify(r, null, 2);
      return ctx.reply(
        `📖 *Tafsir: ${args}*\n\n${content.slice(0, 3800)}`,
        { parse_mode: "Markdown" }
      );
    } catch (e) {
      return ctx.reply(`❌ Gagal mengambil data: \`${e.message}\``, { parse_mode: "Markdown" });
    }
  });
};
