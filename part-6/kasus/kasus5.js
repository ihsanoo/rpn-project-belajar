// Pola Segitiga Terbalik:

// Tulis program yang menggunakan nested loop untuk mencetak pola segitiga terbalik seperti di bawah ini, dengan tinggi segitiga ditentukan oleh pengguna:

// Masukkan tinggi segitiga: 4

// ****
// ***
// **
// *

let tinggi = 4;

for (let i = 1; i <= tinggi ; i++) {
    let asteriks = ''
    for (let j = tinggi ; j >= i; j--) {
        asteriks += '*'
    }
    console.log (asteriks)
}