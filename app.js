/**
 * ============================================================
 * TUGAS MANDIRI — PEMROGRAMAN INTERNET (JAVASCRIPT DASAR)
 * Program Studi : Pendidikan Sistem dan Teknologi Informasi
 * Universitas   : Universitas Pendidikan Indonesia
 * Study Case    : Sistem Poin & Keanggotaan Member Kedai Kopi
 * Berkas        : app.js (STARTER CODE MAHASISWA)
 * ============================================================
 *
 * PETUNJUK PENGERJAAN:
 * 1. Buka file index.html di browser (klik dua kali atau via Live Server).
 * 2. Buka tab Developer Tools dengan menekan tombol F12 -> pilih tab "Console".
 * 3. Kerjakan tugas ini secara bertahap dari AKTIVITAS 1 sampai AKTIVITAS 6
 *    dengan melengkapi bagian bertanda "// TODO:".
 * 4. Simpan progres pekerjaanmu dengan melakukan minimal 3 kali Git Commit
 *    sesuai panduan di PANDUAN_TUGAS_MANDIRI.md.
 * ============================================================
 */


// ============================================================
// AKTIVITAS 1: Setup Berkas & Integrasi JavaScript Eksternal
// ============================================================
// Menampilkan judul sistem ke tab Console (F12)
console.log("=== SISTEM POIN MEMBER KEDAI KOPI ===");

// TODO 1: Tulis satu baris console.log() untuk memastikan file app.js sudah terhubung!
// Contoh output: "Skrip app.js berhasil terhubung!"
console.log("Skrip app.js berhasil terhubung!")



// ============================================================
// AKTIVITAS 2: Variabel & Dialog Interaktif
// ============================================================

// ---- BAGIAN 2A: VARIABEL IDENTITAS KEDAI KOPI ----
// TODO 2A:
// 1. Buat konstanta "NAMA_KEDAI" bertipe string (misal: "Kopi PSTI Kampus").
const Nama_Kedai ="Kopi PSTI Kampus UPI Purwakarta";
// 2. Buat variabel "namaKasir" (misal: "Kak Eko") dan "shiftKerja" menggunakan "let".
let Nama_Kasir ="Kak Adelio";
let Shift_Keja ="19.00 s/d 02.00 WIB";
// 3. Cetak nilai NAMA_KEDAI, namaKasir, dan shiftKerja ke Console menggunakan console.log().
console.log("Nama Kedai : " + Nama_Kedai + ":\n");
console.log("Nama Kasir : " + Nama_Kasir + ":\n");
console.log("Shift Kerja : " + Shift_Keja + ":\n");


// ---- DEMO PERBEDAAN LET vs CONST ----
// TODO 2B:
// Ubah (re-assign) nilai variabel "namaKasir" dengan nama kasir lain,
// lalu cetak ke Console untuk membuktikan bahwa variabel "let" nilainya dapat diubah.
Nama_Kasir ="Kak Naufal";
console.log("Pengganti kasir sementara: " + Nama_Kasir);


// ---- BAGIAN 2B: INPUT INTERAKTIF & PENGANDAIAN DASAR ----
// TODO 2C:
// 1. Tampilkan pop-up salam pembuka selamat datang menggunakan alert().
alert("Selamat datang di Website Kedai Kopi PSTI");
// 2. Tampilkan dialog prompt() untuk meminta nama pengunjung, simpan hasilnya ke variabel "namaPelanggan".
let Nama_Pelanggan = prompt("Masukan nama anda untuk bisa mengakses web kami: ");
// 3. Gunakan percabangan "if - else":
//    - JIKA namaPelanggan ada isinya: tampilkan alert sapaan dan log ke console.
//    - JIKA namaPelanggan kosong / klik Cancel: beri nilai default "Pelanggan Setia" dan tampilkan alert pemberitahuan.
if(Nama_Pelanggan){
    alert("Halooo " + Nama_Pelanggan + "! Selamat datang dan Terimakasih sudah bergabung di web kami 👋😊" + "\n");
    alert("Dapatkan dan tukerkan point anda untuk mendapatkan diskon dari kami 🤗")
    console.log("Halooo " + Nama_Pelanggan + "! Selamat datang dan Terimakasih sudah bergabung di web kami 👋😊" + "\n");
    console.log("Dapatkan dan tukerkan point anda untuk mendapatkan diskon dari kami 🤗")
}else{
    Nama_Pelanggan = "Pelanggan Setia";
    alert("Kamu belum memasukan nama, kamu di anggap sebagai " + Nama_Pelanggan + " oleh sistem kami. Mohon masukan nama anda agar kami mengetahui identitas anda dan dapatkan dan tukarkan point anda untuk mendapatkan diskon dari kami 🤗" + ":\n");
    console.log("Kamu belum memasukan nama, kamu di anggap sebagai " + Nama_Pelanggan + " oleh sistem kami. Mohon masukan nama anda agar kami mengetahui identitas anda dan dapatkan dan tukarkan point anda untuk mendapatkan diskon dari kami 🤗" + ":\n");
}


