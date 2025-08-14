// TASK 3

// set variable
let buah = [];
// tes
console.log("Masukan Nama Buah");
// set fungsi add buah
function addBuah(nama){
    buah.push(nama);
    console.log(`${nama} Sukses ditambahkan, yeey`);
}
addBuah("Apel");
addBuah("Mangga");
addBuah("Jeruk");
addBuah("Semangka");
addBuah("Pisang");
addBuah("Anggur");
addBuah("Nanas");

console.log("=====");
// data awal
console.log("Default Nama Buah");
for(let i in buah){
    console.log(`${i}. ${buah[i]}`);
}
// data sesudah di sort
console.log("=====");
let mySort = buah.sort();
for(let i in mySort){
    console.log(`${i}. ${mySort[i]}`);
}