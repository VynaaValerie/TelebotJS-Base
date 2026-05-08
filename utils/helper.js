const config = require("../settings/vynaa.json");

function mention(user) {
  const name = user.firstName || user.first_name || "User";
  const id = user.id;
  return `[${name}](tg://user?id=${id})`;
}

function formatDate(isoString) {
  if (!isoString) return "-";
  const d = new Date(isoString);
  return d.toLocaleString("id-ID", { timeZone: config.timezone });
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function isOwner(userId) {
  return String(userId) === String(config.ownerID);
}

module.exports = { mention, formatDate, sleep, isOwner };
