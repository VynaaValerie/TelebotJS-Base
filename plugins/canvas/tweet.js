module.exports = ({ bot, config, axios, InputFile }) => {
  bot.command("tweet", async (ctx) => {
    const args = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!args) return ctx.reply(
      "📝 Format: `/tweet @username | teks tweet`\nContoh: `/tweet @vynaaai | Halo dunia!`",
      { parse_mode: "Markdown" }
    );
    const [rawUser, ...rest] = args.split("|");
    const username = rawUser.replace("@", "").trim();
    const comment = rest.join("|").trim();
    if (!username || !comment) return ctx.reply("❌ Format salah! Gunakan: `/tweet @username | teks`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("⏳ _Membuat tweet..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/canvas/tweet`, {
        params: { apikey: config.vtechApiKey, displayName: username, username, comment, verified: false, theme: "dark" },
        responseType: "arraybuffer", timeout: 30000,
      });
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      return ctx.replyWithPhoto(new InputFile(Buffer.from(data), "tweet.jpg"), { caption: `🐦 *Tweet dari @${username}*`, parse_mode: "Markdown" });
    } catch (err) {
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" });
    }
  });
};
