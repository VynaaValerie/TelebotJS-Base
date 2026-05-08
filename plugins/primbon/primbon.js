module.exports = ({ bot, config, axios }) => {
  function fmt(obj) {
    if (typeof obj === "string") return obj;
    return Object.entries(obj).map(([k, v]) => `*${k}:* ${v}`).join("\n");
  }

  bot.command("weton", async (ctx) => {
    const args = ctx.message.text.split(" ").slice(1);
    if (args.length < 3) return ctx.reply("📅 Format: `/weton <tgl> <bln> <thn>`\nContoh: `/weton 14 5 2000`", { parse_mode: "Markdown" });
    const [tanggal, bulan, tahun] = args;
    const wait = await ctx.reply("🔮 _Menghitung weton..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/primbon/wetonjawa`, { params: { apikey: config.vtechApiKey, tanggal, bulan, tahun }, timeout: 15000 });
      const r = data?.result || data?.data || data;
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      ctx.reply(`🗓 *Weton Jawa*\n\n${fmt(r)}`, { parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("artimimpi", async (ctx) => {
    const mimpi = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!mimpi) return ctx.reply("💤 Format: `/artimimpi <kata>`", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/primbon/artimimpi`, { params: { apikey: config.vtechApiKey, mimpi }, timeout: 15000 });
      const r = data?.result || data?.data || data;
      ctx.reply(`💤 *Arti Mimpi: ${mimpi}*\n\n${fmt(r)}`, { parse_mode: "Markdown" });
    } catch (err) { ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("artinama", async (ctx) => {
    const nama = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!nama) return ctx.reply("📛 Format: `/artinama <nama>`", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/primbon/artinama`, { params: { apikey: config.vtechApiKey, nama }, timeout: 15000 });
      const r = data?.result || data?.data || data;
      ctx.reply(`📛 *Arti Nama: ${nama}*\n\n${fmt(r)}`, { parse_mode: "Markdown" });
    } catch (err) { ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("jodoh", async (ctx) => {
    const args = ctx.message.text.split(" ").slice(1);
    if (args.length < 2) return ctx.reply("💑 Format: `/jodoh <nama1> <nama2>`", { parse_mode: "Markdown" });
    const [cowo, cewe] = args;
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/primbon/kecocokanpasangan`, { params: { apikey: config.vtechApiKey, cowo, cewe }, timeout: 15000 });
      const r = data?.result || data?.data || data;
      ctx.reply(`💑 *Kecocokan: ${cowo} & ${cewe}*\n\n${fmt(r)}`, { parse_mode: "Markdown" });
    } catch (err) { ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  const dateEndpoints = [
    { cmd: "arahrejeki", ep: "arahrejeki", label: "Arah Rejeki" },
    { cmd: "artitarot", ep: "artitarot", label: "Arti Tarot" },
    { cmd: "cekpenyakit", ep: "cekpenyakit", label: "Cek Penyakit" },
    { cmd: "haribaik", ep: "haribaik", label: "Hari Baik" },
    { cmd: "harinaas", ep: "harinaas", label: "Hari Naas" },
    { cmd: "harisangar", ep: "harisangar", label: "Hari Sangar" },
    { cmd: "memancingikan", ep: "memancingikan", label: "Memancing Ikan" },
    { cmd: "nagahari", ep: "nagahari", label: "Naga Hari" },
    { cmd: "pekerjaanweton", ep: "pekerjaanwetonlahir", label: "Pekerjaan Weton" },
    { cmd: "ramalankeberuntungan", ep: "ramalankeberuntungan", label: "Ramalan Keberuntungan" },
    { cmd: "ramalannasib", ep: "ramalannasib", label: "Ramalan Nasib" },
    { cmd: "rejekiweton", ep: "rejekiweton", label: "Rejeki Weton" },
    { cmd: "tanggaljadian", ep: "tanggaljadianpernikahan", label: "Tanggal Jadian" },
  ];
  for (const { cmd, ep, label } of dateEndpoints) {
    bot.command(cmd, async (ctx) => {
      const args = ctx.message.text.split(" ").slice(1);
      if (args.length < 3) return ctx.reply(`📅 Format: \`/${cmd} <tgl> <bln> <thn>\``, { parse_mode: "Markdown" });
      const [tanggal, bulan, tahun] = args;
      try {
        const { data } = await axios.get(`${config.vtechApiUrl}/api/primbon/${ep}`, { params: { apikey: config.vtechApiKey, tanggal, bulan, tahun }, timeout: 15000 });
        const r = data?.result || data?.data || data;
        ctx.reply(`🔮 *${label}*\n\n${fmt(r)}`, { parse_mode: "Markdown" });
      } catch (err) { ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
    });
  }

  bot.command("nomerhoki", async (ctx) => {
    const nomer = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!nomer) return ctx.reply("🔢 Format: `/nomerhoki <nomor hp>`", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/primbon/nomerhoki`, { params: { apikey: config.vtechApiKey, nomer }, timeout: 15000 });
      const r = data?.result || data?.data || data;
      ctx.reply(`🔢 *Nomor Hoki: ${nomer}*\n\n${fmt(r)}`, { parse_mode: "Markdown" });
    } catch (err) { ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("ramalancinta", async (ctx) => {
    const args = ctx.message.text.split(" ").slice(1);
    if (args.length < 8) return ctx.reply("💕 Format: `/ramalancinta <nama1> <tgl1> <bln1> <thn1> <nama2> <tgl2> <bln2> <thn2>`", { parse_mode: "Markdown" });
    const [nama1, tanggal1, bulan1, tahun1, nama2, tanggal2, bulan2, tahun2] = args;
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/primbon/ramalancinta`, { params: { apikey: config.vtechApiKey, nama1, tanggal1, bulan1, tahun1, nama2, tanggal2, bulan2, tahun2 }, timeout: 15000 });
      const r = data?.result || data?.data || data;
      ctx.reply(`💕 *Ramalan Cinta*\n\n${fmt(r)}`, { parse_mode: "Markdown" });
    } catch (err) { ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("sifatkarakter", async (ctx) => {
    const args = ctx.message.text.split(" ").slice(1);
    if (args.length < 4) return ctx.reply("🧬 Format: `/sifatkarakter <nama> <tgl> <bln> <thn>`", { parse_mode: "Markdown" });
    const [nama, tanggal, bulan, tahun] = args;
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/primbon/sifatkarakter`, { params: { apikey: config.vtechApiKey, nama, tanggal, bulan, tahun }, timeout: 15000 });
      const r = data?.result || data?.data || data;
      ctx.reply(`🧬 *Sifat & Karakter: ${nama}*\n\n${fmt(r)}`, { parse_mode: "Markdown" });
    } catch (err) { ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });
};
