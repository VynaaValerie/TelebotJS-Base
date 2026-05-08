module.exports = ({ bot, config, axios, InputFile }) => {
  const langs = { id: "tts-id", en: "tts-en", ja: "tts-ja", ko: "tts-ko", zh: "tts-zh",
    de: "tts-de", fr: "tts-fr", hi: "tts-hi", th: "tts-th", ru: "tts-ru", it: "tts-it", fil: "tts-fil" };

  bot.command("tts", async (ctx) => {
    const args = ctx.message.text.split(" ").slice(1);
    if (args.length < 2) return ctx.reply(
      "🔊 Format: `/tts <bahasa> <teks>`\nBahasa: `id en ja ko de fr hi th ru it fil`\nContoh: `/tts id Halo semuanya`",
      { parse_mode: "Markdown" }
    );
    const lang = args[0].toLowerCase();
    const text1 = args.slice(1).join(" ");
    const endpoint = langs[lang];
    if (!endpoint) return ctx.reply(`❌ Bahasa tidak didukung! Pilihan: ${Object.keys(langs).join(", ")}`, { parse_mode: "Markdown" });
    const wait = await ctx.reply("🔊 _Mengubah teks ke suara..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/sound/${endpoint}`, {
        params: { apikey: config.vtechApiKey, text1 }, responseType: "arraybuffer", timeout: 20000,
      });
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      return ctx.replyWithVoice(new InputFile(Buffer.from(data), "tts.ogg"), {
        caption: `🔊 *TTS [${lang.toUpperCase()}]:* ${text1.slice(0, 100)}`, parse_mode: "Markdown",
      });
    } catch (err) {
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
