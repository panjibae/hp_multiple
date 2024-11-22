# Humanity Faucet Claiming Script (JavaScript)

Skrip ini digunakan untuk mengklaim faucet di testnet Humanity menggunakan alamat-alamat wallet yang didefinisikan dalam file `.env`. Skrip akan mengirimkan permintaan POST ke API faucet Humanity dan mengklaim token untuk setiap alamat wallet dengan interval waktu yang telah ditentukan. Proses ini akan berjalan setiap 1 jam secara otomatis.

## Deskripsi
Skrip ini mengirimkan permintaan POST untuk klaim faucet Humanity Testnet pada alamat-alamat wallet yang ada di file `.env`. Setiap klaim akan memiliki jeda 10 menit antar alamat, dan setelah mengklaim semua alamat, skrip akan menunggu 1 jam sebelum mengulang proses klaim.

## Fitur
- Mengklaim faucet untuk banyak alamat wallet.
- Menunggu 10 menit setelah mengklaim setiap alamat.
- Proses klaim diulang setiap 1 jam.

## Persyaratan
- **Node.js**: Pastikan Anda telah menginstal Node.js di sistem Anda. Jika belum, Anda dapat mengunduhnya di [situs resmi Node.js](https://nodejs.org/).
- **NPM**: Paket pengelola untuk Node.js yang sudah termasuk saat Anda menginstal Node.js.
- **Dependencies**: Skrip ini menggunakan beberapa paket eksternal untuk melakukan HTTP request dan mengelola file `.env`. Paket yang diperlukan adalah:
  - `axios` untuk melakukan permintaan HTTP.
  - `dotenv` untuk membaca file `.env`.

## Instalasi dan Pengaturan

1. **Install Dependencies**:
   
   Setelah meng-clone proyek atau men-download file skrip, jalankan perintah berikut untuk menginstal dependensi yang diperlukan:

   ```bash
   npm install

   ```example env
ADDRESS_1=0xYourWalletAddress1

ADDRESS_2=0xYourWalletAddress2

ADDRESS_3=0xYourWalletAddress3

node index.js

