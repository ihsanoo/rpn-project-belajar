// Polanya:

// Tulis program yang menggunakan nested loop untuk mencetak pola seperti di bawah ini, 
// dengan tinggi pola ditentukan oleh pengguna:


// Masukkan tinggi pola: 4

// 1
// 12
// 123
// 1234

for (let i =1; i<= 4; i++) {
    let baris = ''
    for (let j = 1; j <= i; j++){
        baris += j  ;
    }
    console.log (baris)
}