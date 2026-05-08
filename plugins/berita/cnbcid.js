module.exports = ({ bot, config, axios }) => {
  bot.command("cnbcid", async (ctx) => {
    try {
      const res = await axios.get(`${config.vtechApiUrl}/api/berita/cnbcindonesia?apikey=${config.vtechApiKey}`, { timeout: 15000 });
      const items = res.data?.data?.slice(0, 5);
      if (!items?.length) return ctx.reply("❌ Berita tidak tersedia saat ini.");
      const text = formatBerita(items, "CNBC Indonesia");
      await ctx.reply(text, { parse_mode: "MarkdownV2", disable_web_page_preview: true });
    } catch (e) {
      await ctx.reply(`❌ Gagal ambil berita CNBC Indonesia\\. Coba lagi nanti\\.`, { parse_mode: "MarkdownV2" });
    }
  });
};

function escMd(text) {
  return String(text).replace(/([_*[\]()~`>#+\-=|{}.!\\])/g, "\\$1");
}

function formatBerita(items, sumber) {
  const lines = items.map((item, i) => {
    const cat = item.category ? ` \\[${escMd(item.category)}\\]` : "";
    const date = item.date ? `\n    🕐 ${escMd(item.date)}` : "";
    const type = item.type === "video" ? " 🎬" : "";
    return `${i + 1}\\. *${escMd(item.title)}*${type}\n    📂${cat || " Umum"}${date}\n    🔗 [Baca](${item.link})`;
  });
  return `📰 *Berita — ${escMd(sumber)}*\n_${escMd(new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" }))}_\n\n${lines.join("\n\n")}`;
}
