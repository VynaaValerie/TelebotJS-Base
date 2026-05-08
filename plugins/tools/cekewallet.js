module.exports = ({ bot, config, axios }) => {
  bot.command("cekewallet", async (ctx) => {
    const args = ctx.message.text.split(" ").slice(1);
    if (args.length < 2) return ctx.reply(
      "💳 Format: `/cekewallet <provider> <nomor>`\nProvider: `dana ovo gopay shopeepay`\nContoh: `/cekewallet dana 081234567890`",
      { parse_mode: "Markdown" }
    );
    const [wallet, nomer] = args;
    const wait = await ctx.reply("🔍 _Memeriksa e-wallet..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/tools/cek-ewallet`, {
        params: { apikey: config.vtechApiKey, wallet, nomer }, timeout: 15000,
      });
      const r = data?.result || data?.data || data;
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      ctx.reply(
        `💳 *Cek E-Wallet*\n\n` +
        `🏦 *Provider:* ${wallet.toUpperCase()}\n` +
        `📱 *Nomor:* ${nomer}\n` +
        `👤 *Nama:* ${r.name || r.nama || r.accountName || "-"}\n` +
        `✅ *Status:* ${r.status || (r.registered ? "Terdaftar" : "Tidak Terdaftar")}`,
        { parse_mode: "Markdown" }
      );
    } catch (err) {
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
