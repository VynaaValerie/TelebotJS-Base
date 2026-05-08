const { getPhotoUrl } = require("../../utils/mediaHelper");
module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("ttp", async (ctx) => {
    const text = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!text) return ctx.reply("✏️ Format: `/ttp <teks>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("✨ _Membuat TTP..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/maker/ttp`, { params: { apikey: config.vtechApiKey, text }, responseType: "arraybuffer", timeout: 30000 });
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      return ctx.replyWithPhoto(new InputFile(Buffer.from(data), "ttp.png"), { caption: `✨ *TTP:* ${text}`, parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("text2img", async (ctx) => {
    const text = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!text) return ctx.reply("🎨 Format: `/text2img <prompt>`\nContoh: `/text2img cat running`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("🎨 _Membuat gambar dari teks..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/maker/text2img`, { params: { apikey: config.vtechApiKey, text }, responseType: "arraybuffer", timeout: 60000 });
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      return ctx.replyWithPhoto(new InputFile(Buffer.from(data), "t2i.jpg"), { caption: `🎨 *Text to Image:* ${text}`, parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  const photoStyles = [
    { cmd: "jadicyberpunk", ep: "jadicyberpunk", label: "Cyberpunk" },
    { cmd: "jadihijab", ep: "jadihijab", label: "Hijab" },
    { cmd: "jadihitam", ep: "jadihitam", label: "Hitam Putih" },
    { cmd: "jadipixelart", ep: "jadipixelart", label: "Pixel Art" },
    { cmd: "jadiputih", ep: "jadiputih", label: "Putih" },
    { cmd: "jadivangogh", ep: "jadivangogh", label: "Van Gogh" },
    { cmd: "jadicomicbook", ep: "jadicomicbook", label: "Comic Book" },
  ];
  for (const { cmd, ep, label } of photoStyles) {
    bot.command(cmd, async (ctx) => {
      const wait = await ctx.reply(`🎨 _Mengubah foto jadi ${label}..._`, { parse_mode: "Markdown" });
      try {
        const url = await getPhotoUrl(ctx, config);
        if (!url) return ctx.api.editMessageText(ctx.chat.id, wait.message_id, "❌ Balas/kirim foto dulu!", { parse_mode: "Markdown" });
        const { data } = await axios.get(`${config.vtechApiUrl}/api/maker/${ep}`, { params: { apikey: config.vtechApiKey, url }, responseType: "arraybuffer", timeout: 60000 });
        await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
        return ctx.replyWithPhoto(new InputFile(Buffer.from(data), `${ep}.jpg`), { caption: `🎨 *Jadi ${label}*`, parse_mode: "Markdown" });
      } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
    });
  }

  bot.command("tofigure", async (ctx) => {
    const wait = await ctx.reply("🗿 _Mengubah foto jadi figure..._", { parse_mode: "Markdown" });
    try {
      const url = await getPhotoUrl(ctx, config);
      if (!url) return ctx.api.editMessageText(ctx.chat.id, wait.message_id, "❌ Balas/kirim foto dulu!", { parse_mode: "Markdown" });
      const { data } = await axios.get(`${config.vtechApiUrl}/api/maker/tofigure`, { params: { apikey: config.vtechApiKey, url }, responseType: "arraybuffer", timeout: 60000 });
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      return ctx.replyWithPhoto(new InputFile(Buffer.from(data), "figure.jpg"), { caption: "🗿 *To Figure*", parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("quotesvideo", async (ctx) => {
    const text = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!text) return ctx.reply("🎬 Format: `/quotesvideo <teks quote>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("🎬 _Membuat quotes video..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/maker/quotesvideo`, { params: { apikey: config.vtechApiKey, url: "https://files.catbox.moe/x2ftud.mp4", text }, responseType: "arraybuffer", timeout: 60000 });
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      return ctx.replyWithVideo(new InputFile(Buffer.from(data), "quotes.mp4"), { caption: `🎬 *Quotes Video*\n\n_${text}_`, parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });
};
