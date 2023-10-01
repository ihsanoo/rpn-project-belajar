


// say ingin membuat sebuah function yang ketika dipanggil akan menampilkan kebalikan dari kata



function wordReverse(word) {
    let kata = '';
    for (let i = word.length - 1; i >= 0; i-- ) {
        kata += word[i];
    }
    return kata;
}


console.log(wordReverse('Halo Nama saya Ihsan')) ;
console.log(wordReverse('Coba Balik ini')) ;
console.log(wordReverse('Nanani Kento')) ;
console.log(wordReverse('Gojo Satoru')) ;
console.log(wordReverse('Geto Suguru')) ;
console.log(wordReverse('Haibara yu')) ;


//
console.log()
//

