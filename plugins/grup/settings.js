const { isGroup } = require("../../utils/grupHelper");
const groupDb = require("../../utils/groupDb");

module.exports = ({ bot }) => {

  bot.command("settings", async (ctx) => {
    if (!isGroup(ctx)) return ctx.reply("❌ Hanya bisa di grup.");
    const { settings } = groupDb.getGroup(ctx.chat.id);
    const { locks } = settings;

    const bool = (v) => v ? "✅" : "❌";
    const lockList = Object.entries(locks).map(([k, v]) => `  ${bool(v)} \`${k}\``).join("\n");

    return ctx.reply(
      `⚙️ *Settings — ${ctx.chat.title}*\n\n` +
      `👋 Welcome: ${bool(settings.welcomeEnabled)}\n` +
      `👋 Goodbye: ${bool(settings.byeEnabled)}\n` +
      `🔗 Anti-link: ${bool(settings.antilink)}\n` +
      `🔄 Anti-forward: ${bool(settings.antiforward)}\n` +
      `🤖 Anti-bot: ${bool(settings.antibot)}\n` +
      `🔇 Readonly (RO): ${bool(settings.ro)}\n` +
      `⚡ Anti-flood: ${settings.antiflood > 0 ? `✅ (${settings.antiflood}/5s)` : "❌"}\n` +
      `⚠️ Max warn: ${settings.maxwarn}x\n` +
      `📋 Rules: ${settings.rules ? "✅ Ada" : "❌ Kosong"}\n\n` +
      `🔐 *Lock:*\n${lockList}`,
      { parse_mode: "Markdown" }
    );
  });
};
