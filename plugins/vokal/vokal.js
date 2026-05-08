module.exports = ({ bot, config, axios }) => {
  const list = [
    { cmd: "halah", ep: "halah" }, { cmd: "heleh", ep: "heleh" },
    { cmd: "hilih", ep: "hilih" }, { cmd: "holoh", ep: "holoh" },
    { cmd: "huluh", ep: "huluh" },
  ];
  for (const { cmd, ep } of list) {
    bot.command(cmd, async (ctx) => {
      const text = ctx.message.text.split(" ").slice(1).join(" ").trim()
        || ctx.message.reply_to_message?.text;
      if (!text) return ctx.reply(`✏️ Format: \`/${cmd} <teks>\``, { parse_mode: "Markdown" });
      try {
        const { data } = await axios.get(`${config.vtechApiUrl}/api/vokal/${ep}`, {
          params: { apikey: config.vtechApiKey, text }, timeout: 10000,
        });
        const r = data?.result || data?.data || data;
        const hasil = r?.result || r?.text || r?.output || r?.kata || JSON.stringify(r);
        ctx.reply(`🔤 *${ep.toUpperCase()}:*\n\n\`${hasil}\``, { parse_mode: "Markdown" });
      } catch (err) { ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
    });
  }
};
