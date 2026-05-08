module.exports = ({ bot, config, axios }) => {
  bot.command("kisahnabi", async (ctx) => {
    const args = ctx.message.text.split(" ").slice(1).join(" ").trim().toLowerCase();
    if (!args) {
      return ctx.reply(
        "⚠️ Format: `/kisahnabi <nama nabi>`\n\nContoh: `/kisahnabi muhammad` `/kisahnabi ibrahim` `/kisahnabi musa`\n\nGunakan /listnabi untuk daftar lengkap.",
        { parse_mode: "Markdown" }
      );
    }
    try {
      const res = await axios.get(`${config.vtechApiUrl}/api/islamic/kisahnabi`, {
        params: { apikey: config.vtechApiKey, nabi: args }, timeout: 25000,
      });
      const r = res.data?.result;
      if (!r || res.data?.status === false) return ctx.reply(`❌ Nabi *${args}* tidak ditemukan. Cek /listnabi.`, { parse_mode: "Markdown" });
      const kisah = (r.kisah || "").slice(0, 3500).trim();
      const info =
        `🕌 *Kisah ${r.name || args}*\n\n` +
        `📅 Lahir: ${r.kelahiran || "-"}\n` +
        `💫 Wafat: ${r.wafat_usia || "-"}\n` +
        `📍 Tempat: ${r.singgah || "-"}\n\n` +
        `📖 *Kisah Singkat:*\n${kisah}${r.kisah?.length > 3500 ? "\n\n_...baca selengkapnya di literatur Islam_" : ""}`;
      return ctx.reply(info, { parse_mode: "Markdown" });
    } catch (e) {
      return ctx.reply(`❌ Gagal mengambil data: \`${e.message}\``, { parse_mode: "Markdown" });
    }
  });
};
