module.exports = ({ bot, config, axios, InputFile }) => {
  const list = [
    { cmd: "waesthetic", ep: "/api/wallpaper/aesthetic", label: "Aesthetic" },
    { cmd: "wanjing", ep: "/api/wallpaper/anjing", label: "Anjing" },
    { cmd: "wchucky", ep: "/api/wallpaper/boneka-chucky", label: "Boneka Chucky" },
    { cmd: "wcecan", ep: "/api/wallpaper/cecan", label: "Cecan" },
    { cmd: "wcecan2", ep: "/api/wallpaper/cecan2", label: "Cecan V2" },
    { cmd: "wcogan", ep: "/api/wallpaper/cogan", label: "Cogan" },
    { cmd: "wcogan2", ep: "/api/wallpaper/cogan2", label: "Cogan V2" },
    { cmd: "wcosplay", ep: "/api/wallpaper/cosplay", label: "Cosplay" },
    { cmd: "wcouplepp", ep: "/api/randomgambar/couplepp", label: "Couple PP" },
    { cmd: "wcyberspace", ep: "/api/wallpaper/cyberspace", label: "Cyberspace" },
    { cmd: "wdarkjokes", ep: "/api/random/darkjokes", label: "Dark Jokes" },
    { cmd: "wgaming", ep: "/api/wallpaper/gaming", label: "Gaming" },
    { cmd: "whacker", ep: "/api/wallpaper/hacker", label: "Hacker" },
    { cmd: "wislami", ep: "/api/wallpaper/islami", label: "Islami" },
    { cmd: "wjustina", ep: "/api/wallpaper/justina", label: "Justina" },
    { cmd: "wkartun", ep: "/api/wallpaper/kartun", label: "Kartun" },
    { cmd: "wkatakata", ep: "/api/wallpaper/katakata", label: "Kata-kata" },
    { cmd: "wkpop", ep: "/api/wallpaper/kpop", label: "K-Pop" },
    { cmd: "wkucing", ep: "/api/wallpaper/kucing", label: "Kucing" },
    { cmd: "wmeme", ep: "/api/random/meme", label: "Meme" },
    { cmd: "wmobil", ep: "/api/wallpaper/mobil", label: "Mobil" },
    { cmd: "wmotor", ep: "/api/wallpaper/motor", label: "Motor" },
    { cmd: "wmountain", ep: "/api/wallpaper/mountain", label: "Mountain" },
    { cmd: "wprograming", ep: "/api/wallpaper/programing", label: "Programing" },
    { cmd: "wpubg", ep: "/api/wallpaper/pubg", label: "PUBG" },
    { cmd: "wtatasurya", ep: "/api/wallpaper/tatasurya", label: "Tata Surya" },
    { cmd: "wteknologi", ep: "/api/wallpaper/teknologi", label: "Teknologi" },
    { cmd: "whp", ep: "/api/wallpaper/wallhp", label: "Wallpaper HP" },
    { cmd: "whp2", ep: "/api/wallpaper/wallhp2", label: "Wallpaper HP V2" },
  ];
  for (const { cmd, ep, label } of list) {
    bot.command(cmd, async (ctx) => {
      try {
        const { data } = await axios.get(`${config.vtechApiUrl}${ep}`, {
          params: { apikey: config.vtechApiKey }, responseType: "arraybuffer", timeout: 20000,
        });
        return ctx.replyWithPhoto(new InputFile(Buffer.from(data), "wall.jpg"), {
          caption: `🖼 *Wallpaper: ${label}*`, parse_mode: "Markdown",
        });
      } catch (err) { ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
    });
  }
};
