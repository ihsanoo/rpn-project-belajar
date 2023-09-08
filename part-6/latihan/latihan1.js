

let tinggi = 5 ;


for (let i = 1 ; i <=5 ; i++) {
    let bintang = ''
    for (let j = 1 ; j <= i; j++) {
        bintang += '*';
    }
    console.log(bintang)
}

console.log ('dari banyak ke sedikit')

for (let i = tinggi; i >= 1; i--) {
    let bintang = ''
    for (let j = i; j >=1; j--) {
        bintang += '*';
    } console.log(bintang)
}

console.log('dari kanan ke kiri')

for (let i = 1; i <= tinggi ; i++) {
    let spasi = ''
    for (let j = 1; j <= i ; j++) {
        spasi += ' '
        let bintang = ''
        for (let k = 1; k <= i; k++) {
            bintang += '*';
        }
    } console.log (bintang)
}