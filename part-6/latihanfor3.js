// let tinggi = 5; // Ganti dengan tinggi segitiga yang diinginkan

// for (let i = 1; i <= tinggi; i++) {
//     let bintang = '';
//     for (let j = 1; j <= tinggi - i; j++) {
//         bintang += ' '; // Tambahkan spasi sebelum bintang
//     }
//     for (let k = 1; k <= i; k++) {
//         bintang += '*'; // Tambahkan bintang
//     }
//     console.log(bintang);
// }


// let s = ' '

// for (k = 1; k <= 5; k++) {
//     for (let l = 1; l <=  k; l++) {
//         s += '*';
//     } s += '\n';
// }
// console.log (s)

let bintang = 5;
let spasi = ' ';

for (let i = 1; i <= bintang; i++) {
    let barisBintang = '';
    for (let j = 1; j <=bintang -i; j++) {
        barisBintang += spasi; // gua tambahin spasi sebelum bintang
    }
    for (let k = 1; k <= i; k++) {
        barisBintang += '*';
    }
    console.log(barisBintang)
}