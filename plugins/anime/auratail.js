module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("auratail", async (ctx) => {
    const query = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!query) return ctx.reply("Kirim query: `/auratail <nama anime>`", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/anime/auratail-search`, {
        params: { apikey: config.vtechApiKey, query },
        responseType: "arraybuffer",
        timeout: 20000,
      });
      const buffer = Buffer.from(data);
      return ctx.replyWithPhoto(new InputFile(buffer, "auratail.jpg"), {
        caption: `🔍 *Auratail:* ${query}`,
        parse_mode: "Markdown",
      });
    } catch (err) {
      return ctx.reply(`❌ Auratail gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
