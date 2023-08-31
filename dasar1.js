// Cara Membuat Variabel

var a = 'a';
let b = 'b';
const c = 'c';


// Variabel bisa menampung tipe data string (text), integer/number, boolean, array, object.


let nama = 'rusdi'; //string
let umur = 18; //number
let tinggiBadan = 185.4 //number tapi ada koma
let apakahBenar = true //boolean


//Operator Aritmatika

let angka1 = 21;
let angka2 = 23;
console.log(angka1 + angka2, 'pertambahan');
console.log(angka1 - angka2, 'pengurangan');
console.log(angka1 * angka2, 'perkalian');
console.log(angka1 / angka2, 'pembagian');
console.log(angka1 % angka2, 'modulus');

//disini kita belajar mengisi variabel
let menampungHasilOperatorAritmatika = angka1 + angka2;
console.log(menampungHasilOperatorAritmatika); //44

menampungHasilOperatorAritmatika = angka1 - angka2;
console.log(menampungHasilOperatorAritmatika); //-2

menampungHasilOperatorAritmatika = angka1 * angka2;
console.log(menampungHasilOperatorAritmatika); // 483

menampungHasilOperatorAritmatika = angka1 / angka2;
console.log(menampungHasilOperatorAritmatika); //0.91...entah berapa angka di belakang koma

menampungHasilOperatorAritmatika = angka1 % angka2;
console.log(menampungHasilOperatorAritmatika); //21


//String juga bisa ditambah tapi tidak bisa dikurang dengan Operator Aritmatika

let firstName = 'Bayu';
let lastName = 'Indra';
let fullName = firstName + lastName;
console.log(fullName);

// atau bisa langsung tanpa membuat variabel fullName

console.log(firstName + lastName);

// untuk menambahkan spasi agar fistName dan lastName terpisah maka tinggal tambah string spasi

console.log(firstName + ' ' + lastName);

// kemudian jika kita mencoba untuk mengunakan operator kurang (-) maka hasilnya menjadi NaN

console.log(firstName - lastName);


// Alur Pembacaan code
// Untuk membaca harus dibaca dari kiri ke kanan, dan atas ke bawah
// Contoh

let number = 14;
console.log(number + 2);
number = 12;
console.log(number + 2);
number = false;
console.log(number + 3); // hasilnya adalah 3
number = true;
console.log(number + 1); //hasilnya adalah 2

// karena false = 0 dan true = 1
// maka ketika false ditambah dengan 3 maka hasinya 3
// ketika true ditambah dengan 1 maka hasinya 2


// Membaca ERROR
/// JANGAN TAKUR ERROR

// contoh ERROR

// const buah = 'jeruk';
// console.log(buah);
// buah = 'mangga';
// console.log(buah);

// error karena tidak bisa mengubah isi dari variabel Mangga karena marupakan const.