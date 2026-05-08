module.exports = ({ bot, config, axios }) => {
  const list = [
    { cmd: "pepataaceh", ep: "aceh", label: "Pepatah Aceh" },
    { cmd: "bacot", ep: "bacot", label: "Kata Bacot" },
    { cmd: "pepatabatak", ep: "batak", label: "Pepatah Batak" },
    { cmd: "bijak", ep: "bijak", label: "Kata Bijak" },
    { cmd: "pebugis", ep: "bugis", label: "Pepatah Bugis" },
    { cmd: "caklontong", ep: "caklontong", label: "Tebakan Cak Lontong" },
    { cmd: "bijakchina", ep: "china", label: "Kata Bijak China" },
    { cmd: "dare", ep: "dare", label: "Dare" },
    { cmd: "fakta", ep: "fakta", label: "Fakta Unik" },
    { cmd: "fiersa", ep: "fiersa", label: "Kata Fiersa Besari" },
    { cmd: "katabucin", ep: "katabucin", label: "Kata Bucin" },
    { cmd: "katadilan", ep: "katadilan", label: "Kata Dilan" },
    { cmd: "katailham", ep: "katailham", label: "Kata Ilham" },
    { cmd: "katasenja", ep: "katasenja", label: "Kata Senja" },
    { cmd: "pemadura", ep: "madura", label: "Pepatah Madura" },
    { cmd: "pemelayu", ep: "melayu", label: "Pepatah Melayu" },
    { cmd: "peminang", ep: "minangkabau", label: "Pepatah Minangkabau" },
    { cmd: "motivasi", ep: "motivasi", label: "Kata Motivasi" },
    { cmd: "ngawur", ep: "ngawur", label: "Kata Ngawur" },
    { cmd: "nyindir", ep: "nyindir", label: "Kata Nyindir" },
    { cmd: "quotes", ep: "quotes", label: "Quotes" },
    { cmd: "quotesanime", ep: "quotesanime", label: "Quotes Anime" },
    { cmd: "quotesjawa", ep: "quotesjawa", label: "Quotes Jawa" },
    { cmd: "pesunda", ep: "sunda", label: "Pepatah Sunda" },
    { cmd: "taugasih", ep: "taugasih", label: "Tau Gasih" },
    { cmd: "truth", ep: "truth", label: "Truth" },
  ];
  for (const { cmd, ep, label } of list) {
    bot.command(cmd, async (ctx) => {
      try {
        const { data } = await axios.get(`${config.vtechApiUrl}/api/random/${ep}`, {
          params: { apikey: config.vtechApiKey }, timeout: 15000,
        });
        const r = data?.result || data?.data || data;
        const teks = r?.kata || r?.text || r?.quote || r?.pepatah || r?.content || r?.kalimat || JSON.stringify(r);
        ctx.reply(`💬 *${label}*\n\n_${teks}_`, { parse_mode: "Markdown" });
      } catch (err) { ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
    });
  }
};
