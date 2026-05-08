module.exports = ({ bot }) => {
  bot.command("encode64", async (ctx) => {
    const text = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!text) return ctx.reply("🔐 Format: `/encode64 <teks>`", { parse_mode: "Markdown" });
    const encoded = Buffer.from(text).toString("base64");
    ctx.reply(`🔐 *Base64 Encode*\n\n\`${encoded}\``, { parse_mode: "Markdown" });
  });

  bot.command("decode64", async (ctx) => {
    const text = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!text) return ctx.reply("🔓 Format: `/decode64 <teks base64>`", { parse_mode: "Markdown" });
    try {
      const decoded = Buffer.from(text, "base64").toString("utf-8");
      ctx.reply(`🔓 *Base64 Decode*\n\n\`${decoded}\``, { parse_mode: "Markdown" });
    } catch {
      ctx.reply("❌ Teks bukan format Base64 yang valid!", { parse_mode: "Markdown" });
    }
  });
};
