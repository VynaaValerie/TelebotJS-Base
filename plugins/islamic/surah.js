module.exports = ({ bot, config, axios }) => {
  bot.command("surah", async (ctx) => {
    const arg = ctx.message.text.split(" ")[1]?.trim();
    const no  = parseInt(arg);
    if (!arg || isNaN(no) || no < 1 || no > 114) {
      return ctx.reply(
        "⚠️ Format: `/surah <nomor>` (1–114)\n\nContoh: `/surah 1` (Al-Fatihah) `/surah 36` (Yasin)",
        { parse_mode: "Markdown" }
      );
    }
    try {
      const res = await axios.get(`${config.vtechApiUrl}/api/islamic/surah`, {
        params: { apikey: config.vtechApiKey, no }, timeout: 25000,
      });
      const list = res.data?.result || res.data?.data || [];
      if (!list.length) return ctx.reply("❌ Surah tidak ditemukan.");
      // Tampilkan 10 ayat pertama agar tidak terlalu panjang
      const preview = list.slice(0, 10);
      const lines = preview.map((a, i) =>
        `*(${i + 1})* ${a.arab || a.arabic || ""}\n_${a.latin || ""}_\n${a.rumi || a.terjemahan || ""}`
      );
      let text = `📖 *Surah No. ${no}*\n\n${lines.join("\n\n")}`;
      if (list.length > 10) text += `\n\n_...dan ${list.length - 10} ayat lainnya_`;
      return ctx.reply(text, { parse_mode: "Markdown" });
    } catch (e) {
      return ctx.reply(`❌ Gagal mengambil data: \`${e.message}\``, { parse_mode: "Markdown" });
    }
  });
};
