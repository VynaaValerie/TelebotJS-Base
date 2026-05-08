const ANIME_CMDS = new Set([
  "akira","akiyama","ana","asuna","ayuzawa","boruto","chiho","chitoge",
  "deidara","doraemon","eba","elaina","emilia","erza","gremory","hestia",
  "hinata","husbu","inori","isuzu","itachi","itori","kaga","kagura",
  "kakasih","kaori","keneki","kotori","kurumi","madara","megumin","mikasa",
  "miku","minato","naruto","nezuko","nsfwloli","onepiece","pokemon","rize",
  "sagiri","sakura","sasuke","shina","shinka","shinomiya","shizuka","shota",
  "tejina","toukachan","tsunade","umaru","waifu","waifu2","yotsuba",
  "yumeko","yuri","auratail",
]);

const ASUPAN_CMDS = new Set([
  "anony","asupan","bocil","cecan","douyin","euni","gheayubi",
  "hijaber","natajadeh","rikagusriani","santuy","ukhty","tiktok",
]);

module.exports = async (ctx, next) => {
  const text = ctx.message?.text;
  if (!text?.startsWith("/")) return next();

  const cmd = text.split(" ")[0].slice(1).split("@")[0].toLowerCase();

  let action;
  if (ASUPAN_CMDS.has(cmd))     action = "upload_video";
  else if (ANIME_CMDS.has(cmd)) action = "upload_photo";
  else                           action = "typing";

  await ctx.replyWithChatAction(action).catch(() => {});
  await ctx.react("⏳").catch(() => {});

  const interval = setInterval(() => ctx.replyWithChatAction(action).catch(() => {}), 4000);

  try {
    await next();
  } finally {
    clearInterval(interval);
  }
};
