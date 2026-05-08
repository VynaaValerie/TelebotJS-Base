module.exports = ({ bot, config, axios }) => {
  bot.command("listnabi", async (ctx) => {
    try {
      const res = await axios.get(`${config.vtechApiUrl}/api/islamic/kisahnabi2`, {
        params: { apikey: config.vtechApiKey }, timeout: 25000,
      });
      const list = res.data?.result || res.data?.data || [];
      if (!list.length) return ctx.reply("❌ Data tidak tersedia.");
      const lines = list.map((n, i) =>
        `${i + 1}. *${n.name || n.nama}*${n.usia ? ` — ${n.usia} tahun` : ""}${n.tmp ? ` — ${n.tmp}` : ""}`
      );
      const chunks = [];
      let chunk = `🕌 *Daftar 25 Nabi & Rasul*\n_Gunakan /kisahnabi <nama> untuk kisah lengkap_\n\n`;
      for (const line of lines) {
        if ((chunk + line + "\n").length > 3800) { chunks.push(chunk); chunk = ""; }
        chunk += line + "\n";
      }
      if (chunk.trim()) chunks.push(chunk);
      for (const c of chunks) await ctx.reply(c, { parse_mode: "Markdown" });
    } catch (e) {
      return ctx.reply(`❌ Gagal mengambil data: \`${e.message}\``, { parse_mode: "Markdown" });
    }
  });
};
