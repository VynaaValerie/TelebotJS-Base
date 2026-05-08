# VynaaBot — Telegram Bot

Bot Telegram Node.js berbasis grammY dengan sistem limit, premium, dan plugin modular.

## Stack
- **Runtime:** Node.js
- **Library:** grammY, axios
- **Database:** JSON flat-file (`/database/`)
- **Config:** `/settings/vynaa.json`

## Menjalankan Bot
```
node index.js
```

## Struktur Folder

```
├── index.js                  # Entry point, auto-load plugin, allowed_updates lengkap
├── settings/
│   └── vynaa.json            # Konfigurasi bot (termasuk maintenance flag)
├── database/
│   ├── users.json
│   ├── groups.json
│   ├── channels.json
│   └── groupdata.json        # Data per-grup (settings, warns, notes, filters, dll)
├── middleware/
│   ├── register.js           # Auto-register user
│   ├── limit.js              # Cek limit harian + maintenance mode
│   ├── loading.js            # Loading indicator
│   └── grupProtect.js        # Anti-flood, anti-link, anti-forward, blacklist, lock
├── utils/
│   ├── db.js                 # CRUD users/groups/channels + setCustomLimit + resetDailyUsage
│   ├── groupDb.js            # CRUD group settings (antibot, ro, warns, notes, dll)
│   ├── helper.js             # isOwner, mention, formatDate, sleep
│   └── grupHelper.js         # isAdmin, isBotAdmin, getTarget, formatTemplate, dll
└── plugins/
    ├── general/              # Tanpa limit
    │   ├── start.js
    │   ├── help.js           # Help menu lengkap (update 2025)
    │   └── profile.js
    ├── owner/                # Tanpa limit, owner only
    │   ├── stats.js          # /stats /userinfo (support reply)
    │   ├── premium.js        # /addprem /delprem /block /unblock /listprem /listblock (support reply)
    │   ├── broadcast.js      # /broadcast ke semua user
    │   └── manage.js         # /setlimit /resetlimit /resetlimitall /clearlimit
    │                         # /setdailylimit /grouplist /leavegroup
    │                         # /maintenance /eval /broadcastgrp
    ├── ai/                   # Kena limit harian (13 model AI)
    ├── anime/                # Kena limit (58+ karakter)
    ├── asupan/               # Kena limit (TikTok, Douyin, dll)
    └── grup/                 # Tanpa limit
        ├── welcome.js        # Welcome/bye (chat_member + fallback), anti-bot
        ├── moderation.js     # ban/unban/kick/mute/unmute/tban/tmute
        ├── warn.js           # warn/unwarn/warns/resetwarn/setwarnlimit
        ├── promote.js        # /promote /demote /settitle
        ├── protect.js        # antilink/antiflood/antiforward/blacklist
        ├── misc.js           # report/slowmode/invitelink/revokeinvite/members
        │                     # tagall/antibot/ro/cleardel/setgrouptitle/setgroupdesc
        ├── lock.js           # lock/unlock/locks
        ├── filter.js         # filter/stop/filters
        ├── notes.js          # save/get/notes/delnote
        ├── rules.js          # setrules/rules/clearrules
        ├── info.js           # id/info/adminlist/pin/unpin/purge
        └── settings.js       # /settings (tampil semua setting grup)
```

## Fitur Grup (Lengkap)

### Welcome & Bye
| Command | Fungsi |
|---|---|
| `/setwelcome <teks>` | Set pesan welcome (variabel: `{name}` `{mention}` `{username}` `{group}` `{id}`) |
| `/setbye <teks>` | Set pesan goodbye |
| `/welcome` | Preview welcome + status |
| `/bye` | Preview goodbye + status |
| `/togglewelcome` | Toggle welcome on/off |
| `/togglebye` | Toggle bye on/off |
| `/resetwelcome` | Reset ke default |
| `/resetbye` | Reset ke default |

> Fix: `chat_member` update diaktifkan via `allowed_updates` di `bot.start()` — welcome/bye kini bekerja di semua jenis grup termasuk supergroup.

### Moderasi
| Command | Fungsi |
|---|---|
| `/ban` | Ban user (reply/ID) |
| `/unban` | Unban user |
| `/kick` | Kick user |
| `/mute` | Mute user |
| `/unmute` | Unmute user |
| `/tban <waktu>` | Temporary ban (1m/1h/1d) |
| `/tmute <waktu>` | Temporary mute |
| `/warn` | Warn user |
| `/unwarn` | Hapus 1 warn |
| `/warns` | Lihat warns user |
| `/resetwarn` | Reset semua warn |
| `/setwarnlimit` | Set max warn (1-10) |
| `/promote` | Promote jadi admin |
| `/demote` | Demote ke member |
| `/settitle` | Set judul admin |

