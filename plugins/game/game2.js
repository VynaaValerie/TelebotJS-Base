module.exports = ({ bot, config, axios, gameSessions }) => {
  const gameList = [
    { cmd: "family100",        ep: "family100",        label: "Family 100" },
    { cmd: "family1002",       ep: "family100-2",      label: "Family 100 V2" },
    { cmd: "kuisislami",       ep: "kuisislami",       label: "Kuis Islami" },
    { cmd: "kuismerdeka",      ep: "kuismerdeka",      label: "Kuis Merdeka" },
    { cmd: "siapakahaku",      ep: "siapakahaku",      label: "Siapakah Aku?" },
    { cmd: "susunkata",        ep: "susunkata",        label: "Susun Kata" },
    { cmd: "tebakdrakor",      ep: "tebakdrakor",      label: "Tebak Drakor" },
    { cmd: "tebakepep",        ep: "tebakepep",        label: "Tebak Pepep" },
    { cmd: "tebakheroml",      ep: "tebakheroml",      label: "Tebak Hero ML" },
    { cmd: "tebakjkt48",       ep: "tebakjkt48",       label: "Tebak JKT48" },
    { cmd: "tebakkabupaten",   ep: "tebakkabupaten",   label: "Tebak Kabupaten" },
    { cmd: "tebakkode",        ep: "tebakkode",        label: "Tebak Kode" },
    { cmd: "tebaklagu",        ep: "tebaklagu",        label: "Tebak Lagu" },
    { cmd: "tebakmakanan",     ep: "tebakmakanan",     label: "Tebak Makanan" },
    { cmd: "tebaknamatokoh",   ep: "tebaknamatokoh",   label: "Tebak Nama Tokoh" },
    { cmd: "tebakpemainbola",  ep: "tebakpemainbola",  label: "Tebak Pemain Bola" },
    { cmd: "tebakpokemon",     ep: "tebakpokemon",     label: "Tebak Pokemon" },
    { cmd: "tebakpop",         ep: "tebakpop",         label: "Tebak Pop" },
    { cmd: "tebakpresiden",    ep: "tebakpresiden",    label: "Tebak Presiden" },
    { cmd: "tebakwallet",      ep: "tebakwallet",      label: "Tebak Wallet" },
  ];

  for (const { cmd, ep, label } of gameList) {
    bot.command(cmd, async (ctx) => {
      const wait = await ctx.reply(`🎮 _Memuat ${label}..._`, { parse_mode: "Markdown" });
      try {
        const { data } = await axios.get(`${config.vtechApiUrl}/api/game/${ep}`, {
          params: { apikey: config.vtechApiKey }, timeout: 15000,
        });
        const q = data?.result || data?.data || data;
        const jawaban = (q.jawaban || q.answer || q.nama || "").toString().toLowerCase();
        const soal = q.soal || q.pertanyaan || q.question || q.clue || q.emoji || JSON.stringify(q).slice(0, 200);

        const key = `${ctx.chat.id}:${cmd}`;
        const prev = gameSessions.get(key);
        if (prev) clearTimeout(prev.timeout);

        gameSessions.set(key, {
          jawaban,
          timeout: setTimeout(() => {
            gameSessions.delete(key);
            ctx.reply(`⏰ Waktu habis! Jawaban *${label}*: *${q.jawaban || q.answer || q.nama || "-"}*`, { parse_mode: "Markdown" });
          }, 60000),
        });

        await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
        ctx.reply(`🎮 *${label}*\n\n${soal}\n\n_60 detik untuk menjawab!_`, { parse_mode: "Markdown" });
      } catch (err) {
        await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
        ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" });
      }
    });
  }
};
