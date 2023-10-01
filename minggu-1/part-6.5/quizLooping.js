// 1. Melakukan Looping Menggunakan While
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua
console.log('')
console.log(`QUIZ 1`)
// Code here 👇👇

console.log ('=========LOOPING PERTAMA==========')
let i = 1
while (i < 10){
    console.log(`Menghitung Maju ${i}`)

    i++
}

console.log ('=========LOOPING KEDUA==========')

i = 10
while ( i >= 0) {
    console.log(`Menghitung Mundur ${i}`)

    i--
}


// 2. Melakukan Looping Menggunakan For
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua
console.log('')
console.log(`QUIZ 2`)
// Code here 👇👇

console.log('=========LOOPING PERTAMA========')

for (let i = 0; i <= 10; i++) {
    console.log (`Menghitung Maju ${i}`)
}


console.log('=============LOOPING KEDUA========') 

for (let i = 10; i >= 0 ; i--) {
    console.log(`Menghitung mundur ${i}`)
}


// 3. Angka Ganjil dan Genap
// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL
console.log('')
console.log(`QUIZ 3`)

// Code here 👇👇

for (let i = 1; i <= 100; i++) {
    if (i%2 == 0)  {
        console.log(`${i} GENAP`)
    } else {
        console.log (`${i} GANJIL`)
    }
}


//4. counter kelipatan
// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.
console.log('')
console.log(`QUIZ 4`)
// Code here 👇👇



for (let i = 1; i <= 100; i += 2) {
    if (i % 3 === 0 ) {
        console.log(`${i} Kelipatan 3`)
    }
}

//----------------//
console.log(``)
//----------------//

for (let i = 1; i <= 100; i += 5) {
    if (i % 6 === 0) {
        console.log(`${i} Kelipatan 6`)
    }
}
//----------------//
console.log(``)
//----------------//

for (let i = 1; i <= 100; i += 9) {
    if (i% 10 === 0) {
        console.log(`${i} Kelipatan 10`)
    }
}


// 5. Bintang asteriks
// Problem buatlah bintang seperti berikut
// let input = 5
// //hasilnya
// //*
// //**
// //***
// //****
// //*****
console.log('')
console.log(`QUIZ 5`)
console.log('')
// Code here 👇👇

let input = 5;

for (let i = 1; i <= input; i++) {
    let asteriks =''
    for (let j = 1; j <= i; j++) {
        asteriks += '*'
    }
    console.log(asteriks)
}