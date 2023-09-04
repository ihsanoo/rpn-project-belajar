

    // if ==== Use the if statement to specify a block of JavaScript code to be executed if a condition is true.
    // else === Use else to specify a block of code to be executed, if the same condition is false

    // else if === Use else if to specify a new condition to test, if the first condition is false
    // switch == Use switch to specify many alternative blocks of code to be executed


// if dan else syntax and example

let mana = 11;

if (mana > 10) {
    console.log("Seorang Jenius Telah Hadir")
} else {
    console.log("Tidak Bisa Menggunakan Sihir")
}

// else if syntax and example

const chakra = 50;
if (chakra === 100) {
    console.log ("Bisa menggunakan Jutsu kuat")
} else if (chakra >= 100) {
    console.log ("Bisa menggunakan Jutsu tingkat menegah")
} else if (chakra >= 50) {
    console.log("Bisa menggunakan Jutsu tingkat Rendah") 
} else {
    console.log("Tidak bisa menggunakan jutsu")
} 
// Swtich case syntax and example
 

var favoriteChara = "Yuji itadori";

switch (favoriteChara) {
    case "Nanami kento":
        console.log("Om-om Pirang kemeja biru")
    break;
    case "Gojo satoru":
        console.log("Penyihir terkuat")
    break;
    case "Yuji itadori" :
        console.log("MC")
    break;
    case "Fushiguro megumi":
        console.log("Teman MC")
    break;
    default :
        console.log("Karakter tidak ditemukan")
}