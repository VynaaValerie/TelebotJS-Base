const { InlineKeyboard } = require("grammy");

const CATEGORIES = {
  ai: {
    label: "🤖 AI Chat",
    content: (config) =>
      `🤖 *AI Chat*\n` +
      `_Model AI terbaik siap membantu kamu_\n\n` +
      `• /gita — Gita AI\n` +
      `• /ai4chat — AI4Chat\n` +
      `• /bibleai — Bible AI\n` +
      `• /deepseek — DeepSeek R1 \\(CF\\)\n` +
      `• /deepseekr1 — DeepSeek R1 Full\n` +
      `• /gemma12b — Gemma 3 12B\n` +
      `• /gemma7b — Gemma 7B LoRA\n` +
      `• /glm47 — GLM 4\\.7 Flash\n` +
      `• /gptoss — GPT\\-OSS 120B\n` +
      `• /groq — Groq Compound\n` +
      `• /phi2 — Phi\\-2\n` +
      `• /qwq — QwQ 32B\n` +
      `• /writecream — Writecream\n\n` +
      `_⚠️ Ada limit harian\\. Upgrade premium untuk lebih banyak\\!_`,
  },

  anime: {
    label: "🎌 Anime",
    content: () =>
      `🎌 *Anime*\n` +
      `_50\\+ karakter anime siap dipanggil\\!_\n\n` +
      `• /naruto • /sasuke • /itachi • /kakashi\n` +
      `• /hinata • /sakura • /tsunade • /minato\n` +
      `• /nezuko • /mikasa • /erza • /madara\n` +
      `• /megumin • /emilia • /kurumi • /waifu\n` +
      `• /rem • /inori • /elaina • /kotori\n` +
      `• /boruto • /shina • /gremory • /hestia\n` +
      `• /sagiri • /chitoge • /yumeko • /umaru\n` +
      `• /akira • /miku • /yuri • /shota\n` +
      `• /keneki • /rize • /onepiece • /pokemon\n` +
      `• /doraemon • /nsfwloli\n\n` +
      `• /auratail \\<query\\> — Cari anime\n\n` +
      `_⚠️ Ada limit harian\\._`,
  },

  asupan: {
    label: "🎬 Asupan",
    content: () =>
      `🎬 *Asupan Video*\n` +
      `_Konten video seru dari berbagai kreator_\n\n` +
      `• /anony — Video anonymous\n` +
      `• /asupan — Asupan random\n` +
      `• /bocil — Video bocil\n` +
      `• /cecan — Video cecan\n` +
      `• /douyin — Video Douyin\n` +
      `• /euni — Video Euni\n` +
      `• /gheayubi — Video Ghea Yubi\n` +
      `• /hijaber — Video hijaber\n` +
      `• /natajadeh — Video Nata Jadeh\n` +
      `• /rikagusriani — Video Rika\n` +
      `• /santuy — Video santuy\n` +
      `• /ukhty — Video ukhty\n` +
      `• /tiktok \\<query\\> — Cari TikTok\n\n` +
      `_⚠️ Ada limit harian\\._`,
  },

  cecan: {
    label: "💖 Cecan",
    content: () =>
      `💖 *Cecan*\n` +
      `_Foto cecan cantik dari berbagai negara & idola_\n\n` +
      `🌏 *Negara:*\n` +
      `• /cecanchina — China\n` +
      `• /cecanindo — Indonesia\n` +
      `• /cecanjapan — Japan\n` +
      `• /cecankorea — Korea\n` +
      `• /cecanmy — Malaysia\n` +
      `• /cecanthai — Thailand\n` +
      `• /cecanviet — Vietnam\n\n` +
      `👩 *Idola & Spesial:*\n` +
      `• /cecanhijaber — Hijaber\n` +
      `• /cecanjeni — Jeni \\(NewJeans\\)\n` +
      `• /cecanjiso — Jiso \\(Blackpink\\)\n` +
      `• /cecanjustine — Justina Xie\n` +
      `• /cecanrose — Rose \\(Blackpink\\)\n` +
      `• /cecanryujin — Ryujin \\(ITZY\\)`,
  },

  download: {
    label: "📥 Download",
    content: () =>
      `📥 *Download*\n` +
      `_Download media dari berbagai platform_\n\n` +
      `🎵 *Audio:*\n` +
      `• /ytmp3 \\<url/judul\\> — YouTube ke MP3\n` +
      `• /spotifydl \\<url\\> — Spotify\n` +
      `• /scdl \\<url\\> — SoundCloud\n\n` +
      `🎬 *Video:*\n` +
      `• /ytmp4 \\<url/judul\\> — YouTube ke MP4\n` +
      `• /tiktokdl \\<url\\> — TikTok \\(no watermark\\)\n` +
      `• /igdl \\<url\\> — Instagram\n` +
      `• /fbdl \\<url\\> — Facebook\n` +
      `• /threads \\<url\\> — Threads\n` +
      `• /douyindl \\<url\\> — Douyin\n` +
      `• /twdl \\<url\\> — Twitter/X\n` +
      `• /pindl \\<url\\> — Pinterest\n\n` +
      `🎮 *Game & Lainnya:*\n` +
      `• /play \\<judul\\> — Cari & download lagu\n` +
      `• /dltelesticker \\<url\\> — Sticker Telegram\n` +
      `• /dlstoryanime \\<url\\> — Story anime`,
  },

  search: {
    label: "🔍 Cari",
    content: () =>
      `🔍 *Pencarian*\n` +
      `_Cari informasi dari berbagai sumber_\n\n` +
      `🌐 *Web & Umum:*\n` +
      `• /wiki \\<kata\\> — Wikipedia Indonesia\n` +
      `• /googleweb \\<kata\\> — Google Web\n` +
      `• /googleimg \\<kata\\> — Google Gambar\n` +
      `• /kbbi \\<kata\\> — Kamus KBBI\n` +
      `• /chord \\<judul\\> — Chord lagu\n` +
      `• /lirik \\<judul\\> — Lirik lagu\n\n` +
      `🎵 *Musik & Video:*\n` +
      `• /yts \\<judul\\> — Cari YouTube\n` +
      `• /spotifysearch \\<judul\\> — Cari Spotify\n` +
      `• /tiktoksearch \\<kata\\> — Cari TikTok\n` +
      `• /ringtone \\<judul\\> — Cari ringtone\n\n` +
      `🛍️ *Lainnya:*\n` +
      `• /playstore \\<nama\\> — Cari Play Store\n` +
      `• /pinsearch \\<kata\\> — Cari Pinterest\n` +
      `• /sfile \\<nama\\> — Cari file Sfile\n` +
      `• /searchsticker \\<kata\\> — Cari stiker\n` +
      `• /happymod \\<nama\\> — Cari HappyMod\n` +
      `• /linkgroupwa \\<nama\\> — Cari grup WA`,
  },

  stalk: {
    label: "👀 Stalk",
    content: () =>
      `👀 *Stalk*\n` +
      `_Cek info akun & profil berbagai platform_\n\n` +
      `🎮 *Game:*\n` +
      `• /stalkml \\<id\\|server\\> — Mobile Legends\n` +
      `• /stalkmlv2 \\<id\\|server\\> — ML versi 2\n` +
      `• /stalkff \\<id\\|region\\> — Free Fire\n` +
      `• /stalkgenshin \\<uid\\|server\\> — Genshin Impact\n` +
      `• /stalkroblox \\<username\\> — Roblox\n` +
      `• /stalksupersus \\<id\\> — Super Sus\n` +
      `• /stalkhok \\<id\\> — Honor of Kings\n\n` +
      `📱 *Sosmed:*\n` +
      `• /stalkg \\<username\\> — Instagram\n` +
      `• /stalktt \\<username\\> — TikTok\n` +
      `• /stalktwitter \\<username\\> — Twitter/X\n` +
      `• /stalkyt \\<username/url\\> — YouTube\n` +
      `• /stalksnackvideo \\<username\\> — Snack Video\n\n` +
      `💻 *Developer:*\n` +
      `• /github \\<username\\> — GitHub profil\n` +
      `• /stalkrepo \\<user/repo\\> — GitHub repo\n` +
      `• /stalknpm \\<package\\> — NPM package`,
  },

  editfoto: {
    label: "🖼️ Edit Foto",
    content: () =>
      `🖼️ *Edit Foto*\n` +
      `_Filter & efek keren untuk foto_\n\n` +
      `✨ *Filter Dasar:*\n` +
      `• /blur — Blur foto\n` +
      `• /greyscale — Hitam putih\n` +
      `• /invert — Invert warna\n` +
      `• /beautiful — Efek beautiful\n` +
      `• /affect — Efek affect\n\n` +
      `😄 *Fun & Meme:*\n` +
      `• /facepalm — Facepalm meme\n` +
      `• /ship \\<reply 2 foto\\> — Ship 2 orang\n` +
      `• /tweet \\<teks\\> — Buat tweet palsu\n` +
      `• /deletememe — Delete this meme\n` +
      `• /sertifikat \\<nama\\> — Sertifikat\n\n` +
      `🔧 *Tools Foto:*\n` +
      `• /removebg — Hapus background\n` +
      `• /remini — Perjelas foto\n` +
      `• /recolor — Warnai foto\n` +
      `• /hdvideo — Perjelas video\n` +
      `• /nsfwdetect — Deteksi NSFW\n` +
      `• /agedetect — Deteksi umur`,
  },

  maker: {
    label: "🎨 Maker",
    content: () =>
      `🎨 *Maker & Generator*\n` +
      `_Buat gambar & konten kreatif_\n\n` +
      `🖌️ *Text & Sticker:*\n` +
      `• /attp \\<teks\\> — Animasi teks stiker\n` +
      `• /ttp \\<teks\\> — Teks ke stiker\n` +
      `• /brat \\<teks\\> — Brat style\n` +
      `• /bratgif \\<teks\\> — Brat GIF\n` +
      `• /carbon \\<kode\\> — Kode ke gambar\n\n` +
      `🤖 *Jadi Anime/Cartoon:*\n` +
      `• /jadianime — Foto jadi anime\n` +
      `• /jadianime3d — Foto jadi anime 3D\n` +
      `• /jadisdmtinggi — Style SDM Tinggi\n\n` +
      `🖼️ *AI Generate:*\n` +
      `• /text2img \\<prompt\\> — Text to image\n` +
      `• /stablediffusion \\<prompt\\> — Stable Diffusion\n` +
      `• /openaiimg \\<prompt\\> — OpenAI image\n` +
      `• /img2prompt — Gambar ke teks prompt\n\n` +
      `📄 *Lainnya:*\n` +
      `• /quotesvideo \\<teks\\> — Quote video\n` +
      `• /spotifycard \\<judul\\> — Kartu Spotify\n` +
      `• /tofigure — Foto jadi action figure`,
  },

  textpro: {
    label: "✍️ TextPro",
    content: () =>
      `✍️ *TextPro & Ephoto*\n` +
      `_Teks & nama kamu jadi keren!_\n\n` +
      `🔥 *TextPro Populer:*\n` +
      `• /blood \\<teks\\> — Efek darah\n` +
      `• /glitch \\<teks\\> — Efek glitch\n` +
      `• /ice \\<teks\\> — Efek es\n` +
      `• /neon \\<teks\\> — Efek neon\n` +
      `• /makertextpro \\<teks\\> — TextPro custom\n\n` +
      `🌌 *Ephoto Style:*\n` +
      `• /blackpink \\<nama\\> — Blackpink style\n` +
      `• /dragonfire \\<nama\\> — Dragon fire\n` +
      `• /galaxy \\<nama\\> — Galaxy style\n` +
      `• /nightstars \\<nama\\> — Night stars\n` +
      `• /ephotoradio \\<nama\\> — Radio style\n\n` +
      `🎨 *Photooxy \\(50\\+ style\\):*\n` +
      `• /tpwolf • /tpnaruto • /tpjoker\n` +
      `• /tpmarvel2 • /tpscifi • /tpspace\n` +
      `• /tpblackpink • /tpharrypotter\n` +
      `• /tpninja • /tpgrafity • /tpglitch2\n` +
      `_dan masih banyak lagi\\!_`,
  },

  tools: {
    label: "🛠️ Tools",
    content: () =>
      `🛠️ *Tools*\n` +
      `_Berbagai alat serba guna_\n\n` +
      `🔐 *Encode & Keamanan:*\n` +
      `• /base64encode \\<teks\\> — Encode base64\n` +
      `• /base64decode \\<teks\\> — Decode base64\n` +
      `• /vccgen — Generate VCC\n` +
      `• /2fa \\<secret\\> — Generate OTP 2FA\n\n` +
      `🌐 *Web & URL:*\n` +
      `• /ssweb \\<url\\> — Screenshot web\n` +
      `• /sswebhp \\<url\\> — Screenshot HP\n` +
      `• /sstablet \\<url\\> — Screenshot tablet\n` +
      `• /tinyurl \\<url\\> — Perkecil URL\n` +
      `• /bitly \\<url\\> — Bit\\.ly URL\n` +
      `• /cekredirect \\<url\\> — Cek redirect\n` +
      `• /whois \\<domain\\> — Info domain\n` +
      `• /web2zip \\<url\\> — Web ke ZIP\n\n` +
      `🔊 *Audio & Video:*\n` +
      `• /tts \\<teks\\> — Text to speech\n` +
      `• /voiceremover — Pisah vokal\n` +
      `• /video2audio — Ambil audio dari video\n` +
      `• /webp2mp4 — WebP ke MP4\n` +
      `• /webp2png — WebP ke PNG\n\n` +
      `💡 *Lainnya:*\n` +
      `• /translate \\<teks\\> — Terjemahkan\n` +
      `• /cuaca \\<kota\\> — Cek cuaca\n` +
      `• /jadwalshalat \\<kota\\> — Jadwal sholat\n` +
      `• /bmkg — Info gempa terbaru\n` +
      `• /cekpln \\<id\\> — Cek tagihan PLN\n` +
      `• /cekewallet \\<no\\> — Cek e\\-wallet\n` +
      `• /tempmail — Buat email temp\n` +
      `• /randomaddress — Alamat random`,
  },

  game: {
    label: "🎮 Game",
    content: () =>
      `🎮 *Game & Kuis*\n` +
      `_Ayo main dan buktiin kemampuanmu!_\n\n` +
      `🧠 *Tebak\\-tebakan:*\n` +
      `• /tebakemoji — Tebak emoji\n` +
      `• /tebakkata — Tebak kata\n` +
      `• /tebakgambar — Tebak gambar\n` +
      `• /tekateki — Teka\\-teki seru\n` +
      `• /asahotak — Asah otak\n` +
      `• /math — Matematika cepat\n\n` +
      `🎭 *Kuis Tambahan:*\n` +
      `• /tebakemoji — Tebak emoji\n` +
      `• /tebakheroml — Tebak hero ML\n` +
      `• /tebakpokemon — Tebak Pokemon\n` +
      `• /tebakdrakor — Tebak drakor\n` +
      `• /tebaklagu — Tebak lagu\n` +
      `• /tebakmakanan — Tebak makanan\n` +
      `• /tebakpop — Tebak lagu pop\n` +
      `• /tebakkabupaten — Tebak kabupaten\n` +
      `• /tebakpresiden — Tebak presiden\n` +
      `• /tebakjkt48 — Tebak member JKT48\n` +
      `• /susunkata — Susun kata acak\n` +
      `• /kuisislami — Kuis Islami\n` +
      `• /kuismerdeka — Kuis kemerdekaan`,
  },

  sticker: {
    label: "🎴 Sticker",
    content: () =>
      `🎴 *Sticker & Emoji*\n` +
      `_Stiker lucu dan emoji seru!_\n\n` +
      `🎭 *Pack Sticker:*\n` +
      `• /stickrandom — Stiker random\n` +
      `• /stickanimegif — Stiker anime GIF\n` +
      `• /stickpatrick — Stiker Patrick\n` +
      `• /stickdoge — Stiker Doge\n` +
      `• /stickspongebob — Stiker SpongeBob\n` +
      `• /stickgojo — Stiker Gojo Satoru\n` +
      `• /stickgura — Stiker Gura\n` +
      `• /stickpaimon — Stiker Paimon\n` +
      `• /stickchat — Stiker Chat\n` +
      `• /stickbucin — Stiker Bucin\n` +
      `• /stickdadu — Stiker Dadu\n\n` +
      `😊 *Emoji:*\n` +
      `• /emojimix \\<emoji\\+emoji\\> — Mix emoji\n` +
      `• /emojipedia \\<emoji\\> — Info emoji\n` +
      `• /ewhatsapp \\<emoji\\> — Style WhatsApp\n` +
      `• /esamsung \\<emoji\\> — Style Samsung\n` +
      `• /etwitter \\<emoji\\> — Style Twitter\n` +
      `• /egoogle \\<emoji\\> — Style Google`,
  },

  konten: {
    label: "📖 Konten",
    content: () =>
      `📖 *Konten & Inspirasi*\n` +
      `_Cerita, quotes, dan konten menarik_\n\n` +
      `📝 *Cerpen \\(50\\+ genre\\):*\n` +
      `• /cerpen — Cerpen random\n` +
      `• /cerpenromantis — Cerpen romantis\n` +
      `• /cerpenmisteri — Cerpen misteri\n` +
      `• /cerpenpetualangan — Petualangan\n` +
      `• /cerpenmotivasi — Motivasi\n` +
      `• /cerpengalau — Galau\n` +
      `• /cerpenremaja — Remaja\n` +
      `• /cerpenpersahabatan — Persahabatan\n` +
      `_dan banyak genre lainnya\\!_\n\n` +
      `💬 *Quotes:*\n` +
      `• /quotes — Quotes random\n` +
      `• /motivasi — Kata motivasi\n` +
      `• /katabucin — Kata bucin\n` +
      `• /quotesanime — Quotes anime\n` +
      `• /bijak — Kata bijak\n` +
      `• /ngawur — Kata ngawur\n\n` +
      `📰 *Berita:*\n` +
      `• /newskompas • /newscnn • /newscnbc\n` +
      `• /newsdetik • /newstribun • /newsinews`,
  },

  random: {
    label: "🌟 Random",
    content: () =>
      `🌟 *Wallpaper & Random*\n` +
      `_Gambar & konten random estetik_\n\n` +
      `🖼️ *Wallpaper:*\n` +
      `• /waesthetic — Wallpaper aesthetic\n` +
      `• /wgaming — Gaming wallpaper\n` +
      `• /wpubg — PUBG wallpaper\n` +
      `• /wmountain — Pemandangan gunung\n` +
      `• /wkucing — Foto kucing lucu\n` +
      `• /wmobil — Wallpaper mobil\n` +
      `• /wmotor — Wallpaper motor\n` +
      `• /wtatasurya — Tata surya\n` +
      `• /wcyberspace — Cyberspace\n` +
      `• /wkpop — K\\-Pop wallpaper\n` +
      `• /wislami — Islami wallpaper\n` +
      `• /wkartun — Kartun\n` +
      `• /wteknologi — Teknologi\n` +
      `• /wprograming — Programming\n` +
      `• /wmeme — Meme random\n\n` +
      `🎲 *Fun Random:*\n` +
      `• /dare — Dare random\n` +
      `• /truth — Truth random\n` +
      `• /jodoh — Pasangan random\n` +
      `• /fakta — Fakta unik`,
  },

  primbon: {
    label: "🔮 Primbon",
    content: () =>
      `🔮 *Primbon & Ramalan*\n` +
      `_Ramalan, weton, dan sifat karakter_\n\n` +
      `📅 *Weton Jawa:*\n` +
      `• /weton \\<tanggal lahir\\> — Hitung weton\n` +
      `• /rejekiweton \\<weton\\> — Rejeki weton\n` +
      `• /haribaik \\<weton\\> — Hari baik\n` +
      `• /harinaas \\<weton\\> — Hari naas\n` +
      `• /harisangar \\<weton\\> — Hari sangar\n` +
      `• /pekerjaanweton \\<weton\\> — Pekerjaan\n\n` +
      `💘 *Ramalan Cinta:*\n` +
      `• /ramalancinta \\<nama\\> — Ramalan cinta\n` +
      `• /tanggaljadian — Tanggal jadian lucky\n` +
      `• /jodoh \\<nama\\> — Kecocokan jodoh\n\n` +
      `✨ *Sifat & Karakter:*\n` +
      `• /sifatkarakter \\<nama\\> — Sifat dari nama\n` +
      `• /artinama \\<nama\\> — Arti nama\n` +
      `• /artimimpi \\<mimpi\\> — Arti mimpi\n` +
      `• /artitarot \\<kartu\\> — Tarot\n` +
      `• /nomerhoki \\<nama\\> — Nomor hoki\n` +
      `• /arahrejeki \\<weton\\> — Arah rejeki`,
  },

  berita: {
    label: "📰 Berita",
    content: () =>
      `📰 *Berita Terkini*\n` +
      `_Berita terbaru dari berbagai media_\n\n` +
      `• /cnbcid — CNBC Indonesia\n` +
      `• /kumparan — Kumparan\n` +
      `• /merdeka — Merdeka terbaru\n` +
      `• /merdekacat \\<kategori\\> — Merdeka per kategori\n` +
      `• /okezone — Okezone\n` +
      `• /sindonews — Sindonews\n\n` +
      `_Kategori Merdeka: otomotif, politik, teknologi, olahraga, hiburan, internasional_`,
  },

  islamic: {
    label: "☪️ Islamic",
    content: () =>
      `☪️ *Islamic*\n` +
      `_Konten Islami — doa, niat, surah, kisah nabi_\n\n` +
      `🤲 *Doa & Ibadah:*\n` +
      `• /doaharian — Doa harian random\n` +
      `• /asmaulhusna — Asmaul Husna random\n` +
      `• /bacaanshalat — Bacaan shalat random\n` +
      `• /tahlil — Bacaan tahlil random\n` +
      `• /wirid — Wirid setelah shalat\n\n` +
      `🕌 *Niat Shalat:*\n` +
      `• /niatshubuh • /niatdzuhur\n` +
      `• /niatashar • /niatmaghrib • /niatisya\n\n` +
      `📖 *Al\\-Quran:*\n` +
      `• /surah \\<1\\-114\\> — Baca surah\n` +
      `• /tafsir \\<kata\\> — Tafsir surah\n\n` +
      `📚 *Kisah Nabi:*\n` +
      `• /listnabi — Daftar 25 nabi\n` +
      `• /kisahnabi \\<nama\\> — Kisah lengkap`,
  },

  nsfw: {
    label: "🔞 NSFW",
    content: () =>
      `🔞 *NSFW*\n` +
      `_Konten dewasa — hanya 18\\+_\n\n` +
      `• /nsfwgifs — GIF NSFW random\n` +
      `• /nsfwgay — NSFW gay\n` +
      `• /nsfwyuri — NSFW yuri\n` +
      `• /hentai — Hentai random\n` +
      `• /ahegao — Ahegao\n` +
      `• /jahy — Jahy\\-sama\n` +
      `• /neko — Neko random\n` +
      `• /yuri — Yuri random\n` +
      `• /manga — Manga panel\n\n` +
      `_⚠️ Hanya aktif di grup yang diizinkan oleh admin\\._`,
  },

  grup_mod: {
    label: "🛡️ Moderasi",
    content: () =>
      `🛡️ *Grup — Moderasi*\n` +
      `_Kelola anggota dengan mudah_\n\n` +
      `• /ban — Ban user \\(reply/ID/@username\\)\n` +
      `• /unban — Unban user\n` +
      `• /kick — Kick user\n` +
      `• /mute — Bisukan user\n` +
      `• /unmute — Aktifkan lagi\n` +
      `• /tban \\<1m/1h/1d\\> — Ban sementara\n` +
      `• /tmute \\<1m/1h/1d\\> — Mute sementara\n` +
      `• /warn — Peringatkan user\n` +
      `• /unwarn — Hapus 1 warn\n` +
      `• /warns — Lihat daftar warn\n` +
      `• /resetwarn — Reset semua warn\n` +
      `• /setwarnlimit — Set batas warn \\(1\\-10\\)\n` +
      `• /promote — Jadikan admin\n` +
      `• /demote — Turunkan dari admin\n` +
      `• /settitle — Set judul admin`,
  },

  grup_protect: {
    label: "🔒 Proteksi",
    content: () =>
      `🔒 *Grup — Proteksi*\n` +
      `_Lindungi grup dari spam & konten negatif_\n\n` +
      `• /antilink on/off — Blokir semua link\n` +
      `• /antiflood \\<angka/off\\> — Batas pesan/5 detik\n` +
      `• /antiforward on/off — Blokir forward\n` +
      `• /antibot on/off — Auto\\-kick bot masuk\n` +
      `• /ro on/off — Readonly \\(lock semua member\\)\n` +
      `• /lock \\<tipe\\> — Kunci tipe konten\n` +
      `• /unlock \\<tipe\\> — Buka kunci\n` +
      `• /locks — Status semua lock\n` +
      `• /blacklist \\<kata\\> — Tambah kata terlarang\n` +
      `• /unblacklist \\<kata\\> — Hapus\n\n` +
      `_Tipe lock: sticker gif photo video audio document url forward bot_`,
  },

  grup_util: {
    label: "⚙️ Grup Util",
    content: () =>
      `⚙️ *Grup — Utilities*\n` +
      `_Tools serba guna untuk admin grup_\n\n` +
      `*Welcome & Bye:*\n` +
      `• /setwelcome • /setbye\n` +
      `• /welcome • /bye \\(preview\\)\n` +
      `• /togglewelcome • /togglebye\n` +
      `• /resetwelcome • /resetbye\n\n` +
      `*Tools:*\n` +
      `• /report — Laporkan ke semua admin\n` +
      `• /tagall — Mention semua admin\n` +
      `• /members — Jumlah member grup\n` +
      `• /slowmode \\<detik/off\\>\n` +
      `• /invitelink • /revokeinvite\n` +
      `• /setgrouptitle • /setgroupdesc\n\n` +
      `*Data Grup:*\n` +
      `• /save • /get • /notes • /delnote\n` +
      `• /setrules • /rules • /clearrules\n` +
      `• /filter • /stop • /filters\n` +
      `• /pin • /unpin • /purge\n` +
      `• /id • /info • /adminlist\n` +
      `• /settings — Lihat semua setting`,
  },

  owner: {
    label: "🔑 Owner",
    ownerOnly: true,
    content: () =>
      `🔑 *Owner Commands*\n\n` +
      `📊 *Statistik & Info:*\n` +
      `• /stats — Statistik lengkap bot\n` +
      `• /userinfo — Detail info user\n` +
      `• /grouplist — Daftar semua grup\n\n` +
      `👑 *Premium & Block:*\n` +
      `• /addprem \\<id/@username/reply\\>\n` +
      `• /delprem \\<id/@username/reply\\>\n` +
      `• /listprem — Daftar premium\n` +
      `• /block \\<id/@username/reply\\>\n` +
      `• /unblock \\<id/@username/reply\\>\n` +
      `• /listblock — Daftar diblokir\n\n` +
      `⚙️ *Limit:*\n` +
      `• /setlimit \\<id/@username\\> \\<angka\\>\n` +
      `• /resetlimit — Reset limit hari ini\n` +
      `• /resetlimitall — Reset semua user\n` +
      `• /clearlimit — Hapus custom limit\n` +
      `• /setdailylimit free/premium \\<angka\\>\n\n` +
      `📡 *Broadcast & Manage:*\n` +
      `• /broadcast — Kirim ke semua user\n` +
      `• /broadcastgrp — Kirim ke semua grup\n` +
      `• /leavegroup \\<chat\\_id\\>\n` +
      `• /maintenance on/off\n` +
      `• /eval — Eksekusi kode JS`,
  },
};

