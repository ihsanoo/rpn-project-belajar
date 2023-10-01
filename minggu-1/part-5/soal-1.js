// kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. 
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), 
// yaitu nama dan peran. Variabel peran harus memiliki isi data, 
// bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
// bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". 
// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir. 
// Tugas Anda adalah untuk membuat program yang mengecek isi variabel 
// peran serta mengeluarkan respon sesuai isi variabel tersebut.
//ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
//halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
//halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
//halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
//tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
//tips belajar penggunaan `` (backtick) pada javascript agar
//mudah dalam memasukan variabel ke dalam string
//tapi tanpa backtick juga ga masalah sih yg penting output sesuai


// ============================= ALGORITMA ===============================

// 1. buat variabel nama dan peran
// 2. jika nama kosong maka tampilkan "nama wajib diisi"
// 3. jika nama tidak kosong kemudian cek peran
// 4. jika peran kosong maka tampilkan "Pilih Peranmu untuk memulai game"
// 5. jika peran tidak kosong maka cek perannya apak "Kesatria"
// 6. Jika eran adalah "Kesatria" maka tampilkan "halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!"
// 7. Jika peran adalah "Tabib" maka tampilkan "halo Tabib ${nama} , kamu akan membantu temanmu yang terluka"
// 8. Jika peran adalah "Penyihir" maka tampilkan "halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!"
// 10. Jika peran bukan "Kesatria" , "Tabib" atau "Penyihir" maka tampilkan "tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada"






// ====================Game Proxytia=======================

// Masukan nama dan Peran

let nama = "yanzah";
let peran = "Penyihir";    
// peran = "Kesatria";
// peran = "Tabib";
// peran = "Penyihir"

if (nama == "") {
    console.log("Nama Wajib Diisi")
} else if (peran == "") {
    console.log("Pilih Peranmu Untuk Memulai Game")
} else {
    if (peran == "Kesatria") {
        console.log(`halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`)
    } else if (peran == "Tabib") {
        console.log(`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`)
    }else if (peran == "Penyihir") {
        console.log(`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`)
    } else {
        console.log ("tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada")
    };
   
}



