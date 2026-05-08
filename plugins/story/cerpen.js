module.exports = ({ bot, config, axios }) => {
  const categories = {
    cinta: "cerpen-cinta", galau: "cerpen-galau", gokil: "cerpen-gokil",
    misteri: "cerpen-misteri", motivasi: "cerpen-motivasi", anak: "cerpen-anak",
    persahabatan: "cerpen-persahabatan", remaja: "cerpen-remaja", romantis: "cerpen-romantis",
    inspiratif: "cerpen-inspiratif",
  };

  bot.command("cerpen", async (ctx) => {
    const cat = ctx.message.text.split(" ").slice(1).join(" ").trim().toLowerCase();
    const endpoint = categories[cat] || categories[Object.keys(categories)[Math.floor(Math.random() * Object.keys(categories).length)]];
    const catLabel = Object.keys(categories).find(k => categories[k] === endpoint) || "random";
    const wait = await ctx.reply("📚 _Mengambil cerpen..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/story/${endpoint}`, {
        params: { apikey: config.vtechApiKey }, timeout: 15000,
      });
      const r = data?.result || data?.data || data;
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      const judul = r.judul || r.title || `Cerpen ${catLabel}`;
      const isi = (r.isi || r.content || r.cerita || r.story || JSON.stringify(r)).slice(0, 2000);
      ctx.reply(`📚 *${judul}*\n📂 _Kategori: ${catLabel}_\n\n${isi}`, { parse_mode: "Markdown" });
    } catch (err) {
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
