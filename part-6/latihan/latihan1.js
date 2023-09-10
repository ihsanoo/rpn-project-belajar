

let tinggi = 5 ;


for (let i = 1 ; i <=5 ; i++) {
    let bintang = ''
    for (let j = 1 ; j <= i; j++) {
        bintang += '*';
    }
    console.log(bintang)
}



for (let i = tinggi; i >= 1; i--) {
    let bintang = ''
    for (let j = i; j >=1; j--) {
        bintang += '*';
    } console.log(bintang)
}



for (let i = 1; i <= tinggi; i++) {
    let bintang  = "";
    for (let j = i; j < tinggi; j++) {
      bintang += " "; 
    }
    for (let k = 1; k <= i; k++) {
      bintang += "*";
    }
    console.log(bintang);
  }