const { getPhotoUrl } = require("../../utils/mediaHelper");
module.exports = ({ bot, config, axios, InputFile }) => {
  const single = [
    { cmd: "circle", ep: "circle", label: "Circle" },
    { cmd: "darkness", ep: "darkness", label: "Darkness", extra: { amount: 80 } },
  ];
  for (const { cmd, ep, label, extra = {} } of single) {
    bot.command(cmd, async (ctx) => {
      const wait = await ctx.reply("⏳ _Memproses..._", { parse_mode: "Markdown" });
      try {
        const image = await getPhotoUrl(ctx, config);
        if (!image) return ctx.api.editMessageText(ctx.chat.id, wait.message_id, "❌ Balas/kirim foto dulu!", { parse_mode: "Markdown" });
        const { data } = await axios.get(`${config.vtechApiUrl}/api/canvas/${ep}`, { params: { apikey: config.vtechApiKey, image, ...extra }, responseType: "arraybuffer", timeout: 30000 });
        await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
        return ctx.replyWithPhoto(new InputFile(Buffer.from(data), `${ep}.jpg`), { caption: `🖼 *${label}*`, parse_mode: "Markdown" });
      } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
    });
  }

  bot.command("batslap", async (ctx) => {
    const wait = await ctx.reply("⏳ _Memproses..._", { parse_mode: "Markdown" });
    try {
      const image1 = await getPhotoUrl(ctx, config);
      if (!image1) return ctx.api.editMessageText(ctx.chat.id, wait.message_id, "❌ Kirim foto (yang menampar) dan reply foto lain (yang ditampar)!", { parse_mode: "Markdown" });
      const replyPhoto = ctx.message.reply_to_message?.photo;
      let image2 = image1;
      if (replyPhoto?.length) {
        const f = await ctx.api.getFile(replyPhoto[replyPhoto.length - 1].file_id);
        image2 = `https://api.telegram.org/file/bot${config.token}/${f.file_path}`;
      }
      const { data } = await axios.get(`${config.vtechApiUrl}/api/canvas/batslap`, { params: { apikey: config.vtechApiKey, image1, image2 }, responseType: "arraybuffer", timeout: 30000 });
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      return ctx.replyWithPhoto(new InputFile(Buffer.from(data), "batslap.jpg"), { caption: "👋 *Batslap!*", parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("kiss", async (ctx) => {
    const wait = await ctx.reply("💋 _Memproses..._", { parse_mode: "Markdown" });
    try {
      const image1 = await getPhotoUrl(ctx, config);
      if (!image1) return ctx.api.editMessageText(ctx.chat.id, wait.message_id, "❌ Kirim foto dan reply foto pasangan!", { parse_mode: "Markdown" });
      const replyPhoto = ctx.message.reply_to_message?.photo;
      let image2 = image1;
      if (replyPhoto?.length) {
        const f = await ctx.api.getFile(replyPhoto[replyPhoto.length - 1].file_id);
        image2 = `https://api.telegram.org/file/bot${config.token}/${f.file_path}`;
      }
      const { data } = await axios.get(`${config.vtechApiUrl}/api/canvas/kiss`, { params: { apikey: config.vtechApiKey, image1, image2 }, responseType: "arraybuffer", timeout: 30000 });
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      return ctx.replyWithPhoto(new InputFile(Buffer.from(data), "kiss.jpg"), { caption: "💋 *Kiss!*", parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("spotifycard", async (ctx) => {
    const args = ctx.message.text.split(" ").slice(1).join(" ").split("|");
    if (args.length < 2) return ctx.reply("🎵 Format: `/spotifycard <judul> | <artis>`", { parse_mode: "Markdown" });
    const [title, artist] = args.map(s => s.trim());
    const wait = await ctx.reply("🎵 _Membuat Spotify card..._", { parse_mode: "Markdown" });
    try {
      const image = await getPhotoUrl(ctx, config) || "https://i.ibb.co/1s8T3sY/48f7ce63c7aa.jpg";
      const { data } = await axios.get(`${config.vtechApiUrl}/api/canvas/spotify`, { params: { apikey: config.vtechApiKey, title, artist, start: 60000, end: 200000, image, border: "#1DB954" }, responseType: "arraybuffer", timeout: 30000 });
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      return ctx.replyWithPhoto(new InputFile(Buffer.from(data), "spotify.jpg"), { caption: `🎵 *Spotify Card*\n🎶 ${title} — ${artist}`, parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("xnxxmeme", async (ctx) => {
    const args = ctx.message.text.split(" ").slice(1).join(" ").split("|");
    if (args.length < 2) return ctx.reply("😂 Format: `/xnxxmeme <judul> | url_gambar`\nAtau reply foto: `/xnxxmeme <judul>`", { parse_mode: "Markdown" });
    const title = args[0].trim();
    const wait = await ctx.reply("⏳ _Membuat meme..._", { parse_mode: "Markdown" });
    try {
      const image = args[1]?.trim() || await getPhotoUrl(ctx, config) || "";
      const { data } = await axios.get(`${config.vtechApiUrl}/api/canvas/xnxx`, { params: { apikey: config.vtechApiKey, title, image }, responseType: "arraybuffer", timeout: 30000 });
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      return ctx.replyWithPhoto(new InputFile(Buffer.from(data), "xnxx.jpg"), { caption: `😂 *${title}*`, parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });
};
