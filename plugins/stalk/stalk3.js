module.exports = ({ bot, config, axios }) => {
  bot.command("stalktt", async (ctx) => {
    const username = ctx.message.text.split(" ").slice(1).join(" ").trim().replace("@", "");
    if (!username) return ctx.reply("🎵 Format: `/stalktt <username tiktok>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("🔍 _Mencari profil TikTok..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/stalk/tt`, { params: { apikey: config.vtechApiKey, username }, timeout: 15000 });
      const r = data?.result || data?.data || data;
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      ctx.reply(`🎵 *TikTok: @${username}*\n\n👤 *Nama:* ${r?.nickname || r?.name || "-"}\n📝 *Bio:* ${r?.signature || r?.bio || "-"}\n❤️ *Likes:* ${r?.heartCount || r?.likes || "-"}\n👥 *Followers:* ${r?.followerCount || r?.followers || "-"}\n📹 *Videos:* ${r?.videoCount || r?.videos || "-"}`, { parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("stalkrepo", async (ctx) => {
    const repo = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!repo) return ctx.reply("📦 Format: `/stalkrepo <nama repo>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("🔍 _Mencari GitHub repo..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/stalk/repo`, { params: { apikey: config.vtechApiKey, repo }, timeout: 15000 });
      const arr = data?.result || data?.data || data;
      const list = Array.isArray(arr) ? arr.slice(0, 5) : [arr];
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      const txt = list.map((r, i) => `${i + 1}. *${r.full_name || r.name || "-"}*\n   ⭐ ${r.stargazers_count || r.stars || "-"} | 🍴 ${r.forks || "-"}\n   📝 ${(r.description || "-").slice(0, 80)}`).join("\n\n");
      ctx.reply(`📦 *GitHub Repo: ${repo}*\n\n${txt}`, { parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("stalksnackvideo", async (ctx) => {
    const username = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!username) return ctx.reply("🎬 Format: `/stalksnackvideo <username>`", { parse_mode: "Markdown" });
    const wait = await ctx.reply("🔍 _Mencari profil SnackVideo..._", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/stalk/snackvideo`, { params: { apikey: config.vtechApiKey, username }, timeout: 15000 });
      const r = data?.result || data?.data || data;
      await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
      ctx.reply(`🎬 *SnackVideo: ${username}*\n\n${JSON.stringify(r).slice(0, 1500)}`, { parse_mode: "Markdown" });
    } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("stalksupersus", async (ctx) => {
    const id = ctx.message.text.split(" ").slice(1).join(" ").trim();
    if (!id) return ctx.reply("👾 Format: `/stalksupersus <id>`", { parse_mode: "Markdown" });
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/stalk/supersus`, { params: { apikey: config.vtechApiKey, id }, timeout: 15000 });
      const r = data?.result || data?.data || data;
      ctx.reply(`👾 *Super Sus: ${id}*\n\n👤 *Nama:* ${r?.name || r?.nickname || "-"}\n🆔 *ID:* ${id}\n🏆 *Level:* ${r?.level || "-"}\n⭐ *Rank:* ${r?.rank || "-"}`, { parse_mode: "Markdown" });
    } catch (err) { ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });

  bot.command("stalkmlv2", async (ctx) => {
    const args = ctx.message.text.split(" ").slice(1);
    if (args.length < 2) return ctx.reply("⚔️ Format: `/stalkmlv2 <id> <server>`", { parse_mode: "Markdown" });
    const [id, server] = args;
    try {
      const { data } = await axios.get(`${config.vtechApiUrl}/api/stalk/ml-v2`, { params: { apikey: config.vtechApiKey, id, server }, timeout: 15000 });
      const r = data?.result || data?.data || data;
      ctx.reply(`⚔️ *Mobile Legends V2*\n\n👤 *Nama:* ${r?.name || r?.nickname || "-"}\n🆔 *ID:* ${id}\n🏅 *Level:* ${r?.level || "-"}\n⭐ *Rank:* ${r?.rankName || r?.rank || "-"}\n📊 *Win Rate:* ${r?.winRate || "-"}`, { parse_mode: "Markdown" });
    } catch (err) { ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
  });
};
