module.exports = ({ bot, config, axios }) => {
  const list = [
    { cmd: "newscnbc", ep: "cnbc", label: "CNBC" },
    { cmd: "newscnn", ep: "cnn", label: "CNN" },
    { cmd: "newsdaily", ep: "daily", label: "Daily" },
    { cmd: "newsdetik", ep: "detik", label: "Detik" },
    { cmd: "newsindozone", ep: "indozone", label: "Indozone" },
    { cmd: "newsinews", ep: "inews", label: "iNews" },
    { cmd: "newskompas", ep: "kompas", label: "Kompas" },
    { cmd: "newskontan", ep: "kontan", label: "Kontan" },
    { cmd: "newsfajar", ep: "koranfajar", label: "Koran Fajar" },
    { cmd: "newstribun", ep: "tribun", label: "Tribun" },
  ];
  for (const { cmd, ep, label } of list) {
    bot.command(cmd, async (ctx) => {
      try {
        const { data } = await axios.get(`${config.vtechApiUrl}/api/news/${ep}`, {
          params: { apikey: config.vtechApiKey }, timeout: 15000,
        });
        const arr = data?.result || data?.data || data;
        const list2 = Array.isArray(arr) ? arr.slice(0, 5) : [arr];
        const txt = list2.map((n, i) =>
          `${i + 1}. *${n.title || n.judul || "-"}*\n   🔗 ${n.link || n.url || "-"}`
        ).join("\n\n");
        ctx.reply(`📰 *Berita ${label}*\n\n${txt}`, { parse_mode: "Markdown", disable_web_page_preview: true });
      } catch (err) { ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
    });
  }
};
