// Import dependensi
const axios = require('axios');
const dotenv = require('dotenv');

// Memuat variabel lingkungan dari file .env
dotenv.config();

// Fungsi untuk mengklaim faucet
async function claimFaucet(address) {
    const url = 'https://faucet.testnet.humanity.org/api/claim';

    // Membuat payload JSON
    const body = {
        address: address
    };

    try {
        // Mengirim permintaan POST dengan body JSON
        const {data} = await axios.post(url, body, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // Menangani respons
        if (data.status >= 200 && response.status < 300) {
            console.log(`Response for ${address}: ${data}`);
        } else {
            console.error(`Error for ${address}: ${data.statusText}`);
        }
    } catch (error) {
        console.error(`Error for ${address}: ${error.message}`);
    }
}

// Ambil alamat dari variabel lingkungan
const addresses = [];
let i = 1;

while (process.env[`ADDRESS_${i}`]) {
    addresses.push(process.env[`ADDRESS_${i}`]);
    i++;
}

// Fungsi untuk memberikan jeda 10 menit sebelum melanjutkan ke alamat berikutnya
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Jalankan klaim faucet sekali untuk setiap alamat dengan jeda 10 menit
async function runWithDelay() {
    for (const address of addresses) {
        await claimFaucet(address);  // Menunggu setiap klaim selesai
        console.log(`Menunggu 10 menit sebelum melanjutkan ke alamat berikutnya...`);
        await delay(600000);  // Jeda 10 menit (600.000 ms)
    }
    console.log("Klaim faucet selesai untuk semua alamat.");
}

// Fungsi untuk menjalankan seluruh proses klaim faucet dengan interval 1 jam
function startProcessInterval() {
    console.log("Memulai proses klaim faucet...");

    // Jalankan sekali dan kemudian setiap 1 jam
    runWithDelay();

    setInterval(() => {
        console.log("Memulai proses klaim faucet...");
        runWithDelay(); // Jalankan klaim faucet setiap 1 jam (3600000 ms)
    }, 3600000); // 3600000 ms = 1 jam
}

// Jalankan program dengan interval 1 jam
startProcessInterval();
