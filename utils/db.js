const fs = require("fs");
const path = require("path");

const DB_PATH = path.join(__dirname, "../database");

const FILES = {
  users: path.join(DB_PATH, "users.json"),
  groups: path.join(DB_PATH, "groups.json"),
  channels: path.join(DB_PATH, "channels.json"),
};

function read(file) {
  try {
    const raw = fs.readFileSync(FILES[file], "utf-8");
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

function write(file, data) {
  fs.writeFileSync(FILES[file], JSON.stringify(data, null, 2), "utf-8");
}

// ─── USER ────────────────────────────────────────────────────────────────────

function getUser(userId) {
  const db = read("users");
  return db[String(userId)] || null;
}

// Cari user berdasarkan @username (tanpa @)
function getUserByUsername(username) {
  const db = read("users");
  const target = username.replace(/^@/, "").toLowerCase();
  return Object.values(db).find(u => u.username?.toLowerCase() === target) || null;
}

// Resolve target: bisa ID angka, @username, atau null
function resolveTarget(input) {
  if (!input) return null;
  const str = String(input).trim();
  if (str.startsWith("@")) return getUserByUsername(str);
  if (/^\d+$/.test(str)) return getUser(str);
  return getUserByUsername(str);
}

function registerUser(ctx) {
  const db = read("users");
  const id = String(ctx.from.id);
  if (db[id]) return db[id];

  const now = new Date().toISOString();
  db[id] = {
    id: ctx.from.id,
    username: ctx.from.username || null,
    firstName: ctx.from.first_name || "",
    lastName: ctx.from.last_name || "",
    isPremium: false,
    isBlocked: false,
    registeredAt: now,
    lastSeen: now,
    usageToday: 0,
    usageDate: new Date().toDateString(),
    totalUsage: 0,
    customLimit: null,
  };
  write("users", db);
  return db[id];
}

function updateUser(userId, fields) {
  const db = read("users");
  const id = String(userId);
  if (!db[id]) return;
  db[id] = { ...db[id], ...fields };
  write("users", db);
  return db[id];
}

function getAllUsers() {
  return read("users");
}

function setPremium(userId, status) {
  return updateUser(userId, { isPremium: Boolean(status) });
}

function setBlocked(userId, status) {
  return updateUser(userId, { isBlocked: Boolean(status) });
}

// ─── LIMIT ───────────────────────────────────────────────────────────────────

function setCustomLimit(userId, limit) {
  return updateUser(userId, { customLimit: limit === null ? null : Number(limit) });
}

function resetDailyUsage(userId) {
  return updateUser(userId, { usageToday: 0, usageDate: new Date().toDateString() });
}

function resetAllDailyUsage() {
  const db = read("users");
  const today = new Date().toDateString();
  for (const id of Object.keys(db)) {
    db[id].usageToday = 0;
    db[id].usageDate = today;
  }
  write("users", db);
  return Object.keys(db).length;
}

function checkAndIncrementUsage(userId, defaultLimit) {
  const db = read("users");
  const id = String(userId);
  if (!db[id]) return { allowed: false, reason: "not_registered" };

  const user = db[id];
  const today = new Date().toDateString();

  if (user.usageDate !== today) {
    user.usageToday = 0;
    user.usageDate = today;
  }

  const limit = user.customLimit !== null && user.customLimit !== undefined
    ? user.customLimit
    : defaultLimit;

  if (user.usageToday >= limit) {
    write("users", db);
    return { allowed: false, reason: "limit_reached", usage: user.usageToday, limit };
  }

  user.usageToday += 1;
  user.totalUsage += 1;
  user.lastSeen = new Date().toISOString();
  db[id] = user;
  write("users", db);
  return { allowed: true, usage: user.usageToday, limit };
}

// ─── GROUP ───────────────────────────────────────────────────────────────────

function registerGroup(ctx) {
  const db = read("groups");
  const id = String(ctx.chat.id);
  const now = new Date().toISOString();
  if (!db[id]) {
    db[id] = {
      id: ctx.chat.id,
      title: ctx.chat.title || "",
      username: ctx.chat.username || null,
      type: ctx.chat.type,
      addedAt: now,
      lastActivity: now,
      messageCount: 0,
    };
  } else {
    db[id].lastActivity = now;
    db[id].messageCount += 1;
  }
  write("groups", db);
  return db[id];
}

function getAllGroups() {
  return read("groups");
}

// ─── CHANNEL ─────────────────────────────────────────────────────────────────

function registerChannel(ctx) {
  const db = read("channels");
  const id = String(ctx.chat.id);
  const now = new Date().toISOString();
  if (!db[id]) {
    db[id] = {
      id: ctx.chat.id,
      title: ctx.chat.title || "",
      username: ctx.chat.username || null,
      addedAt: now,
      lastActivity: now,
      postCount: 0,
    };
  } else {
    db[id].lastActivity = now;
    db[id].postCount += 1;
  }
  write("channels", db);
  return db[id];
}

function getAllChannels() {
  return read("channels");
}

module.exports = {
  getUser,
  getUserByUsername,
  resolveTarget,
  registerUser,
  updateUser,
  getAllUsers,
  setPremium,
  setBlocked,
  setCustomLimit,
  resetDailyUsage,
  resetAllDailyUsage,
  checkAndIncrementUsage,
  registerGroup,
  getAllGroups,
  registerChannel,
  getAllChannels,
};