### Proteksi
| Command | Fungsi |
|---|---|
| `/antilink on/off` | Blokir link |
| `/antiflood <angka/off>` | Batas pesan/5 detik |
| `/antiforward on/off` | Blokir forward |
| `/antibot on/off` | Auto-kick bot yang join |
| `/ro on/off` | Readonly mode (lock semua member) |
| `/lock <tipe>` | Lock tipe konten |
| `/unlock <tipe>` | Unlock tipe konten |
| `/locks` | Status semua lock |
| `/blacklist <kata>` | Tambah kata terlarang |
| `/unblacklist <kata>` | Hapus kata terlarang |

### Utilities Grup
| Command | Fungsi |
|---|---|
| `/report` | Laporkan pesan ke semua admin |
| `/tagall <pesan>` | Mention semua admin |
| `/members` | Jumlah member grup |
| `/slowmode <detik/off>` | Set slowmode |
| `/invitelink` | Generate invite link |
| `/revokeinvite` | Revoke & buat link baru |
| `/setgrouptitle <nama>` | Ganti nama grup |
| `/setgroupdesc <desc>` | Ganti deskripsi grup |
| `/save` `/get` `/notes` `/delnote` | Sistem notes |
| `/setrules` `/rules` `/clearrules` | Peraturan grup |
| `/filter` `/stop` `/filters` | Auto-reply keyword |
| `/id` `/info` `/adminlist` | Info user/grup |
| `/pin` `/unpin` `/purge` | Manajemen pesan |
| `/settings` | Tampil semua setting grup |

## Fitur Owner (Lengkap)

| Command | Fungsi |
|---|---|
| `/stats` | Statistik lengkap bot |
| `/userinfo <id/reply>` | Detail user + limit info |
| `/addprem <id/reply>` | Tambah premium |
| `/delprem <id/reply>` | Hapus premium |
| `/listprem` | Daftar user premium |
| `/listblock` | Daftar user diblokir |
| `/block <id/reply>` | Blokir user |
| `/unblock <id/reply>` | Unblokir user |
| `/setlimit <id> <angka>` | Set limit custom per user |
| `/resetlimit <id/reply>` | Reset limit hari ini user |
| `/resetlimitall` | Reset limit semua user |
| `/clearlimit <id>` | Hapus custom limit |
| `/setdailylimit free/premium <angka>` | Ubah limit global |
| `/broadcast <pesan>` | Kirim ke semua user |
| `/broadcastgrp <pesan>` | Kirim ke semua grup |
| `/grouplist` | Daftar semua grup bot |
| `/leavegroup <chatid>` | Suruh bot keluar grup |
| `/maintenance on/off` | Mode maintenance |
| `/eval <code>` | Eksekusi kode JS |

## Injected Context

Setiap plugin menerima:

| Key | Keterangan |
|---|---|
| `bot` | Instance grammY Bot |
| `config` | Isi `settings/vynaa.json` |
| `db` | CRUD database users/groups |
| `helper` | `isOwner`, `mention`, `formatDate`, `sleep` |
| `axios` | HTTP client |
| `InputFile` | Untuk kirim file/media |

## API Base URL

`https://api.vtech.biz.id` — semua endpoint pakai `apikey` dari `settings/vynaa.json`

## Cara Tambah Plugin Baru

Buat file di `plugins/<kategori>/<nama>.js`:

```js
module.exports = ({ bot, config, db, helper, axios }) => {
  bot.command("nama", async (ctx) => {
    // zero import — semua sudah disuntikkan
  });
};
```

File langsung terbaca otomatis saat bot restart.

## Kategori Plugin & Limit

| Folder | Limit | Keterangan |
|---|---|---|
| `plugins/general` | Tidak | Semua user |
| `plugins/owner` | Tidak | Owner only |
| `plugins/grup` | Tidak | Semua user (grup) |
| `plugins/ai` | Ya | Free: 20x/hari, Premium: 999x/hari |
| `plugins/anime` | Ya | Sama dengan AI |
| `plugins/asupan` | Ya | Sama dengan AI |
