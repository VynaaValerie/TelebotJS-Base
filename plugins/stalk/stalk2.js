module.exports = ({ bot, config, axios }) => {
  bot.command("stalknpm", async (ctx) => {
    const query = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!query) return ctx.reply("📦 Format: `/stalknpm <nama package>`", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/stalk/npm`, { params: { apikey: config.vtechApiKey, query }, timeout: 15000 });
      const r = data?.result || data?.data || data;
      ctx.reply(`📦 *NPM: ${query}*\n\n📝 *Desc:* ${r?.description || "-"}\n🔖 *Version:* ${r?.version || "-"}\n👤 *Author:* ${r?.author || "-"}\n📥 *Weekly DL:* ${r?.weeklyDownloads || "-"}\n🔗 ${r?.homepage || r?.url || "-"}`, { parse_mode: "Markdown", disable_web_page_preview: true });
    } catch (err) { ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("stalkyt", async (ctx) => {
    const query = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!query) return ctx.reply("📺 Format: `/stalkyt <channel/url>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("🔍 _Mencari channel YouTube..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/stalk/yt`, { params: { apikey: config.vtechApiKey, query }, timeout: 15000 });
      const r = data?.result || data?.data || data;
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      ctx.reply(`📺 *YouTube Channel*\n\n👤 *Nama:* ${r?.name || r?.title || "-"}\n👥 *Subscribers:* ${r?.subscribers || r?.subs || "-"}\n📹 *Videos:* ${r?.videoCount || r?.videos || "-"}\n👁 *Views:* ${r?.viewCount || r?.views || "-"}\n🔗 ${r?.url || r?.link || "-"}`, { parse_mode: "Markdown", disable_web_page_preview: true });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("stalktwitter", async (ctx) => {
    const username = ctx.message.text.split(" ").slice(1).join(" ").trim().replace("@", "");
    if (!username) return ctx.reply("🐦 Format: `/stalktwitter <username>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("🔍 _Mencari profil Twitter..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/stalk/twitter`, { params: { apikey: config.vtechApiKey, username }, timeout: 15000 });
      const r = data?.result || data?.data || data;
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      ctx.reply(`🐦 *Twitter: @${username}*\n\n👤 *Nama:* ${r?.name || "-"}\n📝 *Bio:* ${r?.description || r?.bio || "-"}\n🐦 *Tweets:* ${r?.tweets || r?.tweetsCount || "-"}\n👥 *Followers:* ${r?.followers || "-"}\n👣 *Following:* ${r?.following || "-"}\n✅ *Verified:* ${r?.verified ? "Ya" : "Tidak"}`, { parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("stalkroblox", async (ctx) => {
    const query = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!query) return ctx.reply("🎮 Format: `/stalkroblox <username>`", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/stalk/roblox`, { params: { apikey: config.vtechApiKey, query }, timeout: 15000 });
      const r = data?.result || data?.data || data;
      ctx.reply(`🎮 *Roblox: ${query}*\n\n👤 *Nama:* ${r?.name || r?.displayName || "-"}\n🆔 *ID:* ${r?.id || "-"}\n👥 *Friends:* ${r?.friendsCount || r?.friends || "-"}\n📝 *Bio:* ${r?.description || "-"}`, { parse_mode: "Markdown" });
    } catch (err) { ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("stalkhok", async (ctx) => {
    const args = ctx.message.text.split(" ").slice(1);
    if (args.length < 2) return ctx.reply("⚔️ Format: `/stalkhok <id> <server>`", { parse_mode: "Markdown" });
    const [id, server] = args;
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/stalk/hok`, { params: { apikey: config.vtechApiKey, id, server }, timeout: 15000 });
      const r = data?.result || data?.data || data;
      ctx.reply(`⚔️ *Honor of Kings*\n\n👤 *Nama:* ${r?.name || r?.nickname || "-"}\n🏆 *Level:* ${r?.level || "-"}\n⭐ *Rank:* ${r?.rank || "-"}`, { parse_mode: "Markdown" });
    } catch (err) { ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("stalkgenshin", async (ctx) => {
    const id = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!id) return ctx.reply("🌙 Format: `/stalkgenshin <uid>`", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/stalk/genshin`, { params: { apikey: config.vtechApiKey, id }, timeout: 15000 });
      const r = data?.result || data?.data || data;
      ctx.reply(`🌙 *Genshin Impact*\n\n👤 *Nama:* ${r?.name || r?.nickname || "-"}\n🆔 *UID:* ${id}\n🏆 *Level:* ${r?.level || r?.ar || "-"}\n🌟 *World Level:* ${r?.worldLevel || "-"}`, { parse_mode: "Markdown" });
    } catch (err) { ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });
};
