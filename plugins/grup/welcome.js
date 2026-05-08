const { formatTemplate, isGroup, isAdmin } = require("../../utils/grupHelper");
const groupDb = require("../../utils/groupDb");

module.exports = ({ bot, config }) => {

  async function sendWelcome(ctx, member, chatId, chatTitle) {
    const settings = groupDb.getGroup(chatId).settings;

    // Anti-bot: kick bot yang bergabung
    if (member.is_bot && settings.antibot) {
      await ctx.api.banChatMember(chatId, member.id).catch(() => {});
      await ctx.api.unbanChatMember(chatId, member.id).catch(() => {});
      return;
    }
    if (member.is_bot) return;

    if (!settings.welcomeEnabled) return;

    const name = [member.first_name, member.last_name].filter(Boolean).join(" ");
    const text = formatTemplate(settings.welcome, {
      name, username: member.username,
      group: chatTitle, id: member.id,
    });
    await ctx.api.sendMessage(chatId, text, { parse_mode: "HTML" }).catch(() => {});
  }

  async function sendBye(ctx, member, chatId, chatTitle) {
    const settings = groupDb.getGroup(chatId).settings;
    if (!settings.byeEnabled) return;
    if (member.is_bot) return;
    const name = [member.first_name, member.last_name].filter(Boolean).join(" ");
    const text = formatTemplate(settings.bye, {
      name, username: member.username,
      group: chatTitle, id: member.id,
    });
    await ctx.api.sendMessage(chatId, text, { parse_mode: "HTML" }).catch(() => {});
  }

  // ── Handler: chat_member (reliable — butuh bot admin) ─────────────────────
  bot.on("chat_member", async (ctx) => {
    const update = ctx.chatMember;
    if (!update) return;
    const { old_chat_member, new_chat_member, chat } = update;
    const member = new_chat_member.user;

    const wasOut = ["left", "kicked", "banned"].includes(old_chat_member.status);
    const isIn = ["member", "restricted", "administrator", "creator"].includes(new_chat_member.status);
    const nowLeft = ["left", "kicked"].includes(new_chat_member.status);

    if (wasOut && isIn) {
      await sendWelcome(ctx, member, chat.id, chat.title);
    } else if (!wasOut && nowLeft) {
      await sendBye(ctx, member, chat.id, chat.title);
    }
  });


  // ── /setwelcome ──────────────────────────────────────────────────────────
  bot.command("setwelcome", async (ctx) => {
    if (!isGroup(ctx)) return ctx.reply("❌ Hanya bisa di grup.");
    if (!await isAdmin(ctx, ctx.from.id)) return ctx.reply("❌ Hanya admin.");
    const text = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!text) return ctx.reply(
      "⚠️ Format: `/setwelcome <teks>`\n\nVariabel:\n`{name}` — nama user\n`{mention}` — mention user\n`{username}` — username\n`{group}` — nama grup\n`{id}` — ID user",
      { parse_mode: "Markdown" }
    );
    groupDb.updateSettings(ctx.chat.id, { welcome: text });
    return ctx.reply("✅ Pesan welcome berhasil diset!\n\nGunakan `/welcome` untuk preview.", { parse_mode: "Markdown" });
  });

  // ── /setbye ───────────────────────────────────────────────────────────────
  bot.command("setbye", async (ctx) => {
    if (!isGroup(ctx)) return ctx.reply("❌ Hanya bisa di grup.");
    if (!await isAdmin(ctx, ctx.from.id)) return ctx.reply("❌ Hanya admin.");
    const text = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!text) return ctx.reply(
      "⚠️ Format: `/setbye <teks>`\n\nVariabel:\n`{name}` `{mention}` `{username}` `{group}` `{id}`",
      { parse_mode: "Markdown" }
    );
    groupDb.updateSettings(ctx.chat.id, { bye: text });
    return ctx.reply("✅ Pesan goodbye berhasil diset!");
  });

  // ── /welcome (preview) ────────────────────────────────────────────────────
  bot.command("welcome", async (ctx) => {
    if (!isGroup(ctx)) return ctx.reply("❌ Hanya bisa di grup.");
    const settings = groupDb.getGroup(ctx.chat.id).settings;
    const name = [ctx.from.first_name, ctx.from.last_name].filter(Boolean).join(" ");
    const preview = formatTemplate(settings.welcome, {
      name, username: ctx.from.username,
      group: ctx.chat.title, id: ctx.from.id,
    });
    return ctx.reply(
      `👁 *Preview Welcome* (${settings.welcomeEnabled ? "✅ Aktif" : "❌ Nonaktif"}):\n\n${preview}\n\n*Template:*\n\`${settings.welcome}\``,
      { parse_mode: "Markdown" }
    );
  });

  // ── /bye (preview) ────────────────────────────────────────────────────────
  bot.command("bye", async (ctx) => {
    if (!isGroup(ctx)) return ctx.reply("❌ Hanya bisa di grup.");
    const settings = groupDb.getGroup(ctx.chat.id).settings;
    const name = [ctx.from.first_name, ctx.from.last_name].filter(Boolean).join(" ");
    const preview = formatTemplate(settings.bye, {
      name, username: ctx.from.username,
      group: ctx.chat.title, id: ctx.from.id,
    });
    return ctx.reply(
      `👁 *Preview Goodbye* (${settings.byeEnabled ? "✅ Aktif" : "❌ Nonaktif"}):\n\n${preview}\n\n*Template:*\n\`${settings.bye}\``,
      { parse_mode: "Markdown" }
    );
  });

  // ── /resetwelcome ─────────────────────────────────────────────────────────
  bot.command("resetwelcome", async (ctx) => {
    if (!isGroup(ctx)) return ctx.reply("❌ Hanya bisa di grup.");
    if (!await isAdmin(ctx, ctx.from.id)) return ctx.reply("❌ Hanya admin.");
    groupDb.updateSettings(ctx.chat.id, {
      welcome: "👋 Selamat datang {mention} di <b>{group}</b>!\nSenang kamu bergabung 🎉",
    });
    return ctx.reply("✅ Pesan welcome direset ke default.");
  });

  // ── /resetbye ─────────────────────────────────────────────────────────────
  bot.command("resetbye", async (ctx) => {
    if (!isGroup(ctx)) return ctx.reply("❌ Hanya bisa di grup.");
    if (!await isAdmin(ctx, ctx.from.id)) return ctx.reply("❌ Hanya admin.");
    groupDb.updateSettings(ctx.chat.id, { bye: "👋 Sampai jumpa <b>{name}</b>! Semoga sukses." });
    return ctx.reply("✅ Pesan goodbye direset ke default.");
  });

  // ── /togglewelcome ────────────────────────────────────────────────────────
  bot.command("togglewelcome", async (ctx) => {
    if (!isGroup(ctx)) return ctx.reply("❌ Hanya bisa di grup.");
    if (!await isAdmin(ctx, ctx.from.id)) return ctx.reply("❌ Hanya admin.");
    const settings = groupDb.getGroup(ctx.chat.id).settings;
    const newVal = !settings.welcomeEnabled;
    groupDb.updateSettings(ctx.chat.id, { welcomeEnabled: newVal });
    return ctx.reply(`Welcome message ${newVal ? "✅ diaktifkan" : "❌ dinonaktifkan"}.`);
  });

  // ── /togglebye ────────────────────────────────────────────────────────────
  bot.command("togglebye", async (ctx) => {
    if (!isGroup(ctx)) return ctx.reply("❌ Hanya bisa di grup.");
    if (!await isAdmin(ctx, ctx.from.id)) return ctx.reply("❌ Hanya admin.");
    const settings = groupDb.getGroup(ctx.chat.id).settings;
    const newVal = !settings.byeEnabled;
    groupDb.updateSettings(ctx.chat.id, { byeEnabled: newVal });
    return ctx.reply(`Goodbye message ${newVal ? "✅ diaktifkan" : "❌ dinonaktifkan"}.`);
  });
};
