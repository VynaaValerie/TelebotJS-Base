module.exports = ({ bot, config, axios }) => {
  bot.command("cekpln", async (ctx) => {
    const id = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!id) return ctx.reply("⚡ Format: `/cekpln <ID pelanggan>`\nContoh: `/cekpln 172720204487`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("🔍 _Memeriksa tagihan PLN..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/tools/cekbillpln`, {
        params: { apikey: config.vtechApiKey, id }, timeout: 15000,
      });
      const r = data?.result || data?.data || data;
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      ctx.reply(
        `⚡ *Info Tagihan PLN*\n\n` +
        `🆔 *ID:* ${r.idpel || r.id || id}\n` +
        `👤 *Nama:* ${r.nama || r.name || "-"}\n` +
        `🏠 *Alamat:* ${r.alamat || r.address || "-"}\n` +
        `📊 *Daya:* ${r.daya || r.power || "-"}\n` +
        `💰 *Tagihan:* ${r.tagihan || r.bill || r.amount || "-"}`,
        { parse_mode: "Markdown" }
      );
    } catch (err) {
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
