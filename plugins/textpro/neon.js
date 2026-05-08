module.exports = ({ bot, config, axios, InputFile }) => {
  const effects = [
    { cmd: "neonlight", ep: "neon-light", label: "Neon Light" },
    { cmd: "neongreen", ep: "neon-green", label: "Neon Green" },
    { cmd: "neongalaxy", ep: "neon-galaxy", label: "Neon Galaxy" },
  ];
  for (const { cmd, ep, label } of effects) {
    bot.command(cmd, async (ctx) => {
      const text = ctx.message.text.split(" ").slice(1).join(" ").trim();
      if (!text) return ctx.reply(`💡 Kirim teks: \`/${cmd} <teks>\``, { parse_mode: "Markdown" });
      const wait = await ctx.reply("✨ _Membuat efek neon..._", { parse_mode: "Markdown" });
      try {
        const { data } = await axios.get(`${config.vtechApiUrl}/api/textpro/${ep}`, {
          params: { apikey: config.vtechApiKey, text }, responseType: "arraybuffer", timeout: 20000,
        });
        await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
        return ctx.replyWithPhoto(new InputFile(Buffer.from(data), "neon.jpg"), {
          caption: `💡 *${label}:* ${text}`, parse_mode: "Markdown",
        });
      } catch (err) {
        await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
        ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" });
      }
    });
  }
};
