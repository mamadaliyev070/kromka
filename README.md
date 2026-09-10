# Кромка Стеллаж Назорати — telefon ilovasi

Kromka stellajlaridagi qoldiqlarni boshqarish tizimi. To'liq offline ishlaydi,
hech qanday server yoki internet talab qilmaydi.

## Fayllar

| Fayl | Vazifasi |
|---|---|
| `index.html` | Asosiy sahifa |
| `app.js` | Ilova mantiqi |
| `style.css` | Dizayn (kompyuter + telefon) |
| `lucide-mini.js` | Ikonkalar (18 ta, 6.8 KB) |
| `service-worker.js` | Offline rejim |
| `manifest.json` | O'rnatish sozlamalari |
| `icon-192.png`, `icon-512.png` | Standart ikonkalar |
| `icon-maskable-512.png` | Android adaptiv ikonkasi |
| `apple-touch-icon.png` | iPhone ikonkasi |

## 1-bosqich: GitHub Pages'ga joylash

1. https://github.com — ro'yxatdan o'ting (bepul).
2. O'ng yuqoridagi **+** → **New repository**.
   - Repository name: `kromka`
   - **Public** ni tanlang (Private'da Pages bepul ishlamaydi)
   - **Create repository**
3. Ochilgan sahifada **uploading an existing file** havolasini bosing.
4. Ushbu papkadagi **barcha fayllarni** (papkani emas, fayllarni!) sudrab tashlang.
5. Pastda **Commit changes** tugmasini bosing.
6. **Settings** → chap menyuda **Pages**:
   - Source: **Deploy from a branch**
   - Branch: **main**, papka: **/ (root)** → **Save**
7. 1–2 daqiqa kuting. Sahifani yangilang — yuqorida manzil chiqadi:
   `https://FOYDALANUVCHI-NOMI.github.io/kromka/`

Bu manzilni telefonda ochib ko'ring — ilova ishlashi kerak.

## 2-bosqich: APK yasash (PWABuilder)

1. https://www.pwabuilder.com ga kiring.
2. Yuqoridagi manzilni kiriting → **Start**.
3. Tahlil tugagach **Package For Stores** → **Android** → **Generate Package**.
4. Oynadagi sozlamalar:
   - Package ID: `uz.kromka.rack` (yoki o'zingiznikini yozing)
   - **Signing key: "Create new"** — shu holda qoldiring
5. **Download** bosing. ZIP ichida:
   - `app-release-signed.apk` ← telefonga o'rnatiladigan fayl
   - `signing.keystore` va `signing-key-info.txt`

> **DIQQAT:** `signing.keystore` faylini va undagi parollarni saqlab qo'ying.
> Yo'qotsangiz, keyinchalik ilovaning yangilangan versiyasini
> eski ilova ustiga o'rnata olmaysiz.

## 3-bosqich: Telefonga o'rnatish

1. `app-release-signed.apk` ni telefonga ko'chiring.
2. Fayl menejeridan ustiga bosing.
3. "Noma'lum manbalardan o'rnatish" so'ralsa — ruxsat bering.
4. **Установить** / **Install**.

## Zaxira nusxa (juda muhim)

Ma'lumotlar telefonning o'zida saqlanadi. Ilovani o'chirsangiz — hammasi yo'qoladi.

Ilova ichida **Резерв нусха** → **Экспорт** tugmasi orqali JSON faylini
saqlab turing (Telegram'ga "Saved Messages"ga yuborish eng oson yo'l).
Tiklash uchun: **Резерв нусха** → **Импорт** → o'sha faylni tanlang.

Haftada bir marta zaxira olish tavsiya etiladi.

## Ilovani yangilash

Fayllarni o'zgartirsangiz:

1. `service-worker.js` ning 1-qatoridagi `kromka-rack-v2` ni `kromka-rack-v3`
   ga o'zgartiring (aks holda eski versiya keshdan ochilaveradi).
2. Fayllarni GitHub'ga qayta yuklang.
3. APK ni PWABuilder'da qayta yasang — **eski `signing.keystore` ni yuklang**.
