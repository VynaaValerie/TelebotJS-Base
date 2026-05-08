module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("tiktok", async (ctx) => {
    const query = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!query) return ctx.reply("Kirim query: `/tiktok <kata kunci>`", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/asupan/tiktok`, {
        params: { apikey: config.vtechApiKey, query },
        responseType: "arraybuffer",
        timeout: 30000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithVideo(new InputFile(buffer, "tiktok.mp4"), {
        caption: `🎵 *TikTok:* ${query}`,
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ TikTok gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
