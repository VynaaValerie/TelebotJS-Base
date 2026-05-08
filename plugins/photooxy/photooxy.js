module.exports = ({ bot, config, axios, InputFile }) => {
  const single = [
    { cmd: "po3dsummer", ep: "3d-summer", label: "3D Summer" },
    { cmd: "pobeveltext", ep: "bevel-text", label: "Bevel Text" },
    { cmd: "poburnpaper", ep: "burn-paper", label: "Burn Paper" },
    { cmd: "pocarvedwood", ep: "carved-wood", label: "Carved Wood" },
    { cmd: "pocoffecup", ep: "coffe-cup", label: "Coffe Cup" },
    { cmd: "poflaming", ep: "flaming", label: "Flaming" },
    { cmd: "poflowertypography", ep: "flower-typography", label: "Flower Typography" },
    { cmd: "poharrypotter", ep: "harry-potter", label: "Harry Potter" },
    { cmd: "pohellokitty", ep: "hello-kitty", label: "Hello Kitty" },
    { cmd: "poluxury", ep: "luxury", label: "Luxury" },
    { cmd: "pometallic", ep: "metallic", label: "Metallic" },
    { cmd: "pometallic2", ep: "metallic2", label: "Metallic 2" },
    { cmd: "ponaruto", ep: "naruto", label: "Naruto" },
    { cmd: "ponightsky", ep: "night-sky", label: "Night Sky" },
    { cmd: "popictureoflove", ep: "picture-of-love", label: "Picture of Love" },
    { cmd: "poshadowsky", ep: "shadow-sky", label: "Shadow Sky" },
    { cmd: "posmoke", ep: "smoke", label: "Smoke" },
    { cmd: "posweetcandy", ep: "sweet-candy", label: "Sweet Candy" },
    { cmd: "potypography", ep: "typography", label: "Typography" },
    { cmd: "pounderglass", ep: "under-grass", label: "Under Grass" },
    { cmd: "poundwater", ep: "underwater", label: "Underwater" },
    { cmd: "powolfmetal", ep: "wolf-metal", label: "Wolf Metal" },
  ];
  for (const { cmd, ep, label } of single) {
    bot.command(cmd, async (ctx) => {
      const text1 = ctx.message.text.split(" ").slice(1).join(" ").trim();
      if (!text1) return ctx.reply(`✏️ Format: \`/${cmd} <teks>\``, { parse_mode: "Markdown" });
      const wait = await ctx.reply("🎨 _Membuat gambar..._", { parse_mode: "Markdown" });
      try {
        const { data } = await axios.get(`${config.vtechApiUrl}/api/photooxy/${ep}`, { params: { apikey: config.vtechApiKey, text1 }, responseType: "arraybuffer", timeout: 30000 });
        await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
        return ctx.replyWithPhoto(new InputFile(Buffer.from(data), "photooxy.jpg"), { caption: `🎨 *${label}:* ${text1}`, parse_mode: "Markdown" });
      } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
    });
  }

  const dual = [
    { cmd: "pobutterfly", ep: "butterfly", label: "Butterfly" },
    { cmd: "popubg", ep: "pubg", label: "PUBG" },
  ];
  for (const { cmd, ep, label } of dual) {
    bot.command(cmd, async (ctx) => {
      const args = ctx.message.text.split(" ").slice(1);
      if (args.length < 2) return ctx.reply(`✏️ Format: \`/${cmd} <teks1> <teks2>\``, { parse_mode: "Markdown" });
      const [text1, ...rest] = args; const text2 = rest.join(" ");
      const wait = await ctx.reply("🎨 _Membuat gambar..._", { parse_mode: "Markdown" });
      try {
        const { data } = await axios.get(`${config.vtechApiUrl}/api/photooxy/${ep}`, { params: { apikey: config.vtechApiKey, text1, text2 }, responseType: "arraybuffer", timeout: 30000 });
        await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
        return ctx.replyWithPhoto(new InputFile(Buffer.from(data), "photooxy.jpg"), { caption: `🎨 *${label}:* ${text1} ${text2}`, parse_mode: "Markdown" });
      } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
    });
  }
};
