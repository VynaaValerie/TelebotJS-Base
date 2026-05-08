const { isAdmin, isBotAdmin, isGroup, mentionUser } = require("../../utils/grupHelper");
const groupDb = require("../../utils/groupDb");

module.exports = ({ bot, config }) => {

  // ── /report ───────────────────────────────────────────────────────────────
  bot.command("report", async (ctx) => {
    if (!isGroup(ctx)) return ctx.reply("❌ Hanya bisa di grup.");
    const reply = ctx.message.reply_to_message;
    if (!reply) return ctx.reply("⚠️ Reply ke pesan yang ingin dilaporkan.");
    if (reply.from?.id === ctx.from.id) return ctx.reply("❌ Tidak bisa melaporkan pesan sendiri.");

    const reporter = mentionUser(ctx.from.id, ctx.from.first_name);
    const reported = mentionUser(reply.from.id, reply.from.first_name);
    const reason = ctx.message.text.split(" ").slice(1).join(" ").trim() || "Tidak ada alasan";

    try {
      const admins = await ctx.getChatAdministrators();
      const adminMentions = admins
        .filter((a) => !a.user.is_bot)
        .map((a) => mentionUser(a.user.id, a.user.first_name))
        .join(" ");

      await ctx.reply(
        `🚨 <b>Laporan Baru!</b>\n\n` +
        `👤 Dilaporkan oleh: ${reporter}\n` +
        `🎯 User dilaporkan: ${reported}\n` +
        `📝 Alasan: ${reason}\n\n` +
        `👮 Admin: ${adminMentions}`,
        { parse_mode: "HTML", reply_to_message_id: reply.message_id }
      );
    } catch {
      return ctx.reply("❌ Gagal mengirim laporan.");
    }
  });

  // ── /slowmode <detik/off> ─────────────────────────────────────────────────
  bot.command("slowmode", async (ctx) => {
    if (!isGroup(ctx)) return ctx.reply("❌ Hanya bisa di grup.");
    if (!await isAdmin(ctx, ctx.from.id)) return ctx.reply("❌ Hanya admin.");
    if (!await isBotAdmin(ctx)) return ctx.reply("❌ Bot bukan admin.");

    const arg = ctx.message.text.split(" ")[1]?.toLowerCase();
    if (!arg) return ctx.reply(
      "⚠️ Format: `/slowmode <detik>` atau `/slowmode off`\nContoh: `/slowmode 10`",
      { parse_mode: "Markdown" }
    );

    const seconds = arg === "off" ? 0 : parseInt(arg);
    if (arg !== "off" && (isNaN(seconds) || seconds < 0 || seconds > 86400)) {
      return ctx.reply("⚠️ Masukkan angka 0-86400 detik atau `off`.", { parse_mode: "Markdown" });
    }

    try {
      await ctx.setChatSlowMode(seconds);
      return ctx.reply(
        seconds === 0
          ? "⚡ Slowmode ❌ dinonaktifkan."
          : `⏱ Slowmode ✅ diaktifkan: *${seconds} detik* per pesan.`,
        { parse_mode: "Markdown" }
      );
    } catch (e) {
      return ctx.reply(`❌ Gagal: ${e.message}`);
    }
  });

  // ── /invitelink ───────────────────────────────────────────────────────────
  bot.command("invitelink", async (ctx) => {
    if (!isGroup(ctx)) return ctx.reply("❌ Hanya bisa di grup.");
    if (!await isAdmin(ctx, ctx.from.id)) return ctx.reply("❌ Hanya admin.");
    if (!await isBotAdmin(ctx)) return ctx.reply("❌ Bot bukan admin.");

    try {
      const link = await ctx.exportChatInviteLink();
      return ctx.reply(`🔗 *Invite Link Grup:*\n\n${link}`, { parse_mode: "Markdown" });
    } catch (e) {
      return ctx.reply(`❌ Gagal generate link: ${e.message}`);
    }
  });

  // ── /revokeinvite ─────────────────────────────────────────────────────────
  bot.command("revokeinvite", async (ctx) => {
    if (!isGroup(ctx)) return ctx.reply("❌ Hanya bisa di grup.");
    if (!await isAdmin(ctx, ctx.from.id)) return ctx.reply("❌ Hanya admin.");
    if (!await isBotAdmin(ctx)) return ctx.reply("❌ Bot bukan admin.");

    try {
      await ctx.exportChatInviteLink();
      return ctx.reply("✅ Invite link lama berhasil di-revoke dan link baru dibuat.");
    } catch (e) {
      return ctx.reply(`❌ Gagal: ${e.message}`);
    }
  });

  // ── /members ──────────────────────────────────────────────────────────────
  bot.command("members", async (ctx) => {
    if (!isGroup(ctx)) return ctx.reply("❌ Hanya bisa di grup.");
    try {
      const count = await ctx.getChatMemberCount();
      return ctx.reply(
        `👥 *Jumlah Member ${ctx.chat.title}*\n\n` +
        `Total: *${count.toLocaleString("id-ID")} orang*`,
        { parse_mode: "Markdown" }
      );
    } catch (e) {
      return ctx.reply(`❌ Gagal: ${e.message}`);
    }
  });

  // ── /tagall <pesan> ───────────────────────────────────────────────────────
  bot.command("tagall", async (ctx) => {
    if (!isGroup(ctx)) return ctx.reply("❌ Hanya bisa di grup.");
    if (!await isAdmin(ctx, ctx.from.id)) return ctx.reply("❌ Hanya admin.");

    const message = ctx.message.text.split(" ").slice(1).join(" ").trim() || "📢 Perhatian semua admin!";

    try {
      const admins = await ctx.getChatAdministrators();
      const mentions = admins
        .filter((a) => !a.user.is_bot)
        .map((a) => mentionUser(a.user.id, a.user.first_name))
        .join(" ");

      return ctx.reply(
        `📢 <b>${message}</b>\n\n${mentions}`,
        { parse_mode: "HTML" }
      );
    } catch (e) {
      return ctx.reply(`❌ Gagal: ${e.message}`);
    }
  });

  // ── /antibot on/off ───────────────────────────────────────────────────────
  bot.command("antibot", async (ctx) => {
    if (!isGroup(ctx)) return ctx.reply("❌ Hanya bisa di grup.");
    if (!await isAdmin(ctx, ctx.from.id)) return ctx.reply("❌ Hanya admin.");

    const arg = ctx.message.text.split(" ")[1]?.toLowerCase();
    if (!["on", "off"].includes(arg)) return ctx.reply(
      "⚠️ Format: `/antibot on` atau `/antibot off`",
      { parse_mode: "Markdown" }
    );
    const val = arg === "on";
    groupDb.updateSettings(ctx.chat.id, { antibot: val });
    return ctx.reply(`🤖 Anti-bot ${val ? "✅ diaktifkan — bot yang join otomatis di-kick" : "❌ dinonaktifkan"}.`);
  });

  // ── /ro on/off (readonly) ─────────────────────────────────────────────────
  bot.command("ro", async (ctx) => {
    if (!isGroup(ctx)) return ctx.reply("❌ Hanya bisa di grup.");
    if (!await isAdmin(ctx, ctx.from.id)) return ctx.reply("❌ Hanya admin.");
    if (!await isBotAdmin(ctx)) return ctx.reply("❌ Bot bukan admin.");

    const arg = ctx.message.text.split(" ")[1]?.toLowerCase();
    if (!["on", "off"].includes(arg)) return ctx.reply(
      "⚠️ Format: `/ro on` atau `/ro off`\n\nMode readonly mengunci semua member dari kirim pesan.",
      { parse_mode: "Markdown" }
    );

    const val = arg === "on";

    try {
      await ctx.setChatPermissions({
        can_send_messages: !val,
        can_send_audios: !val,
        can_send_documents: !val,
        can_send_photos: !val,
        can_send_videos: !val,
        can_send_video_notes: !val,
        can_send_voice_notes: !val,
        can_send_polls: !val,
        can_send_other_messages: !val,
        can_add_web_page_previews: !val,
        can_change_info: false,
        can_invite_users: !val,
        can_pin_messages: false,
      });
      groupDb.updateSettings(ctx.chat.id, { ro: val });
      return ctx.reply(
        val
          ? "🔇 Grup sekarang dalam mode *readonly* — hanya admin yang bisa kirim pesan."
          : "🔊 Mode readonly ❌ dinonaktifkan — semua member bisa kirim pesan lagi.",
        { parse_mode: "Markdown" }
      );
    } catch (e) {
      return ctx.reply(`❌ Gagal: ${e.message}`);
    }
  });

  // ── /cleardel ─────────────────────────────────────────────────────────────
  bot.command("cleardel", async (ctx) => {
    if (!isGroup(ctx)) return ctx.reply("❌ Hanya bisa di grup.");
    if (!await isAdmin(ctx, ctx.from.id)) return ctx.reply("❌ Hanya admin.");
    if (!await isBotAdmin(ctx)) return ctx.reply("❌ Bot bukan admin.");

    try {
      const members = await ctx.getChatAdministrators();
      return ctx.reply(
        `ℹ️ Telegram tidak mengizinkan bot membaca semua member secara langsung.\n\n` +
        `Gunakan fitur bawaan Telegram: *Settings → Members → Remove Deleted Accounts*`,
        { parse_mode: "Markdown" }
      );
    } catch {
      return ctx.reply("❌ Gagal.");
    }
  });

  // ── /setgrouptitle <nama> ─────────────────────────────────────────────────
  bot.command("setgrouptitle", async (ctx) => {
    if (!isGroup(ctx)) return ctx.reply("❌ Hanya bisa di grup.");
    if (!await isAdmin(ctx, ctx.from.id)) return ctx.reply("❌ Hanya admin.");
    if (!await isBotAdmin(ctx)) return ctx.reply("❌ Bot bukan admin.");

    const title = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!title) return ctx.reply("⚠️ Format: `/setgrouptitle <nama baru>`", { parse_mode: "Markdown" });

    try {
      await ctx.setChatTitle(title);
      return ctx.reply(`✅ Nama grup berhasil diubah ke: *${title}*`, { parse_mode: "Markdown" });
    } catch (e) {
      return ctx.reply(`❌ Gagal: ${e.message}`);
    }
  });

  // ── /setgroupdesc <deskripsi> ─────────────────────────────────────────────
  bot.command("setgroupdesc", async (ctx) => {
    if (!isGroup(ctx)) return ctx.reply("❌ Hanya bisa di grup.");
    if (!await isAdmin(ctx, ctx.from.id)) return ctx.reply("❌ Hanya admin.");
    if (!await isBotAdmin(ctx)) return ctx.reply("❌ Bot bukan admin.");

    const desc = ctx.message.text.split(" ").slice(1).join(" ").trim();
    try {
      await ctx.setChatDescription(desc || "");
      return ctx.reply(`✅ Deskripsi grup berhasil ${desc ? `diubah ke: _${desc}_` : "dihapus"}.`, { parse_mode: "Markdown" });
    } catch (e) {
      return ctx.reply(`❌ Gagal: ${e.message}`);
    }
  });
};
