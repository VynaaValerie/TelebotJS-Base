const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const os = require("os");
const { getPhotoUrl } = require("../../utils/mediaHelper");

function tmpFile(ext) {
  return path.join(os.tmpdir(), `brat_${crypto.randomBytes(6).toString("hex")}${ext}`);
}

function ffmpegRun(cmd) {
  return new Promise((resolve, reject) => {
    exec(cmd, (err, stdout, stderr) => {
      if (err) return reject(new Error(stderr || err.message));
      resolve();
    });
  });
}

module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("brat", async (ctx) => {
    const text = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!text) return ctx.reply("Kirim teks: `/brat <teks>`\nContoh: `/brat Love`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("🖼 _Membuat stiker brat..._", { parse_mode: "Markdown" });
    const imgPath = tmpFile(".png"); const webpPath = tmpFile(".webp");
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/maker/brat`, { params: { apikey: config.vtechApiKey, text }, responseType: "arraybuffer", timeout: 30000 });
      fs.writeFileSync(imgPath, Buffer.from(data));
      await ffmpegRun(`ffmpeg -y -i "${imgPath}" -vf "scale=512:512:force_original_aspect_ratio=decrease,pad=512:512:(ow-iw)/2:(oh-ih)/2:white" -c:v libwebp -lossless 1 -preset default -an "${webpPath}"`);
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      await ctx.replyWithSticker(new InputFile(webpPath, "brat.webp"));
    } catch (err) {
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      ctx.reply(`❌ Gagal buat stiker: \`${err.message}\``, { parse_mode: "Markdown" });
    } finally { [imgPath, webpPath].forEach((f) => { try { fs.unlinkSync(f); } catch {} }); }
  });

  bot.command("bratgif", async (ctx) => {
    const text = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!text) return ctx.reply("Kirim teks: `/bratgif <teks>`\nContoh: `/bratgif Love`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("🎞 _Membuat stiker animasi brat..._", { parse_mode: "Markdown" });
    const vidPath = tmpFile(".mp4"); const webpPath = tmpFile(".webp");
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/maker/brat-video`, { params: { apikey: config.vtechApiKey, text }, responseType: "arraybuffer", timeout: 60000 });
      fs.writeFileSync(vidPath, Buffer.from(data));
      await ffmpegRun(`ffmpeg -y -i "${vidPath}" -vf "scale=512:512:force_original_aspect_ratio=decrease,pad=512:512:(ow-iw)/2:(oh-ih)/2:black@0,fps=15" -c:v libwebp -lossless 0 -quality 80 -loop 0 -preset default -an -vsync 0 "${webpPath}"`);
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      await ctx.replyWithSticker(new InputFile(webpPath, "brat.webp"));
    } catch (err) {
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      ctx.reply(`❌ Gagal buat stiker animasi: \`${err.message}\``, { parse_mode: "Markdown" });
    } finally { [vidPath, webpPath].forEach((f) => { try { fs.unlinkSync(f); } catch {} }); }
  });

  bot.command("generatelirik", async (ctx) => {
    const prompt = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!prompt) return ctx.reply("🎵 Format: `/generatelirik <prompt>`\nContoh: `/generatelirik betabotz,beraksiii`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("🎵 _Membuat lirik..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/maker/generateLirik`, { params: { apikey: config.vtechApiKey, prompt }, responseType: "arraybuffer", timeout: 30000 });
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      return ctx.replyWithPhoto(new InputFile(Buffer.from(data), "lirik.jpg"), { caption: `🎵 *Generate Lirik*`, parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("iqc", async (ctx) => {
    const text = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!text) return ctx.reply("🧠 Format: `/iqc <teks>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("🧠 _Membuat IQC..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/maker/iqc`, { params: { apikey: config.vtechApiKey, text }, responseType: "arraybuffer", timeout: 30000 });
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      return ctx.replyWithPhoto(new InputFile(Buffer.from(data), "iqc.jpg"), { caption: `🧠 *IQC:* ${text}`, parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("jadianime3d", async (ctx) => {
    const wait = await ctx.reply("🎨 _Mengubah foto jadi Anime 3D..._", { parse_mode: "Markdown" });
    try {
      const url = await getPhotoUrl(ctx, config);
      if (!url) return ctx.api.editMessageText(ctx.chat.id, wait.message_id, "❌ Balas/kirim foto dulu!", { parse_mode: "Markdown" });
      const { data } = await axios.get(`${config.vtechApiUrl}/api/maker/jadianime3d`, { params: { apikey: config.vtechApiKey, url }, responseType: "arraybuffer", timeout: 60000 });
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      return ctx.replyWithPhoto(new InputFile(Buffer.from(data), "anime3d.jpg"), { caption: "🎨 *Jadi Anime 3D*", parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("jadisdmtinggi", async (ctx) => {
    const wait = await ctx.reply("🤓 _Mengubah foto jadi SDM Tinggi..._", { parse_mode: "Markdown" });
    try {
      const url = await getPhotoUrl(ctx, config);
      if (!url) return ctx.api.editMessageText(ctx.chat.id, wait.message_id, "❌ Balas/kirim foto dulu!", { parse_mode: "Markdown" });
      const { data } = await axios.get(`${config.vtechApiUrl}/api/maker/jadisdmtinggi`, { params: { apikey: config.vtechApiKey, url }, responseType: "arraybuffer", timeout: 60000 });
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      return ctx.replyWithPhoto(new InputFile(Buffer.from(data), "sdmtinggi.jpg"), { caption: "🤓 *Jadi SDM Tinggi*", parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });
};
