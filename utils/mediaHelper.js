async function getPhotoUrl(ctx, config) {
  let fileId = null;
  const msg = ctx.message;

  if (msg?.photo?.length) {
    fileId = msg.photo[msg.photo.length - 1].file_id;
  } else if (msg?.reply_to_message?.photo?.length) {
    fileId = msg.reply_to_message.photo[msg.reply_to_message.photo.length - 1].file_id;
  } else if (msg?.sticker?.file_id) {
    fileId = msg.sticker.file_id;
  } else if (msg?.reply_to_message?.sticker?.file_id) {
    fileId = msg.reply_to_message.sticker.file_id;
  }

  if (!fileId) return null;
  const file = await ctx.api.getFile(fileId);
  return `https://api.telegram.org/file/bot${config.token}/${file.file_path}`;
}

async function sendMedia(ctx, axios, InputFile, url, caption, opts = {}) {
  const res = await axios.get(url, { responseType: "arraybuffer", timeout: 30000 });
  const ct = res.headers["content-type"] || "";
  const buf = Buffer.from(res.data);
  const base = { caption, parse_mode: "Markdown", ...opts };

  if (ct.includes("video") || url.match(/\.(mp4|webm|mov)(\?|$)/i)) {
    return ctx.replyWithVideo(new InputFile(buf, "media.mp4"), base);
  } else if (ct.includes("audio") || url.match(/\.(mp3|ogg|opus|wav)(\?|$)/i)) {
    return ctx.replyWithAudio(new InputFile(buf, "media.mp3"), base);
  } else {
    return ctx.replyWithPhoto(new InputFile(buf, "media.jpg"), base);
  }
}

module.exports = { getPhotoUrl, sendMedia };
