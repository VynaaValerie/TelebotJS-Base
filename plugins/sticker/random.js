module.exports = ({ bot, config, axios, InputFile }) => {
  const list = [
    { cmd: "stickrandom", endpoint: "/api/sticker/random", label: "Random" },
    { cmd: "stickanime", endpoint: "/api/sticker/anime", label: "Anime" },
    { cmd: "stickdoge", endpoint: "/api/sticker/doge", label: "Doge" },
    { cmd: "stickspongebob", endpoint: "/api/sticker/spongebob", label: "SpongeBob" },
    { cmd: "stickpatrick", endpoint: "/api/sticker/patrick", label: "Patrick" },
    { cmd: "stickbucin", endpoint: "/api/sticker/bucin", label: "Bucin" },
    { cmd: "stickgojo", endpoint: "/api/sticker/gojosatoru", label: "Gojo Satoru" },
    { cmd: "stickamong", endpoint: "/api/sticker/among", label: "Among Us" },
  ];
  for (const { cmd, endpoint, label } of list) {
    bot.command(cmd, async (ctx) => {
      try {
        const { data } = await axios.get(`${config.vtechApiUrl}${endpoint}`, {
          params: { apikey: config.vtechApiKey }, responseType: "arraybuffer", timeout: 20000,
        });
        return ctx.replyWithPhoto(new InputFile(Buffer.from(data), "sticker.jpg"), {
          caption: `🎭 *${label}*`, parse_mode: "Markdown",
        });
      } catch (err) {
        ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" });
      }
    });
  }
};
