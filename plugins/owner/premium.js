module.exports = ({ bot, db, helper }) => {

  function resolveInput(ctx) {
    const reply = ctx.message.reply_to_message;
    const arg = ctx.message.text.split(" ")[1];
    if (reply?.from) {
      return db.getUser(reply.from.id)
        || { id: reply.from.id, firstName: reply.from.first_name, _notInDb: true };
    }
    if (arg) return db.resolveTarget(arg);
    return null;
  }

  // ── /addprem ──────────────────────────────────────────────────────────────
  bot.command("addprem", async (ctx) => {
    if (!helper.isOwner(ctx.from.id)) return ctx.reply("❌ Hanya owner.");
    const user = resolveInput(ctx);
    if (!user) return ctx.reply(
      "⚠️ Format: `/addprem <id/@username>` atau reply ke user.",
      { parse_mode: "Markdown" }
    );
    if (user._notInDb) return ctx.reply("❌ User belum pernah pakai bot, belum terdaftar.");
    if (user.isPremium) return ctx.reply(`ℹ️ *${user.firstName}* sudah premium.`, { parse_mode: "Markdown" });
    db.setPremium(user.id, true);
    return ctx.reply(
      `👑 *Premium berhasil diberikan!*\n\nNama: ${user.firstName}\nID: \`${user.id}\`${user.username ? `\nUsername: @${user.username}` : ""}`,
      { parse_mode: "Markdown" }
    );
  });

  // ── /delprem ──────────────────────────────────────────────────────────────
  bot.command("delprem", async (ctx) => {
    if (!helper.isOwner(ctx.from.id)) return ctx.reply("❌ Hanya owner.");
    const user = resolveInput(ctx);
    if (!user) return ctx.reply(
      "⚠️ Format: `/delprem <id/@username>` atau reply ke user.",
      { parse_mode: "Markdown" }
    );
    if (user._notInDb) return ctx.reply("❌ User belum terdaftar.");
    db.setPremium(user.id, false);
    return ctx.reply(
      `🗑️ *Premium berhasil dihapus!*\n\nNama: ${user.firstName}\nID: \`${user.id}\``,
      { parse_mode: "Markdown" }
    );
  });

  // ── /block ────────────────────────────────────────────────────────────────
  bot.command("block", async (ctx) => {
    if (!helper.isOwner(ctx.from.id)) return ctx.reply("❌ Hanya owner.");
    const user = resolveInput(ctx);
    if (!user) return ctx.reply(
      "⚠️ Format: `/block <id/@username>` atau reply ke user.",
      { parse_mode: "Markdown" }
    );
    if (user._notInDb) return ctx.reply("❌ User belum terdaftar.");
    if (helper.isOwner(user.id)) return ctx.reply("❌ Tidak bisa blokir owner.");
    db.setBlocked(user.id, true);
    return ctx.reply(
      `🚫 *${user.firstName}* (\`${user.id}\`) berhasil diblokir.`,
      { parse_mode: "Markdown" }
    );
  });

  // ── /unblock ──────────────────────────────────────────────────────────────
  bot.command("unblock", async (ctx) => {
    if (!helper.isOwner(ctx.from.id)) return ctx.reply("❌ Hanya owner.");
    const user = resolveInput(ctx);
    if (!user) return ctx.reply(
      "⚠️ Format: `/unblock <id/@username>` atau reply ke user.",
      { parse_mode: "Markdown" }
    );
    if (user._notInDb) return ctx.reply("❌ User belum terdaftar.");
    db.setBlocked(user.id, false);
    return ctx.reply(
      `✅ *${user.firstName}* (\`${user.id}\`) berhasil di-unblock.`,
      { parse_mode: "Markdown" }
    );
  });

  // ── /listprem ─────────────────────────────────────────────────────────────
  bot.command("listprem", async (ctx) => {
    if (!helper.isOwner(ctx.from.id)) return ctx.reply("❌ Hanya owner.");
    const users = db.getAllUsers();
    const premUsers = Object.values(users).filter((u) => u.isPremium);
    if (premUsers.length === 0) return ctx.reply("📭 Belum ada user premium.");
    const list = premUsers.map((u, i) =>
      `${i + 1}. ${u.firstName}${u.username ? ` (@${u.username})` : ""} — \`${u.id}\``
    ).join("\n");
    return ctx.reply(`👑 *Daftar User Premium (${premUsers.length}):*\n\n${list}`, { parse_mode: "Markdown" });
  });

  // ── /listblock ────────────────────────────────────────────────────────────
  bot.command("listblock", async (ctx) => {
    if (!helper.isOwner(ctx.from.id)) return ctx.reply("❌ Hanya owner.");
    const users = db.getAllUsers();
    const blocked = Object.values(users).filter((u) => u.isBlocked);
    if (blocked.length === 0) return ctx.reply("📭 Tidak ada user yang diblokir.");
    const list = blocked.map((u, i) =>
      `${i + 1}. ${u.firstName}${u.username ? ` (@${u.username})` : ""} — \`${u.id}\``
    ).join("\n");
    return ctx.reply(`🚫 *User Diblokir (${blocked.length}):*\n\n${list}`, { parse_mode: "Markdown" });
  });
};
