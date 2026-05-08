module.exports = ({ bot, db, helper }) => {
  bot.command("broadcast", async (ctx) => {
    if (!helper.isOwner(ctx.from.id)) return ctx.reply("❌ Perintah ini hanya untuk owner.");

    const text = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!text) return ctx.reply("⚠️ Format: /broadcast <pesan>");

    const users = db.getAllUsers();
    const ids = Object.keys(users);
    let success = 0, failed = 0;

    const msg = await ctx.reply(`📡 Memulai broadcast ke ${ids.length} user...`);

    for (const id of ids) {
      try {
        await bot.api.sendMessage(id, `📢 *Broadcast dari Owner:*\n\n${text}`, { parse_mode: "Markdown" });
        success++;
      } catch {
        failed++;
      }
    }

    await ctx.api.editMessageText(
      ctx.chat.id,
      msg.message_id,
      `✅ Broadcast selesai!\n\n✔️ Berhasil: ${success}\n❌ Gagal: ${failed}`
    );
  });
};
