// Helper untuk fitur grup — admin check, target parsing, template format

async function isAdmin(ctx, userId) {
  try {
    const m = await ctx.getChatMember(userId);
    return ["administrator", "creator"].includes(m.status);
  } catch { return false; }
}

async function isBotAdmin(ctx) {
  try {
    const m = await ctx.getChatMember(ctx.me.id);
    return ["administrator", "creator"].includes(m.status);
  } catch { return false; }
}

// Ambil target dari reply atau argumen ID
function getTarget(ctx) {
  const reply = ctx.message?.reply_to_message;
  if (reply?.from) {
    return {
      id: reply.from.id,
      name: [reply.from.first_name, reply.from.last_name].filter(Boolean).join(" "),
      username: reply.from.username || null,
      isBot: reply.from.is_bot,
    };
  }
  const args = ctx.message?.text?.split(" ") || [];
  const rawId = args[1];
  if (rawId && !isNaN(rawId)) {
    return { id: parseInt(rawId), name: rawId, username: null, isBot: false };
  }
  return null;
}

// Sisa args setelah cmd + target
function getReason(ctx, hasTarget = true) {
  const parts = ctx.message?.text?.split(" ").slice(hasTarget ? 2 : 1) || [];
  return parts.join(" ").trim() || null;
}

// Format durasi string ke detik: 1m=60, 1h=3600, 1d=86400
function parseDuration(str) {
  const match = str?.match(/^(\d+)(m|h|d)$/i);
  if (!match) return null;
  const n = parseInt(match[1]);
  const unit = match[2].toLowerCase();
  if (unit === "m") return n * 60;
  if (unit === "h") return n * 3600;
  if (unit === "d") return n * 86400;
  return null;
}

// Format template welcome/bye
function formatTemplate(template, { name, username, group, id }) {
  const mention = `<a href="tg://user?id=${id}">${name}</a>`;
  return template
    .replace(/{name}/g, name)
    .replace(/{username}/g, username ? `@${username}` : name)
    .replace(/{group}/g, group)
    .replace(/{id}/g, id)
    .replace(/{mention}/g, mention);
}

// Cek apakah chat adalah grup
function isGroup(ctx) {
  return ["group", "supergroup"].includes(ctx.chat?.type);
}

// Mention user dengan HTML
function mentionUser(id, name) {
  return `<a href="tg://user?id=${id}">${name}</a>`;
}

// Format tanggal
function formatUntil(seconds) {
  return new Date((Math.floor(Date.now() / 1000) + seconds) * 1000)
    .toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });
}

module.exports = {
  isAdmin, isBotAdmin, getTarget, getReason,
  parseDuration, formatTemplate, isGroup,
  mentionUser, formatUntil,
};
