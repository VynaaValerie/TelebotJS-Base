const { isAdmin, isBotAdmin, isGroup, mentionUser } = require("../../utils/grupHelper");

module.exports = ({ bot }) => {

  // ── /id ───────────────────────────────────────────────────────────────────
  bot.command("id", async (ctx) => {
    const reply = ctx.message.reply_to_message;
    if (reply) {
      return ctx.reply(
        `🆔 *Info ID*\n\n` +
        `User: \`${reply.from?.id}\`\n` +
        `Chat: \`${ctx.chat.id}\`\n` +
        (reply.forward_from ? `Forward dari: \`${reply.forward_from.id}\`` : ""),
        { parse_mode: "Markdown" }
      );
    }
    return ctx.reply(
      `🆔 *Info ID*\n\nUser: \`${ctx.from.id}\`\nChat: \`${ctx.chat.id}\``,
      { parse_mode: "Markdown" }
    );
  });

  // ── /info ─────────────────────────────────────────────────────────────────
  bot.command("info", async (ctx) => {
    const target = ctx.message.reply_to_message?.from || ctx.from;
    const name = [target.first_name, target.last_name].filter(Boolean).join(" ");
    let status = "Member";
    try {
      const m = await ctx.getChatMember(target.id);
      const statusMap = { creator: "👑 Owner", administrator: "⭐ Admin", member: "👤 Member", restricted: "🔇 Restricted", left: "🚪 Left", kicked: "🚫 Banned" };
      status = statusMap[m.status] || m.status;
    } catch {}

    return ctx.reply(
      `👤 *Info User*\n\n` +
      `Nama: ${mentionUser(target.id, name)}\n` +
      `ID: \`${target.id}\`\n` +
      `Username: ${target.username ? `@${target.username}` : "-"}\n` +
      `Bot: ${target.is_bot ? "✅ Ya" : "❌ Tidak"}\n` +
      `Status: ${status}`,
      { parse_mode: "HTML" }
    );
  });

  // ── /adminlist ────────────────────────────────────────────────────────────
  bot.command("adminlist", async (ctx) => {
    if (!isGroup(ctx)) return ctx.reply("❌ Hanya bisa di grup.");
    try {
      const admins = await ctx.getChatAdministrators();
      const list = admins
        .filter((a) => !a.user.is_bot)
        .map((a) => {
          const name = [a.user.first_name, a.user.last_name].filter(Boolean).join(" ");
          const badge = a.status === "creator" ? "👑" : "⭐";
          return `${badge} ${mentionUser(a.user.id, name)}${a.custom_title ? ` — ${a.custom_title}` : ""}`;
        })
        .join("\n");
      return ctx.reply(`👮 *Admin ${ctx.chat.title} (${admins.filter((a) => !a.user.is_bot).length}):*\n\n${list}`, { parse_mode: "HTML" });
    } catch {
      return ctx.reply("❌ Gagal mengambil daftar admin.");
    }
  });

  // ── /pin ──────────────────────────────────────────────────────────────────
  bot.command("pin", async (ctx) => {
    if (!isGroup(ctx)) return ctx.reply("❌ Hanya bisa di grup.");
    if (!await isAdmin(ctx, ctx.from.id)) return ctx.reply("❌ Hanya admin.");
    if (!await isBotAdmin(ctx)) return ctx.reply("❌ Bot bukan admin.");
    const reply = ctx.message.reply_to_message;
    if (!reply) return ctx.reply("⚠️ Reply ke pesan yang ingin di-pin.");
    await ctx.pinChatMessage(reply.message_id, { disable_notification: false }).catch(() => {});
    return ctx.reply("📌 Pesan berhasil di-pin!");
  });

  // ── /unpin ────────────────────────────────────────────────────────────────
  bot.command("unpin", async (ctx) => {
    if (!isGroup(ctx)) return ctx.reply("❌ Hanya bisa di grup.");
    if (!await isAdmin(ctx, ctx.from.id)) return ctx.reply("❌ Hanya admin.");
    if (!await isBotAdmin(ctx)) return ctx.reply("❌ Bot bukan admin.");
    const reply = ctx.message.reply_to_message;
    if (reply) {
      await ctx.unpinChatMessage(reply.message_id).catch(() => {});
    } else {
      await ctx.unpinChatMessage().catch(() => {});
    }
    return ctx.reply("📌 Pesan berhasil di-unpin!");
  });

  // ── /purge ────────────────────────────────────────────────────────────────
  bot.command("purge", async (ctx) => {
    if (!isGroup(ctx)) return ctx.reply("❌ Hanya bisa di grup.");
    if (!await isAdmin(ctx, ctx.from.id)) return ctx.reply("❌ Hanya admin.");
    if (!await isBotAdmin(ctx)) return ctx.reply("❌ Bot bukan admin.");
    const reply = ctx.message.reply_to_message;
    if (!reply) return ctx.reply("⚠️ Reply ke pesan awal yang ingin dihapus.");
    const fromId = reply.message_id;
    const toId = ctx.message.message_id;
    let deleted = 0;
    for (let i = fromId; i <= toId; i++) {
      await ctx.api.deleteMessage(ctx.chat.id, i).catch(() => {});
      deleted++;
    }
    const notice = await ctx.reply(`🗑️ *${deleted}* pesan berhasil dihapus.`, { parse_mode: "Markdown" });
    setTimeout(() => ctx.api.deleteMessage(ctx.chat.id, notice.message_id).catch(() => {}), 5000);
  });
};
