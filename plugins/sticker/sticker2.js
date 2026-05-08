module.exports = ({ bot, config, axios, InputFile }) => {
  const list = [
    { cmd: "stickdinokuning", ep: "dinokuning", label: "Dino Kuning" },
    { cmd: "stickgura", ep: "gura", label: "Gura" },
    { cmd: "stickkawan", ep: "kawanspongebob", label: "Kawan SpongeBob" },
    { cmd: "stickmanusialidi", ep: "manusialidi", label: "Manusia Lidi" },
    { cmd: "stickmukalu", ep: "mukalu", label: "Muka Lu" },
    { cmd: "stickpaimon", ep: "paimon", label: "Paimon" },
    { cmd: "stickpentol", ep: "pentol", label: "Pentol" },
    { cmd: "stickrabbit", ep: "rabbit", label: "Rabbit" },
    { cmd: "stickdadu", ep: "dadu", label: "Dadu" },
  ];
  for (const { cmd, ep, label } of list) {
    bot.command(cmd, async (ctx) => {
      try {
        const { data } = await axios.get(`${config.vtechApiUrl}/api/sticker/${ep}`, { params: { apikey: config.vtechApiKey }, responseType: "arraybuffer", timeout: 20000 });
        return ctx.replyWithPhoto(new InputFile(Buffer.from(data), `${ep}.jpg`), { caption: `🎭 *${label}*`, parse_mode: "Markdown" });
      } catch (err) { ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
    });
  }
};
