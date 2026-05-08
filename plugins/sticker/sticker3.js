module.exports = ({ bot, config, axios, InputFile }) => {
  const list = [
    { cmd: "stickamong", ep: "among", label: "Among Us" },
    { cmd: "stickanime", ep: "anime", label: "Anime" },
    { cmd: "stickanimegif", ep: "animegif", label: "Anime GIF" },
    { cmd: "stickbucin", ep: "bucin", label: "Bucin" },
    { cmd: "stickchat", ep: "chat", label: "Chat" },
    { cmd: "stickdoge", ep: "doge", label: "Doge" },
    { cmd: "stickgojo", ep: "gojosatoru", label: "Gojo Satoru" },
    { cmd: "stickpatrick", ep: "patrick", label: "Patrick" },
    { cmd: "stickpatrickgif", ep: "patrickgif", label: "Patrick GIF" },
    { cmd: "stickspongebob", ep: "spongebob", label: "SpongeBob" },
    { cmd: "stickrandom", ep: "random", label: "Random Sticker" },
  ];
  for (const { cmd, ep, label } of list) {
    bot.command(cmd, async (ctx) => {
      try {
        const { data } = await axios.get(`${config.vtechApiUrl}/api/sticker/${ep}`, {
          params: { apikey: config.vtechApiKey }, responseType: "arraybuffer", timeout: 20000,
        });
        return ctx.replyWithPhoto(new InputFile(Buffer.from(data), `${ep}.jpg`), {
          caption: `🎭 *${label}*`, parse_mode: "Markdown",
        });
      } catch (err) { ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
    });
  }
};
