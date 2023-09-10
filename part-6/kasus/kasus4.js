// Kotak Bintang:

// Tulis program yang menggunakan nested loop untuk mencetak kotak bintang dengan panjang dan lebar ditentukan oleh pengguna:


// Masukkan panjang kotak: 5
// Masukkan lebar kotak: 3

// *****
// *****
// *****

let panjang = 5;
let lebar = 3;

for (let i =1; i <= lebar; i++) {
    bintang = ''
    for (let j = 1; j <= panjang; j++) {
        bintang += '*'
    }
    console.log (bintang)
}