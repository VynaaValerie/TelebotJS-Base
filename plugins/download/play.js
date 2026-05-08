const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const os = require("os");

function tmpFile(ext) {
  return path.join(os.tmpdir(), `play_${crypto.randomBytes(6).toString("hex")}${ext}`);
}

function ytdlp(videoUrl, outPath) {
  return new Promise((resolve, reject) => {
    const cmd = [
      "yt-dlp",
      "-x",
      "--audio-format", "mp3",
      "--audio-quality", "128K",
      "--no-playlist",
      "--no-warnings",
      "--extractor-args", "youtube:player_client=android,web",
      "--add-header", `"User-Agent:Mozilla/5.0 (Linux; Android 12; Pixel 6) AppleWebKit/537.36"`,
      "-o", `"${outPath}"`,
      `"${videoUrl}"`,
    ].join(" ");

    exec(cmd, { timeout: 120000 }, (err, stdout, stderr) => {
      if (err) return reject(new Error(stderr || err.message));
      resolve();
    });
  });
}

module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("play", async (ctx) => {
    const query = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!query)
      return ctx.reply("🎵 Kirim judul lagu: `/play <judul lagu>`", { parse_mode: "Markdown" });

    const wait = await ctx.reply("🔍 _Mencari lagu..._", { parse_mode: "Markdown" });

    const outPath = tmpFile(".mp3");

    try {
      // Ambil info lagu dari API
      const { data } = await axios.get(`${config.vtechApiUrl}/api/download/ytplay`, {
        params: { apikey: config.vtechApiKey, query },
        timeout: 30000,
      });

      if (!data?.status || !data?.result) throw new Error("Lagu tidak ditemukan");

      const { title, author, duration, views, url } = data.result;

      await ctx.api.editMessageText(ctx.chat.id, wait.message_id, "⬇️ _Mengunduh audio..._", {
        parse_mode: "Markdown",
      }).catch(() => {});

      // Download audio ke tmp file via yt-dlp
      await ytdlp(url, outPath);

      if (!fs.existsSync(outPath)) throw new Error("File audio tidak berhasil diunduh");

      await ctx.api.editMessageText(ctx.chat.id, wait.message_id, "📤 _Mengirim audio..._", {
        parse_mode: "Markdown",
      }).catch(() => {});

      const viewsFormatted = Number(views).toLocaleString("id-ID");
      const caption =
        `🎵 *${title}*\n` +
        `👤 *Artis:* ${author}\n` +
        `⏱ *Durasi:* ${duration}\n` +
        `👁 *Views:* ${viewsFormatted}`;

      await ctx.replyWithAudio(
        new InputFile(outPath, `${title}.mp3`),
        {
          caption,
          parse_mode: "Markdown",
          title,
          performer: author,
        }
      );

      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
    } catch (err) {
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      ctx.reply(`❌ Gagal memutar lagu: \`${err.message}\``, { parse_mode: "Markdown" });
    } finally {
      try { fs.unlinkSync(outPath); } catch {}
    }
  });
};