function buildMainMenu(isOwner) {
  const kb = new InlineKeyboard()
    // baris 1: kiri | kanan
    .text("🤖 AI Chat",    "help:ai")
    .text("🎌 Anime",      "help:anime")
    .row()
    // baris 2: tengah
    .text("🎬 Asupan",     "help:asupan")
    .row()
    // baris 3: kiri | kanan
    .text("💖 Cecan",      "help:cecan")
    .text("📥 Download",   "help:download")
    .row()
    // baris 4: tengah
    .text("🔍 Cari",       "help:search")
    .row()
    // baris 5: kiri | kanan
    .text("👀 Stalk",      "help:stalk")
    .text("🖼️ Edit Foto",  "help:editfoto")
    .row()
    // baris 6: tengah
    .text("🎨 Maker",      "help:maker")
    .row()
    // baris 7: kiri | kanan
    .text("✍️ TextPro",    "help:textpro")
    .text("🛠️ Tools",      "help:tools")
    .row()
    // baris 8: tengah
    .text("🎮 Game",       "help:game")
    .row()
    // baris 9: kiri | kanan
    .text("🎴 Sticker",    "help:sticker")
    .text("📖 Konten",     "help:konten")
    .row()
    // baris 10: tengah
    .text("🌟 Random",     "help:random")
    .row()
    // baris 11: kiri | kanan
    .text("🔮 Primbon",    "help:primbon")
    .text("📰 Berita",     "help:berita")
    .row()
    // baris 12: tengah
    .text("☪️ Islamic",    "help:islamic")
    .row()
    // baris 13: kiri | kanan
    .text("🔞 NSFW",       "help:nsfw")
    .text("⚙️ Grup Util",  "help:grup_util")
    .row()
    // baris 14: tengah
    .text("🛡️ Moderasi",   "help:grup_mod")
    .row()
    // baris 15: penuh
    .text("🔒 Proteksi Grup", "help:grup_protect");
  if (isOwner) kb.row().text("🔑 Owner Commands", "help:owner");
  return kb;
}

