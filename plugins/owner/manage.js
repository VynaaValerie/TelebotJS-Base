const fs = require("fs");
const path = require("path");

module.exports = ({ bot, db, helper, config }) => {

  function resolveInput(ctx) {
    const reply = ctx.message.reply_to_message;
    const arg = ctx.message.text.split(" ")[1];
    if (reply?.from) return db.getUser(reply.from.id) || null;
    if (arg) return db.resolveTarget(arg);
    return null;
  }

  // ── /setlimit <id/@username/reply> <angka> ────────────────────────────────
  bot.command("setlimit", async (ctx) => {
    if (!helper.isOwner(ctx.from.id)) return ctx.reply("❌ Hanya owner.");
    const args = ctx.message.text.split(" ");
    const reply = ctx.message.reply_to_message;

    let user, numStr;
    if (reply?.from) {
      user = db.getUser(reply.from.id);
      numStr = args[1];
    } else {
      user = db.resolveTarget(args[1]);
      numStr = args[2];
    }

    if (!user) return ctx.reply(
      "⚠️ Format: `/setlimit <id/@username> <angka>` atau reply + `/setlimit <angka>`\nAngka `0` = unlimited.",
      { parse_mode: "Markdown" }
    );
    const num = parseInt(numStr);
    if (isNaN(num) || num < 0) return ctx.reply("⚠️ Masukkan angka valid (0 = unlimited).");
    const limit = num === 0 ? 999999 : num;
    db.setCustomLimit(user.id, limit);
    return ctx.reply(
      `✅ Limit *${user.firstName}*${user.username ? ` (@${user.username})` : ""} diset ke *${num === 0 ? "∞ Unlimited" : `${limit}x/hari`}*.`,
      { parse_mode: "Markdown" }
    );
  });

  // ── /resetlimit ───────────────────────────────────────────────────────────
  bot.command("resetlimit", async (ctx) => {
    if (!helper.isOwner(ctx.from.id)) return ctx.reply("❌ Hanya owner.");
    const user = resolveInput(ctx);
    if (!user) return ctx.reply(
      "⚠️ Format: `/resetlimit <id/@username>` atau reply ke user.",
      { parse_mode: "Markdown" }
    );
    db.resetDailyUsage(user.id);
    return ctx.reply(
      `✅ Limit harian *${user.firstName}* berhasil direset.`,
      { parse_mode: "Markdown" }
    );
  });

  // ── /resetlimitall ────────────────────────────────────────────────────────
  bot.command("resetlimitall", async (ctx) => {
    if (!helper.isOwner(ctx.from.id)) return ctx.reply("❌ Hanya owner.");
    const count = db.resetAllDailyUsage();
    return ctx.reply(`✅ Limit harian *${count} user* berhasil direset semua.`, { parse_mode: "Markdown" });
  });

  // ── /clearlimit ───────────────────────────────────────────────────────────
  bot.command("clearlimit", async (ctx) => {
    if (!helper.isOwner(ctx.from.id)) return ctx.reply("❌ Hanya owner.");
    const user = resolveInput(ctx);
    if (!user) return ctx.reply(
      "⚠️ Format: `/clearlimit <id/@username>` atau reply ke user.",
      { parse_mode: "Markdown" }
    );
    db.setCustomLimit(user.id, null);
    return ctx.reply(
      `✅ Custom limit *${user.firstName}* dihapus. Kembali ke default.`,
      { parse_mode: "Markdown" }
    );
  });

  // ── /grouplist ────────────────────────────────────────────────────────────
  bot.command("grouplist", async (ctx) => {
    if (!helper.isOwner(ctx.from.id)) return ctx.reply("❌ Hanya owner.");
    const groups = db.getAllGroups();
    const list = Object.values(groups);
    if (list.length === 0) return ctx.reply("📭 Bot belum ada di grup manapun.");

    const sorted = list.sort((a, b) => new Date(b.lastActivity) - new Date(a.lastActivity));
    const items = sorted.map((g, i) => {
      const username = g.username ? ` (@${g.username})` : "";
      return `${i + 1}. <b>${g.title}</b>${username}\n   ID: <code>${g.id}</code>`;
    });

    const chunks = [];
    let chunk = `📋 <b>Daftar Grup Bot (${list.length}):</b>\n\n`;
    for (const item of items) {
      if ((chunk + item).length > 3800) { chunks.push(chunk); chunk = ""; }
      chunk += item + "\n\n";
    }
    if (chunk.trim()) chunks.push(chunk);
    for (const c of chunks) await ctx.reply(c, { parse_mode: "HTML" });
  });

  // ── /leavegroup <chat_id> ─────────────────────────────────────────────────
  bot.command("leavegroup", async (ctx) => {
    if (!helper.isOwner(ctx.from.id)) return ctx.reply("❌ Hanya owner.");
    const chatId = ctx.message.text.split(" ")[1];
    if (!chatId) return ctx.reply("⚠️ Format: `/leavegroup <chat_id>`", { parse_mode: "Markdown" });
    try {
      await bot.api.sendMessage(chatId, "👋 Bot meninggalkan grup ini atas perintah owner.").catch(() => {});
      await bot.api.leaveChat(chatId);
      return ctx.reply(`✅ Bot keluar dari chat \`${chatId}\`.`, { parse_mode: "Markdown" });
    } catch (e) {
      return ctx.reply(`❌ Gagal keluar: ${e.message}`);
    }
  });

  // ── /maintenance on/off ───────────────────────────────────────────────────
  bot.command("maintenance", async (ctx) => {
    if (!helper.isOwner(ctx.from.id)) return ctx.reply("❌ Hanya owner.");
    const arg = ctx.message.text.split(" ")[1]?.toLowerCase();
    if (!["on", "off"].includes(arg)) return ctx.reply(
      "⚠️ Format: `/maintenance on` atau `/maintenance off`",
      { parse_mode: "Markdown" }
    );
    const configPath = path.join(__dirname, "../../settings/vynaa.json");
    const cfg = JSON.parse(fs.readFileSync(configPath, "utf-8"));
    cfg.maintenance = arg === "on";
    fs.writeFileSync(configPath, JSON.stringify(cfg, null, 2), "utf-8");
    config.maintenance = cfg.maintenance;
    return ctx.reply(
      cfg.maintenance
        ? "🔧 *Maintenance* ✅ ON — User tidak bisa pakai bot."
        : "🔧 *Maintenance* ❌ OFF — Bot kembali normal.",
      { parse_mode: "Markdown" }
    );
  });

  // ── /setdailylimit free/premium <angka> ───────────────────────────────────
  bot.command("setdailylimit", async (ctx) => {
    if (!helper.isOwner(ctx.from.id)) return ctx.reply("❌ Hanya owner.");
    const args = ctx.message.text.split(" ");
    const type = args[1]?.toLowerCase();
    const num = parseInt(args[2]);
    if (!["free", "premium"].includes(type) || isNaN(num) || num < 1) {
      return ctx.reply(
        "⚠️ Format: `/setdailylimit free <angka>` atau `/setdailylimit premium <angka>`",
        { parse_mode: "Markdown" }
      );
    }
    const configPath = path.join(__dirname, "../../settings/vynaa.json");
    const cfg = JSON.parse(fs.readFileSync(configPath, "utf-8"));
    if (type === "free") { cfg.dailyLimit = num; config.dailyLimit = num; }
    else { cfg.premiumLimit = num; config.premiumLimit = num; }
    fs.writeFileSync(configPath, JSON.stringify(cfg, null, 2), "utf-8");
    return ctx.reply(
      `✅ Limit *${type === "free" ? "Free" : "Premium"}* → *${num}x/hari*.`,
      { parse_mode: "Markdown" }
    );
  });

  // ── /broadcastgrp ─────────────────────────────────────────────────────────
  bot.command("broadcastgrp", async (ctx) => {
    if (!helper.isOwner(ctx.from.id)) return ctx.reply("❌ Hanya owner.");
    const text = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!text) return ctx.reply("⚠️ Format: `/broadcastgrp <pesan>`", { parse_mode: "Markdown" });
    const groups = db.getAllGroups();
    const ids = Object.keys(groups);
    let success = 0, failed = 0;
    const msg = await ctx.reply(`📡 Mengirim ke ${ids.length} grup...`);
    for (const id of ids) {
      try {
        await bot.api.sendMessage(id, `📢 *Broadcast dari Owner:*\n\n${text}`, { parse_mode: "Markdown" });
        success++;
      } catch { failed++; }
    }
    await ctx.api.editMessageText(
      ctx.chat.id, msg.message_id,
      `✅ Broadcast selesai!\n\n✔️ Berhasil: ${success}\n❌ Gagal: ${failed}`
    );
  });

  // ── /eval <code> ──────────────────────────────────────────────────────────
  bot.command("eval", async (ctx) => {
    if (!helper.isOwner(ctx.from.id)) return ctx.reply("❌ Hanya owner/developer.");
    const code = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!code) return ctx.reply("⚠️ Format: `/eval <kode JS>`", { parse_mode: "Markdown" });
    const start = Date.now();
    try {
      let result = eval(code);
      if (result instanceof Promise) result = await result;
      const elapsed = Date.now() - start;
      const output = typeof result === "object" ? JSON.stringify(result, null, 2) : String(result);
      return ctx.reply(
        `⚙️ *Eval* (${elapsed}ms)\n\n\`\`\`\n${output.slice(0, 3000)}\n\`\`\``,
        { parse_mode: "Markdown" }
      );
    } catch (e) {
      return ctx.reply(`❌ *Error:*\n\`\`\`\n${e.message}\n\`\`\``, { parse_mode: "Markdown" });
    }
  });
};
