const db = require("../utils/db");
const config = require("../settings/vynaa.json");

module.exports = async (ctx, next) => {
  if (!ctx.from) return next();

  // Daftarkan user otomatis saat pertama kali
  const user = db.registerUser(ctx);

  // Owner otomatis dapat status premium
  if (String(ctx.from.id) === String(config.ownerID) && !user.isPremium) {
    db.setPremium(ctx.from.id, true);
  }

  // Catat grup/channel jika bot ada di sana
  if (ctx.chat) {
    if (ctx.chat.type === "group" || ctx.chat.type === "supergroup") {
      db.registerGroup(ctx);
    } else if (ctx.chat.type === "channel") {
      db.registerChannel(ctx);
    }
  }

  return next();
};
