# Daftar Semua Endpoint API Vyna (670 Endpoint)

Base URL: `https://api.vtech.biz.id`

**Keterangan Tipe Respons:**
- `JSON` = Respon data teks/info
- `Image (URL)` = JSON berisi URL gambar (PNG/JPG/GIF)
- `Audio (MP3 URL)` = JSON berisi URL audio MP3
- `Video (MP4 URL)` = JSON berisi URL video MP4
- `JSON (Download Link)` = JSON berisi link download media

**Keterangan Plan:** `free` = gratis, `premium` = berbayar, `vip` = VIP

---

## AI (13 endpoint)

| No | Nama | Method | Params | Tipe Respon | Plan | Link Contoh |
|----|------|--------|--------|-------------|------|-------------|
| 1 | AI - AI4Chat | GET | text | JSON | free | [/api/ai/ai4chat](https://api.vtech.biz.id/api/ai/ai4chat?apikey=ApiPinaa&text=Halo%2C%20siapa%20kamu%3F) |
| 2 | AI - Bible AI | GET | question, translation | JSON | free | [/api/ai/bibleai](https://api.vtech.biz.id/api/ai/bibleai?apikey=ApiPinaa&question=What%20is%20faith%3F&translation=ESV) |
| 3 | AI - DeepSeek R1 (CF) | GET | text | JSON | free | [/api/ai/deepseek-r1](https://api.vtech.biz.id/api/ai/deepseek-r1?apikey=ApiPinaa&text=Jelaskan%20cara%20kerja%20neural%20network) |
| 4 | AI - Gemma 3 12B (CF) | GET | text | JSON | free | [/api/ai/gemma-3-12b](https://api.vtech.biz.id/api/ai/gemma-3-12b?apikey=ApiPinaa&text=Apa%20itu%20machine%20learning%3F) |
| 5 | AI - Gemma 7B LoRA (CF) | GET | text | JSON | free | [/api/ai/gemma-7b-lora](https://api.vtech.biz.id/api/ai/gemma-7b-lora?apikey=ApiPinaa&text=Tulis%20puisi%20tentang%20laut) |
| 6 | AI - DeepSeek R1 | GET | prompt, system, temperature | JSON | free | [/api/ai/deepseekr1](https://api.vtech.biz.id/api/ai/deepseekr1?apikey=ApiPinaa&prompt=Halo%2C%20siapa%20kamu%3F&system=You%20are%20a%20helpful%20assistant.&temperature=0.7) |
| 7 | AI - Gita | GET | q | JSON | free | [/api/ai/gita](https://api.vtech.biz.id/api/ai/gita?apikey=ApiPinaa&q=What%20is%20karma%3F) |
| 8 | AI - GLM 4.7 Flash | GET | prompt, system, temperature | JSON | free | [/api/ai/glm47flash](https://api.vtech.biz.id/api/ai/glm47flash?apikey=ApiPinaa&prompt=Halo%2C%20siapa%20kamu%3F&system=You%20are%20a%20helpful%20assistant.&temperature=0.7) |
| 9 | AI - GPT-OSS 120B | GET | prompt, system, temperature | JSON | free | [/api/ai/gptoss120b](https://api.vtech.biz.id/api/ai/gptoss120b?apikey=ApiPinaa&prompt=Halo%2C%20siapa%20kamu%3F&system=You%20are%20a%20helpful%20assistant.&temperature=0.7) |
| 10 | AI - Groq Compound | GET | text, systemPrompt, sessionId | JSON | free | [/api/ai/groq-compound](https://api.vtech.biz.id/api/ai/groq-compound?apikey=ApiPinaa&text=Halo%2C%20siapa%20kamu%3F&systemPrompt=You%20are%20a%20helpful%20assistant&sessionId=user123) |
| 11 | AI - Phi-2 | GET | prompt, system, temperature | JSON | free | [/api/ai/phi2](https://api.vtech.biz.id/api/ai/phi2?apikey=ApiPinaa&prompt=Halo%2C%20siapa%20kamu%3F&system=You%20are%20a%20helpful%20assistant.&temperature=0.7) |
| 12 | AI - QwQ 32B | GET | prompt, system, temperature | JSON | free | [/api/ai/qwq32b](https://api.vtech.biz.id/api/ai/qwq32b?apikey=ApiPinaa&prompt=Halo%2C%20siapa%20kamu%3F&system=You%20are%20a%20helpful%20assistant.&temperature=0.7) |
| 13 | AI - Writecream | GET | text, logic | JSON | free | [/api/ai/writecream](https://api.vtech.biz.id/api/ai/writecream?apikey=ApiPinaa&text=Buatkan%20caption%20Instagram%20yang%20menarik&logic=You%20are%20a%20creative%20copywriter) |

## Anime (58 endpoint)

| No | Nama | Method | Params | Tipe Respon | Plan | Link Contoh |
|----|------|--------|--------|-------------|------|-------------|
| 14 | Anime - Akira | GET | - | Image (URL) | free | [/api/anime/akira](https://api.vtech.biz.id/api/anime/akira?apikey=ApiPinaa) |
| 15 | Anime - Akiyama | GET | - | Image (URL) | free | [/api/anime/akiyama](https://api.vtech.biz.id/api/anime/akiyama?apikey=ApiPinaa) |
| 16 | Anime - Ana | GET | - | Image (URL) | free | [/api/anime/ana](https://api.vtech.biz.id/api/anime/ana?apikey=ApiPinaa) |
| 17 | Anime - Asuna | GET | - | Image (URL) | free | [/api/anime/asuna](https://api.vtech.biz.id/api/anime/asuna?apikey=ApiPinaa) |
| 18 | Anime - Auratail Search | GET | query | Image (URL) | free | [/api/anime/auratail-search](https://api.vtech.biz.id/api/anime/auratail-search?apikey=ApiPinaa&query=war) |
| 19 | Anime - Ayuzawa | GET | - | Image (URL) | free | [/api/anime/ayuzawa](https://api.vtech.biz.id/api/anime/ayuzawa?apikey=ApiPinaa) |
| 20 | Anime - Boruto | GET | - | Image (URL) | free | [/api/anime/boruto](https://api.vtech.biz.id/api/anime/boruto?apikey=ApiPinaa) |
| 21 | Anime - Chiho | GET | - | Image (URL) | free | [/api/anime/chiho](https://api.vtech.biz.id/api/anime/chiho?apikey=ApiPinaa) |
| 22 | Anime - Chitoge | GET | - | Image (URL) | free | [/api/anime/chitoge](https://api.vtech.biz.id/api/anime/chitoge?apikey=ApiPinaa) |
| 23 | Anime - Deidara | GET | - | Image (URL) | free | [/api/anime/deidara](https://api.vtech.biz.id/api/anime/deidara?apikey=ApiPinaa) |
| 24 | Anime - Doraemon | GET | - | Image (URL) | free | [/api/anime/doraemon](https://api.vtech.biz.id/api/anime/doraemon?apikey=ApiPinaa) |
| 25 | Anime - Eba | GET | - | Image (URL) | free | [/api/anime/eba](https://api.vtech.biz.id/api/anime/eba?apikey=ApiPinaa) |
| 26 | Anime - Elaina | GET | - | Image (URL) | free | [/api/anime/elaina](https://api.vtech.biz.id/api/anime/elaina?apikey=ApiPinaa) |
| 27 | Anime - Emilia | GET | - | Image (URL) | free | [/api/anime/emilia](https://api.vtech.biz.id/api/anime/emilia?apikey=ApiPinaa) |
| 28 | Anime - Erza | GET | - | Image (URL) | free | [/api/anime/erza](https://api.vtech.biz.id/api/anime/erza?apikey=ApiPinaa) |
| 29 | Anime - Gremory | GET | - | Image (URL) | free | [/api/anime/gremory](https://api.vtech.biz.id/api/anime/gremory?apikey=ApiPinaa) |
| 30 | Anime - Hestia | GET | - | Image (URL) | free | [/api/anime/hestia](https://api.vtech.biz.id/api/anime/hestia?apikey=ApiPinaa) |
| 31 | Anime - Hinata | GET | - | Image (URL) | free | [/api/anime/hinata](https://api.vtech.biz.id/api/anime/hinata?apikey=ApiPinaa) |
| 32 | Anime - Husbu | GET | - | Image (URL) | free | [/api/anime/husbu](https://api.vtech.biz.id/api/anime/husbu?apikey=ApiPinaa) |
| 33 | Anime - Inori | GET | - | Image (URL) | free | [/api/anime/inori](https://api.vtech.biz.id/api/anime/inori?apikey=ApiPinaa) |
| 34 | Anime - Isuzu | GET | - | Image (URL) | free | [/api/anime/isuzu](https://api.vtech.biz.id/api/anime/isuzu?apikey=ApiPinaa) |
| 35 | Anime - Itachi | GET | - | Image (URL) | free | [/api/anime/itachi](https://api.vtech.biz.id/api/anime/itachi?apikey=ApiPinaa) |
| 36 | Anime - Itori | GET | - | Image (URL) | free | [/api/anime/itori](https://api.vtech.biz.id/api/anime/itori?apikey=ApiPinaa) |
| 37 | Anime - Kaga | GET | - | Image (URL) | free | [/api/anime/kaga](https://api.vtech.biz.id/api/anime/kaga?apikey=ApiPinaa) |
| 38 | Anime - Kagura | GET | - | Image (URL) | free | [/api/anime/kagura](https://api.vtech.biz.id/api/anime/kagura?apikey=ApiPinaa) |
| 39 | Anime - Kakasih | GET | - | Image (URL) | free | [/api/anime/kakasih](https://api.vtech.biz.id/api/anime/kakasih?apikey=ApiPinaa) |
| 40 | Anime - Kaori | GET | - | Image (URL) | free | [/api/anime/kaori](https://api.vtech.biz.id/api/anime/kaori?apikey=ApiPinaa) |
| 41 | Anime - Keneki | GET | - | Image (URL) | free | [/api/anime/keneki](https://api.vtech.biz.id/api/anime/keneki?apikey=ApiPinaa) |
| 42 | Anime - Kotori | GET | - | Image (URL) | free | [/api/anime/kotori](https://api.vtech.biz.id/api/anime/kotori?apikey=ApiPinaa) |
| 43 | Anime - Kurumi | GET | - | Image (URL) | free | [/api/anime/kurumi](https://api.vtech.biz.id/api/anime/kurumi?apikey=ApiPinaa) |
| 44 | Anime - Madara | GET | - | Image (URL) | free | [/api/anime/madara](https://api.vtech.biz.id/api/anime/madara?apikey=ApiPinaa) |
| 45 | Anime - Megumin | GET | - | Image (URL) | free | [/api/anime/megumin](https://api.vtech.biz.id/api/anime/megumin?apikey=ApiPinaa) |
| 46 | Anime - Mikasa | GET | - | Image (URL) | free | [/api/anime/mikasa](https://api.vtech.biz.id/api/anime/mikasa?apikey=ApiPinaa) |
| 47 | Anime - Miku | GET | - | Image (URL) | free | [/api/anime/miku](https://api.vtech.biz.id/api/anime/miku?apikey=ApiPinaa) |
| 48 | Anime - Minato | GET | - | Image (URL) | free | [/api/anime/minato](https://api.vtech.biz.id/api/anime/minato?apikey=ApiPinaa) |
| 49 | Anime - Naruto | GET | - | Image (URL) | free | [/api/anime/naruto](https://api.vtech.biz.id/api/anime/naruto?apikey=ApiPinaa) |
| 50 | Anime - Nezuko | GET | - | Image (URL) | free | [/api/anime/nezuko](https://api.vtech.biz.id/api/anime/nezuko?apikey=ApiPinaa) |
| 51 | Anime - Nsfwloli | GET | - | Image (URL) | free | [/api/anime/nsfwloli](https://api.vtech.biz.id/api/anime/nsfwloli?apikey=ApiPinaa) |
| 52 | Anime - Onepiece | GET | - | Image (URL) | free | [/api/anime/onepiece](https://api.vtech.biz.id/api/anime/onepiece?apikey=ApiPinaa) |
| 53 | Anime - Pokemon | GET | - | Image (URL) | free | [/api/anime/pokemon](https://api.vtech.biz.id/api/anime/pokemon?apikey=ApiPinaa) |
| 54 | Anime - Rize | GET | - | Image (URL) | free | [/api/anime/rize](https://api.vtech.biz.id/api/anime/rize?apikey=ApiPinaa) |
| 55 | Anime - Sagiri | GET | - | Image (URL) | free | [/api/anime/sagiri](https://api.vtech.biz.id/api/anime/sagiri?apikey=ApiPinaa) |
| 56 | Anime - Sakura | GET | - | Image (URL) | free | [/api/anime/sakura](https://api.vtech.biz.id/api/anime/sakura?apikey=ApiPinaa) |
| 57 | Anime - Sasuke | GET | - | Image (URL) | free | [/api/anime/sasuke](https://api.vtech.biz.id/api/anime/sasuke?apikey=ApiPinaa) |
| 58 | Anime - Shina | GET | - | Image (URL) | free | [/api/anime/shina](https://api.vtech.biz.id/api/anime/shina?apikey=ApiPinaa) |
| 59 | Anime - Shinka | GET | - | Image (URL) | free | [/api/anime/shinka](https://api.vtech.biz.id/api/anime/shinka?apikey=ApiPinaa) |
| 60 | Anime - Shinomiya | GET | - | Image (URL) | free | [/api/anime/shinomiya](https://api.vtech.biz.id/api/anime/shinomiya?apikey=ApiPinaa) |
| 61 | Anime - Shizuka | GET | - | Image (URL) | free | [/api/anime/shizuka](https://api.vtech.biz.id/api/anime/shizuka?apikey=ApiPinaa) |
| 62 | Anime - Shota | GET | - | Image (URL) | free | [/api/anime/shota](https://api.vtech.biz.id/api/anime/shota?apikey=ApiPinaa) |
| 63 | Anime - Tejina | GET | - | Image (URL) | free | [/api/anime/tejina](https://api.vtech.biz.id/api/anime/tejina?apikey=ApiPinaa) |
| 64 | Anime - Toukachan | GET | - | Image (URL) | free | [/api/anime/toukachan](https://api.vtech.biz.id/api/anime/toukachan?apikey=ApiPinaa) |
| 65 | Anime - Tsunade | GET | - | Image (URL) | free | [/api/anime/tsunade](https://api.vtech.biz.id/api/anime/tsunade?apikey=ApiPinaa) |
| 66 | Anime - Umaru | GET | - | Image (URL) | free | [/api/anime/umaru](https://api.vtech.biz.id/api/anime/umaru?apikey=ApiPinaa) |
| 67 | Anime - Waifu | GET | - | Image (URL) | free | [/api/anime/waifu](https://api.vtech.biz.id/api/anime/waifu?apikey=ApiPinaa) |
| 68 | Anime - Waifu2 | GET | - | Image (URL) | free | [/api/anime/waifu2](https://api.vtech.biz.id/api/anime/waifu2?apikey=ApiPinaa) |
| 69 | Anime - Yotsuba | GET | - | Image (URL) | free | [/api/anime/yotsuba](https://api.vtech.biz.id/api/anime/yotsuba?apikey=ApiPinaa) |
| 70 | Anime - Yumeko | GET | - | Image (URL) | free | [/api/anime/yumeko](https://api.vtech.biz.id/api/anime/yumeko?apikey=ApiPinaa) |
| 71 | Anime - Yuri | GET | - | Image (URL) | free | [/api/anime/yuri](https://api.vtech.biz.id/api/anime/yuri?apikey=ApiPinaa) |

## Asupan (13 endpoint)

| No | Nama | Method | Params | Tipe Respon | Plan | Link Contoh |
|----|------|--------|--------|-------------|------|-------------|
| 72 | Asupan - Anony | GET | - | Image (URL) | free | [/api/asupan/anony](https://api.vtech.biz.id/api/asupan/anony?apikey=ApiPinaa) |
| 73 | Asupan - Asupan | GET | - | Image (URL) | free | [/api/asupan/asupan](https://api.vtech.biz.id/api/asupan/asupan?apikey=ApiPinaa) |
| 74 | Asupan - Bocil | GET | - | Image (URL) | free | [/api/asupan/bocil](https://api.vtech.biz.id/api/asupan/bocil?apikey=ApiPinaa) |
| 75 | Asupan - Cecan | GET | - | Image (URL) | free | [/api/asupan/cecan](https://api.vtech.biz.id/api/asupan/cecan?apikey=ApiPinaa) |
| 76 | Asupan - Douyin | GET | - | Image (URL) | free | [/api/asupan/douyin](https://api.vtech.biz.id/api/asupan/douyin?apikey=ApiPinaa) |
| 77 | Asupan - Euni | GET | - | Image (URL) | free | [/api/asupan/euni](https://api.vtech.biz.id/api/asupan/euni?apikey=ApiPinaa) |
| 78 | Asupan - Gheayubi | GET | - | Image (URL) | free | [/api/asupan/gheayubi](https://api.vtech.biz.id/api/asupan/gheayubi?apikey=ApiPinaa) |
| 79 | Asupan - Hijaber | GET | - | Image (URL) | free | [/api/asupan/hijaber](https://api.vtech.biz.id/api/asupan/hijaber?apikey=ApiPinaa) |
| 80 | Asupan - Natajadeh | GET | - | Image (URL) | free | [/api/asupan/natajadeh](https://api.vtech.biz.id/api/asupan/natajadeh?apikey=ApiPinaa) |
| 81 | Asupan - Rikagusriani | GET | - | Image (URL) | free | [/api/asupan/rikagusriani](https://api.vtech.biz.id/api/asupan/rikagusriani?apikey=ApiPinaa) |
| 82 | Asupan - Santuy | GET | - | Image (URL) | free | [/api/asupan/santuy](https://api.vtech.biz.id/api/asupan/santuy?apikey=ApiPinaa) |
| 83 | Asupan - TikTok Search | GET | query | Image (URL) | free | [/api/asupan/tiktok](https://api.vtech.biz.id/api/asupan/tiktok?apikey=ApiPinaa&query=natajadeh) |
| 84 | Asupan - Ukhty | GET | - | Image (URL) | free | [/api/asupan/ukhty](https://api.vtech.biz.id/api/asupan/ukhty?apikey=ApiPinaa) |

## Berita (6 endpoint)

| No | Nama | Method | Params | Tipe Respon | Plan | Link Contoh |
|----|------|--------|--------|-------------|------|-------------|
| 85 | Berita - CNBC Indonesia | GET | - | JSON | free | [/api/berita/cnbcindonesia](https://api.vtech.biz.id/api/berita/cnbcindonesia?apikey=ApiPinaa) |
| 86 | Berita - Kumparan Latest | GET | - | JSON | free | [/api/berita/kumparan](https://api.vtech.biz.id/api/berita/kumparan?apikey=ApiPinaa) |
| 87 | Berita - Merdeka Kategori | GET | name | JSON | free | [/api/berita/merdeka/category](https://api.vtech.biz.id/api/berita/merdeka/category?apikey=ApiPinaa&name=otomotif) |
| 88 | Berita - Merdeka Latest | GET | - | JSON | free | [/api/berita/merdeka](https://api.vtech.biz.id/api/berita/merdeka?apikey=ApiPinaa) |
| 89 | Berita - Okezone Latest | GET | - | JSON | free | [/api/berita/okezone](https://api.vtech.biz.id/api/berita/okezone?apikey=ApiPinaa) |
| 90 | Berita - Sindonews Latest | GET | - | JSON | free | [/api/berita/sindonews](https://api.vtech.biz.id/api/berita/sindonews?apikey=ApiPinaa) |

## Canvas (32 endpoint)

| No | Nama | Method | Params | Tipe Respon | Plan | Link Contoh |
|----|------|--------|--------|-------------|------|-------------|
| 91 | Canvas - Affect | GET | image | Image (URL) | free | [/api/canvas/affect](https://api.vtech.biz.id/api/canvas/affect?apikey=ApiPinaa&image=https%3A%2F%2Fi.ibb.co%2F1s8T3sY%2F48f7ce63c7aa.jpg) |
| 92 | Canvas - Batslap | GET | image1, image2 | Image (URL) | free | [/api/canvas/batslap](https://api.vtech.biz.id/api/canvas/batslap?apikey=ApiPinaa&image1=https%3A%2F%2Fi.ibb.co%2F1s8T3sY%2F48f7ce63c7aa.jpg&image2=https%3A%2F%2Fi.ibb.co%2FG5mJZxs%2Frin.jpg) |
| 93 | Canvas - Beautiful | GET | image | Image (URL) | free | [/api/canvas/beautiful](https://api.vtech.biz.id/api/canvas/beautiful?apikey=ApiPinaa&image=https%3A%2F%2Fi.ibb.co%2F1s8T3sY%2F48f7ce63c7aa.jpg) |
| 94 | Canvas - Blur | GET | image | Image (URL) | free | [/api/canvas/blur](https://api.vtech.biz.id/api/canvas/blur?apikey=ApiPinaa&image=https%3A%2F%2Fi.ibb.co%2F1s8T3sY%2F48f7ce63c7aa.jpg) |
| 95 | Canvas - Captcha | GET | background, captchaKey, border, overlayOpacity | Image (URL) | free | [/api/canvas/captcha](https://api.vtech.biz.id/api/canvas/captcha?apikey=ApiPinaa&background=https%3A%2F%2Fi.ibb.co%2F4YBNyvP%2Fimages-76.jpg&captchaKey=ABC123&border=%23f0f0f0&overlayOpacity=0.5) |
| 96 | Canvas - Circle | GET | image | Image (URL) | free | [/api/canvas/circle](https://api.vtech.biz.id/api/canvas/circle?apikey=ApiPinaa&image=https%3A%2F%2Fi.ibb.co%2F1s8T3sY%2F48f7ce63c7aa.jpg) |
| 97 | Canvas - Darkness | GET | image, amount | Image (URL) | free | [/api/canvas/darkness](https://api.vtech.biz.id/api/canvas/darkness?apikey=ApiPinaa&image=https%3A%2F%2Fi.ibb.co%2F1s8T3sY%2F48f7ce63c7aa.jpg&amount=80) |
| 98 | Canvas - Delete | GET | image | Image (URL) | free | [/api/canvas/delete](https://api.vtech.biz.id/api/canvas/delete?apikey=ApiPinaa&image=https%3A%2F%2Fi.ibb.co%2F1s8T3sY%2F48f7ce63c7aa.jpg) |
| 99 | Canvas - E-KTP | GET | provinsi, kota, nik, nama, ttl, jenis_kelamin, golongan_darah, alamat, rt/rw, kel/desa, kecamatan, agama, status, pekerjaan, kewarganegaraan, masa_berlaku, terbuat, pas_photo | Image (URL) | free | [/api/canvas/ektp](https://api.vtech.biz.id/api/canvas/ektp?apikey=ApiPinaa&provinsi=JAWA%20BARAT&kota=BANDUNG&nik=1234567890123456&nama=John%20Doe&ttl=Bandung%2C%2001-01-1990&jenis_kelamin=Laki-laki&golongan_darah=O&alamat=Jl.%20Contoh%20No.%20123&rt/rw=001%2F002&kel/desa=Sukajadi&kecamatan=Sukajadi&agama=Islam&status=Belum%20Kawin&pekerjaan=Pegawai%20Swasta&kewarganegaraan=WNI&masa_berlaku=Seumur%20Hidup&terbuat=01-01-2023&pas_photo=https%3A%2F%2Fi.pinimg.com%2F736x%2F0b%2F9f%2F0a%2F0b9f0a92a) |
| 100 | Canvas - Facepalm | GET | image | Image (URL) | free | [/api/canvas/facepalm](https://api.vtech.biz.id/api/canvas/facepalm?apikey=ApiPinaa&image=https%3A%2F%2Fi.ibb.co%2F1s8T3sY%2F48f7ce63c7aa.jpg) |
| 101 | Canvas - Fake XNXX | GET | name, quote, likes, dislikes | Image (URL) | free | [/api/canvas/fake-xnxx](https://api.vtech.biz.id/api/canvas/fake-xnxx?apikey=ApiPinaa&name=Nelson%20Mandela&quote=Keberanian%20bukanlah%20tidak%20adanya%20ketakutan.&likes=2&dislikes=0) |
| 102 | Canvas - Gay | GET | nama, avatar, num | Image (URL) | free | [/api/canvas/gay](https://api.vtech.biz.id/api/canvas/gay?apikey=ApiPinaa&nama=Lendra&avatar=https%3A%2F%2Ffiles.catbox.moe%2Fg45kly.jpg&num=87) |
| 103 | Canvas - Goodbye v1 | GET | username, guildName, guildIcon, memberCount, avatar, background, quality | Image (URL) | free | [/api/canvas/goodbyev1](https://api.vtech.biz.id/api/canvas/goodbyev1?apikey=ApiPinaa&username=John&guildName=Anime%20Club&guildIcon=https%3A%2F%2Fi.ibb.co%2FG5mJZxs%2Frin.jpg&memberCount=150&avatar=https%3A%2F%2Fi.ibb.co%2F1s8T3sY%2F48f7ce63c7aa.jpg&background=https%3A%2F%2Fi.ibb.co%2F4YBNyvP%2Fimages-76.jpg&quality=80) |
| 104 | Canvas - Goodbye v2 | GET | username, guildName, memberCount, avatar, background | Image (URL) | free | [/api/canvas/goodbyev2](https://api.vtech.biz.id/api/canvas/goodbyev2?apikey=ApiPinaa&username=John&guildName=Siputzx%20Api&memberCount=150&avatar=https%3A%2F%2Fi.ibb.co%2F1s8T3sY%2F48f7ce63c7aa.jpg&background=https%3A%2F%2Fi.ibb.co%2F4YBNyvP%2Fimages-76.jpg) |
| 105 | Canvas - Goodbye v3 | GET | username, avatar | Image (URL) | free | [/api/canvas/goodbyev3](https://api.vtech.biz.id/api/canvas/goodbyev3?apikey=ApiPinaa&username=VynaaValerie&avatar=https%3A%2F%2Fi.ibb.co%2F1s8T3sY%2F48f7ce63c7aa.jpg) |
| 106 | Canvas - Goodbye v4 | GET | avatar, background, title, description, border, avatarBorder, overlayOpacity | Image (URL) | free | [/api/canvas/goodbyev4](https://api.vtech.biz.id/api/canvas/goodbyev4?apikey=ApiPinaa&avatar=https%3A%2F%2Fi.ibb.co%2F1s8T3sY%2F48f7ce63c7aa.jpg&background=https%3A%2F%2Fi.ibb.co%2F4YBNyvP%2Fimages-76.jpg&title=goodbye&description=goodbye%20to%20the%20server!&border=%232a2e35&avatarBorder=%232a2e35&overlayOpacity=0.3) |
| 107 | Canvas - Goodbye v5 | GET | username, guildName, memberCount, avatar, background, quality | Image (URL) | free | [/api/canvas/goodbyev5](https://api.vtech.biz.id/api/canvas/goodbyev5?apikey=ApiPinaa&username=VynaaValerie&guildName=vegatech%20Community&memberCount=219&avatar=https%3A%2F%2Fi.ibb.co%2F1s8T3sY%2F48f7ce63c7aa.jpg&background=https%3A%2F%2Fi.ibb.co%2F4YBNyvP%2Fimages-76.jpg&quality=90) |
| 108 | Canvas - Greyscale | GET | image | Image (URL) | free | [/api/canvas/greyscale](https://api.vtech.biz.id/api/canvas/greyscale?apikey=ApiPinaa&image=https%3A%2F%2Fi.ibb.co%2F1s8T3sY%2F48f7ce63c7aa.jpg) |
| 109 | Canvas - Invert | GET | image | Image (URL) | free | [/api/canvas/invert](https://api.vtech.biz.id/api/canvas/invert?apikey=ApiPinaa&image=https%3A%2F%2Fi.ibb.co%2F1s8T3sY%2F48f7ce63c7aa.jpg) |
| 110 | Canvas - Kiss | GET | image1, image2 | Image (URL) | free | [/api/canvas/kiss](https://api.vtech.biz.id/api/canvas/kiss?apikey=ApiPinaa&image1=https%3A%2F%2Fi.ibb.co%2F1s8T3sY%2F48f7ce63c7aa.jpg&image2=https%3A%2F%2Fi.ibb.co%2FG5mJZxs%2Frin.jpg) |
| 111 | Canvas - Level Up | GET | backgroundURL, avatarURL, fromLevel, toLevel, name | Image (URL) | free | [/api/canvas/level-up](https://api.vtech.biz.id/api/canvas/level-up?apikey=ApiPinaa&backgroundURL=https%3A%2F%2Fi.ibb.co.com%2F2jMjYXK%2FIMG-20250103-WA0469.j&avatarURL=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F159487561%&fromLevel=0&toLevel=1&name=putu) |
| 112 | Canvas - Profile | GET | backgroundURL, avatarURL, rankName, rankId, exp, requireExp, level, name | Image (URL) | free | [/api/canvas/profile](https://api.vtech.biz.id/api/canvas/profile?apikey=ApiPinaa&backgroundURL=https%3A%2F%2Fi.ibb.co.com%2F2jMjYXK%2FIMG-20250103-WA0469.j&avatarURL=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F159487561%&rankName=epik&rankId=0&exp=500&requireExp=1000&level=10&name=siputzx) |
| 113 | Canvas - Security | GET | avatar, background, createdTimestamp, suspectTimestamp, locale | Image (URL) | free | [/api/canvas/security](https://api.vtech.biz.id/api/canvas/security?apikey=ApiPinaa&avatar=https%3A%2F%2Fi.ibb.co%2F1s8T3sY%2F48f7ce63c7aa.jpg&background=https%3A%2F%2Fi.ibb.co%2F4YBNyvP%2Fimages-76.jpg&createdTimestamp=1672531200000&suspectTimestamp=604800000&locale=en) |
| 114 | Canvas - Sertifikat Tolol | GET | text | Image (URL) | free | [/api/canvas/sertifikat-tolol](https://api.vtech.biz.id/api/canvas/sertifikat-tolol?apikey=ApiPinaa&text=lorem%20ipsum!) |
| 115 | Canvas - Ship | GET | avatar1, avatar2, background, persen | Image (URL) | free | [/api/canvas/ship](https://api.vtech.biz.id/api/canvas/ship?apikey=ApiPinaa&avatar1=https%3A%2F%2Fi.ibb.co.com%2FYc4MVdV%2Fimages.jpg&avatar2=https%3A%2F%2Fi.ibb.co.com%2FKKYxYQr%2Fdownload.jpg&background=https%3A%2F%2Fi.ibb.co%2F4YBNyvP%2Fimages-76.jpg&persen=20) |
| 116 | Canvas - Spotify | GET | title, artist, start, end, image, border | Image (URL) | free | [/api/canvas/spotify](https://api.vtech.biz.id/api/canvas/spotify?apikey=ApiPinaa&title=Blinding%20Lights&artist=The%20Weeknd&start=100000&end=200000&image=https%3A%2F%2Fi.ibb.co%2F1s8T3sY%2F48f7ce63c7aa.jpg&border=%231DB954) |
| 117 | Canvas - Tweet | GET | displayName, username, comment, avatar, verified, theme | Image (URL) | free | [/api/canvas/tweet](https://api.vtech.biz.id/api/canvas/tweet?apikey=ApiPinaa&displayName=Gemini&username=gemini_ai&comment=Hello%20World!&avatar=https%3A%2F%2Fi.ibb.co%2F1s8T3sY%2F48f7ce63c7aa.jpg&verified=true&theme=dark) |
| 118 | Canvas - Welcome v1 | GET | username, guildName, guildIcon, memberCount, avatar, background, quality | Image (URL) | free | [/api/canvas/welcomev1](https://api.vtech.biz.id/api/canvas/welcomev1?apikey=ApiPinaa&username=John&guildName=Anime%20Club&guildIcon=https%3A%2F%2Fi.ibb.co%2FG5mJZxs%2Frin.jpg&memberCount=150&avatar=https%3A%2F%2Fi.ibb.co%2F1s8T3sY%2F48f7ce63c7aa.jpg&background=https%3A%2F%2Fi.ibb.co%2F4YBNyvP%2Fimages-76.jpg&quality=80) |
| 119 | Canvas - Welcome v2 | GET | username, guildName, memberCount, avatar, background | Image (URL) | free | [/api/canvas/welcomev2](https://api.vtech.biz.id/api/canvas/welcomev2?apikey=ApiPinaa&username=John&guildName=vtech%20Api&memberCount=150&avatar=https%3A%2F%2Fi.ibb.co%2F1s8T3sY%2F48f7ce63c7aa.jpg&background=https%3A%2F%2Fi.ibb.co%2F4YBNyvP%2Fimages-76.jpg) |
| 120 | Canvas - Welcome v3 | GET | username, avatar | Image (URL) | free | [/api/canvas/welcomev3](https://api.vtech.biz.id/api/canvas/welcomev3?apikey=ApiPinaa&username=John&avatar=https%3A%2F%2Fi.ibb.co%2F1s8T3sY%2F48f7ce63c7aa.jpg) |
| 121 | Canvas - Welcome v4 | GET | avatar, background, description | Image (URL) | free | [/api/canvas/welcomev4](https://api.vtech.biz.id/api/canvas/welcomev4?apikey=ApiPinaa&avatar=https%3A%2F%2Fi.ibb.co%2F1s8T3sY%2F48f7ce63c7aa.jpg&background=https%3A%2F%2Fi.ibb.co%2F4YBNyvP%2Fimages-76.jpg&description=Welcome%20friend!) |
| 122 | Canvas - XNXX | GET | title, image | Image (URL) | free | [/api/canvas/xnxx](https://api.vtech.biz.id/api/canvas/xnxx?apikey=ApiPinaa&title=Lari%20ada%20wibu&image=https%3A%2F%2Ffiles.catbox.moe%2Fzhsks3.jpg) |

## Cecan (13 endpoint)

| No | Nama | Method | Params | Tipe Respon | Plan | Link Contoh |
|----|------|--------|--------|-------------|------|-------------|
| 123 | Cecan - China | GET | - | Image (URL) | free | [/api/cecan/china](https://api.vtech.biz.id/api/cecan/china?apikey=ApiPinaa) |
| 124 | Cecan - Hijaber | GET | - | Image (URL) | free | [/api/cecan/hijaber](https://api.vtech.biz.id/api/cecan/hijaber?apikey=ApiPinaa) |
| 125 | Cecan - Indonesia | GET | - | Image (URL) | free | [/api/cecan/indonesia](https://api.vtech.biz.id/api/cecan/indonesia?apikey=ApiPinaa) |
| 126 | Cecan - Japan | GET | - | Image (URL) | free | [/api/cecan/japan](https://api.vtech.biz.id/api/cecan/japan?apikey=ApiPinaa) |
| 127 | Cecan - Jeni | GET | - | Image (URL) | free | [/api/cecan/jeni](https://api.vtech.biz.id/api/cecan/jeni?apikey=ApiPinaa) |
| 128 | Cecan - Jiso | GET | - | Image (URL) | free | [/api/cecan/jiso](https://api.vtech.biz.id/api/cecan/jiso?apikey=ApiPinaa) |
| 129 | Cecan - Justinaxie | GET | - | Image (URL) | free | [/api/cecan/justinaxie](https://api.vtech.biz.id/api/cecan/justinaxie?apikey=ApiPinaa) |
| 130 | Cecan - Korea | GET | - | Image (URL) | free | [/api/cecan/korea](https://api.vtech.biz.id/api/cecan/korea?apikey=ApiPinaa) |
| 131 | Cecan - Malaysia | GET | - | Image (URL) | free | [/api/cecan/malaysia](https://api.vtech.biz.id/api/cecan/malaysia?apikey=ApiPinaa) |
| 132 | Cecan - Rose | GET | - | Image (URL) | free | [/api/cecan/rose](https://api.vtech.biz.id/api/cecan/rose?apikey=ApiPinaa) |
| 133 | Cecan - Ryujin | GET | - | Image (URL) | free | [/api/cecan/ryujin](https://api.vtech.biz.id/api/cecan/ryujin?apikey=ApiPinaa) |
| 134 | Cecan - Thailand | GET | - | Image (URL) | free | [/api/cecan/thailand](https://api.vtech.biz.id/api/cecan/thailand?apikey=ApiPinaa) |
| 135 | Cecan - Vietnam | GET | - | Image (URL) | free | [/api/cecan/vietnam](https://api.vtech.biz.id/api/cecan/vietnam?apikey=ApiPinaa) |

## Download (37 endpoint)

| No | Nama | Method | Params | Tipe Respon | Plan | Link Contoh |
|----|------|--------|--------|-------------|------|-------------|
| 136 | Download - Allin | GET | url | JSON (Download Link) | free | [/api/download/allin](https://api.vtech.biz.id/api/download/allin?apikey=ApiPinaa&url=https%3A%2F%2Fwww.tiktok.com%2F%40user%2Fvideo%2F123) |
| 137 | Download - Capcut | GET | url | JSON (Download Link) | free | [/api/download/capcut](https://api.vtech.biz.id/api/download/capcut?apikey=ApiPinaa&url=https%3A%2F%2Fwww.capcut.com%2Ft%2Fxxxx) |
| 138 | Download - Cocofun | GET | url | JSON (Download Link) | free | [/api/download/cocofun](https://api.vtech.biz.id/api/download/cocofun?apikey=ApiPinaa&url=https%3A%2F%2Fwww.cocofun.app%2Fpost%2Fxxxx) |
| 139 | Download - Donghua | GET | url | JSON (Download Link) | free | [/api/download/donghua](https://api.vtech.biz.id/api/download/donghua?apikey=ApiPinaa&url=https%3A%2F%2Fanichin.cyou%2Fxxxx) |
| 140 | Download - Douyin | GET | url | JSON (Download Link) | free | [/api/download/douyin](https://api.vtech.biz.id/api/download/douyin?apikey=ApiPinaa&url=https%3A%2F%2Fv.douyin.com%2Fxxxx%2F) |
| 141 | Download - Douyinslide | GET | url | JSON (Download Link) | free | [/api/download/douyinslide](https://api.vtech.biz.id/api/download/douyinslide?apikey=ApiPinaa&url=https%3A%2F%2Fv.douyin.com%2Fxxxx%2F) |
| 142 | Download - Fbdown | GET | url | JSON (Download Link) | free | [/api/download/fbdown](https://api.vtech.biz.id/api/download/fbdown?apikey=ApiPinaa&url=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3Dxxxx) |
| 143 | Download - Fbdown2 | GET | url | JSON (Download Link) | free | [/api/download/fbdown2](https://api.vtech.biz.id/api/download/fbdown2?apikey=ApiPinaa&url=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3Dxxxx) |
| 144 | Download - Fbdown3 | GET | url | JSON (Download Link) | free | [/api/download/fbdown3](https://api.vtech.biz.id/api/download/fbdown3?apikey=ApiPinaa&url=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3Dxxxx) |
| 145 | Download - Fbdown4 | GET | url | JSON (Download Link) | free | [/api/download/fbdown4](https://api.vtech.biz.id/api/download/fbdown4?apikey=ApiPinaa&url=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3Dxxxx) |
| 146 | Download - Gdrive | GET | url | JSON (Download Link) | free | [/api/download/gdrive](https://api.vtech.biz.id/api/download/gdrive?apikey=ApiPinaa&url=https%3A%2F%2Fdrive.google.com%2Ffile%2Fd%2Fxxxx%2Fview) |
| 147 | Download - Igdowloader | GET | url | JSON (Download Link) | free | [/api/download/igdowloader](https://api.vtech.biz.id/api/download/igdowloader?apikey=ApiPinaa&url=https%3A%2F%2Fwww.instagram.com%2Fp%2Fxxxx%2F) |
| 148 | Download - Likee | GET | url | JSON (Download Link) | free | [/api/download/likee](https://api.vtech.biz.id/api/download/likee?apikey=ApiPinaa&url=https%3A%2F%2Fl.likee.video%2Fv%2Fxxxx) |
| 149 | Download - Pastebin | GET | url | JSON (Download Link) | free | [/api/download/pastebin](https://api.vtech.biz.id/api/download/pastebin?apikey=ApiPinaa&url=https%3A%2F%2Fpastebin.com%2Fz77zNeZb) |
| 150 | Download - Pinterest | GET | url | JSON (Download Link) | free | [/api/download/pinterest](https://api.vtech.biz.id/api/download/pinterest?apikey=ApiPinaa&url=https%3A%2F%2Fpin.it%2Fxxxx) |
| 151 | Download - Rednote | GET | url | JSON (Download Link) | free | [/api/download/rednote](https://api.vtech.biz.id/api/download/rednote?apikey=ApiPinaa&url=https%3A%2F%2Fxhslink.com%2Fxxxx) |
| 152 | Download - Scribd | GET | url | JSON (Download Link) | free | [/api/download/scribd](https://api.vtech.biz.id/api/download/scribd?apikey=ApiPinaa&url=https%3A%2F%2Fwww.scribd.com%2Fdocument%2Fxxxx) |
| 153 | Download - Sfilemobi | GET | url | JSON (Download Link) | free | [/api/download/sfilemobi](https://api.vtech.biz.id/api/download/sfilemobi?apikey=ApiPinaa&url=https%3A%2F%2Fsfile.mobi%2Fxxxx) |
| 154 | Download - Slideshare | GET | url | JSON (Download Link) | free | [/api/download/slideshare](https://api.vtech.biz.id/api/download/slideshare?apikey=ApiPinaa&url=https%3A%2F%2Fwww.slideshare.net%2Fxxxx) |
| 155 | Download - Snackvideo | GET | url | JSON (Download Link) | free | [/api/download/snackvideo](https://api.vtech.biz.id/api/download/snackvideo?apikey=ApiPinaa&url=https%3A%2F%2Fs.snackvideo.com%2Fp%2Fxxxx) |
| 156 | Download - Soundcloud | GET | url | JSON (Download Link) | free | [/api/download/soundcloud](https://api.vtech.biz.id/api/download/soundcloud?apikey=ApiPinaa&url=https%3A%2F%2Fsoundcloud.com%2Fuser%2Ftrack) |
| 157 | Download - Spotify | GET | url | JSON (Download Link) | free | [/api/download/spotify](https://api.vtech.biz.id/api/download/spotify?apikey=ApiPinaa&url=https%3A%2F%2Fopen.spotify.com%2Ftrack%2Fxxxx) |
| 158 | Download - Spotify2 | GET | url | JSON (Download Link) | free | [/api/download/spotify2](https://api.vtech.biz.id/api/download/spotify2?apikey=ApiPinaa&url=https%3A%2F%2Fopen.spotify.com%2Ftrack%2Fxxxx) |
| 159 | Download - Storyanime | GET | - | JSON (Download Link) | free | [/api/download/storyanime](https://api.vtech.biz.id/api/download/storyanime?apikey=ApiPinaa) |
| 160 | Download - Telesticker | GET | url | JSON (Download Link) | free | [/api/download/telesticker](https://api.vtech.biz.id/api/download/telesticker?apikey=ApiPinaa&url=https%3A%2F%2Ft.me%2Faddstickers%2Fxxxx) |
| 161 | Download - Threads | GET | url | JSON (Download Link) | free | [/api/download/threads](https://api.vtech.biz.id/api/download/threads?apikey=ApiPinaa&url=https%3A%2F%2Fwww.threads.net%2F%40user%2Fpost%2Fxxxx) |
| 162 | Download - Tiktok | GET | url | JSON (Download Link) | free | [/api/download/tiktok](https://api.vtech.biz.id/api/download/tiktok?apikey=ApiPinaa&url=https%3A%2F%2Fvt.tiktok.com%2Fxxxx%2F) |
| 163 | Download - Tiktokslide | GET | url | JSON (Download Link) | free | [/api/download/tiktokslide](https://api.vtech.biz.id/api/download/tiktokslide?apikey=ApiPinaa&url=https%3A%2F%2Fvt.tiktok.com%2Fxxxx%2F) |
| 164 | Download - Twitter | GET | url | JSON (Download Link) | free | [/api/download/twitter](https://api.vtech.biz.id/api/download/twitter?apikey=ApiPinaa&url=https%3A%2F%2Ftwitter.com%2Fuser%2Fstatus%2Fxxxx) |
| 165 | Download - Twitter2 | GET | url | JSON (Download Link) | free | [/api/download/twitter2](https://api.vtech.biz.id/api/download/twitter2?apikey=ApiPinaa&url=https%3A%2F%2Ftwitter.com%2Fuser%2Fstatus%2Fxxxx) |
| 166 | Download - Videy | GET | url | JSON (Download Link) | free | [/api/download/videy](https://api.vtech.biz.id/api/download/videy?apikey=ApiPinaa&url=https%3A%2F%2Fvidey.co%2Fv%2F%3Fid%3Dxxxx) |
| 167 | Download - Xnxxdl | GET | url | JSON (Download Link) | free | [/api/download/xnxxdl](https://api.vtech.biz.id/api/download/xnxxdl?apikey=ApiPinaa&url=https%3A%2F%2Fwww.xnxx.com%2Fvideo-xxxx%2F) |
| 168 | Download - Xvideosdl | GET | url | JSON (Download Link) | free | [/api/download/xvideosdl](https://api.vtech.biz.id/api/download/xvideosdl?apikey=ApiPinaa&url=https%3A%2F%2Fwww.xvideos.com%2Fvideo.xxxx%2F) |
| 169 | Download - Yt | GET | url | JSON (Download Link) | free | [/api/download/yt](https://api.vtech.biz.id/api/download/yt?apikey=ApiPinaa&url=https%3A%2F%2Fyoutu.be%2FdQw4w9WgXcQ) |
| 170 | Download - YouTube Downloader v2 | GET | url | JSON (Download Link) | free | [/api/download/ytdlv2](https://api.vtech.biz.id/api/download/ytdlv2?apikey=ApiPinaa&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DHyhLsy6b0XI) |
| 171 | Download - YouTube Downloader v5 | GET | url | JSON (Download Link) | free | [/api/download/ytdlv5](https://api.vtech.biz.id/api/download/ytdlv5?apikey=ApiPinaa&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DHyhLsy6b0XI) |
| 172 | Download - YT Play (Search & MP3) | GET | query | JSON (Download Link) | free | [/api/download/ytplay](https://api.vtech.biz.id/api/download/ytplay?apikey=ApiPinaa&query=Nadin%20Amizah%20Bertaut) |

## Emoji (18 endpoint)

| No | Nama | Method | Params | Tipe Respon | Plan | Link Contoh |
|----|------|--------|--------|-------------|------|-------------|
| 173 | Emoji - Apple | GET | emoji | Image (URL) | free | [/api/emoji/apple](https://api.vtech.biz.id/api/emoji/apple?apikey=ApiPinaa&emoji=%F0%9F%98%85) |
| 174 | Emoji - Docomo | GET | emoji | Image (URL) | free | [/api/emoji/docomo](https://api.vtech.biz.id/api/emoji/docomo?apikey=ApiPinaa&emoji=%F0%9F%98%85) |
| 175 | Emoji - Emojimix | GET | emoji1, emoji2 | Image (URL) | free | [/api/emoji/emojimix](https://api.vtech.biz.id/api/emoji/emojimix?apikey=ApiPinaa&emoji1=%F0%9F%98%8A&emoji2=%F0%9F%98%99) |
| 176 | Emoji - Emojipedia | GET | emoji | Image (URL) | free | [/api/emoji/emojipedia](https://api.vtech.biz.id/api/emoji/emojipedia?apikey=ApiPinaa&emoji=%F0%9F%98%85) |
| 177 | Emoji - Facebook | GET | emoji | Image (URL) | free | [/api/emoji/facebook](https://api.vtech.biz.id/api/emoji/facebook?apikey=ApiPinaa&emoji=%F0%9F%98%85) |
| 178 | Emoji - Google | GET | emoji | Image (URL) | free | [/api/emoji/google](https://api.vtech.biz.id/api/emoji/google?apikey=ApiPinaa&emoji=%F0%9F%98%85) |
| 179 | Emoji - Htc | GET | emoji | Image (URL) | free | [/api/emoji/htc](https://api.vtech.biz.id/api/emoji/htc?apikey=ApiPinaa&emoji=%F0%9F%98%85) |
| 180 | Emoji - Joypixels | GET | emoji | Image (URL) | free | [/api/emoji/joypixels](https://api.vtech.biz.id/api/emoji/joypixels?apikey=ApiPinaa&emoji=%F0%9F%98%85) |
| 181 | Emoji - Kddi | GET | emoji | Image (URL) | free | [/api/emoji/kddi](https://api.vtech.biz.id/api/emoji/kddi?apikey=ApiPinaa&emoji=%F0%9F%98%85) |
| 182 | Emoji - Lg | GET | emoji | Image (URL) | free | [/api/emoji/lg](https://api.vtech.biz.id/api/emoji/lg?apikey=ApiPinaa&emoji=%F0%9F%98%85) |
| 183 | Emoji - Microsoft | GET | emoji | Image (URL) | free | [/api/emoji/microsoft](https://api.vtech.biz.id/api/emoji/microsoft?apikey=ApiPinaa&emoji=%F0%9F%98%85) |
| 184 | Emoji - Mozilla | GET | emoji | Image (URL) | free | [/api/emoji/mozilla](https://api.vtech.biz.id/api/emoji/mozilla?apikey=ApiPinaa&emoji=%F0%9F%98%85) |
| 185 | Emoji - Openmoji | GET | emoji | Image (URL) | free | [/api/emoji/openmoji](https://api.vtech.biz.id/api/emoji/openmoji?apikey=ApiPinaa&emoji=%F0%9F%98%85) |
| 186 | Emoji - Samsung | GET | emoji | Image (URL) | free | [/api/emoji/samsung](https://api.vtech.biz.id/api/emoji/samsung?apikey=ApiPinaa&emoji=%F0%9F%98%85) |
| 187 | Emoji - Skype | GET | emoji | Image (URL) | free | [/api/emoji/skype](https://api.vtech.biz.id/api/emoji/skype?apikey=ApiPinaa&emoji=%F0%9F%98%85) |
| 188 | Emoji - Softbank | GET | emoji | Image (URL) | free | [/api/emoji/softbank](https://api.vtech.biz.id/api/emoji/softbank?apikey=ApiPinaa&emoji=%F0%9F%98%85) |
| 189 | Emoji - Twitter | GET | emoji | Image (URL) | free | [/api/emoji/twitter](https://api.vtech.biz.id/api/emoji/twitter?apikey=ApiPinaa&emoji=%F0%9F%98%85) |
| 190 | Emoji - Whatsapp | GET | emoji | Image (URL) | free | [/api/emoji/whatsapp](https://api.vtech.biz.id/api/emoji/whatsapp?apikey=ApiPinaa&emoji=%F0%9F%98%85) |

## Ephoto (30 endpoint)

| No | Nama | Method | Params | Tipe Respon | Plan | Link Contoh |
|----|------|--------|--------|-------------|------|-------------|
| 191 | Ephoto - Blackpink | GET | text | Image (URL) | free | [/api/ephoto/blackpink](https://api.vtech.biz.id/api/ephoto/blackpink?apikey=ApiPinaa&text=Beta) |
| 192 | Ephoto - Blackpink2 | GET | text | Image (URL) | free | [/api/ephoto/blackpink2](https://api.vtech.biz.id/api/ephoto/blackpink2?apikey=ApiPinaa&text=Beta) |
| 193 | Ephoto - Blueneon | GET | text | Image (URL) | free | [/api/ephoto/blueneon](https://api.vtech.biz.id/api/ephoto/blueneon?apikey=ApiPinaa&text=Beta) |
| 194 | Ephoto - Cloth | GET | text | Image (URL) | free | [/api/ephoto/cloth](https://api.vtech.biz.id/api/ephoto/cloth?apikey=ApiPinaa&text=Beta) |
| 195 | Ephoto - Cloud | GET | text | Image (URL) | free | [/api/ephoto/cloud](https://api.vtech.biz.id/api/ephoto/cloud?apikey=ApiPinaa&text=Beta) |
| 196 | Ephoto - Coverpubg | GET | text | Image (URL) | free | [/api/ephoto/coverpubg](https://api.vtech.biz.id/api/ephoto/coverpubg?apikey=ApiPinaa&text=Beta) |
| 197 | Ephoto - Dragonfire | GET | text | Image (URL) | free | [/api/ephoto/dragonfire](https://api.vtech.biz.id/api/ephoto/dragonfire?apikey=ApiPinaa&text=Beta) |
| 198 | Ephoto - Eraser | GET | text | Image (URL) | free | [/api/ephoto/eraser](https://api.vtech.biz.id/api/ephoto/eraser?apikey=ApiPinaa&text=Beta) |
| 199 | Ephoto - Fbgoldbutton | GET | text | Image (URL) | free | [/api/ephoto/fbgoldbutton](https://api.vtech.biz.id/api/ephoto/fbgoldbutton?apikey=ApiPinaa&text=Beta) |
| 200 | Ephoto - Fbsilverbutton | GET | text | Image (URL) | free | [/api/ephoto/fbsilverbutton](https://api.vtech.biz.id/api/ephoto/fbsilverbutton?apikey=ApiPinaa&text=Beta) |
| 201 | Ephoto - Galaxy | GET | text | Image (URL) | free | [/api/ephoto/galaxy](https://api.vtech.biz.id/api/ephoto/galaxy?apikey=ApiPinaa&text=Beta) |
| 202 | Ephoto - Glasses | GET | text | Image (URL) | free | [/api/ephoto/glasses](https://api.vtech.biz.id/api/ephoto/glasses?apikey=ApiPinaa&text=Beta) |
| 203 | Ephoto - Grafitti | GET | text | Image (URL) | free | [/api/ephoto/grafitti](https://api.vtech.biz.id/api/ephoto/grafitti?apikey=ApiPinaa&text=Beta) |
| 204 | Ephoto - Greenbrush | GET | text | Image (URL) | free | [/api/ephoto/greenbrush](https://api.vtech.biz.id/api/ephoto/greenbrush?apikey=ApiPinaa&text=Beta) |
| 205 | Ephoto - Horor | GET | text | Image (URL) | free | [/api/ephoto/horor](https://api.vtech.biz.id/api/ephoto/horor?apikey=ApiPinaa&text=Beta) |
| 206 | Ephoto - Iggoldbutton | GET | text | Image (URL) | free | [/api/ephoto/iggoldbutton](https://api.vtech.biz.id/api/ephoto/iggoldbutton?apikey=ApiPinaa&text=Beta) |
| 207 | Ephoto - Igsilverbutton | GET | text | Image (URL) | free | [/api/ephoto/igsilverbutton](https://api.vtech.biz.id/api/ephoto/igsilverbutton?apikey=ApiPinaa&text=Beta) |
| 208 | Ephoto - Incandescent | GET | text | Image (URL) | free | [/api/ephoto/incandescent](https://api.vtech.biz.id/api/ephoto/incandescent?apikey=ApiPinaa&text=Beta) |
| 209 | Ephoto - Letters | GET | text | Image (URL) | free | [/api/ephoto/letters](https://api.vtech.biz.id/api/ephoto/letters?apikey=ApiPinaa&text=Beta) |
| 210 | Ephoto - Nightstars | GET | text | Image (URL) | free | [/api/ephoto/nightstars](https://api.vtech.biz.id/api/ephoto/nightstars?apikey=ApiPinaa&text=Beta) |
| 211 | Ephoto - Papercut | GET | text | Image (URL) | free | [/api/ephoto/papercut](https://api.vtech.biz.id/api/ephoto/papercut?apikey=ApiPinaa&text=Beta) |
| 212 | Ephoto - Pig | GET | text | Image (URL) | free | [/api/ephoto/pig](https://api.vtech.biz.id/api/ephoto/pig?apikey=ApiPinaa&text=Beta) |
| 213 | Ephoto - Sunlight | GET | text | Image (URL) | free | [/api/ephoto/sunlight](https://api.vtech.biz.id/api/ephoto/sunlight?apikey=ApiPinaa&text=Beta) |
| 214 | Ephoto - Televisi | GET | text | Image (URL) | free | [/api/ephoto/televisi](https://api.vtech.biz.id/api/ephoto/televisi?apikey=ApiPinaa&text=Beta) |
| 215 | Ephoto - Twtgoldbutton | GET | text | Image (URL) | free | [/api/ephoto/twtgoldbutton](https://api.vtech.biz.id/api/ephoto/twtgoldbutton?apikey=ApiPinaa&text=Beta) |
| 216 | Ephoto - Twtsilverbutton | GET | text | Image (URL) | free | [/api/ephoto/twtsilverbutton](https://api.vtech.biz.id/api/ephoto/twtsilverbutton?apikey=ApiPinaa&text=Beta) |
| 217 | Ephoto - Typography | GET | text | Image (URL) | free | [/api/ephoto/typography](https://api.vtech.biz.id/api/ephoto/typography?apikey=ApiPinaa&text=Beta) |
| 218 | Ephoto - Typography2 | GET | text | Image (URL) | free | [/api/ephoto/typography2](https://api.vtech.biz.id/api/ephoto/typography2?apikey=ApiPinaa&text=Beta) |
| 219 | Ephoto - Ytgoldbutton | GET | text | Image (URL) | free | [/api/ephoto/ytgoldbutton](https://api.vtech.biz.id/api/ephoto/ytgoldbutton?apikey=ApiPinaa&text=Beta) |
| 220 | Ephoto - Ytsilverbutton | GET | text | Image (URL) | free | [/api/ephoto/ytsilverbutton](https://api.vtech.biz.id/api/ephoto/ytsilverbutton?apikey=ApiPinaa&text=Beta) |

## Game (26 endpoint)

| No | Nama | Method | Params | Tipe Respon | Plan | Link Contoh |
|----|------|--------|--------|-------------|------|-------------|
| 221 | Game - Asahotak | GET | - | JSON | free | [/api/game/asahotak](https://api.vtech.biz.id/api/game/asahotak?apikey=ApiPinaa) |
| 222 | Game - Family100 | GET | - | JSON | free | [/api/game/family100](https://api.vtech.biz.id/api/game/family100?apikey=ApiPinaa) |
| 223 | Game - Family100 2 | GET | - | JSON | free | [/api/game/family100-2](https://api.vtech.biz.id/api/game/family100-2?apikey=ApiPinaa) |
| 224 | Game - Kuisislami | GET | - | JSON | free | [/api/game/kuisislami](https://api.vtech.biz.id/api/game/kuisislami?apikey=ApiPinaa) |
| 225 | Game - Kuismerdeka | GET | - | JSON | free | [/api/game/kuismerdeka](https://api.vtech.biz.id/api/game/kuismerdeka?apikey=ApiPinaa) |
| 226 | Game - Math | GET | - | JSON | free | [/api/game/math](https://api.vtech.biz.id/api/game/math?apikey=ApiPinaa) |
| 227 | Game - Siapakahaku | GET | - | JSON | free | [/api/game/siapakahaku](https://api.vtech.biz.id/api/game/siapakahaku?apikey=ApiPinaa) |
| 228 | Game - Susunkata | GET | - | JSON | free | [/api/game/susunkata](https://api.vtech.biz.id/api/game/susunkata?apikey=ApiPinaa) |
| 229 | Game - Tebakdrakor | GET | - | JSON | free | [/api/game/tebakdrakor](https://api.vtech.biz.id/api/game/tebakdrakor?apikey=ApiPinaa) |
| 230 | Game - Tebakemoji | GET | - | JSON | free | [/api/game/tebakemoji](https://api.vtech.biz.id/api/game/tebakemoji?apikey=ApiPinaa) |
| 231 | Game - Tebakepep | GET | - | JSON | free | [/api/game/tebakepep](https://api.vtech.biz.id/api/game/tebakepep?apikey=ApiPinaa) |
| 232 | Game - Tebakgambar | GET | - | JSON | free | [/api/game/tebakgambar](https://api.vtech.biz.id/api/game/tebakgambar?apikey=ApiPinaa) |
| 233 | Game - Tebakheroml | GET | - | JSON | free | [/api/game/tebakheroml](https://api.vtech.biz.id/api/game/tebakheroml?apikey=ApiPinaa) |
| 234 | Game - Tebakjkt48 | GET | - | JSON | free | [/api/game/tebakjkt48](https://api.vtech.biz.id/api/game/tebakjkt48?apikey=ApiPinaa) |
| 235 | Game - Tebakkabupaten | GET | - | JSON | free | [/api/game/tebakkabupaten](https://api.vtech.biz.id/api/game/tebakkabupaten?apikey=ApiPinaa) |
| 236 | Game - Tebakkata | GET | - | JSON | free | [/api/game/tebakkata](https://api.vtech.biz.id/api/game/tebakkata?apikey=ApiPinaa) |
| 237 | Game - Tebakkode | GET | - | JSON | free | [/api/game/tebakkode](https://api.vtech.biz.id/api/game/tebakkode?apikey=ApiPinaa) |
| 238 | Game - Tebaklagu | GET | - | JSON | free | [/api/game/tebaklagu](https://api.vtech.biz.id/api/game/tebaklagu?apikey=ApiPinaa) |
| 239 | Game - Tebakmakanan | GET | - | JSON | free | [/api/game/tebakmakanan](https://api.vtech.biz.id/api/game/tebakmakanan?apikey=ApiPinaa) |
| 240 | Game - Tebaknamatokoh | GET | - | JSON | free | [/api/game/tebaknamatokoh](https://api.vtech.biz.id/api/game/tebaknamatokoh?apikey=ApiPinaa) |
| 241 | Game - Tebakpemainbola | GET | - | JSON | free | [/api/game/tebakpemainbola](https://api.vtech.biz.id/api/game/tebakpemainbola?apikey=ApiPinaa) |
| 242 | Game - Tebakpokemon | GET | - | JSON | free | [/api/game/tebakpokemon](https://api.vtech.biz.id/api/game/tebakpokemon?apikey=ApiPinaa) |
| 243 | Game - Tebakpop | GET | - | JSON | free | [/api/game/tebakpop](https://api.vtech.biz.id/api/game/tebakpop?apikey=ApiPinaa) |
| 244 | Game - Tebakpresiden | GET | - | JSON | free | [/api/game/tebakpresiden](https://api.vtech.biz.id/api/game/tebakpresiden?apikey=ApiPinaa) |
| 245 | Game - Tebakwallet | GET | - | JSON | free | [/api/game/tebakwallet](https://api.vtech.biz.id/api/game/tebakwallet?apikey=ApiPinaa) |
| 246 | Game - Tekateki | GET | - | JSON | free | [/api/game/tekateki](https://api.vtech.biz.id/api/game/tekateki?apikey=ApiPinaa) |

## Information (1 endpoint)

| No | Nama | Method | Params | Tipe Respon | Plan | Link Contoh |
|----|------|--------|--------|-------------|------|-------------|
| 247 | Information - BMKG | GET | - | JSON | free | [/api/info/bmkg](https://api.vtech.biz.id/api/info/bmkg?apikey=ApiPinaa) |

## Islamic (14 endpoint)

| No | Nama | Method | Params | Tipe Respon | Plan | Link Contoh |
|----|------|--------|--------|-------------|------|-------------|
| 248 | Islamic - Asmaul Husna | GET | - | JSON | free | [/api/islamic/asmaulhusna](https://api.vtech.biz.id/api/islamic/asmaulhusna?apikey=ApiPinaa) |
| 249 | Islamic - Bacaan Shalat | GET | - | JSON | free | [/api/islamic/bacaanshalat](https://api.vtech.biz.id/api/islamic/bacaanshalat?apikey=ApiPinaa) |
| 250 | Islamic - Doa Harian | GET | - | JSON | free | [/api/islamic/doaharian](https://api.vtech.biz.id/api/islamic/doaharian?apikey=ApiPinaa) |
| 251 | Islamic - Kisah Nabi | GET | nabi | JSON | free | [/api/islamic/kisahnabi](https://api.vtech.biz.id/api/islamic/kisahnabi?apikey=ApiPinaa&nabi=muhammad) |
| 252 | Islamic - Kisah Nabi (List) | GET | - | JSON | free | [/api/islamic/kisahnabi2](https://api.vtech.biz.id/api/islamic/kisahnabi2?apikey=ApiPinaa) |
| 253 | Islamic - Niat Ashar | GET | - | JSON | free | [/api/islamic/niatashar](https://api.vtech.biz.id/api/islamic/niatashar?apikey=ApiPinaa) |
| 254 | Islamic - Niat Dzuhur | GET | - | JSON | free | [/api/islamic/niatdzuhur](https://api.vtech.biz.id/api/islamic/niatdzuhur?apikey=ApiPinaa) |
| 255 | Islamic - Niat Isya | GET | - | JSON | free | [/api/islamic/niatisya](https://api.vtech.biz.id/api/islamic/niatisya?apikey=ApiPinaa) |
| 256 | Islamic - Niat Maghrib | GET | - | JSON | free | [/api/islamic/niatmaghrib](https://api.vtech.biz.id/api/islamic/niatmaghrib?apikey=ApiPinaa) |
| 257 | Islamic - Niat Shubuh | GET | - | JSON | free | [/api/islamic/niatshubuh](https://api.vtech.biz.id/api/islamic/niatshubuh?apikey=ApiPinaa) |
| 258 | Islamic - Surah | GET | no | JSON | free | [/api/islamic/surah](https://api.vtech.biz.id/api/islamic/surah?apikey=ApiPinaa&no=6) |
| 259 | Islamic - Tafsir Surah | GET | text | JSON | free | [/api/islamic/tafsirsurah](https://api.vtech.biz.id/api/islamic/tafsirsurah?apikey=ApiPinaa&text=adam) |
| 260 | Islamic - Tahlil | GET | - | JSON | free | [/api/islamic/tahlil](https://api.vtech.biz.id/api/islamic/tahlil?apikey=ApiPinaa) |
| 261 | Islamic - Wirid | GET | - | JSON | free | [/api/islamic/wirid](https://api.vtech.biz.id/api/islamic/wirid?apikey=ApiPinaa) |

## Maker (29 endpoint)

| No | Nama | Method | Params | Tipe Respon | Plan | Link Contoh |
|----|------|--------|--------|-------------|------|-------------|
| 262 | Maker - ATTP | GET | text | Video (MP4 URL) | free | [/api/maker/attp](https://api.vtech.biz.id/api/maker/attp?apikey=ApiPinaa&text=Love) |
| 263 | Maker - Brat Video | GET | text | Video (MP4 URL) | free | [/api/maker/brat-video](https://api.vtech.biz.id/api/maker/brat-video?apikey=ApiPinaa&text=BetaBotz%20dan%20Botcahx%20Menyala) |
| 264 | Maker - Brat | GET | text | Image (URL) | free | [/api/maker/brat](https://api.vtech.biz.id/api/maker/brat?apikey=ApiPinaa&text=Love) |
| 265 | Maker - Carbon | GET | text | Image (URL) | free | [/api/maker/carbon](https://api.vtech.biz.id/api/maker/carbon?apikey=ApiPinaa&text=const%20me%20%3D%20require('me')) |
| 266 | Maker - Generate Lirik | GET | prompt | Image (URL) | free | [/api/maker/generateLirik](https://api.vtech.biz.id/api/maker/generateLirik?apikey=ApiPinaa&prompt=betabotz%2Cberaksiii) |
| 267 | Maker - IQC | GET | text | Image (URL) | free | [/api/maker/iqc](https://api.vtech.biz.id/api/maker/iqc?apikey=ApiPinaa&text=Love) |
| 268 | Maker - Jadi Anime | GET | url | Image (URL) | free | [/api/maker/jadianime](https://api.vtech.biz.id/api/maker/jadianime?apikey=ApiPinaa&url=https%3A%2F%2Ftelegra.ph%2Ffile%2Fa922f56e91b75daa282ba.jpg) |
| 269 | Maker - Jadi Anime 3D | GET | url | Image (URL) | free | [/api/maker/jadianime3d](https://api.vtech.biz.id/api/maker/jadianime3d?apikey=ApiPinaa&url=https%3A%2F%2Ftelegra.ph%2Ffile%2F1076994410f2eaa50bb03.png) |
| 270 | Maker - Jadi Cartoon | GET | url | Image (URL) | free | [/api/maker/jadicartoon](https://api.vtech.biz.id/api/maker/jadicartoon?apikey=ApiPinaa&url=https%3A%2F%2Fi.imgur.com%2Fsample.jpg) |
| 271 | Maker - Jadi Comic Book | GET | url | Image (URL) | free | [/api/maker/jadicomicbook](https://api.vtech.biz.id/api/maker/jadicomicbook?apikey=ApiPinaa&url=https%3A%2F%2Fi.imgur.com%2Fsample.jpg) |
| 272 | Maker - Jadi Cyberpunk | GET | url | Image (URL) | free | [/api/maker/jadicyberpunk](https://api.vtech.biz.id/api/maker/jadicyberpunk?apikey=ApiPinaa&url=https%3A%2F%2Fi.imgur.com%2Fsample.jpg) |
| 273 | Maker - Jadi Disney | GET | url | Image (URL) | free | [/api/maker/jadidisney](https://api.vtech.biz.id/api/maker/jadidisney?apikey=ApiPinaa&url=https%3A%2F%2Fi.imgur.com%2Fsample.jpg) |
| 274 | Maker - Jadi Ghibli | GET | url | Image (URL) | free | [/api/maker/jadighibili](https://api.vtech.biz.id/api/maker/jadighibili?apikey=ApiPinaa&url=https%3A%2F%2Fi.imgur.com%2Fsample.jpg) |
| 275 | Maker - Jadi GTA | GET | url | Image (URL) | free | [/api/maker/jadigta](https://api.vtech.biz.id/api/maker/jadigta?apikey=ApiPinaa&url=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fb7%2F46%2F58%2Fb746) |
| 276 | Maker - Jadi Hijab | GET | url | Image (URL) | free | [/api/maker/jadihijab](https://api.vtech.biz.id/api/maker/jadihijab?apikey=ApiPinaa&url=https%3A%2F%2Fi.imgur.com%2Fsample.jpg) |
| 277 | Maker - Jadi Hitam | GET | url | Image (URL) | free | [/api/maker/jadihitam](https://api.vtech.biz.id/api/maker/jadihitam?apikey=ApiPinaa&url=https%3A%2F%2Fi.imgur.com%2Fsample.jpg) |
| 278 | Maker - Jadi Pixar | GET | url | Image (URL) | free | [/api/maker/jadipixar](https://api.vtech.biz.id/api/maker/jadipixar?apikey=ApiPinaa&url=https%3A%2F%2Fi.imgur.com%2Fsample.jpg) |
| 279 | Maker - Jadi Pixel Art | GET | url | Image (URL) | free | [/api/maker/jadipixelart](https://api.vtech.biz.id/api/maker/jadipixelart?apikey=ApiPinaa&url=https%3A%2F%2Fi.imgur.com%2Fsample.jpg) |
| 280 | Maker - Jadi Putih | GET | url | Image (URL) | free | [/api/maker/jadiputih](https://api.vtech.biz.id/api/maker/jadiputih?apikey=ApiPinaa&url=https%3A%2F%2Fi.imgur.com%2Fsample.jpg) |
| 281 | Maker - Jadi SDM Tinggi | GET | url | Image (URL) | free | [/api/maker/jadisdmtinggi](https://api.vtech.biz.id/api/maker/jadisdmtinggi?apikey=ApiPinaa&url=https%3A%2F%2Fi.imgur.com%2Fsample.jpg) |
| 282 | Maker - Jadi Van Gogh | GET | url | Image (URL) | free | [/api/maker/jadivangogh](https://api.vtech.biz.id/api/maker/jadivangogh?apikey=ApiPinaa&url=https%3A%2F%2Fi.imgur.com%2Fsample.jpg) |
| 283 | Maker - Jadi Zombie | GET | url | Image (URL) | free | [/api/maker/jadizombie](https://api.vtech.biz.id/api/maker/jadizombie?apikey=ApiPinaa&url=https%3A%2F%2Ftelegra.ph%2Ffile%2F1076994410f2eaa50bb03.png) |
| 284 | Maker - Quotes Video | GET | url, text | Video (MP4 URL) | free | [/api/maker/quotesvideo](https://api.vtech.biz.id/api/maker/quotesvideo?apikey=ApiPinaa&url=https%3A%2F%2Ffiles.catbox.moe%2Fx2ftud.mp4&text=makan%20ayam) |
| 285 | Maker - Text to Image | GET | text | Image (URL) | free | [/api/maker/text2img](https://api.vtech.biz.id/api/maker/text2img?apikey=ApiPinaa&text=cat%2Crunning) |
| 286 | Maker - Textpro | GET | url, text1, text2 | Image (URL) | free | [/api/maker/textpro](https://api.vtech.biz.id/api/maker/textpro?apikey=ApiPinaa&url=https%3A%2F%2Ftextpro.me%2Fcreate-artistic-3d-text-effects-f&text1=Vynaa&text2=API) |
| 287 | Maker - To Figure | GET | url | Image (URL) | free | [/api/maker/tofigure](https://api.vtech.biz.id/api/maker/tofigure?apikey=ApiPinaa&url=https%3A%2F%2Fi.imgur.com%2Fsample.jpg) |
| 288 | Maker - To Figure v2 | GET | url | Image (URL) | free | [/api/maker/tofigurev2](https://api.vtech.biz.id/api/maker/tofigurev2?apikey=ApiPinaa&url=https%3A%2F%2Fi.imgur.com%2Fsample.jpg) |
| 289 | Maker - To Figure v3 | GET | url | Image (URL) | free | [/api/maker/tofigurev3](https://api.vtech.biz.id/api/maker/tofigurev3?apikey=ApiPinaa&url=https%3A%2F%2Fi.imgur.com%2Fsample.jpg) |
| 290 | Maker - TTP | GET | text | Image (URL) | free | [/api/maker/ttp](https://api.vtech.biz.id/api/maker/ttp?apikey=ApiPinaa&text=Love) |

## News (10 endpoint)

| No | Nama | Method | Params | Tipe Respon | Plan | Link Contoh |
|----|------|--------|--------|-------------|------|-------------|
| 291 | News - CNBC | GET | - | JSON | free | [/api/news/cnbc](https://api.vtech.biz.id/api/news/cnbc?apikey=ApiPinaa) |
| 292 | News - CNN | GET | - | JSON | free | [/api/news/cnn](https://api.vtech.biz.id/api/news/cnn?apikey=ApiPinaa) |
| 293 | News - Daily | GET | - | JSON | free | [/api/news/daily](https://api.vtech.biz.id/api/news/daily?apikey=ApiPinaa) |
| 294 | News - Detik | GET | - | JSON | free | [/api/news/detik](https://api.vtech.biz.id/api/news/detik?apikey=ApiPinaa) |
| 295 | News - Indozone | GET | - | JSON | free | [/api/news/indozone](https://api.vtech.biz.id/api/news/indozone?apikey=ApiPinaa) |
| 296 | News - iNews | GET | - | JSON | free | [/api/news/inews](https://api.vtech.biz.id/api/news/inews?apikey=ApiPinaa) |
| 297 | News - Kompas | GET | - | JSON | free | [/api/news/kompas](https://api.vtech.biz.id/api/news/kompas?apikey=ApiPinaa) |
| 298 | News - Kontan | GET | - | JSON | free | [/api/news/kontan](https://api.vtech.biz.id/api/news/kontan?apikey=ApiPinaa) |
| 299 | News - Koran Fajar | GET | - | JSON | free | [/api/news/koranfajar](https://api.vtech.biz.id/api/news/koranfajar?apikey=ApiPinaa) |
| 300 | News - Tribun | GET | - | JSON | free | [/api/news/tribun](https://api.vtech.biz.id/api/news/tribun?apikey=ApiPinaa) |

## Nsfw (26 endpoint)

| No | Nama | Method | Params | Tipe Respon | Plan | Link Contoh |
|----|------|--------|--------|-------------|------|-------------|
| 301 | NSFW - Ahegao | GET | - | Image (URL) | free | [/api/nsfw/ahegao](https://api.vtech.biz.id/api/nsfw/ahegao?apikey=ApiPinaa) |
| 302 | NSFW - Ass | GET | - | Image (URL) | free | [/api/nsfw/ass](https://api.vtech.biz.id/api/nsfw/ass?apikey=ApiPinaa) |
| 303 | NSFW - Bdsm | GET | - | Image (URL) | free | [/api/nsfw/bdsm](https://api.vtech.biz.id/api/nsfw/bdsm?apikey=ApiPinaa) |
| 304 | NSFW - Blowjob | GET | - | Image (URL) | free | [/api/nsfw/blowjob](https://api.vtech.biz.id/api/nsfw/blowjob?apikey=ApiPinaa) |
| 305 | NSFW - Cuckold | GET | - | Image (URL) | free | [/api/nsfw/cuckold](https://api.vtech.biz.id/api/nsfw/cuckold?apikey=ApiPinaa) |
| 306 | NSFW - Cum | GET | - | Image (URL) | free | [/api/nsfw/cum](https://api.vtech.biz.id/api/nsfw/cum?apikey=ApiPinaa) |
| 307 | NSFW - Ero | GET | - | Image (URL) | free | [/api/nsfw/ero](https://api.vtech.biz.id/api/nsfw/ero?apikey=ApiPinaa) |
| 308 | NSFW - Femdom | GET | - | Image (URL) | free | [/api/nsfw/femdom](https://api.vtech.biz.id/api/nsfw/femdom?apikey=ApiPinaa) |
| 309 | NSFW - Foot | GET | - | Image (URL) | free | [/api/nsfw/foot](https://api.vtech.biz.id/api/nsfw/foot?apikey=ApiPinaa) |
| 310 | NSFW - Gangbang | GET | - | Image (URL) | free | [/api/nsfw/gangbang](https://api.vtech.biz.id/api/nsfw/gangbang?apikey=ApiPinaa) |
| 311 | NSFW - Gay | GET | - | Image (URL) | free | [/api/nsfw/gay](https://api.vtech.biz.id/api/nsfw/gay?apikey=ApiPinaa) |
| 312 | NSFW - Gifs | GET | - | Image (URL) | free | [/api/nsfw/gifs](https://api.vtech.biz.id/api/nsfw/gifs?apikey=ApiPinaa) |
| 313 | NSFW - Glasses | GET | - | Image (URL) | free | [/api/nsfw/glasses](https://api.vtech.biz.id/api/nsfw/glasses?apikey=ApiPinaa) |
| 314 | NSFW - Hentai | GET | - | Image (URL) | free | [/api/nsfw/hentai](https://api.vtech.biz.id/api/nsfw/hentai?apikey=ApiPinaa) |
| 315 | NSFW - Jahy | GET | - | Image (URL) | free | [/api/nsfw/jahy](https://api.vtech.biz.id/api/nsfw/jahy?apikey=ApiPinaa) |
| 316 | NSFW - Manga | GET | - | Image (URL) | free | [/api/nsfw/manga](https://api.vtech.biz.id/api/nsfw/manga?apikey=ApiPinaa) |
| 317 | NSFW - Masturbation | GET | - | Image (URL) | free | [/api/nsfw/masturbation](https://api.vtech.biz.id/api/nsfw/masturbation?apikey=ApiPinaa) |
| 318 | NSFW - Neko | GET | - | Image (URL) | free | [/api/nsfw/neko](https://api.vtech.biz.id/api/nsfw/neko?apikey=ApiPinaa) |
| 319 | NSFW - Neko2 | GET | - | Image (URL) | free | [/api/nsfw/neko2](https://api.vtech.biz.id/api/nsfw/neko2?apikey=ApiPinaa) |
| 320 | NSFW - Orgy | GET | - | Image (URL) | free | [/api/nsfw/orgy](https://api.vtech.biz.id/api/nsfw/orgy?apikey=ApiPinaa) |
| 321 | NSFW - Panties | GET | - | Image (URL) | free | [/api/nsfw/panties](https://api.vtech.biz.id/api/nsfw/panties?apikey=ApiPinaa) |
| 322 | NSFW - Pussy | GET | - | Image (URL) | free | [/api/nsfw/pussy](https://api.vtech.biz.id/api/nsfw/pussy?apikey=ApiPinaa) |
| 323 | NSFW - Tentacles | GET | - | Image (URL) | free | [/api/nsfw/tentacles](https://api.vtech.biz.id/api/nsfw/tentacles?apikey=ApiPinaa) |
| 324 | NSFW - Thighs | GET | - | Image (URL) | free | [/api/nsfw/thighs](https://api.vtech.biz.id/api/nsfw/thighs?apikey=ApiPinaa) |
| 325 | NSFW - Yuri | GET | - | Image (URL) | free | [/api/nsfw/yuri](https://api.vtech.biz.id/api/nsfw/yuri?apikey=ApiPinaa) |
| 326 | NSFW - Zettai | GET | - | Image (URL) | free | [/api/nsfw/zettai](https://api.vtech.biz.id/api/nsfw/zettai?apikey=ApiPinaa) |

## Photooxy (24 endpoint)

| No | Nama | Method | Params | Tipe Respon | Plan | Link Contoh |
|----|------|--------|--------|-------------|------|-------------|
| 327 | Photooxy - 3d Summer | GET | text1 | Image (URL) | free | [/api/photooxy/3d-summer](https://api.vtech.biz.id/api/photooxy/3d-summer?apikey=ApiPinaa&text1=Beta) |
| 328 | Photooxy - Bevel Text | GET | text1 | Image (URL) | free | [/api/photooxy/bevel-text](https://api.vtech.biz.id/api/photooxy/bevel-text?apikey=ApiPinaa&text1=Beta) |
| 329 | Photooxy - Burn Paper | GET | text1 | Image (URL) | free | [/api/photooxy/burn-paper](https://api.vtech.biz.id/api/photooxy/burn-paper?apikey=ApiPinaa&text1=Beta) |
| 330 | Photooxy - Butterfly | GET | text1, text2 | Image (URL) | free | [/api/photooxy/butterfly](https://api.vtech.biz.id/api/photooxy/butterfly?apikey=ApiPinaa&text1=Beta&text2=Botz) |
| 331 | Photooxy - Carved Wood | GET | text1 | Image (URL) | free | [/api/photooxy/carved-wood](https://api.vtech.biz.id/api/photooxy/carved-wood?apikey=ApiPinaa&text1=Beta) |
| 332 | Photooxy - Coffe Cup | GET | text1 | Image (URL) | free | [/api/photooxy/coffe-cup](https://api.vtech.biz.id/api/photooxy/coffe-cup?apikey=ApiPinaa&text1=Beta) |
| 333 | Photooxy - Flaming | GET | text1 | Image (URL) | free | [/api/photooxy/flaming](https://api.vtech.biz.id/api/photooxy/flaming?apikey=ApiPinaa&text1=Beta) |
| 334 | Photooxy - Flower Typography | GET | text1 | Image (URL) | free | [/api/photooxy/flower-typography](https://api.vtech.biz.id/api/photooxy/flower-typography?apikey=ApiPinaa&text1=Beta) |
| 335 | Photooxy - Harry Potter | GET | text1 | Image (URL) | free | [/api/photooxy/harry-potter](https://api.vtech.biz.id/api/photooxy/harry-potter?apikey=ApiPinaa&text1=Beta) |
| 336 | Photooxy - Hello Kitty | GET | text1 | Image (URL) | free | [/api/photooxy/hello-kitty](https://api.vtech.biz.id/api/photooxy/hello-kitty?apikey=ApiPinaa&text1=Beta) |
| 337 | Photooxy - Luxury | GET | text1 | Image (URL) | free | [/api/photooxy/luxury](https://api.vtech.biz.id/api/photooxy/luxury?apikey=ApiPinaa&text1=Beta) |
| 338 | Photooxy - Metallic | GET | text1 | Image (URL) | free | [/api/photooxy/metallic](https://api.vtech.biz.id/api/photooxy/metallic?apikey=ApiPinaa&text1=Beta) |
| 339 | Photooxy - Metallic2 | GET | text1 | Image (URL) | free | [/api/photooxy/metallic2](https://api.vtech.biz.id/api/photooxy/metallic2?apikey=ApiPinaa&text1=Beta) |
| 340 | Photooxy - Naruto | GET | text1 | Image (URL) | free | [/api/photooxy/naruto](https://api.vtech.biz.id/api/photooxy/naruto?apikey=ApiPinaa&text1=Beta) |
| 341 | Photooxy - Night Sky | GET | text1 | Image (URL) | free | [/api/photooxy/night-sky](https://api.vtech.biz.id/api/photooxy/night-sky?apikey=ApiPinaa&text1=Beta) |
| 342 | Photooxy - Picture Of Love | GET | text1 | Image (URL) | free | [/api/photooxy/picture-of-love](https://api.vtech.biz.id/api/photooxy/picture-of-love?apikey=ApiPinaa&text1=Beta) |
| 343 | Photooxy - Pubg | GET | text1, text2 | Image (URL) | free | [/api/photooxy/pubg](https://api.vtech.biz.id/api/photooxy/pubg?apikey=ApiPinaa&text1=Beta&text2=Botz) |
| 344 | Photooxy - Shadow Sky | GET | text1 | Image (URL) | free | [/api/photooxy/shadow-sky](https://api.vtech.biz.id/api/photooxy/shadow-sky?apikey=ApiPinaa&text1=Beta) |
| 345 | Photooxy - Smoke | GET | text1 | Image (URL) | free | [/api/photooxy/smoke](https://api.vtech.biz.id/api/photooxy/smoke?apikey=ApiPinaa&text1=Beta) |
| 346 | Photooxy - Sweet Candy | GET | text1 | Image (URL) | free | [/api/photooxy/sweet-candy](https://api.vtech.biz.id/api/photooxy/sweet-candy?apikey=ApiPinaa&text1=Beta) |
| 347 | Photooxy - Typography | GET | text1 | Image (URL) | free | [/api/photooxy/typography](https://api.vtech.biz.id/api/photooxy/typography?apikey=ApiPinaa&text1=Beta) |
| 348 | Photooxy - Under Grass | GET | text1 | Image (URL) | free | [/api/photooxy/under-grass](https://api.vtech.biz.id/api/photooxy/under-grass?apikey=ApiPinaa&text1=Beta) |
| 349 | Photooxy - Underwater | GET | text1 | Image (URL) | free | [/api/photooxy/underwater](https://api.vtech.biz.id/api/photooxy/underwater?apikey=ApiPinaa&text1=Beta) |
| 350 | Photooxy - Wolf Metal | GET | text1 | Image (URL) | free | [/api/photooxy/wolf-metal](https://api.vtech.biz.id/api/photooxy/wolf-metal?apikey=ApiPinaa&text1=Beta) |

## Primbon (25 endpoint)

| No | Nama | Method | Params | Tipe Respon | Plan | Link Contoh |
|----|------|--------|--------|-------------|------|-------------|
| 351 | Primbon - Arah Rejeki | GET | tanggal, bulan, tahun | JSON | free | [/api/primbon/arahrejeki](https://api.vtech.biz.id/api/primbon/arahrejeki?apikey=ApiPinaa&tanggal=14&bulan=5&tahun=2007) |
| 352 | Primbon - Arti Mimpi | GET | mimpi | JSON | free | [/api/primbon/artimimpi](https://api.vtech.biz.id/api/primbon/artimimpi?apikey=ApiPinaa&mimpi=mandi) |
| 353 | Primbon - Arti Nama | GET | nama | JSON | free | [/api/primbon/artinama](https://api.vtech.biz.id/api/primbon/artinama?apikey=ApiPinaa&nama=Erlan) |
| 354 | Primbon - Arti Tarot | GET | tanggal, bulan, tahun | JSON | free | [/api/primbon/artitarot](https://api.vtech.biz.id/api/primbon/artitarot?apikey=ApiPinaa&tanggal=14&bulan=5&tahun=2007) |
| 355 | Primbon - Cek Penyakit | GET | tanggal, bulan, tahun | JSON | free | [/api/primbon/cekpenyakit](https://api.vtech.biz.id/api/primbon/cekpenyakit?apikey=ApiPinaa&tanggal=14&bulan=5&tahun=2007) |
| 356 | Primbon - Hari Baik | GET | tanggal, bulan, tahun | JSON | free | [/api/primbon/haribaik](https://api.vtech.biz.id/api/primbon/haribaik?apikey=ApiPinaa&tanggal=14&bulan=5&tahun=2007) |
| 357 | Primbon - Hari Naas | GET | tanggal, bulan, tahun | JSON | free | [/api/primbon/harinaas](https://api.vtech.biz.id/api/primbon/harinaas?apikey=ApiPinaa&tanggal=14&bulan=5&tahun=2007) |
| 358 | Primbon - Hari Sangar | GET | tanggal, bulan, tahun | JSON | free | [/api/primbon/harisangar](https://api.vtech.biz.id/api/primbon/harisangar?apikey=ApiPinaa&tanggal=14&bulan=5&tahun=2007) |
| 359 | Primbon - Kecocokan Nama | GET | nama, tanggal, bulan, tahun | JSON | free | [/api/primbon/kecocokannama](https://api.vtech.biz.id/api/primbon/kecocokannama?apikey=ApiPinaa&nama=Erlan&tanggal=14&bulan=5&tahun=2007) |
| 360 | Primbon - Kecocokan Pasangan | GET | cowo, cewe | JSON | free | [/api/primbon/kecocokanpasangan](https://api.vtech.biz.id/api/primbon/kecocokanpasangan?apikey=ApiPinaa&cowo=Erlan&cewe=Anya) |
| 361 | Primbon - Memancing Ikan | GET | tanggal, bulan, tahun | JSON | free | [/api/primbon/memancingikan](https://api.vtech.biz.id/api/primbon/memancingikan?apikey=ApiPinaa&tanggal=14&bulan=5&tahun=2007) |
| 362 | Primbon - Naga Hari | GET | tanggal, bulan, tahun | JSON | free | [/api/primbon/nagahari](https://api.vtech.biz.id/api/primbon/nagahari?apikey=ApiPinaa&tanggal=14&bulan=5&tahun=2007) |
| 363 | Primbon - Nomor Hoki | GET | nomer | JSON | free | [/api/primbon/nomerhoki](https://api.vtech.biz.id/api/primbon/nomerhoki?apikey=ApiPinaa&nomer=6282337245566) |
| 364 | Primbon - Pekerjaan Weton Lahir | GET | tanggal, bulan, tahun | JSON | free | [/api/primbon/pekerjaanwetonlahir](https://api.vtech.biz.id/api/primbon/pekerjaanwetonlahir?apikey=ApiPinaa&tanggal=14&bulan=5&tahun=2007) |
| 365 | Primbon - Potensi Keberuntungan | GET | nama, tanggal, bulan, tahun | JSON | free | [/api/primbon/potensikeberuntungan](https://api.vtech.biz.id/api/primbon/potensikeberuntungan?apikey=ApiPinaa&nama=Erlan&tanggal=14&bulan=5&tahun=2007) |
| 366 | Primbon - Ramalan Cinta | GET | nama1, tanggal1, bulan1, tahun1, nama2, tanggal2, bulan2, tahun2 | JSON | free | [/api/primbon/ramalancinta](https://api.vtech.biz.id/api/primbon/ramalancinta?apikey=ApiPinaa&nama1=Erlan&tanggal1=14&bulan1=5&tahun1=2005&nama2=Anya&tanggal2=1&bulan2=2&tahun2=2005) |
| 367 | Primbon - Ramalan Jodoh | GET | nama1, tanggal1, bulan1, tahun1, nama2, tanggal2, bulan2, tahun2 | JSON | free | [/api/primbon/ramalanjodoh](https://api.vtech.biz.id/api/primbon/ramalanjodoh?apikey=ApiPinaa&nama1=Erlan&tanggal1=14&bulan1=5&tahun1=2005&nama2=Anya&tanggal2=1&bulan2=2&tahun2=2005) |
| 368 | Primbon - Ramalan Keberuntungan | GET | tanggal, bulan, tahun | JSON | free | [/api/primbon/ramalankeberuntungan](https://api.vtech.biz.id/api/primbon/ramalankeberuntungan?apikey=ApiPinaa&tanggal=14&bulan=5&tahun=2007) |
| 369 | Primbon - Ramalan Nasib | GET | tanggal, bulan, tahun | JSON | free | [/api/primbon/ramalannasib](https://api.vtech.biz.id/api/primbon/ramalannasib?apikey=ApiPinaa&tanggal=14&bulan=5&tahun=2007) |
| 370 | Primbon - Rejeki Weton | GET | tanggal, bulan, tahun | JSON | free | [/api/primbon/rejekiweton](https://api.vtech.biz.id/api/primbon/rejekiweton?apikey=ApiPinaa&tanggal=14&bulan=5&tahun=2007) |
| 371 | Primbon - Shio | GET | shio, tanggal, bulan, tahun | JSON | free | [/api/primbon/shio](https://api.vtech.biz.id/api/primbon/shio?apikey=ApiPinaa&shio=Naga&tanggal=14&bulan=5&tahun=2007) |
| 372 | Primbon - Sifat & Karakter | GET | nama, tanggal, bulan, tahun | JSON | free | [/api/primbon/sifatkarakter](https://api.vtech.biz.id/api/primbon/sifatkarakter?apikey=ApiPinaa&nama=Erlan&tanggal=14&bulan=5&tahun=2007) |
| 373 | Primbon - Ramalan Suami Istri | GET | nama1, tanggal1, bulan1, tahun1, nama2, tanggal2, bulan2, tahun2 | JSON | free | [/api/primbon/suamiistri](https://api.vtech.biz.id/api/primbon/suamiistri?apikey=ApiPinaa&nama1=Erlan&tanggal1=14&bulan1=5&tahun1=2005&nama2=Anya&tanggal2=1&bulan2=2&tahun2=2005) |
| 374 | Primbon - Tanggal Jadian / Pernikahan | GET | tanggal, bulan, tahun | JSON | free | [/api/primbon/tanggaljadianpernikahan](https://api.vtech.biz.id/api/primbon/tanggaljadianpernikahan?apikey=ApiPinaa&tanggal=14&bulan=5&tahun=2007) |
| 375 | Primbon - Weton Jawa | GET | tanggal, bulan, tahun | JSON | free | [/api/primbon/wetonjawa](https://api.vtech.biz.id/api/primbon/wetonjawa?apikey=ApiPinaa&tanggal=14&bulan=5&tahun=2007) |

## Random (26 endpoint)

| No | Nama | Method | Params | Tipe Respon | Plan | Link Contoh |
|----|------|--------|--------|-------------|------|-------------|
| 376 | Random - Pepatah Aceh | GET | - | JSON | free | [/api/random/aceh](https://api.vtech.biz.id/api/random/aceh?apikey=ApiPinaa) |
| 377 | Random - Kata Bacot | GET | - | JSON | free | [/api/random/bacot](https://api.vtech.biz.id/api/random/bacot?apikey=ApiPinaa) |
| 378 | Random - Pepatah Batak | GET | - | JSON | free | [/api/random/batak](https://api.vtech.biz.id/api/random/batak?apikey=ApiPinaa) |
| 379 | Random - Kata Bijak | GET | - | JSON | free | [/api/random/bijak](https://api.vtech.biz.id/api/random/bijak?apikey=ApiPinaa) |
| 380 | Random - Pepatah Bugis | GET | - | JSON | free | [/api/random/bugis](https://api.vtech.biz.id/api/random/bugis?apikey=ApiPinaa) |
| 381 | Random - Tebakan Cak Lontong | GET | - | JSON | free | [/api/random/caklontong](https://api.vtech.biz.id/api/random/caklontong?apikey=ApiPinaa) |
| 382 | Random - Kata Bijak China | GET | - | JSON | free | [/api/random/china](https://api.vtech.biz.id/api/random/china?apikey=ApiPinaa) |
| 383 | Random - Dare | GET | - | JSON | free | [/api/random/dare](https://api.vtech.biz.id/api/random/dare?apikey=ApiPinaa) |
| 384 | Random - Fakta Unik | GET | - | JSON | free | [/api/random/fakta](https://api.vtech.biz.id/api/random/fakta?apikey=ApiPinaa) |
| 385 | Random - Kata Fiersa Besari | GET | - | JSON | free | [/api/random/fiersa](https://api.vtech.biz.id/api/random/fiersa?apikey=ApiPinaa) |
| 386 | Random - Kata Bucin | GET | - | JSON | free | [/api/random/katabucin](https://api.vtech.biz.id/api/random/katabucin?apikey=ApiPinaa) |
| 387 | Random - Kata Dilan | GET | - | JSON | free | [/api/random/katadilan](https://api.vtech.biz.id/api/random/katadilan?apikey=ApiPinaa) |
| 388 | Random - Kata Ilham | GET | - | JSON | free | [/api/random/katailham](https://api.vtech.biz.id/api/random/katailham?apikey=ApiPinaa) |
| 389 | Random - Kata Senja | GET | - | JSON | free | [/api/random/katasenja](https://api.vtech.biz.id/api/random/katasenja?apikey=ApiPinaa) |
| 390 | Random - Pepatah Madura | GET | - | JSON | free | [/api/random/madura](https://api.vtech.biz.id/api/random/madura?apikey=ApiPinaa) |
| 391 | Random - Pepatah Melayu | GET | - | JSON | free | [/api/random/melayu](https://api.vtech.biz.id/api/random/melayu?apikey=ApiPinaa) |
| 392 | Random - Pepatah Minangkabau | GET | - | JSON | free | [/api/random/minangkabau](https://api.vtech.biz.id/api/random/minangkabau?apikey=ApiPinaa) |
| 393 | Random - Kata Motivasi | GET | - | JSON | free | [/api/random/motivasi](https://api.vtech.biz.id/api/random/motivasi?apikey=ApiPinaa) |
| 394 | Random - Kata Ngawur | GET | - | JSON | free | [/api/random/ngawur](https://api.vtech.biz.id/api/random/ngawur?apikey=ApiPinaa) |
| 395 | Random - Kata Nyindir | GET | - | JSON | free | [/api/random/nyindir](https://api.vtech.biz.id/api/random/nyindir?apikey=ApiPinaa) |
| 396 | Random - Quotes | GET | - | JSON | free | [/api/random/quotes](https://api.vtech.biz.id/api/random/quotes?apikey=ApiPinaa) |
| 397 | Random - Quotes Anime | GET | - | JSON | free | [/api/random/quotesanime](https://api.vtech.biz.id/api/random/quotesanime?apikey=ApiPinaa) |
| 398 | Random - Quotes Jawa | GET | - | JSON | free | [/api/random/quotesjawa](https://api.vtech.biz.id/api/random/quotesjawa?apikey=ApiPinaa) |
| 399 | Random - Pepatah Sunda | GET | - | JSON | free | [/api/random/sunda](https://api.vtech.biz.id/api/random/sunda?apikey=ApiPinaa) |
| 400 | Random - Tau Gasih | GET | - | JSON | free | [/api/random/taugasih](https://api.vtech.biz.id/api/random/taugasih?apikey=ApiPinaa) |
| 401 | Random - Truth | GET | - | JSON | free | [/api/random/truth](https://api.vtech.biz.id/api/random/truth?apikey=ApiPinaa) |

## Search (36 endpoint)

| No | Nama | Method | Params | Tipe Respon | Plan | Link Contoh |
|----|------|--------|--------|-------------|------|-------------|
| 402 | Search - Age Detect | GET | url | JSON | free | [/api/search/agedetect](https://api.vtech.biz.id/api/search/agedetect?apikey=ApiPinaa&url=https%3A%2F%2Ffiles.catbox.moe%2Fa13ppy.jpg) |
| 403 | Search - Bard AI | GET | text | JSON | free | [/api/search/bard-ai](https://api.vtech.biz.id/api/search/bard-ai?apikey=ApiPinaa&text=hai%20perkenalkan%20dirimu) |
| 404 | Search - Bard (Audio Q&A) | GET | url, text | Audio (URL) | free | [/api/search/bard-audio](https://api.vtech.biz.id/api/search/bard-audio?apikey=ApiPinaa&url=https%3A%2F%2Ffiles.catbox.moe%2Fx.mp3&text=describe%20this%20audio) |
| 405 | Search - Bard (Image Q&A) | GET | url, text | JSON | free | [/api/search/bard-img](https://api.vtech.biz.id/api/search/bard-img?apikey=ApiPinaa&url=https%3A%2F%2Ffiles.catbox.moe%2Fx.jpg&text=apa%20ini) |
| 406 | Search - Bard (Video Q&A) | GET | url, text | Video (URL) | free | [/api/search/bard-video](https://api.vtech.biz.id/api/search/bard-video?apikey=ApiPinaa&url=https%3A%2F%2Ffiles.catbox.moe%2Fx.mp4&text=describe%20this%20video) |
| 407 | Search - Bing Chat | GET | text | JSON | free | [/api/search/bing-chat](https://api.vtech.biz.id/api/search/bing-chat?apikey=ApiPinaa&text=hai%20siapa%20kamu) |
| 408 | Search - Bing Image | GET | text | JSON | free | [/api/search/bing-img](https://api.vtech.biz.id/api/search/bing-img?apikey=ApiPinaa&text=kucing%20lucu) |
| 409 | Search - Blackbox Chat | GET | text | JSON | free | [/api/search/blackbox-chat](https://api.vtech.biz.id/api/search/blackbox-chat?apikey=ApiPinaa&text=buatkan%20kode%20express%20simple) |
| 410 | Search - Character AI | GET | prompt, char | JSON | free | [/api/search/c-ai](https://api.vtech.biz.id/api/search/c-ai?apikey=ApiPinaa&prompt=hai%20siapa%20namamu&char=Kirito) |
| 411 | Search - Chord Lagu | GET | song | JSON | free | [/api/search/chord](https://api.vtech.biz.id/api/search/chord?apikey=ApiPinaa&song=bawa%20dia%20kembali) |
| 412 | Search - Gempa Terkini | GET | - | JSON | free | [/api/search/gempa](https://api.vtech.biz.id/api/search/gempa?apikey=ApiPinaa) |
| 413 | Search - Google Web | GET | text1 | JSON | free | [/api/search/google](https://api.vtech.biz.id/api/search/google?apikey=ApiPinaa&text1=pohon) |
| 414 | Search - Google Image | GET | text1 | JSON | free | [/api/search/googleimage](https://api.vtech.biz.id/api/search/googleimage?apikey=ApiPinaa&text1=pohon) |
| 415 | Search - GPT | GET | text | JSON | free | [/api/search/gpt](https://api.vtech.biz.id/api/search/gpt?apikey=ApiPinaa&text=kamu%20siapa) |
| 416 | Search - HappyMod | GET | query | JSON | free | [/api/search/happymod](https://api.vtech.biz.id/api/search/happymod?apikey=ApiPinaa&query=mobile%20legends) |
| 417 | Search - Hero Mobile Legends | GET | hero | JSON | free | [/api/search/heroml](https://api.vtech.biz.id/api/search/heroml?apikey=ApiPinaa&hero=kadita) |
| 418 | Search - Jarak Kota | GET | from, to | JSON | free | [/api/search/jarak](https://api.vtech.biz.id/api/search/jarak?apikey=ApiPinaa&from=bandung&to=jakarta) |
| 419 | Search - KBBI | GET | text | JSON | free | [/api/search/kbbi](https://api.vtech.biz.id/api/search/kbbi?apikey=ApiPinaa&text=pohon) |
| 420 | Search - Kode Pos | GET | query | JSON | free | [/api/search/kodepos](https://api.vtech.biz.id/api/search/kodepos?apikey=ApiPinaa&query=Cilacap) |
| 421 | Search - Lepton AI | GET | text | JSON | free | [/api/search/lepton-ai](https://api.vtech.biz.id/api/search/lepton-ai?apikey=ApiPinaa&text=hai%20siapa%20kamu) |
| 422 | Search - Link Group WA | GET | text1 | JSON | free | [/api/search/linkgroupwa](https://api.vtech.biz.id/api/search/linkgroupwa?apikey=ApiPinaa&text1=bot%20wa) |
| 423 | Search - Lirik Lagu | GET | lirik | JSON | free | [/api/search/lirik](https://api.vtech.biz.id/api/search/lirik?apikey=ApiPinaa&lirik=Jiwa%20yang%20bersedih) |
| 424 | Search - OpenAI Chat | GET | text | JSON | free | [/api/search/openai-chat](https://api.vtech.biz.id/api/search/openai-chat?apikey=ApiPinaa&text=kamu%20siapa) |
| 425 | Search - OpenAI Image Generator | GET | text | JSON | free | [/api/search/openai-image](https://api.vtech.biz.id/api/search/openai-image?apikey=ApiPinaa&text=kucing) |
| 426 | Search - Pinterest | GET | text1 | JSON | free | [/api/search/pinterest](https://api.vtech.biz.id/api/search/pinterest?apikey=ApiPinaa&text1=pohon) |
| 427 | Search - Play Store | GET | app | JSON | free | [/api/search/playstore](https://api.vtech.biz.id/api/search/playstore?apikey=ApiPinaa&app=termux) |
| 428 | Search - Ringtone | GET | text1 | JSON | free | [/api/search/ringtone](https://api.vtech.biz.id/api/search/ringtone?apikey=ApiPinaa&text1=oppo) |
| 429 | Search - SFile | GET | text | JSON | free | [/api/search/sfile](https://api.vtech.biz.id/api/search/sfile?apikey=ApiPinaa&text=whatsapp) |
| 430 | Search - SFile Mobi | GET | text1 | JSON | free | [/api/search/sfilemobi](https://api.vtech.biz.id/api/search/sfilemobi?apikey=ApiPinaa&text1=Happy%20Mod) |
| 431 | Search - Spotify | GET | query | JSON | free | [/api/search/spotify](https://api.vtech.biz.id/api/search/spotify?apikey=ApiPinaa&query=dj%20dalinda) |
| 432 | Search - Stable Diffusion | GET | text | JSON | free | [/api/search/stablediffusion](https://api.vtech.biz.id/api/search/stablediffusion?apikey=ApiPinaa&text=2girl%2Chanfu%2Csmile%2Coutdoor%2Chd) |
| 433 | Search - Sticker | GET | text1 | JSON | free | [/api/search/sticker](https://api.vtech.biz.id/api/search/sticker?apikey=ApiPinaa&text1=patrick) |
| 434 | Search - TikTok Search | GET | query | JSON | free | [/api/search/tiktoks](https://api.vtech.biz.id/api/search/tiktoks?apikey=ApiPinaa&query=perfect%20world) |
| 435 | Search - Wikimedia | GET | text1 | JSON | free | [/api/search/wikimedia](https://api.vtech.biz.id/api/search/wikimedia?apikey=ApiPinaa&text1=pohon) |
| 436 | Search - Wikipedia | GET | text | JSON | free | [/api/search/wikipedia](https://api.vtech.biz.id/api/search/wikipedia?apikey=ApiPinaa&text=pohon) |
| 437 | Search - YouTube Search | GET | query | JSON | free | [/api/search/yts](https://api.vtech.biz.id/api/search/yts?apikey=ApiPinaa&query=dalinda) |

## Stalk (15 endpoint)

| No | Nama | Method | Params | Tipe Respon | Plan | Link Contoh |
|----|------|--------|--------|-------------|------|-------------|
| 438 | Stalk - Free Fire | GET | id | JSON | free | [/api/stalk/ff](https://api.vtech.biz.id/api/stalk/ff?apikey=ApiPinaa&id=919044185) |
| 439 | Stalk - Genshin Impact | GET | id | JSON | free | [/api/stalk/genshin](https://api.vtech.biz.id/api/stalk/genshin?apikey=ApiPinaa&id=843829161) |
| 440 | Stalk - GitHub User | GET | username | JSON | free | [/api/stalk/github](https://api.vtech.biz.id/api/stalk/github?apikey=ApiPinaa&username=ERLANRAHMAT) |
| 441 | Stalk - Honor of Kings | GET | id | JSON | free | [/api/stalk/hok](https://api.vtech.biz.id/api/stalk/hok?apikey=ApiPinaa&id=6467015277108375938) |
| 442 | Stalk - Instagram | GET | username | JSON | free | [/api/stalk/ig](https://api.vtech.biz.id/api/stalk/ig?apikey=ApiPinaa&username=erlanrahmat_14) |
| 443 | Stalk - Mobile Legends V2 | GET | id, server | JSON | free | [/api/stalk/ml-v2](https://api.vtech.biz.id/api/stalk/ml-v2?apikey=ApiPinaa&id=214885010&server=2253) |
| 444 | Stalk - Mobile Legends | GET | id, server | JSON | free | [/api/stalk/ml](https://api.vtech.biz.id/api/stalk/ml?apikey=ApiPinaa&id=214885010&server=2253) |
| 445 | Stalk - NPM Package | GET | name | JSON | free | [/api/stalk/npm](https://api.vtech.biz.id/api/stalk/npm?apikey=ApiPinaa&name=beta-api) |
| 446 | Stalk - GitHub Repo Search | GET | repo | JSON | free | [/api/stalk/repo](https://api.vtech.biz.id/api/stalk/repo?apikey=ApiPinaa&repo=Hiruko%20Kagetane) |
| 447 | Stalk - Roblox | GET | username | JSON | free | [/api/stalk/roblox](https://api.vtech.biz.id/api/stalk/roblox?apikey=ApiPinaa&username=betabotzz) |
| 448 | Stalk - SnackVideo | GET | username | Video (URL) | free | [/api/stalk/snackvideo](https://api.vtech.biz.id/api/stalk/snackvideo?apikey=ApiPinaa&username=jokowi) |
| 449 | Stalk - Super Sus | GET | id | JSON | free | [/api/stalk/supersus](https://api.vtech.biz.id/api/stalk/supersus?apikey=ApiPinaa&id=20431364) |
| 450 | Stalk - TikTok | GET | username | JSON | free | [/api/stalk/tt](https://api.vtech.biz.id/api/stalk/tt?apikey=ApiPinaa&username=chikaku) |
| 451 | Stalk - Twitter / X | GET | username | JSON | free | [/api/stalk/twitter](https://api.vtech.biz.id/api/stalk/twitter?apikey=ApiPinaa&username=jokowi) |
| 452 | Stalk - YouTube | GET | username | JSON | free | [/api/stalk/yt](https://api.vtech.biz.id/api/stalk/yt?apikey=ApiPinaa&username=deaafrizal) |

## Sticker (20 endpoint)

| No | Nama | Method | Params | Tipe Respon | Plan | Link Contoh |
|----|------|--------|--------|-------------|------|-------------|
| 453 | Sticker - Among Us | GET | - | Image (URL) | free | [/api/sticker/among](https://api.vtech.biz.id/api/sticker/among?apikey=ApiPinaa) |
| 454 | Sticker - Anime | GET | - | Image (URL) | free | [/api/sticker/anime](https://api.vtech.biz.id/api/sticker/anime?apikey=ApiPinaa) |
| 455 | Sticker - Anime GIF | GET | - | Image (URL) | free | [/api/sticker/animegif](https://api.vtech.biz.id/api/sticker/animegif?apikey=ApiPinaa) |
| 456 | Sticker - Bucin | GET | - | Image (URL) | free | [/api/sticker/bucin](https://api.vtech.biz.id/api/sticker/bucin?apikey=ApiPinaa) |
| 457 | Sticker - Chat | GET | - | Image (URL) | free | [/api/sticker/chat](https://api.vtech.biz.id/api/sticker/chat?apikey=ApiPinaa) |
| 458 | Sticker - Dadu | GET | - | Image (URL) | free | [/api/sticker/dadu](https://api.vtech.biz.id/api/sticker/dadu?apikey=ApiPinaa) |
| 459 | Sticker - Dino Kuning | GET | - | Image (URL) | free | [/api/sticker/dinokuning](https://api.vtech.biz.id/api/sticker/dinokuning?apikey=ApiPinaa) |
| 460 | Sticker - Doge | GET | - | Image (URL) | free | [/api/sticker/doge](https://api.vtech.biz.id/api/sticker/doge?apikey=ApiPinaa) |
| 461 | Sticker - Gojo Satoru | GET | - | Image (URL) | free | [/api/sticker/gojosatoru](https://api.vtech.biz.id/api/sticker/gojosatoru?apikey=ApiPinaa) |
| 462 | Sticker - Gura | GET | - | Image (URL) | free | [/api/sticker/gura](https://api.vtech.biz.id/api/sticker/gura?apikey=ApiPinaa) |
| 463 | Sticker - Kawan SpongeBob | GET | - | Image (URL) | free | [/api/sticker/kawanspongebob](https://api.vtech.biz.id/api/sticker/kawanspongebob?apikey=ApiPinaa) |
| 464 | Sticker - Manusia Lidi | GET | - | Image (URL) | free | [/api/sticker/manusialidi](https://api.vtech.biz.id/api/sticker/manusialidi?apikey=ApiPinaa) |
| 465 | Sticker - Muka Lu | GET | - | Image (URL) | free | [/api/sticker/mukalu](https://api.vtech.biz.id/api/sticker/mukalu?apikey=ApiPinaa) |
| 466 | Sticker - Paimon | GET | - | Image (URL) | free | [/api/sticker/paimon](https://api.vtech.biz.id/api/sticker/paimon?apikey=ApiPinaa) |
| 467 | Sticker - Patrick | GET | - | Image (URL) | free | [/api/sticker/patrick](https://api.vtech.biz.id/api/sticker/patrick?apikey=ApiPinaa) |
| 468 | Sticker - Patrick GIF | GET | - | Image (URL) | free | [/api/sticker/patrickgif](https://api.vtech.biz.id/api/sticker/patrickgif?apikey=ApiPinaa) |
| 469 | Sticker - Pentol | GET | - | Image (URL) | free | [/api/sticker/pentol](https://api.vtech.biz.id/api/sticker/pentol?apikey=ApiPinaa) |
| 470 | Sticker - Rabbit | GET | - | Image (URL) | free | [/api/sticker/rabbit](https://api.vtech.biz.id/api/sticker/rabbit?apikey=ApiPinaa) |
| 471 | Sticker - Random | GET | - | Image (URL) | free | [/api/sticker/random](https://api.vtech.biz.id/api/sticker/random?apikey=ApiPinaa) |
| 472 | Sticker - SpongeBob | GET | - | Image (URL) | free | [/api/sticker/spongebob](https://api.vtech.biz.id/api/sticker/spongebob?apikey=ApiPinaa) |

## Story (25 endpoint)

| No | Nama | Method | Params | Tipe Respon | Plan | Link Contoh |
|----|------|--------|--------|-------------|------|-------------|
| 473 | Story - Cerpen Anak | GET | - | JSON | free | [/api/story/cerpen-anak](https://api.vtech.biz.id/api/story/cerpen-anak?apikey=ApiPinaa) |
| 474 | Story - Cerpen Budaya | GET | - | JSON | free | [/api/story/cerpen-budaya](https://api.vtech.biz.id/api/story/cerpen-budaya?apikey=ApiPinaa) |
| 475 | Story - Cerpen Cinta | GET | - | JSON | free | [/api/story/cerpen-cinta](https://api.vtech.biz.id/api/story/cerpen-cinta?apikey=ApiPinaa) |
| 476 | Story - Cerpen Galau | GET | - | JSON | free | [/api/story/cerpen-galau](https://api.vtech.biz.id/api/story/cerpen-galau?apikey=ApiPinaa) |
| 477 | Story - Cerpen Gokil | GET | - | JSON | free | [/api/story/cerpen-gokil](https://api.vtech.biz.id/api/story/cerpen-gokil?apikey=ApiPinaa) |
| 478 | Story - Cerpen Inspiratif | GET | - | JSON | free | [/api/story/cerpen-inspiratif](https://api.vtech.biz.id/api/story/cerpen-inspiratif?apikey=ApiPinaa) |
| 479 | Story - Cerpen Jepang | GET | - | JSON | free | [/api/story/cerpen-jepang](https://api.vtech.biz.id/api/story/cerpen-jepang?apikey=ApiPinaa) |
| 480 | Story - Cerpen Kehidupan | GET | - | JSON | free | [/api/story/cerpen-kehidupan](https://api.vtech.biz.id/api/story/cerpen-kehidupan?apikey=ApiPinaa) |
| 481 | Story - Cerpen Keluarga | GET | - | JSON | free | [/api/story/cerpen-keluarga](https://api.vtech.biz.id/api/story/cerpen-keluarga?apikey=ApiPinaa) |
| 482 | Story - Cerpen Korea | GET | - | JSON | free | [/api/story/cerpen-korea](https://api.vtech.biz.id/api/story/cerpen-korea?apikey=ApiPinaa) |
| 483 | Story - Cerpen Kristen | GET | - | JSON | free | [/api/story/cerpen-kristen](https://api.vtech.biz.id/api/story/cerpen-kristen?apikey=ApiPinaa) |
| 484 | Story - Cerpen Liburan | GET | - | JSON | free | [/api/story/cerpen-liburan](https://api.vtech.biz.id/api/story/cerpen-liburan?apikey=ApiPinaa) |
| 485 | Story - Cerpen Lingkungan | GET | - | JSON | free | [/api/story/cerpen-lingkungan](https://api.vtech.biz.id/api/story/cerpen-lingkungan?apikey=ApiPinaa) |
| 486 | Story - Cerpen Mengharukan | GET | - | JSON | free | [/api/story/cerpen-mengharukan](https://api.vtech.biz.id/api/story/cerpen-mengharukan?apikey=ApiPinaa) |
| 487 | Story - Cerpen Misteri | GET | - | JSON | free | [/api/story/cerpen-misteri](https://api.vtech.biz.id/api/story/cerpen-misteri?apikey=ApiPinaa) |
| 488 | Story - Cerpen Motivasi | GET | - | JSON | free | [/api/story/cerpen-motivasi](https://api.vtech.biz.id/api/story/cerpen-motivasi?apikey=ApiPinaa) |
| 489 | Story - Cerpen Nasihat | GET | - | JSON | free | [/api/story/cerpen-nasihat](https://api.vtech.biz.id/api/story/cerpen-nasihat?apikey=ApiPinaa) |
| 490 | Story - Cerpen Pendidikan | GET | - | JSON | free | [/api/story/cerpen-pendidikan](https://api.vtech.biz.id/api/story/cerpen-pendidikan?apikey=ApiPinaa) |
| 491 | Story - Cerpen Perjuangan | GET | - | JSON | free | [/api/story/cerpen-perjuangan](https://api.vtech.biz.id/api/story/cerpen-perjuangan?apikey=ApiPinaa) |
| 492 | Story - Cerpen Persahabatan | GET | - | JSON | free | [/api/story/cerpen-persahabatan](https://api.vtech.biz.id/api/story/cerpen-persahabatan?apikey=ApiPinaa) |
| 493 | Story - Cerpen Petualangan | GET | - | JSON | free | [/api/story/cerpen-petualangan](https://api.vtech.biz.id/api/story/cerpen-petualangan?apikey=ApiPinaa) |
| 494 | Story - Cerpen Ramadhan | GET | - | JSON | free | [/api/story/cerpen-ramadhan](https://api.vtech.biz.id/api/story/cerpen-ramadhan?apikey=ApiPinaa) |
| 495 | Story - Cerpen Remaja | GET | - | JSON | free | [/api/story/cerpen-remaja](https://api.vtech.biz.id/api/story/cerpen-remaja?apikey=ApiPinaa) |
| 496 | Story - Cerpen Romantis | GET | - | JSON | free | [/api/story/cerpen-romantis](https://api.vtech.biz.id/api/story/cerpen-romantis?apikey=ApiPinaa) |
| 497 | Story - Cerpen Sastra | GET | - | JSON | free | [/api/story/cerpen-sastra](https://api.vtech.biz.id/api/story/cerpen-sastra?apikey=ApiPinaa) |

## Text To Sound (12 endpoint)

| No | Nama | Method | Params | Tipe Respon | Plan | Link Contoh |
|----|------|--------|--------|-------------|------|-------------|
| 498 | TextToSound - German | GET | text1 | Audio (MP3 URL) | free | [/api/sound/tts-de](https://api.vtech.biz.id/api/sound/tts-de?apikey=ApiPinaa&text1=Halo%20dunia) |
| 499 | TextToSound - English (US) | GET | text1 | Audio (MP3 URL) | free | [/api/sound/tts-en](https://api.vtech.biz.id/api/sound/tts-en?apikey=ApiPinaa&text1=Halo%20dunia) |
| 500 | TextToSound - Filipino | GET | text1 | Audio (MP3 URL) | free | [/api/sound/tts-fil](https://api.vtech.biz.id/api/sound/tts-fil?apikey=ApiPinaa&text1=Halo%20dunia) |
| 501 | TextToSound - French | GET | text1 | Audio (MP3 URL) | free | [/api/sound/tts-fr](https://api.vtech.biz.id/api/sound/tts-fr?apikey=ApiPinaa&text1=Halo%20dunia) |
| 502 | TextToSound - Hindi | GET | text1 | Audio (MP3 URL) | free | [/api/sound/tts-hi](https://api.vtech.biz.id/api/sound/tts-hi?apikey=ApiPinaa&text1=Halo%20dunia) |
| 503 | TextToSound - Indonesian | GET | text1 | Audio (MP3 URL) | free | [/api/sound/tts-id](https://api.vtech.biz.id/api/sound/tts-id?apikey=ApiPinaa&text1=Halo%20dunia) |
| 504 | TextToSound - Italian | GET | text1 | Audio (MP3 URL) | free | [/api/sound/tts-it](https://api.vtech.biz.id/api/sound/tts-it?apikey=ApiPinaa&text1=Halo%20dunia) |
| 505 | TextToSound - Japanese | GET | text1 | Audio (MP3 URL) | free | [/api/sound/tts-ja](https://api.vtech.biz.id/api/sound/tts-ja?apikey=ApiPinaa&text1=Halo%20dunia) |
| 506 | TextToSound - Korean | GET | text1 | Audio (MP3 URL) | free | [/api/sound/tts-ko](https://api.vtech.biz.id/api/sound/tts-ko?apikey=ApiPinaa&text1=Halo%20dunia) |
| 507 | TextToSound - Burmese / Malay | GET | text1 | Audio (MP3 URL) | free | [/api/sound/tts-my](https://api.vtech.biz.id/api/sound/tts-my?apikey=ApiPinaa&text1=Halo%20dunia) |
| 508 | TextToSound - Russian | GET | text1 | Audio (MP3 URL) | free | [/api/sound/tts-ru](https://api.vtech.biz.id/api/sound/tts-ru?apikey=ApiPinaa&text1=Halo%20dunia) |
| 509 | TextToSound - Thai | GET | text1 | Audio (MP3 URL) | free | [/api/sound/tts-th](https://api.vtech.biz.id/api/sound/tts-th?apikey=ApiPinaa&text1=Halo%20dunia) |

## TextPro (65 endpoint)

| No | Nama | Method | Params | Tipe Respon | Plan | Link Contoh |
|----|------|--------|--------|-------------|------|-------------|
| 510 | TextPro - 1917 | GET | text | Image (URL) | free | [/api/textpro/1917](https://api.vtech.biz.id/api/textpro/1917?apikey=ApiPinaa&text=Beta) |
| 511 | TextPro - 3D Gradient | GET | text | Image (URL) | free | [/api/textpro/3d-gradient](https://api.vtech.biz.id/api/textpro/3d-gradient?apikey=ApiPinaa&text=Beta) |
| 512 | TextPro - 3D Stone | GET | text | Image (URL) | free | [/api/textpro/3dstone](https://api.vtech.biz.id/api/textpro/3dstone?apikey=ApiPinaa&text=Beta) |
| 513 | TextPro - Art Paper | GET | text | Image (URL) | free | [/api/textpro/art-papper](https://api.vtech.biz.id/api/textpro/art-papper?apikey=ApiPinaa&text=Beta) |
| 514 | TextPro - A-Stone | GET | text | Image (URL) | free | [/api/textpro/astone](https://api.vtech.biz.id/api/textpro/astone?apikey=ApiPinaa&text=Beta) |
| 515 | TextPro - Avengers Logo | GET | text, text2 | Image (URL) | free | [/api/textpro/avengers-logo](https://api.vtech.biz.id/api/textpro/avengers-logo?apikey=ApiPinaa&text=Beta&text2=Botz) |
| 516 | TextPro - Batman Logo | GET | text | Image (URL) | free | [/api/textpro/batman-logo](https://api.vtech.biz.id/api/textpro/batman-logo?apikey=ApiPinaa&text=Beta) |
| 517 | TextPro - Black Pink | GET | text | Image (URL) | free | [/api/textpro/black-pink](https://api.vtech.biz.id/api/textpro/black-pink?apikey=ApiPinaa&text=Beta) |
| 518 | TextPro - Black Pink 2 | GET | text | Image (URL) | free | [/api/textpro/black-pink2](https://api.vtech.biz.id/api/textpro/black-pink2?apikey=ApiPinaa&text=Beta) |
| 519 | TextPro - Blood | GET | text | Image (URL) | free | [/api/textpro/blood](https://api.vtech.biz.id/api/textpro/blood?apikey=ApiPinaa&text=Beta) |
| 520 | TextPro - Bread | GET | text | Image (URL) | free | [/api/textpro/bread](https://api.vtech.biz.id/api/textpro/bread?apikey=ApiPinaa&text=Beta) |
| 521 | TextPro - Broken Glass | GET | text | Image (URL) | free | [/api/textpro/broken-glass](https://api.vtech.biz.id/api/textpro/broken-glass?apikey=ApiPinaa&text=Beta) |
| 522 | TextPro - Captain | GET | text | Image (URL) | free | [/api/textpro/captain](https://api.vtech.biz.id/api/textpro/captain?apikey=ApiPinaa&text=Beta) |
| 523 | TextPro - Christmas | GET | text | Image (URL) | free | [/api/textpro/christmas](https://api.vtech.biz.id/api/textpro/christmas?apikey=ApiPinaa&text=Beta) |
| 524 | TextPro - Deluxe Silver | GET | text | Image (URL) | free | [/api/textpro/deluxe-silver](https://api.vtech.biz.id/api/textpro/deluxe-silver?apikey=ApiPinaa&text=Beta) |
| 525 | TextPro - Drop Water | GET | text | Image (URL) | free | [/api/textpro/drop-water](https://api.vtech.biz.id/api/textpro/drop-water?apikey=ApiPinaa&text=Beta) |
| 526 | TextPro - Engraved | GET | text | Image (URL) | free | [/api/textpro/engraved](https://api.vtech.biz.id/api/textpro/engraved?apikey=ApiPinaa&text=Beta) |
| 527 | TextPro - Fabric | GET | text | Image (URL) | free | [/api/textpro/fabric](https://api.vtech.biz.id/api/textpro/fabric?apikey=ApiPinaa&text=Beta) |
| 528 | TextPro - Giraffe | GET | text | Image (URL) | free | [/api/textpro/giraffe](https://api.vtech.biz.id/api/textpro/giraffe?apikey=ApiPinaa&text=Beta) |
| 529 | TextPro - Glitch | GET | text, text2 | Image (URL) | free | [/api/textpro/glitch](https://api.vtech.biz.id/api/textpro/glitch?apikey=ApiPinaa&text=Beta&text2=Botz) |
| 530 | TextPro - Glitch 2 | GET | text, text2 | Image (URL) | free | [/api/textpro/glitch2](https://api.vtech.biz.id/api/textpro/glitch2?apikey=ApiPinaa&text=Beta&text2=Botz) |
| 531 | TextPro - Glitch 3 | GET | text | Image (URL) | free | [/api/textpro/glitch3](https://api.vtech.biz.id/api/textpro/glitch3?apikey=ApiPinaa&text=Beta) |
| 532 | TextPro - Glossy | GET | text | Image (URL) | free | [/api/textpro/glossy](https://api.vtech.biz.id/api/textpro/glossy?apikey=ApiPinaa&text=Beta) |
| 533 | TextPro - Glue Text | GET | text | Image (URL) | free | [/api/textpro/glue-text](https://api.vtech.biz.id/api/textpro/glue-text?apikey=ApiPinaa&text=Beta) |
| 534 | TextPro - Grafity Text | GET | text | Image (URL) | free | [/api/textpro/grafity-text](https://api.vtech.biz.id/api/textpro/grafity-text?apikey=ApiPinaa&text=Beta) |
| 535 | TextPro - Grafity Text 2 | GET | text, text2 | Image (URL) | free | [/api/textpro/grafity-text2](https://api.vtech.biz.id/api/textpro/grafity-text2?apikey=ApiPinaa&text=Beta&text2=Botz) |
| 536 | TextPro - Halloween Text | GET | text | Image (URL) | free | [/api/textpro/hallowen-text](https://api.vtech.biz.id/api/textpro/hallowen-text?apikey=ApiPinaa&text=Beta) |
| 537 | TextPro - Halloween | GET | text | Image (URL) | free | [/api/textpro/hallowen](https://api.vtech.biz.id/api/textpro/hallowen?apikey=ApiPinaa&text=Beta) |
| 538 | TextPro - Harry Potter | GET | text | Image (URL) | free | [/api/textpro/harry-potter](https://api.vtech.biz.id/api/textpro/harry-potter?apikey=ApiPinaa&text=Beta) |
| 539 | TextPro - Holographic | GET | text | Image (URL) | free | [/api/textpro/holograpic](https://api.vtech.biz.id/api/textpro/holograpic?apikey=ApiPinaa&text=Beta) |
| 540 | TextPro - Honey | GET | text | Image (URL) | free | [/api/textpro/honey](https://api.vtech.biz.id/api/textpro/honey?apikey=ApiPinaa&text=Beta) |
| 541 | TextPro - Horror Blood | GET | text | Image (URL) | free | [/api/textpro/horor-blood](https://api.vtech.biz.id/api/textpro/horor-blood?apikey=ApiPinaa&text=Beta) |
| 542 | TextPro - Ice | GET | text | Image (URL) | free | [/api/textpro/ice](https://api.vtech.biz.id/api/textpro/ice?apikey=ApiPinaa&text=Beta) |
| 543 | TextPro - Joker Logo | GET | text | Image (URL) | free | [/api/textpro/joker-logo](https://api.vtech.biz.id/api/textpro/joker-logo?apikey=ApiPinaa&text=Beta) |
| 544 | TextPro - Koi | GET | text | Image (URL) | free | [/api/textpro/koi](https://api.vtech.biz.id/api/textpro/koi?apikey=ApiPinaa&text=Beta) |
| 545 | TextPro - Larva | GET | text | Image (URL) | free | [/api/textpro/larva](https://api.vtech.biz.id/api/textpro/larva?apikey=ApiPinaa&text=Beta) |
| 546 | TextPro - Lion Logo | GET | text, text2 | Image (URL) | free | [/api/textpro/lion-logo](https://api.vtech.biz.id/api/textpro/lion-logo?apikey=ApiPinaa&text=Beta&text2=Botz) |
| 547 | TextPro - Wolf Logo | GET | text, text2 | Image (URL) | free | [/api/textpro/logo-wolf](https://api.vtech.biz.id/api/textpro/logo-wolf?apikey=ApiPinaa&text=Beta&text2=Botz) |
| 548 | TextPro - Wolf Logo 2 | GET | text, text2 | Image (URL) | free | [/api/textpro/logo-wolf2](https://api.vtech.biz.id/api/textpro/logo-wolf2?apikey=ApiPinaa&text=Beta&text2=Botz) |
| 549 | TextPro - Magma | GET | text | Image (URL) | free | [/api/textpro/magma](https://api.vtech.biz.id/api/textpro/magma?apikey=ApiPinaa&text=Beta) |
| 550 | TextPro - Marvel Logo 2 | GET | text, text2 | Image (URL) | free | [/api/textpro/marvel-logo2](https://api.vtech.biz.id/api/textpro/marvel-logo2?apikey=ApiPinaa&text=Beta&text2=Botz) |
| 551 | TextPro - Marvel Logo 3 | GET | text, text2 | Image (URL) | free | [/api/textpro/marvel-logo3](https://api.vtech.biz.id/api/textpro/marvel-logo3?apikey=ApiPinaa&text=Beta&text2=Botz) |
| 552 | TextPro - Multi Color | GET | text | Image (URL) | free | [/api/textpro/multi-color](https://api.vtech.biz.id/api/textpro/multi-color?apikey=ApiPinaa&text=Beta) |
| 553 | TextPro - Natural Leaves | GET | text | Image (URL) | free | [/api/textpro/natural-leaves](https://api.vtech.biz.id/api/textpro/natural-leaves?apikey=ApiPinaa&text=Beta) |
| 554 | TextPro - Neon Devil | GET | text | Image (URL) | free | [/api/textpro/neon-devil](https://api.vtech.biz.id/api/textpro/neon-devil?apikey=ApiPinaa&text=Beta) |
| 555 | TextPro - Neon Galaxy | GET | text | Image (URL) | free | [/api/textpro/neon-galaxy](https://api.vtech.biz.id/api/textpro/neon-galaxy?apikey=ApiPinaa&text=Beta) |
| 556 | TextPro - Neon Green | GET | text | Image (URL) | free | [/api/textpro/neon-green](https://api.vtech.biz.id/api/textpro/neon-green?apikey=ApiPinaa&text=Beta) |
| 557 | TextPro - Neon Light | GET | text | Image (URL) | free | [/api/textpro/neon-light](https://api.vtech.biz.id/api/textpro/neon-light?apikey=ApiPinaa&text=Beta) |
| 558 | TextPro - Neon Online | GET | text | Image (URL) | free | [/api/textpro/neon-online](https://api.vtech.biz.id/api/textpro/neon-online?apikey=ApiPinaa&text=Beta) |
| 559 | TextPro - Ninja Logo | GET | text, text2 | Image (URL) | free | [/api/textpro/ninja-logo](https://api.vtech.biz.id/api/textpro/ninja-logo?apikey=ApiPinaa&text=Beta&text2=Botz) |
| 560 | TextPro - PornHub Logo | GET | text, text2 | Image (URL) | free | [/api/textpro/pornhub](https://api.vtech.biz.id/api/textpro/pornhub?apikey=ApiPinaa&text=Beta&text2=Botz) |
| 561 | TextPro - Robot | GET | text | Image (URL) | free | [/api/textpro/robot](https://api.vtech.biz.id/api/textpro/robot?apikey=ApiPinaa&text=Beta) |
| 562 | TextPro - Rusty | GET | text | Image (URL) | free | [/api/textpro/rusty](https://api.vtech.biz.id/api/textpro/rusty?apikey=ApiPinaa&text=Beta) |
| 563 | TextPro - Sci-Fi | GET | text | Image (URL) | free | [/api/textpro/scifi](https://api.vtech.biz.id/api/textpro/scifi?apikey=ApiPinaa&text=Beta) |
| 564 | TextPro - Sky Text | GET | text | Image (URL) | free | [/api/textpro/sky-text](https://api.vtech.biz.id/api/textpro/sky-text?apikey=ApiPinaa&text=Beta) |
| 565 | TextPro - Space | GET | text, text2 | Image (URL) | free | [/api/textpro/space](https://api.vtech.biz.id/api/textpro/space?apikey=ApiPinaa&text=Beta&text2=Botz) |
| 566 | TextPro - Stroberi | GET | text | Image (URL) | free | [/api/textpro/stroberi](https://api.vtech.biz.id/api/textpro/stroberi?apikey=ApiPinaa&text=Beta) |
| 567 | TextPro - Thunder 2 | GET | text | Image (URL) | free | [/api/textpro/thunder2](https://api.vtech.biz.id/api/textpro/thunder2?apikey=ApiPinaa&text=Beta) |
| 568 | TextPro - Toxic Bokeh | GET | text | Image (URL) | free | [/api/textpro/toxic-bokeh](https://api.vtech.biz.id/api/textpro/toxic-bokeh?apikey=ApiPinaa&text=Beta) |
| 569 | TextPro - Valentine | GET | text | Image (URL) | free | [/api/textpro/valentine](https://api.vtech.biz.id/api/textpro/valentine?apikey=ApiPinaa&text=Beta) |
| 570 | TextPro - Valentine 2 | GET | text | Image (URL) | free | [/api/textpro/valentine2](https://api.vtech.biz.id/api/textpro/valentine2?apikey=ApiPinaa&text=Beta) |
| 571 | TextPro - Vintage | GET | text, text2 | Image (URL) | free | [/api/textpro/vintage](https://api.vtech.biz.id/api/textpro/vintage?apikey=ApiPinaa&text=Beta&text2=Botz) |
| 572 | TextPro - Water Color | GET | text | Image (URL) | free | [/api/textpro/water-color](https://api.vtech.biz.id/api/textpro/water-color?apikey=ApiPinaa&text=Beta) |
| 573 | TextPro - Wicker | GET | text | Image (URL) | free | [/api/textpro/wicker](https://api.vtech.biz.id/api/textpro/wicker?apikey=ApiPinaa&text=Beta) |
| 574 | TextPro - Writing | GET | text | Image (URL) | free | [/api/textpro/writing](https://api.vtech.biz.id/api/textpro/writing?apikey=ApiPinaa&text=Beta) |

## Tools (53 endpoint)

| No | Nama | Method | Params | Tipe Respon | Plan | Link Contoh |
|----|------|--------|--------|-------------|------|-------------|
| 575 | Tools - 2FA Code Generator | GET | token | JSON | free | [/api/tools/2fa](https://api.vtech.biz.id/api/tools/2fa?apikey=ApiPinaa&token=JBSWY3DPEHPK3PXP) |
| 576 | Tools - Audio to Video | GET | url | Audio (URL) | free | [/api/tools/audio2video](https://api.vtech.biz.id/api/tools/audio2video?apikey=ApiPinaa&url=https%3A%2F%2Ffiles.catbox.moe%2F67vwuc.opus) |
| 577 | Tools - Base Encode/Decode | GET | encode, decode, type | JSON | free | [/api/tools/base](https://api.vtech.biz.id/api/tools/base?apikey=ApiPinaa&encode=BOTCAHX&decode=value&type=base64) |
| 578 | Tools - Bitly | GET | link | JSON | free | [/api/linkshort/bitly](https://api.vtech.biz.id/api/linkshort/bitly?apikey=ApiPinaa&link=https%3A%2F%2Fgoogle.com) |
| 579 | Tools - Bypass City | GET | url | JSON | free | [/api/tools/bypasscity](https://api.vtech.biz.id/api/tools/bypasscity?apikey=ApiPinaa&url=https%3A%2F%2Ftinyurl.com%2Fpessoundconverter) |
| 580 | Tools - Cek E-Wallet | GET | wallet, nomer | JSON | free | [/api/tools/cek-ewallet](https://api.vtech.biz.id/api/tools/cek-ewallet?apikey=ApiPinaa&wallet=dana&nomer=08123456789) |
| 581 | Tools - Cek Pesan Temp Mail | GET | email | JSON | free | [/api/tools/cek-msg-tmp-mail](https://api.vtech.biz.id/api/tools/cek-msg-tmp-mail?apikey=ApiPinaa&email=example%40tupmail.com) |
| 582 | Tools - Cek Bill PLN | GET | id | JSON | free | [/api/tools/cekbillpln](https://api.vtech.biz.id/api/tools/cekbillpln?apikey=ApiPinaa&id=172720204487) |
| 583 | Tools - Cek Redirect | GET | url | JSON | free | [/api/tools/cekredirect](https://api.vtech.biz.id/api/tools/cekredirect?apikey=ApiPinaa&url=https%3A%2F%2Ftinyurl.com%2Fbdtf7se9) |
| 584 | Tools - Countdown | GET | tanggal, bulan, tahun | JSON | free | [/api/tools/countdown](https://api.vtech.biz.id/api/tools/countdown?apikey=ApiPinaa&tanggal=1&bulan=Mei&tahun=2030) |
| 585 | Tools - Create Subdomain | GET | subdomain, domain, type, content, proxied | JSON | free | [/api/tools/create-subdo](https://api.vtech.biz.id/api/tools/create-subdo?apikey=ApiPinaa&subdomain=demo&domain=vynaa.web.id&type=A&content=1.1.1.1&proxied=true) |
| 586 | Tools - Create Temp Mail | GET | - | JSON | free | [/api/tools/create-temp-mail](https://api.vtech.biz.id/api/tools/create-temp-mail?apikey=ApiPinaa) |
| 587 | Tools - Cuaca | GET | query | JSON | free | [/api/tools/cuaca](https://api.vtech.biz.id/api/tools/cuaca?apikey=ApiPinaa&query=jakarta) |
| 588 | Tools - Cuttly | GET | link | JSON | free | [/api/linkshort/cuttly](https://api.vtech.biz.id/api/linkshort/cuttly?apikey=ApiPinaa&link=https%3A%2F%2Fgoogle.com) |
| 589 | Tools - Konversi Mata Uang | GET | from, to, jumlah | JSON | free | [/api/tools/cvuang](https://api.vtech.biz.id/api/tools/cvuang?apikey=ApiPinaa&from=CNY&to=IDR&jumlah=10) |
| 590 | Tools - Ephoto Radio | GET | url | JSON | free | [/api/tools/ephoto-radio](https://api.vtech.biz.id/api/tools/ephoto-radio?apikey=ApiPinaa&url=https%3A%2F%2Fen.ephoto360.com%2Fcreate-silver-button-gold-b) |
| 591 | Tools - Free Proxy List | GET | - | JSON | vip | [/api/tools/free-proxy](https://api.vtech.biz.id/api/tools/free-proxy?apikey=ApiPinaa) |
| 592 | Tools - HD Video | GET | url | Video (URL) | free | [/api/tools/hdvideo](https://api.vtech.biz.id/api/tools/hdvideo?apikey=ApiPinaa&url=https%3A%2F%2Ffiles.catbox.moe%2Fsample.mp4) |
| 593 | Tools - Image to Prompt | GET | url | JSON | free | [/api/tools/img2prompt](https://api.vtech.biz.id/api/tools/img2prompt?apikey=ApiPinaa&url=https%3A%2F%2Ffiles.catbox.moe%2Fsample.jpg) |
| 594 | Tools - Jadwal Shalat | GET | kota | JSON | free | [/api/tools/jadwalshalat](https://api.vtech.biz.id/api/tools/jadwalshalat?apikey=ApiPinaa&kota=jakarta) |
| 595 | Tools - Jadwal Shalat V2 | GET | kota | JSON | free | [/api/tools/jadwalshalatv2](https://api.vtech.biz.id/api/tools/jadwalshalatv2?apikey=ApiPinaa&kota=cilacap) |
| 596 | Tools - NSFW Detect | GET | url | JSON | free | [/api/tools/nsfw-detect](https://api.vtech.biz.id/api/tools/nsfw-detect?apikey=ApiPinaa&url=https%3A%2F%2Ffiles.catbox.moe%2Fsample.jpg) |
| 597 | Tools - Random Address | GET | country | JSON | free | [/api/tools/random-address](https://api.vtech.biz.id/api/tools/random-address?apikey=ApiPinaa&country=ID) |
| 598 | Tools - Recolor (Colorize) | GET | url | JSON | free | [/api/tools/recolor](https://api.vtech.biz.id/api/tools/recolor?apikey=ApiPinaa&url=https%3A%2F%2Ffiles.catbox.moe%2Fsample.jpg) |
| 599 | Tools - Remini V2 | GET | url | JSON | free | [/api/tools/remini-v2](https://api.vtech.biz.id/api/tools/remini-v2?apikey=ApiPinaa&url=https%3A%2F%2Ffiles.catbox.moe%2Fsample.jpg) |
| 600 | Tools - Remini V3 | GET | url, resolusi | JSON | free | [/api/tools/remini-v3](https://api.vtech.biz.id/api/tools/remini-v3?apikey=ApiPinaa&url=https%3A%2F%2Ffiles.catbox.moe%2Fsample.jpg&resolusi=4) |
| 601 | Tools - Remini V4 | GET | url, resolusi | JSON | free | [/api/tools/remini-v4](https://api.vtech.biz.id/api/tools/remini-v4?apikey=ApiPinaa&url=https%3A%2F%2Ffiles.catbox.moe%2Fsample.jpg&resolusi=16) |
| 602 | Tools - Remini | GET | url | JSON | free | [/api/tools/remini](https://api.vtech.biz.id/api/tools/remini?apikey=ApiPinaa&url=https%3A%2F%2Ffiles.catbox.moe%2Fsample.jpg) |
| 603 | Tools - Remove Background | GET | url | JSON | free | [/api/tools/removebg](https://api.vtech.biz.id/api/tools/removebg?apikey=ApiPinaa&url=https%3A%2F%2Ffiles.catbox.moe%2Fsample.jpg) |
| 604 | Tools - VCC Generator v2 | GET | type | JSON | vip | [/api/tools/vcc-generator](https://api.vtech.biz.id/api/tools/vcc-generator?apikey=ApiPinaa&type=visa) |
| 605 | Tools - Web to ZIP v2 | GET | url | JSON | vip | [/api/tools/web2zip-v2](https://api.vtech.biz.id/api/tools/web2zip-v2?apikey=ApiPinaa&url=https%3A%2F%2Fexample.com) |
| 606 | Tools - Screenshot to Code | GET | url | JSON | free | [/api/tools/ss2code](https://api.vtech.biz.id/api/tools/ss2code?apikey=ApiPinaa&url=https%3A%2F%2Ffiles.catbox.moe%2Frr6fji.jpg) |
| 607 | Tools - Screenshot Web (HP) | GET | url | JSON | free | [/api/tools/sshp](https://api.vtech.biz.id/api/tools/sshp?apikey=ApiPinaa&url=https%3A%2F%2Fgoogle.com) |
| 608 | Tools - Screenshot Web (Tablet) | GET | url | JSON | free | [/api/tools/sstablet](https://api.vtech.biz.id/api/tools/sstablet?apikey=ApiPinaa&url=https%3A%2F%2Fgoogle.com) |
| 609 | Tools - Screenshot Web (Desktop) | GET | url | JSON | free | [/api/tools/ssweb](https://api.vtech.biz.id/api/tools/ssweb?apikey=ApiPinaa&url=https%3A%2F%2Fgoogle.com) |
| 610 | Tools - Style Text | GET | text | JSON | free | [/api/tools/styletext](https://api.vtech.biz.id/api/tools/styletext?apikey=ApiPinaa&text=BOTCAHX) |
| 611 | Tools - Subdomain Finder | GET | query | JSON | free | [/api/tools/subdomain-finder](https://api.vtech.biz.id/api/tools/subdomain-finder?apikey=ApiPinaa&query=google.com) |
| 612 | Tools - Temp Mail v1 (Buat) | GET | - | JSON | vip | [/api/tools/tempmail/v1/create](https://api.vtech.biz.id/api/tools/tempmail/v1/create?apikey=ApiPinaa) |
| 613 | Tools - Temp Mail v1 (Inbox) | GET | id | JSON | vip | [/api/tools/tempmail/v1/inbox](https://api.vtech.biz.id/api/tools/tempmail/v1/inbox?apikey=ApiPinaa&id=U2Vzc2lvbjoz1Lc8FRlH...) |
| 614 | Tools - Temp Mail v2 (Buat) | GET | - | JSON | vip | [/api/tools/tempmail/v2/create](https://api.vtech.biz.id/api/tools/tempmail/v2/create?apikey=ApiPinaa) |
| 615 | Tools - Temp Mail v2 (Inbox) | GET | email | JSON | vip | [/api/tools/tempmail/v2/inbox](https://api.vtech.biz.id/api/tools/tempmail/v2/inbox?apikey=ApiPinaa&email=abc123%40givmail.com) |
| 616 | Tools - TinyURL | GET | link | JSON | free | [/api/linkshort/tinyurl](https://api.vtech.biz.id/api/linkshort/tinyurl?apikey=ApiPinaa&link=https%3A%2F%2Fgoogle.com) |
| 617 | Tools - TinyURL With Alias | GET | link, alias | JSON | free | [/api/linkshort/tinyurlwithalias](https://api.vtech.biz.id/api/linkshort/tinyurlwithalias?apikey=ApiPinaa&link=https%3A%2F%2Fgoogle.com&alias=mycustomalias) |
| 618 | Tools - Translate | GET | text, lang | JSON | free | [/api/tools/translate](https://api.vtech.biz.id/api/tools/translate?apikey=ApiPinaa&text=aku&lang=en) |
| 619 | Tools - VCC Generator | GET | jumlah | JSON | free | [/api/tools/vccgen](https://api.vtech.biz.id/api/tools/vccgen?apikey=ApiPinaa&jumlah=10) |
| 620 | Tools - Video to Audio | GET | url | Audio (URL) | free | [/api/tools/video2audio](https://api.vtech.biz.id/api/tools/video2audio?apikey=ApiPinaa&url=https%3A%2F%2Ftelegra.ph%2Ffile%2Fsample.mp4) |
| 621 | Tools - Voice Remover | GET | url | JSON | free | [/api/tools/voiceremover](https://api.vtech.biz.id/api/tools/voiceremover?apikey=ApiPinaa&url=https%3A%2F%2Ffiles.catbox.moe%2F67vwuc.opus) |
| 622 | Tools - Web to Zip | GET | url | JSON | free | [/api/tools/web2zip](https://api.vtech.biz.id/api/tools/web2zip?apikey=ApiPinaa&url=https%3A%2F%2Fgoogle.com) |
| 623 | Tools - WebP to MP4 | GET | url | JSON | free | [/api/tools/webp2mp4](https://api.vtech.biz.id/api/tools/webp2mp4?apikey=ApiPinaa&url=https%3A%2F%2Ffiles.catbox.moe%2Fl99tgg.webp) |
| 624 | Tools - WebP to PNG | GET | url | JSON | free | [/api/tools/webp2png](https://api.vtech.biz.id/api/tools/webp2png?apikey=ApiPinaa&url=https%3A%2F%2Ffiles.catbox.moe%2Fl99tgg.webp) |
| 625 | Tools - WhatMusic (Shazam) | GET | url | JSON | free | [/api/tools/whatmusic](https://api.vtech.biz.id/api/tools/whatmusic?apikey=ApiPinaa&url=https%3A%2F%2Ftelegra.ph%2Ffile%2Fe4581e8c64823a44006a3.mp4) |
| 626 | Tools - Whois Subdomain | GET | subdomain, domain | JSON | free | [/api/tools/whois-subdo](https://api.vtech.biz.id/api/tools/whois-subdo?apikey=ApiPinaa&subdomain=demo&domain=vynaa.web.id) |
| 627 | Tools - YouTube Transcript | GET | url | JSON | free | [/api/tools/yt-transcript](https://api.vtech.biz.id/api/tools/yt-transcript?apikey=ApiPinaa&url=https%3A%2F%2Fyoutu.be%2FoIHLgsPpSOE) |

## VIP (1 endpoint)

| No | Nama | Method | Params | Tipe Respon | Plan | Link Contoh |
|----|------|--------|--------|-------------|------|-------------|
| 628 | VIP - Bypass reCAPTCHA v3 | GET | url, siteKey | JSON | vip | [/api/vip/bypassrecaptcha](https://api.vtech.biz.id/api/vip/bypassrecaptcha?apikey=ApiPinaa&url=https%3A%2F%2F2captcha.com%2Fdemo%2Frecaptcha-v3&siteKey=6LfB5_IbAAAAAMCtsjEHEHKqcB9iQocwwxTiihJu) |

## Vokal (5 endpoint)

| No | Nama | Method | Params | Tipe Respon | Plan | Link Contoh |
|----|------|--------|--------|-------------|------|-------------|
| 629 | Vokal - HALAH | GET | text | JSON | free | [/api/vokal/halah](https://api.vtech.biz.id/api/vokal/halah?apikey=ApiPinaa&text=ErLaN) |
| 630 | Vokal - HELEH | GET | text | JSON | free | [/api/vokal/heleh](https://api.vtech.biz.id/api/vokal/heleh?apikey=ApiPinaa&text=ErLaN) |
| 631 | Vokal - HILIH | GET | text | JSON | free | [/api/vokal/hilih](https://api.vtech.biz.id/api/vokal/hilih?apikey=ApiPinaa&text=ErLaN) |
| 632 | Vokal - HOLOH | GET | text | JSON | free | [/api/vokal/holoh](https://api.vtech.biz.id/api/vokal/holoh?apikey=ApiPinaa&text=ErLaN) |
| 633 | Vokal - HULUH | GET | text | JSON | free | [/api/vokal/huluh](https://api.vtech.biz.id/api/vokal/huluh?apikey=ApiPinaa&text=ErLaN) |

## Wallpaper (29 endpoint)

| No | Nama | Method | Params | Tipe Respon | Plan | Link Contoh |
|----|------|--------|--------|-------------|------|-------------|
| 634 | Wallpaper - Aesthetic | GET | - | Image (URL) | free | [/api/wallpaper/aesthetic](https://api.vtech.biz.id/api/wallpaper/aesthetic?apikey=ApiPinaa) |
| 635 | Wallpaper - Anjing | GET | - | Image (URL) | free | [/api/wallpaper/anjing](https://api.vtech.biz.id/api/wallpaper/anjing?apikey=ApiPinaa) |
| 636 | Wallpaper - Boneka Chucky | GET | - | Image (URL) | free | [/api/wallpaper/boneka-chucky](https://api.vtech.biz.id/api/wallpaper/boneka-chucky?apikey=ApiPinaa) |
| 637 | Wallpaper - Cecan | GET | - | Image (URL) | free | [/api/wallpaper/cecan](https://api.vtech.biz.id/api/wallpaper/cecan?apikey=ApiPinaa) |
| 638 | Wallpaper - Cecan V2 | GET | - | Image (URL) | free | [/api/wallpaper/cecan2](https://api.vtech.biz.id/api/wallpaper/cecan2?apikey=ApiPinaa) |
| 639 | Wallpaper - Cogan | GET | - | Image (URL) | free | [/api/wallpaper/cogan](https://api.vtech.biz.id/api/wallpaper/cogan?apikey=ApiPinaa) |
| 640 | Wallpaper - Cogan V2 | GET | - | Image (URL) | free | [/api/wallpaper/cogan2](https://api.vtech.biz.id/api/wallpaper/cogan2?apikey=ApiPinaa) |
| 641 | Wallpaper - Cosplay | GET | - | Image (URL) | free | [/api/wallpaper/cosplay](https://api.vtech.biz.id/api/wallpaper/cosplay?apikey=ApiPinaa) |
| 642 | Wallpaper - Couple PP | GET | - | Image (URL) | free | [/api/randomgambar/couplepp](https://api.vtech.biz.id/api/randomgambar/couplepp?apikey=ApiPinaa) |
| 643 | Wallpaper - Cyberspace | GET | - | Image (URL) | free | [/api/wallpaper/cyberspace](https://api.vtech.biz.id/api/wallpaper/cyberspace?apikey=ApiPinaa) |
| 644 | Wallpaper - Dark Jokes | GET | - | Image (URL) | free | [/api/random/darkjokes](https://api.vtech.biz.id/api/random/darkjokes?apikey=ApiPinaa) |
| 645 | Wallpaper - Gaming | GET | - | Image (URL) | free | [/api/wallpaper/gaming](https://api.vtech.biz.id/api/wallpaper/gaming?apikey=ApiPinaa) |
| 646 | Wallpaper - Hacker | GET | - | Image (URL) | free | [/api/wallpaper/hacker](https://api.vtech.biz.id/api/wallpaper/hacker?apikey=ApiPinaa) |
| 647 | Wallpaper - Islami | GET | - | Image (URL) | free | [/api/wallpaper/islami](https://api.vtech.biz.id/api/wallpaper/islami?apikey=ApiPinaa) |
| 648 | Wallpaper - Justina | GET | - | Image (URL) | free | [/api/wallpaper/justina](https://api.vtech.biz.id/api/wallpaper/justina?apikey=ApiPinaa) |
| 649 | Wallpaper - Kartun | GET | - | Image (URL) | free | [/api/wallpaper/kartun](https://api.vtech.biz.id/api/wallpaper/kartun?apikey=ApiPinaa) |
| 650 | Wallpaper - Kata-kata | GET | - | Image (URL) | free | [/api/wallpaper/katakata](https://api.vtech.biz.id/api/wallpaper/katakata?apikey=ApiPinaa) |
| 651 | Wallpaper - K-Pop | GET | - | Image (URL) | free | [/api/wallpaper/kpop](https://api.vtech.biz.id/api/wallpaper/kpop?apikey=ApiPinaa) |
| 652 | Wallpaper - Kucing | GET | - | Image (URL) | free | [/api/wallpaper/kucing](https://api.vtech.biz.id/api/wallpaper/kucing?apikey=ApiPinaa) |
| 653 | Wallpaper - Meme | GET | - | Image (URL) | free | [/api/random/meme](https://api.vtech.biz.id/api/random/meme?apikey=ApiPinaa) |
| 654 | Wallpaper - Mobil | GET | - | Image (URL) | free | [/api/wallpaper/mobil](https://api.vtech.biz.id/api/wallpaper/mobil?apikey=ApiPinaa) |
| 655 | Wallpaper - Motor | GET | - | Image (URL) | free | [/api/wallpaper/motor](https://api.vtech.biz.id/api/wallpaper/motor?apikey=ApiPinaa) |
| 656 | Wallpaper - Mountain | GET | - | Image (URL) | free | [/api/wallpaper/mountain](https://api.vtech.biz.id/api/wallpaper/mountain?apikey=ApiPinaa) |
| 657 | Wallpaper - Programing | GET | - | Image (URL) | free | [/api/wallpaper/programing](https://api.vtech.biz.id/api/wallpaper/programing?apikey=ApiPinaa) |
| 658 | Wallpaper - PUBG | GET | - | Image (URL) | free | [/api/wallpaper/pubg](https://api.vtech.biz.id/api/wallpaper/pubg?apikey=ApiPinaa) |
| 659 | Wallpaper - Tata Surya | GET | - | Image (URL) | free | [/api/wallpaper/tatasurya](https://api.vtech.biz.id/api/wallpaper/tatasurya?apikey=ApiPinaa) |
| 660 | Wallpaper - Teknologi | GET | - | Image (URL) | free | [/api/wallpaper/teknologi](https://api.vtech.biz.id/api/wallpaper/teknologi?apikey=ApiPinaa) |
| 661 | Wallpaper - HP | GET | - | Image (URL) | free | [/api/wallpaper/wallhp](https://api.vtech.biz.id/api/wallpaper/wallhp?apikey=ApiPinaa) |
| 662 | Wallpaper - HP V2 | GET | - | Image (URL) | free | [/api/wallpaper/wallhp2](https://api.vtech.biz.id/api/wallpaper/wallhp2?apikey=ApiPinaa) |

## Webzone (8 endpoint)

| No | Nama | Method | Params | Tipe Respon | Plan | Link Contoh |
|----|------|--------|--------|-------------|------|-------------|
| 663 | Webzone - Gore | GET | - | JSON | free | [/api/webzone/gore](https://api.vtech.biz.id/api/webzone/gore?apikey=ApiPinaa) |
| 664 | Webzone - Grow & Garden Stock | GET | - | JSON | free | [/api/webzone/grow-and-garden-stock](https://api.vtech.biz.id/api/webzone/grow-and-garden-stock?apikey=ApiPinaa) |
| 665 | Webzone - Grow & Garden Weather | GET | - | JSON | free | [/api/webzone/grow-and-garden-weather](https://api.vtech.biz.id/api/webzone/grow-and-garden-weather?apikey=ApiPinaa) |
| 666 | Webzone - GSMArena | GET | query | JSON | free | [/api/webzone/gsmarena](https://api.vtech.biz.id/api/webzone/gsmarena?apikey=ApiPinaa&query=Oppo%20A5s) |
| 667 | Webzone - Nhentai Detail | GET | query | JSON | free | [/api/webzone/nhentai-detail](https://api.vtech.biz.id/api/webzone/nhentai-detail?apikey=ApiPinaa&query=441508) |
| 668 | Webzone - Nhentai Search | GET | query | JSON | free | [/api/webzone/nhentai-search](https://api.vtech.biz.id/api/webzone/nhentai-search?apikey=ApiPinaa&query=milf) |
| 669 | Webzone - WhatAnime | GET | query | JSON | free | [/api/webzone/whatanime](https://api.vtech.biz.id/api/webzone/whatanime?apikey=ApiPinaa&query=https%3A%2F%2Ftelegra.ph%2Ffile%2Fdb5ec4f4336d7a909658e.jpg) |
| 670 | Webzone - Whois | GET | query | JSON | free | [/api/webzone/whois](https://api.vtech.biz.id/api/webzone/whois?apikey=ApiPinaa&query=google.com) |

