module.exports = ({ bot, config, axios, InputFile }) => {
  const list = [
    { cmd: "tp3dstone", ep: "3dstone", label: "3D Stone" },
    { cmd: "tpart", ep: "art-papper", label: "Art Papper" },
    { cmd: "tpavengers", ep: "avengers-logo", label: "Avengers" },
    { cmd: "tpbatman", ep: "batman-logo", label: "Batman" },
    { cmd: "tpblackpink", ep: "black-pink", label: "Blackpink" },
    { cmd: "tpblackpink2", ep: "black-pink2", label: "Blackpink 2" },
    { cmd: "tpbread", ep: "bread", label: "Bread" },
    { cmd: "tpbrokenglass", ep: "broken-glass", label: "Broken Glass" },
    { cmd: "tpcaptain", ep: "captain", label: "Captain America" },
    { cmd: "tpchristmas", ep: "christmas", label: "Christmas" },
    { cmd: "tpdeluxesilver", ep: "deluxe-silver", label: "Deluxe Silver" },
    { cmd: "tpdropwater", ep: "drop-water", label: "Drop Water" },
    { cmd: "tpengraved", ep: "engraved", label: "Engraved" },
    { cmd: "tpfabric", ep: "fabric", label: "Fabric" },
    { cmd: "tpgiraffe", ep: "giraffe", label: "Giraffe" },
    { cmd: "tpglitch2", ep: "glitch2", label: "Glitch 2" },
    { cmd: "tpglossy", ep: "glossy", label: "Glossy" },
    { cmd: "tpglue", ep: "glue-text", label: "Glue Text" },
    { cmd: "tpgrafity", ep: "grafity-text", label: "Grafity Text" },
    { cmd: "tpgrafity2", ep: "grafity-text2", label: "Grafity Text 2" },
    { cmd: "tphalowen", ep: "hallowen-text", label: "Halloween" },
    { cmd: "tpharrypotter", ep: "harry-potter", label: "Harry Potter" },
    { cmd: "tpholograpic", ep: "holograpic", label: "Holograpic" },
    { cmd: "tphoney", ep: "honey", label: "Honey" },
    { cmd: "tphororbllod", ep: "horor-blood", label: "Horror Blood" },
    { cmd: "tpjoker", ep: "joker-logo", label: "Joker" },
    { cmd: "tpkoi", ep: "koi", label: "Koi" },
    { cmd: "tplarva", ep: "larva", label: "Larva" },
    { cmd: "tplionlogo", ep: "lion-logo", label: "Lion Logo" },
    { cmd: "tplogowolf", ep: "logo-wolf", label: "Logo Wolf" },
    { cmd: "tplogowolf2", ep: "logo-wolf2", label: "Logo Wolf 2" },
    { cmd: "tpmagma", ep: "magma", label: "Magma" },
    { cmd: "tpmarvel2", ep: "marvel-logo2", label: "Marvel Logo 2" },
    { cmd: "tpmarvel3", ep: "marvel-logo3", label: "Marvel Logo 3" },
    { cmd: "tpmulticolor", ep: "multi-color", label: "Multi Color" },
    { cmd: "tpnaturalleaves", ep: "natural-leaves", label: "Natural Leaves" },
    { cmd: "tpneondevil", ep: "neon-devil", label: "Neon Devil" },
    { cmd: "tpneononline", ep: "neon-online", label: "Neon Online" },
    { cmd: "tpninja", ep: "ninja-logo", label: "Ninja Logo" },
    { cmd: "tppornhub", ep: "pornhub", label: "Pornhub Style" },
    { cmd: "tprobot", ep: "robot", label: "Robot" },
    { cmd: "tprusty", ep: "rusty", label: "Rusty" },
    { cmd: "tpscifi", ep: "scifi", label: "Sci-Fi" },
    { cmd: "tpskytext", ep: "sky-text", label: "Sky Text" },
    { cmd: "tpspace", ep: "space", label: "Space" },
    { cmd: "tpstroberi", ep: "stroberi", label: "Stroberi" },
    { cmd: "tpthunder2", ep: "thunder2", label: "Thunder 2" },
    { cmd: "tptoxic", ep: "toxic-bokeh", label: "Toxic Bokeh" },
    { cmd: "tpvalentine", ep: "valentine", label: "Valentine" },
    { cmd: "tpvalentine2", ep: "valentine2", label: "Valentine 2" },
    { cmd: "tpvintage", ep: "vintage", label: "Vintage" },
    { cmd: "tpwatercolor", ep: "water-color", label: "Water Color" },
    { cmd: "tpwicker", ep: "wicker", label: "Wicker" },
    { cmd: "tpwriting", ep: "writing", label: "Writing" },
    { cmd: "ttp", ep: "ttp", label: "TTP" },
  ];
  for (const { cmd, ep, label } of list) {
    bot.command(cmd, async (ctx) => {
      const text = ctx.message.text.split(" ").slice(1).join(" ").trim();
      if (!text) return ctx.reply(`✏️ Format: \`/${cmd} <teks>\``, { parse_mode: "Markdown" });
      const wait = await ctx.reply("✨ _Membuat efek teks..._", { parse_mode: "Markdown" });
      try {
        const { data } = await axios.get(`${config.vtechApiUrl}/api/textpro/${ep}`, { params: { apikey: config.vtechApiKey, text }, responseType: "arraybuffer", timeout: 25000 });
        await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {});
        return ctx.replyWithPhoto(new InputFile(Buffer.from(data), `${ep}.jpg`), { caption: `✨ *${label}:* ${text}`, parse_mode: "Markdown" });
      } catch (err) { await ctx.api.deleteMessage(ctx.chat.id, wait.message_id).catch(() => {}); ctx.reply(`❌ Gagal: \`${err.message}\``, { parse_mode: "Markdown" }); }
    });
  }
};