function buildBackButton() {
  return new InlineKeyboard().text("« Kembali ke Menu", "help:main");
}

function getBadge(isOwner, isPremium) {
  if (isOwner) return "🔑 Owner";
  if (isPremium) return "👑 Premium";
  return "🆓 Free";
}

module.exports = ({ bot, config, db, helper }) => {

  bot.command("help", async (ctx) => {
    const user = db.getUser(ctx.from.id);
    const isOwner = helper.isOwner(ctx.from.id);
    const isPremium = user?.isPremium || false;
    const limit = user?.customLimit ?? (isPremium ? config.premiumLimit : config.dailyLimit);
    const badge = getBadge(isOwner, isPremium);

    return ctx.reply(
      `📋 *${config.botName} — Menu Utama*\n\n` +
      `👤 Status: *${badge}*\n` +
      `📊 Limit: *${limit}x/hari*\n\n` +
      `Pilih kategori di bawah:`,
      {
        parse_mode: "Markdown",
        reply_markup: buildMainMenu(isOwner),
      }
    );
  });

  bot.callbackQuery(/^help:(.+)$/, async (ctx) => {
    const key = ctx.match[1];
    await ctx.answerCallbackQuery();

    if (key === "main") {
      const user = db.getUser(ctx.from.id);
      const isOwner = helper.isOwner(ctx.from.id);
      const isPremium = user?.isPremium || false;
      const limit = user?.customLimit ?? (isPremium ? config.premiumLimit : config.dailyLimit);
      const badge = getBadge(isOwner, isPremium);

      return ctx.editMessageText(
        `📋 *${config.botName} — Menu Utama*\n\n` +
        `👤 Status: *${badge}*\n` +
        `📊 Limit: *${limit}x/hari*\n\n` +
        `Pilih kategori di bawah:`,
        {
          parse_mode: "Markdown",
          reply_markup: buildMainMenu(isOwner),
        }
      );
    }

    const cat = CATEGORIES[key];
    if (!cat) return;

    if (cat.ownerOnly && !helper.isOwner(ctx.from.id)) {
      return ctx.answerCallbackQuery("❌ Hanya owner yang bisa melihat ini.", { show_alert: true });
    }

    const text = typeof cat.content === "function" ? cat.content(config) : cat.content;

    return ctx.editMessageText(text, {
      parse_mode: "MarkdownV2",
      reply_markup: buildBackButton(),
    });
  });
};
