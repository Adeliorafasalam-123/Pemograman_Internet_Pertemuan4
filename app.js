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
let Nama_Pelanggan = prompt("Masukan nama anda untuk bisa mengakses web kami: (CAPSLOCK)");
// 3. Gunakan percabangan "if - else":
//    - JIKA namaPelanggan ada isinya: tampilkan alert sapaan dan log ke console.
//    - JIKA namaPelanggan kosong / klik Cancel: beri nilai default "Pelanggan Setia" dan tampilkan alert pemberitahuan.
if(Nama_Pelanggan){
    alert("Halooo " + Nama_Pelanggan + "! Selamat datang dan Terimakasih sudah bergabung di web kami 👋😊" + "\n" + "Dapatkan dan tukerkan point anda untuk mendapatkan diskon dari kami 🤗");
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
let Tier_Member ="";
let Benefit ="";
// 2. Gunakan percabangan "if - else if - else" berdasarkan nilai "totalPoin":
//    - totalPoin >= 100 : tierMember = "PLATINUM", benefit = "Diskon 20% + Gratis 1 Minuman Signature"
//    - totalPoin >= 70  : tierMember = "Gold", benefit = "Diskon 10% di setiap transaksi"
//    - totalPoin >= 40  : tierMember = "Silver", benefit = "Diskon 5% untuk menu minuman"
//    - selain itu       : tierMember = "Bronze", benefit = "Member Reguler (kumpulkan poin untuk naik tier)"
// 3. Cetak hasil tierMember dan benefit ke Console.
// 4. Tampilkan ringkasan hasil member (nama, total poin, tier, benefit) via dialog alert().

if(Total_Point >= 100){
    Tier_Member = "PLATINUM";
    Benefit = "DISKON 20% + GRATIS 1 MINUMAN SIGNATURE";
    alert("SELAMAT " + Nama_Pelanggan + " TOTAL POINT ANDA SEKARANG ADALAH " + Total_Point + ", DAN ANDA MERAIH TIER " + Tier_Member + ". ANDA BERKESEMPATAN MENDAPATKAN " + Benefit);
    console.log("SELAMAT " + Nama_Pelanggan + " TOTAL POINT ANDA SEKARANG ADALAH " + Total_Point + ", DAN ANDA MERAIH TIER " + Tier_Member + ". ANDA BERKESEMPATAN MENDAPATKAN " + Benefit + "DAPATKAN POINT LAGI UNTUK MENDAPATKAN BENEFIT YANG LEBIH WAHHHH LAGIIII! 🤩🥳🎉");
}else if(Total_Point >= 70){
    Tier_Member = "GOLD";
    Benefit ="DISKON 10% DI SETIAP TRANSAKSI";
    alert("SELAMAT " + Nama_Pelanggan + " TOTAL POINT ANDA SEKARANG ADALAH " + Total_Point + ", DAN ANDA MERAIH TIER " + Tier_Member + ". ANDA BERKESEMPATAN MENDAPATKAN " + Benefit + "DAPATKAN POINT LAGI UNTUK MENDAPATKAN BENEFIT YANG LEBIH WAHHHH LAGIIII! 🤩🥳🎉");
    console.log("SELAMAT " + Nama_Pelanggan + " TOTAL POINT ANDA SEKARANG ADALAH " + Total_Point + ", DAN ANDA MERAIH TIER " + Tier_Member + ". ANDA BERKESEMPATAN MENDAPATKAN " + Benefit + "DAPATKAN POINT LAGI UNTUK MENDAPATKAN BENEFIT YANG LEBIH WAHHHH LAGIIII! 🤩🥳🎉");
}else if(Total_Point >= 40){
    Tier_Member = "SILVER";
    Benefit ="DISKON 5% UNTUK MENU MINUMAN";
    alert("SELAMAT " + Nama_Pelanggan + " TOTAL POINT ANDA SEKARANG ADALAH " + Total_Point + ", DAN ANDA MERAIH TIER " + Tier_Member + ". ANDA BERKESEMPATAN MENDAPATKAN " + Benefit + "DAPATKAN POINT LAGI UNTUK MENDAPATKAN BENEFIT YANG LEBIH WAHHHH LAGIIII! 🤩🥳🎉");
    console.log("SELAMAT " + Nama_Pelanggan + " TOTAL POINT ANDA SEKARANG ADALAH " + Total_Point + ", DAN ANDA MERAIH TIER " + Tier_Member + ". ANDA BERKESEMPATAN MENDAPATKAN " + Benefit + "DAPATKAN POINT LAGI UNTUK MENDAPATKAN BENEFIT YANG LEBIH WAHHHH LAGIIII! 🤩🥳🎉");
}else{
    Tier_Member = "Bronze";
    Benefit ="Member Reguler";
    alert("Point anda masih terbilang kurang cukup untuk mendapatkan diskon, anda hanya sebagai " + Tier_Member + "Kumpulkan point untuk naik tier dan dapatkan benefit nya");
    console.log("Point anda masih terbilang kurang cukup untuk mendapatkan diskon, anda hanya sebagai " + Tier_Member + "Kumpulkan point untuk naik tier dan dapatkan benefit nya");
}


// ============================================================
// AKTIVITAS 5: Function — Membuat Fungsi yang Bisa Dipakai Ulang
// ============================================================

// TODO 5A:
// Buat fungsi "hitungTotalPoin(p1, p2, p3)" yang menerima 3 parameter nilai poin,
// menjumlahkannya, dan mengembalikan (return) nilai total penjumlahannya.
function Hitung_Total_Point(p1, p2, p3){
    let jumlah = p1 + p2 + p3;
    return jumlah;
}


// TODO 5B:
// Buat fungsi "tentukanTierMember(poin)" yang menerima 1 parameter nilai poin,
// dan mengembalikan (return) string nama tier beserta keterangannya.

function Tentukan_Tier_Member(Point) { 
    if (Point >= 100) return "PLATINUM"; 
    if (Point >= 70) return "GOLD"; 
    if (Point >= 40) return "SILVER"; 
    if (Point < 40) return " Bronze";
}



// TODO 5C:
// Buktikan bahwa fungsi di atas bisa dipakai ulang (reusable):
// 1. Hitung total poin dan tentukan tier untuk simulasi Pelanggan B (misal poin: 35, 25, 20).
// 2.  Cetak data Pelanggan B ke tab Console.
let Pelanggan_B = Hitung_Total_Point(35, 25, 20);
let Tier_B =  Tentukan_Tier_Member(Pelanggan_B);
console.log("====DATA PELANGGAN B====");
console.log("Jumlah Point : " + Pelanggan_B);
console.log("Tier Member : " + Tier_B);

// 3. Hitung total poin dan tentukan tier untuk simulasi Pelanggan C (misal poin: 15, 10, 5).
// 4.  Cetak data Pelanggan C ke tab Console.
let Pelanggan_C = Hitung_Total_Point(15, 10, 5);
let Tier_C =  Tentukan_Tier_Member(Pelanggan_C);
console.log("====DATA PELANGGAN C====");
console.log("Jumlah Point : " + Pelanggan_C);
console.log("Tier Member : " + Tier_C);



// ============================================================
// AKTIVITAS 6: Array & For Loop — Daftar Menu Rekomendasi
// ============================================================

// TODO 6A:
// Buat variabel Array bernama "menuRekomendasi" yang berisi minimal 5 nama menu kopi/makanan.

let Menu_Rekomedasi = [
    "Caramel Macchiato",
    "Kopi Susu",
    "Croissant Butter Keju",
    "Matcha Cream Latte",
    "Cinnamon Roll Hangat",
];


// TODO 6B:
// Gunakan perulangan "for loop" untuk mencetak setiap menu ke Console dengan format:
// "1. Nama Menu", "2. Nama Menu", dst. Gunakan (i + 1) untuk nomor urutnya.

console.log("=== DAFTAR MINUMAN REKOMENDASI==="); 
for (let i = 0; i < Menu_Rekomedasi.length; i++) { 
    console.log((i + 1) + ". " + Menu_Rekomedasi[i]); 
} 

// TODO 6C:
// Cetak jumlah total menu di akhir daftar menggunakan properti ".length".
// Akhiri program dengan: console.log("=== TUGAS MANDIRI SELESAI DENGAN SUKSES! ===");

console.log("-------------------------------"); 
console.log("Total Siswa: " + Menu_Rekomedasi.length + " Menu"); 
console.log("=== PRAKTIKUM SELESAI! ===");

