module.exports = ({ bot, config, axios, InputFile }) => {
  const list = [
    { cmd: "eapple", ep: "apple", label: "Apple" },
    { cmd: "edocomo", ep: "docomo", label: "Docomo" },
    { cmd: "eemojipedia", ep: "emojipedia", label: "Emojipedia" },
    { cmd: "efacebook", ep: "facebook", label: "Facebook" },
    { cmd: "egoogle", ep: "google", label: "Google" },
    { cmd: "ehtc", ep: "htc", label: "HTC" },
    { cmd: "ejoypixels", ep: "joypixels", label: "Joypixels" },
    { cmd: "ekddi", ep: "kddi", label: "KDDI" },
    { cmd: "elg", ep: "lg", label: "LG" },
    { cmd: "emicrosoft", ep: "microsoft", label: "Microsoft" },
    { cmd: "emozilla", ep: "mozilla", label: "Mozilla" },
    { cmd: "eopenmoji", ep: "openmoji", label: "Openmoji" },
    { cmd: "esamsung", ep: "samsung", label: "Samsung" },
    { cmd: "eskype", ep: "skype", label: "Skype" },
    { cmd: "esoftbank", ep: "softbank", label: "Softbank" },
    { cmd: "etwitter", ep: "twitter", label: "Twitter" },
    { cmd: "ewhatsapp", ep: "whatsapp", label: "WhatsApp" },
  ];
  for (const { cmd, ep, label } of list) {
    bot.command(cmd, async (ctx) => {
      const emoji = ctx.message.text.split(" ").slice(1).join(" ").trim();
      if (!emoji) return ctx.reply(`🎨 Format: \`/${cmd} 😊\``, { parse_mode: "Markdown" });
      try {
        const { data } = await axios.get(`${config.vtechApiUrl}/api/emoji/${ep}`, { params: { apikey: config.vtechApiKey, emoji }, responseType: "arraybuffer", timeout: 20000 });
        return ctx.replyWithPhoto(new InputFile(Buffer.from(data), "emoji.png"), { caption: `${emoji} *${label}*`, parse_mode: "Markdown" });
      } catch (err) { ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
    });
  }
  bot.command("emojimix2", async (ctx) => {
    const args = ctx.message.text.split(" ").slice(1);
    if (args.length < 2) return ctx.reply("🎨 Format: `/emojimix2 😊 😂`", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/emoji/emojimix`, { params: { apikey: config.vtechApiKey, emoji1: args[0], emoji2: args[1] }, responseType: "arraybuffer", timeout: 20000 });
      return ctx.replyWithPhoto(new InputFile(Buffer.from(data), "mix.png"), { caption: `🎨 *Emoji Mix:* ${args[0]} + ${args[1]}`, parse_mode: "Markdown" });
    } catch (err) { ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });
};
