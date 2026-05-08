module.exports = ({ bot, config, axios, InputFile }) => {
  const list = [
    { cmd: "ahegao", ep: "ahegao" }, { cmd: "hentai", ep: "hentai" },
    { cmd: "neko", ep: "neko" }, { cmd: "neko2", ep: "neko2" },
    { cmd: "ass", ep: "ass" }, { cmd: "bdsm", ep: "bdsm" },
    { cmd: "blowjob", ep: "blowjob" }, { cmd: "cuckold", ep: "cuckold" },
    { cmd: "cum", ep: "cum" }, { cmd: "ero", ep: "ero" },
    { cmd: "femdom", ep: "femdom" }, { cmd: "foot", ep: "foot" },
    { cmd: "gangbang", ep: "gangbang" }, { cmd: "nsfwgay", ep: "gay" },
    { cmd: "manga", ep: "manga" }, { cmd: "masturbation", ep: "masturbation" },
    { cmd: "orgy", ep: "orgy" }, { cmd: "panties", ep: "panties" },
    { cmd: "pussy", ep: "pussy" }, { cmd: "tentacles", ep: "tentacles" },
    { cmd: "thighs", ep: "thighs" }, { cmd: "nsfwyuri", ep: "yuri" },
    { cmd: "zettai", ep: "zettai" }, { cmd: "jahy", ep: "jahy" },
    { cmd: "glasses", ep: "glasses" },
  ];
  for (const { cmd, ep } of list) {
    bot.command(cmd, async (ctx) => {
      try {
        const { data } = await axios.get(`${config.vtechApiUrl}/api/nsfw/${ep}`, {
          params: { apikey: config.vtechApiKey }, responseType: "arraybuffer", timeout: 20000,
        });
        return ctx.replyWithPhoto(new InputFile(Buffer.from(data), `${ep}.jpg`), {
          caption: `🔞 *${ep.charAt(0).toUpperCase() + ep.slice(1)}*`, parse_mode: "Markdown",
        });
      } catch (err) { ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
    });
  }
  bot.command("nsfwgifs", async (ctx) => {
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/nsfw/gifs`, {
        params: { apikey: config.vtechApiKey }, responseType: "arraybuffer", timeout: 20000,
      });
      return ctx.replyWithVideo(new InputFile(Buffer.from(data), "nsfw.mp4"), {
        caption: "🔞 *NSFW GIF*", parse_mode: "Markdown",
      });
    } catch (err) { ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });
};
