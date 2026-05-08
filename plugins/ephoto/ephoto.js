module.exports = ({ bot, config, axios, InputFile }) => {
  const list = [
    { cmd: "epblackpink2", ep: "blackpink2", label: "Blackpink 2" },
    { cmd: "epblueneon", ep: "blueneon", label: "Blue Neon" },
    { cmd: "epcloth", ep: "cloth", label: "Cloth" },
    { cmd: "epcloud", ep: "cloud", label: "Cloud" },
    { cmd: "epcoverpubg", ep: "coverpubg", label: "Cover PUBG" },
    { cmd: "epartiga", ep: "eraser", label: "Eraser" },
    { cmd: "epfbgold", ep: "fbgoldbutton", label: "FB Gold Button" },
    { cmd: "epfbsilver", ep: "fbsilverbutton", label: "FB Silver Button" },
    { cmd: "epglasses", ep: "glasses", label: "Glasses" },
    { cmd: "epgrafitti", ep: "grafitti", label: "Grafitti" },
    { cmd: "epgreenbrush", ep: "greenbrush", label: "Green Brush" },
    { cmd: "ephoror", ep: "horor", label: "Horor" },
    { cmd: "epiggold", ep: "iggoldbutton", label: "IG Gold Button" },
    { cmd: "epigsilver", ep: "igsilverbutton", label: "IG Silver Button" },
    { cmd: "epincandescent", ep: "incandescent", label: "Incandescent" },
    { cmd: "epletters", ep: "letters", label: "Letters" },
    { cmd: "eppapercut", ep: "papercut", label: "Papercut" },
    { cmd: "eppig", ep: "pig", label: "Pig" },
    { cmd: "epsunlight", ep: "sunlight", label: "Sunlight" },
    { cmd: "eptelevisi", ep: "televisi", label: "Televisi" },
    { cmd: "eptwtgold", ep: "twtgoldbutton", label: "Twitter Gold Button" },
    { cmd: "eptwtsilver", ep: "twtsilverbutton", label: "Twitter Silver Button" },
    { cmd: "eptypography", ep: "typography", label: "Typography" },
    { cmd: "eptypography2", ep: "typography2", label: "Typography 2" },
    { cmd: "epytgold", ep: "ytgoldbutton", label: "YouTube Gold Button" },
    { cmd: "epytsilver", ep: "ytsilverbutton", label: "YouTube Silver Button" },
  ];
  for (const { cmd, ep, label } of list) {
    bot.command(cmd, async (ctx) => {
      const text = ctx.message.text.split(" ").slice(1).join(" ").trim();
      if (!text) return ctx.reply(`✏️ Format: \`/${cmd} <teks>\``, { parse_mode: "Markdown" });
      const wait = await ctx.reply("🎨 _Membuat gambar..._", { parse_mode: "Markdown" });
      try {
        const { data } = await axios.get(`${config.vtechApiUrl}/api/ephoto/${ep}`, { params: { apikey: config.vtechApiKey, text }, responseType: "arraybuffer", timeout: 25000 });
        await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
        return ctx.replyWithPhoto(new InputFile(Buffer.from(data), "ephoto.jpg"), { caption: `🖼 *${label}:* ${text}`, parse_mode: "Markdown" });
      } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
    });
  }
};
