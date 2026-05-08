module.exports = ({ bot, config, axios, InputFile }) => {
  const single = [
    { cmd: "tp1917", ep: "1917", label: "1917" },
    { cmd: "tp3dgradient", ep: "3d-gradient", label: "3D Gradient" },
    { cmd: "tpastone", ep: "astone", label: "A-Stone" },
    { cmd: "tphalowen", ep: "hallowen", label: "Halloween" },
  ];
  for (const { cmd, ep, label } of single) {
    bot.command(cmd, async (ctx) => {
      const text = ctx.message.text.split(" ").slice(1).join(" ").trim();
      if (!text) return ctx.reply(`✏️ Format: \`/${cmd} <teks>\``, { parse_mode: "Markdown" });
      const wait = await ctx.reply("✨ _Membuat efek teks..._", { parse_mode: "Markdown" });
      try {
        const { data } = await axios.get(`${config.vtechApiUrl}/api/textpro/${ep}`, { params: { apikey: config.vtechApiKey, text }, responseType: "arraybuffer", timeout: 25000 });
        await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
        return ctx.replyWithPhoto(new InputFile(Buffer.from(data), `${ep}.jpg`), { caption: `✨ *${label}:* ${text}`, parse_mode: "Markdown" });
      } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
    });
  }

  const dual = [
    { cmd: "tpglitchdual", ep: "glitch", label: "Glitch Dual" },
    { cmd: "tpgrafity2dual", ep: "grafity-text2", label: "Grafity 2" },
    { cmd: "tplion", ep: "lion-logo", label: "Lion Logo" },
    { cmd: "tpwolf", ep: "logo-wolf", label: "Wolf Logo" },
    { cmd: "tpwolf2", ep: "logo-wolf2", label: "Wolf Logo 2" },
    { cmd: "tpmarvel2dual", ep: "marvel-logo2", label: "Marvel 2" },
    { cmd: "tpmarvel3dual", ep: "marvel-logo3", label: "Marvel 3" },
    { cmd: "tpninjadual", ep: "ninja-logo", label: "Ninja" },
    { cmd: "tppornhubdual", ep: "pornhub", label: "Pornhub" },
    { cmd: "tpspacedual", ep: "space", label: "Space" },
    { cmd: "tpvintagedual", ep: "vintage", label: "Vintage" },
    { cmd: "tpavengers", ep: "avengers-logo", label: "Avengers" },
  ];
  for (const { cmd, ep, label } of dual) {
    bot.command(cmd, async (ctx) => {
      const args = ctx.message.text.split(" ").slice(1);
      if (args.length < 2) return ctx.reply(`✏️ Format: \`/${cmd} <teks1> <teks2>\``, { parse_mode: "Markdown" });
      const [text, ...rest] = args; const text2 = rest.join(" ");
      const wait = await ctx.reply("✨ _Membuat efek teks..._", { parse_mode: "Markdown" });
      try {
        const { data } = await axios.get(`${config.vtechApiUrl}/api/textpro/${ep}`, { params: { apikey: config.vtechApiKey, text, text2 }, responseType: "arraybuffer", timeout: 25000 });
        await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
        return ctx.replyWithPhoto(new InputFile(Buffer.from(data), `${ep}.jpg`), { caption: `✨ *${label}:* ${text} ${text2}`, parse_mode: "Markdown" });
      } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
    });
  }
};
