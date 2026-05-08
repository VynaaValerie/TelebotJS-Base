const fs = require("fs");
const path = require("path");

const DB_PATH = path.join(__dirname, "../database/groupdata.json");

function readAll() {
  try { return JSON.parse(fs.readFileSync(DB_PATH, "utf-8")); }
  catch { return {}; }
}

function writeAll(data) {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), "utf-8");
}

function defaultGroup(chatId) {
  return {
    id: chatId,
    settings: {
      welcome: "👋 Selamat datang {mention} di <b>{group}</b>!\nSenang kamu bergabung 🎉",
      bye: "👋 Sampai jumpa <b>{name}</b>! Semoga sukses.",
      welcomeEnabled: true,
      byeEnabled: true,
      rules: "",
      antilink: false,
      antiflood: 0,
      antiforward: false,
      antibot: false,
      ro: false,
      maxwarn: 3,
      locks: {
        sticker: false, gif: false, photo: false,
        video: false, audio: false, document: false,
        url: false, forward: false, bot: false,
      },
    },
    warns: {},
    notes: {},
    filters: {},
    blacklist: [],
    floodData: {},
  };
}

function getGroup(chatId) {
  const db = readAll();
  const id = String(chatId);
  if (!db[id]) { db[id] = defaultGroup(chatId); writeAll(db); }
  // Migrasi: tambah field baru ke grup lama
  const g = db[id];
  let changed = false;
  if (g.settings.antibot === undefined) { g.settings.antibot = false; changed = true; }
  if (g.settings.ro === undefined) { g.settings.ro = false; changed = true; }
  if (changed) { db[id] = g; writeAll(db); }
  return db[id];
}

function saveGroup(chatId, data) {
  const db = readAll();
  db[String(chatId)] = data;
  writeAll(db);
}

function updateSettings(chatId, fields) {
  const g = getGroup(chatId);
  g.settings = { ...g.settings, ...fields };
  saveGroup(chatId, g);
  return g.settings;
}

function updateLock(chatId, type, value) {
  const g = getGroup(chatId);
  g.settings.locks[type] = value;
  saveGroup(chatId, g);
}

// ── WARNS ──────────────────────────────────────────────────────────────────
function addWarn(chatId, userId, reason = "") {
  const g = getGroup(chatId);
  const id = String(userId);
  if (!g.warns[id]) g.warns[id] = [];
  g.warns[id].push({ reason, date: new Date().toISOString() });
  saveGroup(chatId, g);
  return { count: g.warns[id].length, max: g.settings.maxwarn, warns: g.warns[id] };
}

function removeWarn(chatId, userId) {
  const g = getGroup(chatId);
  const id = String(userId);
  if (g.warns[id] && g.warns[id].length > 0) g.warns[id].pop();
  saveGroup(chatId, g);
  return g.warns[id] || [];
}

function getWarns(chatId, userId) {
  const g = getGroup(chatId);
  return g.warns[String(userId)] || [];
}

function resetWarns(chatId, userId) {
  const g = getGroup(chatId);
  g.warns[String(userId)] = [];
  saveGroup(chatId, g);
}

// ── NOTES ──────────────────────────────────────────────────────────────────
function saveNote(chatId, name, content) {
  const g = getGroup(chatId);
  g.notes[name.toLowerCase()] = content;
  saveGroup(chatId, g);
}

function getNote(chatId, name) {
  return getGroup(chatId).notes[name.toLowerCase()] || null;
}

function deleteNote(chatId, name) {
  const g = getGroup(chatId);
  delete g.notes[name.toLowerCase()];
  saveGroup(chatId, g);
}

function getNotes(chatId) {
  return getGroup(chatId).notes;
}

// ── FILTERS ────────────────────────────────────────────────────────────────
function addFilter(chatId, keyword, response) {
  const g = getGroup(chatId);
  g.filters[keyword.toLowerCase()] = response;
  saveGroup(chatId, g);
}

function removeFilter(chatId, keyword) {
  const g = getGroup(chatId);
  delete g.filters[keyword.toLowerCase()];
  saveGroup(chatId, g);
}

function getFilters(chatId) {
  return getGroup(chatId).filters;
}

// ── BLACKLIST ──────────────────────────────────────────────────────────────
function addBlacklist(chatId, word) {
  const g = getGroup(chatId);
  if (!g.blacklist.includes(word.toLowerCase())) g.blacklist.push(word.toLowerCase());
  saveGroup(chatId, g);
}

function removeBlacklist(chatId, word) {
  const g = getGroup(chatId);
  g.blacklist = g.blacklist.filter((w) => w !== word.toLowerCase());
  saveGroup(chatId, g);
}

function getBlacklist(chatId) {
  return getGroup(chatId).blacklist;
}

// ── FLOOD ──────────────────────────────────────────────────────────────────
function trackFlood(chatId, userId, limit) {
  const g = getGroup(chatId);
  const id = String(userId);
  const now = Date.now();
  if (!g.floodData[id]) g.floodData[id] = { count: 0, lastTime: now };

  const diff = now - g.floodData[id].lastTime;
  if (diff > 5000) {
    g.floodData[id] = { count: 1, lastTime: now };
  } else {
    g.floodData[id].count += 1;
    g.floodData[id].lastTime = now;
  }
  saveGroup(chatId, g);
  return { flooded: g.floodData[id].count > limit, count: g.floodData[id].count };
}

module.exports = {
  getGroup, saveGroup, updateSettings, updateLock,
  addWarn, removeWarn, getWarns, resetWarns,
  saveNote, getNote, deleteNote, getNotes,
  addFilter, removeFilter, getFilters,
  addBlacklist, removeBlacklist, getBlacklist,
  trackFlood,
};
