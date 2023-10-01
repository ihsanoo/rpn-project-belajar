// Segitiga Angka Terbalik:

// Tulis program yang menggunakan nested loop untuk mencetak segitiga angka terbalik seperti di bawah ini, dengan tinggi segitiga ditentukan oleh pengguna:

// yaml
// Copy code
// Masukkan tinggi segitiga: 3

// 333
// 22
// 1

let tinggi = 3;

for (let i = tinggi; i >=1; i--) {
    let result = ''
    for (let j = i; j >= 1; j-- ) {
    result += `${i}`
    }
    console.log(result)
}