const sessions = new Map();
module.exports = ({ bot, config, axios }) => {
  bot.command("asahotak", async (ctx) => {
    const wait = await ctx.reply("🧠 _Memuat soal..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/game/asahotak`, {
        params: { apikey: config.vtechApiKey }, timeout: 15000,
      });
      const q = data?.result || data?.data || data;
      sessions.set(ctx.chat.id, { jawaban: (q.jawaban || q.answer || "").toLowerCase(), timeout: setTimeout(() => {
        sessions.delete(ctx.chat.id);
        ctx.reply(`⏰ Waktu habis! Jawaban: *${q.jawaban || q.answer}*`, { parse_mode: "Markdown" });
      }, 30000) });
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      ctx.reply(
        `🧠 *Asah Otak!*\n\n${q.soal || q.question || JSON.stringify(q)}\n\n` +
        `_Kamu punya 30 detik untuk menjawab!_`,
        { parse_mode: "Markdown" }
      );
    } catch (err) {
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });

  bot.on("message:text", async (ctx, next) => {
    const session = sessions.get(ctx.chat.id);
    if (!session) return next();
    const teks = ctx.message.text.toLowerCase().trim();
    if (teks === session.jawaban) {
      clearTimeout(session.timeout);
      sessions.delete(ctx.chat.id);
      return ctx.reply(`✅ *Benar!* Jawaban: *${session.jawaban}*\n🎉 Selamat ${ctx.from.first_name}!`, { parse_mode: "Markdown" });
    }
    return next();
  });
};
