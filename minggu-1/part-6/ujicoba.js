

// Menggunakan contoh kasus


// disini saya akan menggunakan string dan memilah menjadi 1 persatu

// Ada yang namanya method lenght untuk tipe data string dan array
// Method length mengembalikan nilai angka, total huruf yang ada pada string atau total element yang ada pada array

let nama = "yanzah";

for (let i = 0; i < nama.length; i++) {
    console.log(nama[i])
}


// kenapa dapat diakses satu persatu??
// jadi dalam pada tipe data string atau array ada yang namanya indexing
// dimana index sudah pasti berawal dari 0
// dari kasus diatas kita memiliki variabel nama dengan tipe data sting yang berisi "yanzah"
// dimana index 0 pada let nama adalah y, index 1 adalah a, index 2 adah n, higgga index 5 adlah h.


// // kemudian saya akan membuatnya diurutkan dari belakang

for (let i = nama.length -1; i >= 0; i--) {
    console.log(nama[i])
}


let pesan = "yanzah";
let result = ""

for (let i = 0 ; i < 6 ; i++) {
    console.log(pesan)
}


for (i = pesan.length -1; i >= 0; i--) {
    result += pesan[i]
}
console.log(result)