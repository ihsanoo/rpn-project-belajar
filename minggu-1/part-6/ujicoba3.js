// 1. Melakukan Looping Menggunakan While
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua


let nama = 'YANZAH';

console.log('======LOOPING PERTAMA=====');

let i = 0;
while (i < nama.length) {
    console.log(nama[i]);
    i++;
}

console.log('==========LOOPING KEDUA=========');

let j = nama.length -1;

while (j >= 0) {
    console.log(nama[j]);
    j--;
}
