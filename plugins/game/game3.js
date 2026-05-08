module.exports = ({ bot, config, axios, InputFile, gameSessions }) => {
  bot.command("tebakgambar", async (ctx) => {
    const wait = await ctx.reply("🎮 _Memuat Tebak Gambar..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/game/tebakgambar`, {
        params: { apikey: config.vtechApiKey }, timeout: 15000,
      });
      const q = data?.result || data?.data || data;
      const jawaban = (q.jawaban || q.answer || q.nama || "").toString().toLowerCase();
      const imgUrl = q.image || q.img || q.url || q.gambar;

      const key = `${ctx.chat.id}:tebakgambar`;
      const prev = gameSessions.get(key);
      if (prev) clearTimeout(prev.timeout);

      gameSessions.set(key, {
        jawaban,
        timeout: setTimeout(() => {
          gameSessions.delete(key);
          ctx.reply(`⏰ Waktu habis! Jawaban: *${q.jawaban || q.answer || q.nama || "-"}*`, { parse_mode: "Markdown" });
        }, 60000),
      });

      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});

      if (imgUrl) {
        const imgRes = await axios.get(imgUrl, { responseType: "arraybuffer", timeout: 30000 });
        return ctx.replyWithPhoto(new InputFile(Buffer.from(imgRes.data), "tebakgambar.jpg"), {
          caption: `🎮 *Tebak Gambar!*\n\n_Gambar apa ini? (60 detik)_`,
          parse_mode: "Markdown",
        });
      }
      ctx.reply(`🎮 *Tebak Gambar*\n\n${q.soal || q.pertanyaan || JSON.stringify(q).slice(0, 300)}\n\n_60 detik!_`, { parse_mode: "Markdown" });
    } catch (err) {
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });

  const gameList2 = [
    { cmd: "tebakemoji", ep: "tebakemoji", label: "Tebak Emoji" },
    { cmd: "tebakkata",  ep: "tebakkata",  label: "Tebak Kata" },
    { cmd: "tekateki",   ep: "tekateki",   label: "Teka-Teki" },
    { cmd: "asahotak",   ep: "asahotak",   label: "Asa Hotak" },
    { cmd: "mathgame",   ep: "math",       label: "Math Quiz" },
  ];

  for (const { cmd, ep, label } of gameList2) {
    bot.command(cmd, async (ctx) => {
      const wait = await ctx.reply(`🎮 _Memuat ${label}..._`, { parse_mode: "Markdown" });
      try {
        const { data } = await axios.get(`${config.vtechApiUrl}/api/game/${ep}`, {
          params: { apikey: config.vtechApiKey }, timeout: 15000,
        });
        const q = data?.result || data?.data || data;
        const jawaban = (q.jawaban || q.answer || q.kata || "").toString().toLowerCase();
        const soal = q.soal || q.pertanyaan || q.question || q.emoji || q.kata_acak || q.text || JSON.stringify(q).slice(0, 200);

        const key = `${ctx.chat.id}:${cmd}`;
        const prev = gameSessions.get(key);
        if (prev) clearTimeout(prev.timeout);

        gameSessions.set(key, {
          jawaban,
          timeout: setTimeout(() => {
            gameSessions.delete(key);
            ctx.reply(`⏰ Waktu habis! Jawaban: *${jawaban || "-"}*`, { parse_mode: "Markdown" });
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
