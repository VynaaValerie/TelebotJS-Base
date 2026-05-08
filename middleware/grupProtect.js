const groupDb = require("../utils/groupDb");
const { isAdmin } = require("../utils/grupHelper");

const URL_REGEX = /https?:\/\/[^\s]+|t\.me\/[^\s]+/gi;

module.exports = async (ctx, next) => {
  // Hanya aktif di grup/supergroup
  if (!ctx.chat || !["group", "supergroup"].includes(ctx.chat.type)) return next();
  if (!ctx.message || !ctx.from || ctx.from.is_bot) return next();

  const chatId = ctx.chat.id;
  const userId = ctx.from.id;
  const msg = ctx.message;

  // Admin bebas dari proteksi
  const senderIsAdmin = await isAdmin(ctx, userId);
  if (senderIsAdmin) return next();

  const group = groupDb.getGroup(chatId);
  const settings = group.settings;
  const text = (msg.text || msg.caption || "").toLowerCase();

  // ── 1. ANTI-FLOOD ────────────────────────────────────────────────────────
  if (settings.antiflood > 0) {
    const flood = groupDb.trackFlood(chatId, userId, settings.antiflood);
    if (flood.flooded) {
      await ctx.deleteMessage().catch(() => {});
      const until = Math.floor(Date.now() / 1000) + 300; // mute 5 menit
      await ctx.restrictChatMember(userId, {
        permissions: { can_send_messages: false },
        until_date: until,
      }).catch(() => {});
      await ctx.reply(
        `⚡ <a href="tg://user?id=${userId}">${ctx.from.first_name}</a> terlalu cepat mengirim pesan! Dibisukan 5 menit.`,
        { parse_mode: "HTML" }
      ).catch(() => {});
      return;
    }
  }

  // ── 2. ANTI-LINK ─────────────────────────────────────────────────────────
  if (settings.antilink && URL_REGEX.test(msg.text || msg.caption || "")) {
    await ctx.deleteMessage().catch(() => {});
    await ctx.reply(
      `🔗 <a href="tg://user?id=${userId}">${ctx.from.first_name}</a> dilarang mengirim link di sini!`,
      { parse_mode: "HTML" }
    ).catch(() => {});
    return;
  }

  // ── 3. ANTI-FORWARD ──────────────────────────────────────────────────────
  if (settings.antiforward && (msg.forward_origin || msg.forward_from || msg.forward_from_chat)) {
    await ctx.deleteMessage().catch(() => {});
    await ctx.reply(
      `🔄 <a href="tg://user?id=${userId}">${ctx.from.first_name}</a> dilarang meneruskan pesan di sini!`,
      { parse_mode: "HTML" }
    ).catch(() => {});
    return;
  }

  // ── 4. BLACKLIST KATA ─────────────────────────────────────────────────────
  for (const word of group.blacklist) {
    if (text.includes(word)) {
      await ctx.deleteMessage().catch(() => {});
      await ctx.reply(
        `⛔ Pesan <a href="tg://user?id=${userId}">${ctx.from.first_name}</a> dihapus karena mengandung kata terlarang.`,
        { parse_mode: "HTML" }
      ).catch(() => {});
      return;
    }
  }

  // ── 5. LOCK TIPE KONTEN ───────────────────────────────────────────────────
  const locks = settings.locks;
  const lockedType =
    (locks.sticker && msg.sticker) ||
    (locks.gif && msg.animation) ||
    (locks.photo && msg.photo) ||
    (locks.video && msg.video) ||
    (locks.audio && (msg.audio || msg.voice)) ||
    (locks.document && msg.document);

  if (lockedType) {
    await ctx.deleteMessage().catch(() => {});
    return;
  }

  // ── 6. KEYWORD FILTER (auto-reply) ──────────────────────────────────────
  for (const [keyword, response] of Object.entries(group.filters)) {
    if (text.includes(keyword)) {
      await ctx.reply(response, { parse_mode: "Markdown" }).catch(() => {});
      break;
    }
  }

  return next();
};
