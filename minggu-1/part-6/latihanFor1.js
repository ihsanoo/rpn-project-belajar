// Soal 1: Perulangan For - Membuat Segitiga Bintang
// Tulis program menggunakan perulangan for untuk mencetak segitiga bintang. 
//Jika input adalah 5, maka outputnya harus seperti ini:
// *
// **
// ***
// ****
// *****


let tinggi = 7;

for (let i = 1; i <= tinggi; i++) {
    let bintang = '';
    for (let j = 1; j <= i; j++) {
        bintang +=  '*';
    }
    console.log(bintang)
}

for (let k = tinggi; k >= 1; k--) {
    let bintang = '';
    for (let l = k; l >= 1 ; l--) {
        bintang += '*';
    }
    console.log(bintang)
}

