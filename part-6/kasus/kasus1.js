

// Segitiga Bintang:

// Tulis program yang menggunakan nested loop untuk mencetak segitiga bintang seperti di bawah ini, dengan tinggi segitiga ditentukan oleh pengguna:

// Masukkan tinggi segitiga: 5

// *
// **
// ***
// ****
// *****

// code here 👇👇

let heigh = 5;

for (let i = 0; i <= heigh; i++) {
    let stars = '';
    for (let j = 0; j <= i ; j++) {
        stars += '*';
    } console.log(stars)
}