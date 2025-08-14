// TASK 5

// set variable
let daftarBelanja = [];
// fungsi tambah barang
function addBarang(nama){
    daftarBelanja.push(nama);
    console.log(`Barang ${nama} berhasil ditambahkan, yeey.`);
}
// fungsi hapus barang
function hapusBarang(nama){
    let cari = daftarBelanja.indexOf(nama);
    // hapus barang
    daftarBelanja.splice(1, cari);
}
// fungsi mengurutkan barang
function urutBarang(){
    daftarBelanja.sort();
}
// task
// 1. 3 barang beras, minyak gula
console.log(">> Tambah 3 Barang <<");
addBarang("Beras");
addBarang("Minyak");
addBarang("Gula");
addBarang("Telur");
addBarang("Sayur");
addBarang("Buah");
// default data
console.log(">> Default Data <<");
let list1 = 0;
for(let i in daftarBelanja){
    list1++;
    console.log(`${list1}. ${daftarBelanja[i]}`);
}
// 2. hapus minyak dari array
console.log(">> Hapus Minyak dari Array <<");
hapusBarang("Minyak");
console.log(">> Setelah dihapus <<");
// setelah di hapus
let list2 = 0;
for(let i in daftarBelanja){
    list2++;
    console.log(`${list2}. ${daftarBelanja[i]}`);
}
// 4. sort data
console.log(">> Sort data <<");
//
daftarBelanja.sort();
let list3 = 0;
for(let i in daftarBelanja){
    list3++;
    console.log(`${list3}. ${daftarBelanja[i]}`);
}