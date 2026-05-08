const db = require("../utils/db");
const config = require("../settings/vynaa.json");
const { isOwner } = require("../utils/helper");

module.exports = async (ctx, next) => {
  if (!ctx.from) return next();

  // Owner tidak kena apapun
  if (isOwner(ctx.from.id)) return next();

  // Cek maintenance mode (baca langsung dari file biar selalu up-to-date)
  const fs = require("fs");
  const path = require("path");
  try {
    const cfgRaw = fs.readFileSync(path.join(__dirname, "../settings/vynaa.json"), "utf-8");
    const cfg = JSON.parse(cfgRaw);
    if (cfg.maintenance) {
      return ctx.reply(
        "🔧 *Bot sedang dalam mode maintenance.*\n\nSilakan tunggu beberapa saat. Hubungi owner jika butuh bantuan.",
        { parse_mode: "Markdown" }
      ).catch(() => {});
    }
  } catch {}

  const user = db.getUser(ctx.from.id);
  if (!user) return next();

  if (user.isBlocked) {
    return ctx.reply("❌ Akun kamu telah diblokir dari bot ini.\nHubungi owner jika ini kesalahan.");
  }

  const limit = user.isPremium ? config.premiumLimit : config.dailyLimit;
  const result = db.checkAndIncrementUsage(ctx.from.id, limit);

  if (!result.allowed) {
    const badge = user.isPremium ? "👑 Premium" : "🆓 Free";
    return ctx.reply(
      `⚠️ *Limit Harian Tercapai!*\n\n` +
      `Status: ${badge}\n` +
      `Limit hari ini: *${result.limit}x*\n` +
      `Terpakai: *${result.usage}x*\n\n` +
      `Limit akan direset besok pukul 00:00.\n` +
      `Upgrade ke *Premium* untuk limit lebih banyak!\n` +
      `Hubungi: ${config.ownerLink}`,
      { parse_mode: "Markdown" }
    );
  }

  return next();
};