// ============================================================
// AKTIVITAS 3: Operasi Aritmatika — Akumulasi Poin Transaksi
// ============================================================
// Catatan: Gunakan bilangan bulat (integer murni tanpa desimal/float).

// TODO 3:
// 1. Buat 3 variabel poin transaksi: "poinKopi", "poinMakanan", dan "poinMerchandise"
//    (isi dengan angka bulat bebas, misal: 45, 35, 20).

let Point_Kopi = 45;
let Point_Makanan = 35;
let Point_Merchandise = 20;
// 2. Buat variabel "totalPoin" yang menjumlahkan ketiga variabel poin di atas.
let Total_Point = Point_Kopi + Point_Makanan + Point_Merchandise;
// 3. Cetak rincian perolehan poin dan totalPoin ke Console menggunakan console.log().
console.log("Selamat point anda sekarang adalah " + Total_Point + ". Tukarkan point anda untuk mendapatkan diskon!");


// ============================================================
// AKTIVITAS 4: Percabangan if-else — Penentuan Tier Membership
// ============================================================

// TODO 4:
// 1. Buat variabel "tierMember" dan "benefit" bertipe string kosong ("").
// 2. Gunakan percabangan "if - else if - else" berdasarkan nilai "totalPoin":
//    - totalPoin >= 100 : tierMember = "Platinum", benefit = "Diskon 20% + Gratis 1 Minuman Signature"
//    - totalPoin >= 70  : tierMember = "Gold", benefit = "Diskon 10% di setiap transaksi"
//    - totalPoin >= 40  : tierMember = "Silver", benefit = "Diskon 5% untuk menu minuman"
//    - selain itu       : tierMember = "Bronze", benefit = "Member Reguler (kumpulkan poin untuk naik tier)"
// 3. Cetak hasil tierMember dan benefit ke Console.
// 4. Tampilkan ringkasan hasil member (nama, total poin, tier, benefit) via dialog alert().




// ============================================================
// AKTIVITAS 5: Function — Membuat Fungsi yang Bisa Dipakai Ulang
// ============================================================

// TODO 5A:
// Buat fungsi "hitungTotalPoin(p1, p2, p3)" yang menerima 3 parameter nilai poin,
// menjumlahkannya, dan mengembalikan (return) nilai total penjumlahannya.




// TODO 5B:
// Buat fungsi "tentukanTierMember(poin)" yang menerima 1 parameter nilai poin,
// dan mengembalikan (return) string nama tier beserta keterangannya.




// TODO 5C:
// Buktikan bahwa fungsi di atas bisa dipakai ulang (reusable):
// 1. Hitung total poin dan tentukan tier untuk simulasi Pelanggan B (misal poin: 35, 25, 20).
// 2. Hitung total poin dan tentukan tier untuk simulasi Pelanggan C (misal poin: 15, 10, 5).
// 3. Cetak data Pelanggan B dan C ke tab Console.




// ============================================================
// AKTIVITAS 6: Array & For Loop — Daftar Menu Rekomendasi
// ============================================================

// TODO 6A:
// Buat variabel Array bernama "menuRekomendasi" yang berisi minimal 5 nama menu kopi/makanan.




// TODO 6B:
// Gunakan perulangan "for loop" untuk mencetak setiap menu ke Console dengan format:
// "1. Nama Menu", "2. Nama Menu", dst. Gunakan (i + 1) untuk nomor urutnya.




// TODO 6C:
// Cetak jumlah total menu di akhir daftar menggunakan properti ".length".
// Akhiri program dengan: console.log("=== TUGAS MANDIRI SELESAI DENGAN SUKSES! ===");

