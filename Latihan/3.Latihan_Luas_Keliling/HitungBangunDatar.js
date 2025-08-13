// set variable
let persegi = 8;
let persegiPanjanx = 9;
let persegiPanjany = 3;
let lingkaran = 6;
let segitigaAlas = 6;
let segitigaTinggi = 4;
let segitigaSisi = 6;
// Task
// set output
let total;
// 1. fungsi luas dan keliling persegi
function luasPersegi(n) {
    // hitung luas
    total = n  * n;
    // show
    console.log(`Luas Persegi Dengan Sisi ${n} adalah ${total}`);
}
function kelilingPersegi(n){
    // hitung keliling
    total = 4 * n;
    // show
    console.log(`Keliling Persegi Dengan Sisi ${n} adalah ${total}`);
}

// 2. fungsi luas dan keliling persegi panjang
function luasPersegiPanjang(p, l) {
    // hitung luas
    total = p * l;
    // show
    console.log(`Luas Persegi Panjang Dengan Panjang ${p} Dan Lebar ${l} adalah ${total}`);
}
function kelilingPersegiPanjang(p, l) {
    // hitung keliling
    total = 2 * (p + l);
    // show
    console.log(`keliling Persegi Panjang Dengan Panjang ${p} Dan Lebar ${l} adalah ${total}`);
}

// 3. fungsi luas dan keliling lingkaran
function luasLingkaran(n) {
    // hitung luas
    total = 22 / 7 * n * n;
    // show
    console.log(`Luas Lingkaran Dengan Jari - Jari ${n} adalah ${total}`);
}
function kelilingLingkaran(n) {
    // hitung keliling
    total = 2 * 22 / 7 * n ;
    // show
    console.log(`keliling Lingkaran Dengan Jari - Jari ${n} adalah ${total}`);
}

// 4. fungsi luas dan keliling segitiga sama sisi
function luasSegitiga(a, t, s) {
    // hitung luas
    total = 1/2 * a * t;
    // show
    console.log(`Luas Segitiga Dengan Alas ${a} Dan Tinggi ${t} adalah ${total}`);
}
function kelilingSegitiga(a, t, s) {
    // hitung keliling
    total = 3 * s;
    // show
    console.log(`keliling Segitiga Dengan Sisi ${s} adalah ${total}`);
}

// tes
console.log("===== MENGHITUNG LUAS DAN KELILING BANGUN DATAR =====");
console.log("");

console.log(">> Luas Bangun Datar <<");
luasPersegi(persegi);
luasPersegiPanjang(persegiPanjanx, persegiPanjany);
luasLingkaran(lingkaran);
luasSegitiga(segitigaAlas, segitigaTinggi, segitigaSisi);
// // tes keliling
console.log("");
console.log(">> keliling Bangun Datar <<");
kelilingPersegi(persegi);
kelilingPersegiPanjang(persegiPanjanx, persegiPanjany);
kelilingLingkaran(lingkaran);
kelilingSegitiga(segitigaAlas, segitigaTinggi, segitigaSisi);



/*
rumus
 l&k persegi, persegi panjang, lingkarang, segitiga sama sisi
  l = s x s
  k= 4s

  l= p x l
  k= 2 (p+l)

  l=22/7 x r x r
  k=2* 22/7 x r

  //coba
  l = 1/2 x alas x t
  k= 2 x s + alas
  ---- s 

  l=akar3/4 x s x s
  k=3s


 */
