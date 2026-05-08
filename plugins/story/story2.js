module.exports = ({ bot, config, axios }) => {
  const allCategories = [
    "cerpen-anak", "cerpen-budaya", "cerpen-cinta", "cerpen-galau",
    "cerpen-gokil", "cerpen-inspiratif", "cerpen-jepang", "cerpen-kehidupan",
    "cerpen-keluarga", "cerpen-korea", "cerpen-kristen", "cerpen-liburan",
    "cerpen-lingkungan", "cerpen-mengharukan", "cerpen-misteri", "cerpen-motivasi",
    "cerpen-nasihat", "cerpen-pendidikan", "cerpen-perjuangan", "cerpen-persahabatan",
    "cerpen-petualangan", "cerpen-ramadhan", "cerpen-remaja", "cerpen-romantis", "cerpen-sastra",
  ];

  const cmdMap = {
    "cerpen-anak": "cerpenanak", "cerpen-budaya": "cerpenbudaya",
    "cerpen-cinta": "cerpencinta", "cerpen-galau": "cerpengalau",
    "cerpen-gokil": "cerpengokil", "cerpen-inspiratif": "cerpeninspirasi",
    "cerpen-jepang": "cerpenjepang", "cerpen-kehidupan": "cerpenkehidupan",
    "cerpen-keluarga": "cerpenkeluarga", "cerpen-korea": "cerpenkorea",
    "cerpen-kristen": "cerpenkristen", "cerpen-liburan": "cerpenliburan",
    "cerpen-lingkungan": "cerpenlingkungan", "cerpen-mengharukan": "cerpenmengharukan",
    "cerpen-misteri": "cerpenmisteri", "cerpen-motivasi": "cerpenmotivasi",
    "cerpen-nasihat": "cerpennasihat", "cerpen-pendidikan": "cerpenpendidikan",
    "cerpen-perjuangan": "cerpenperjuangan", "cerpen-persahabatan": "cerpenpersahabatan",
    "cerpen-petualangan": "cerpenpetualangan", "cerpen-ramadhan": "cerpenramadhan",
    "cerpen-remaja": "cerpenremaja", "cerpen-romantis": "cerpenromantis",
    "cerpen-sastra": "cerpensastra",
  };

  for (const ep of allCategories) {
    const cmd = cmdMap[ep] || ep.replace("-", "");
    const label = ep.replace("cerpen-", "").charAt(0).toUpperCase() + ep.replace("cerpen-", "").slice(1);
    bot.command(cmd, async (ctx) => {
      const wait = await ctx.reply(`📚 _Mengambil cerpen ${label}..._`, { parse_mode: "Markdown" });
      try {
        const { data } = await axios.get(`${config.vtechApiUrl}/api/story/${ep}`, {
          params: { apikey: config.vtechApiKey }, timeout: 15000,
        });
        const r = data?.result || data?.data || data;
        await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
        const judul = r.judul || r.title || `Cerpen ${label}`;
        const isi = (r.isi || r.content || r.cerita || r.story || JSON.stringify(r)).slice(0, 3000);
        ctx.reply(`📚 *${judul}*\n📂 _${label}_\n\n${isi}`, { parse_mode: "Markdown" });
      } catch (err) {
        await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
        ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" });
      }
    });
  }
};
