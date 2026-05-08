const { getPhotoUrl } = require("../../utils/mediaHelper");
module.exports = ({ bot, config, axios, InputFile }) => {
  const photoStyles = [
    { cmd: "jadighibli", ep: "jadighibili", label: "Ghibli" },
    { cmd: "jadidisney", ep: "jadidisney", label: "Disney" },
    { cmd: "jadigta", ep: "jadigta", label: "GTA Style" },
    { cmd: "jadipixar", ep: "jadipixar", label: "Pixar" },
    { cmd: "jadizombie", ep: "jadizombie", label: "Zombie" },
    { cmd: "jadicartoon", ep: "jadicartoon", label: "Cartoon" },
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

  const figureList = [
    { cmd: "tofigurev2", ep: "tofigurev2", label: "To Figure v2" },
    { cmd: "tofigurev3", ep: "tofigurev3", label: "To Figure v3" },
  ];
  for (const { cmd, ep, label } of figureList) {
    bot.command(cmd, async (ctx) => {
      const wait = await ctx.reply(`🗿 _Mengubah foto jadi ${label}..._`, { parse_mode: "Markdown" });
      try {
        const url = await getPhotoUrl(ctx, config);
        if (!url) return ctx.api.editMessageText(ctx.chat.id, wait.message_id, "❌ Balas/kirim foto dulu!", { parse_mode: "Markdown" });
        const { data } = await axios.get(`${config.vtechApiUrl}/api/maker/${ep}`, { params: { apikey: config.vtechApiKey, url }, responseType: "arraybuffer", timeout: 60000 });
        await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
        return ctx.replyWithPhoto(new InputFile(Buffer.from(data), `${ep}.jpg`), { caption: `🗿 *${label}*`, parse_mode: "Markdown" });
      } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
    });
  }

  bot.command("makertextpro", async (ctx) => {
    const args = ctx.message.text.split(" ").slice(1);
    if (args.length < 3) return ctx.reply("🖼 Format: `/makertextpro <url textpro.me> <teks1> <teks2>`", { parse_mode: "Markdown" });
    const url = args[0]; const text1 = args[1]; const text2 = args.slice(2).join(" ");
    const wait = await ctx.reply("🎨 _Membuat gambar TextPro..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/maker/textpro`, { params: { apikey: config.vtechApiKey, url, text1, text2 }, responseType: "arraybuffer", timeout: 30000 });
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      return ctx.replyWithPhoto(new InputFile(Buffer.from(data), "textpro.jpg"), { caption: `🎨 *TextPro Custom*\n${text1} ${text2}`, parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });
};
