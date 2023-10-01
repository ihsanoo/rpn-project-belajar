// Tabel Perkalian:

// Tulis program yang menggunakan nested loop untuk mencetak tabel perkalian dari 1 hingga 10, seperti berikut:


//  1  2  3  4  5  6  7  8  9 10
//  2  4  6  8 10 12 14 16 18 20
//  3  6  9 12 15 18 21 24 27 30
//  ...
//  10 20 30 40 50 60 70 80 90 100

for (let i = 1; i <= 10; i++) {
    let row = ''
    for (let j = 1; j <= 10; j++) {
        let result = i * j ;
        row += (`${result}\t`)
    }
    console.log(row)
}