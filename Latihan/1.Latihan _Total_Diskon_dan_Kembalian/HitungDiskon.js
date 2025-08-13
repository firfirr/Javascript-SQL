// set variable
let NasiGoreng = 25000;
let MieGoreng = 22000;
let Capcay = 32000;

console.log("Daftar Harga Makanan:");
console.log(`Harga Nasi Goreng = Rp. ${NasiGoreng}`);
console.log(`Harga Mie Goreng = Rp.${MieGoreng}`);
console.log(`Harga Capcay = Rp.${Capcay}`);
console.log("==========================");
// total harga makanan
let totalHargaMakanan = NasiGoreng + MieGoreng + Capcay;
console.log(`Harga Total = Rp.${totalHargaMakanan}`);
// diskon
let diskon = 10;
let potonganDiskon =totalHargaMakanan - (totalHargaMakanan / 100 * 10);
console.log(`Diskon = ${diskon}%`);
console.log(`Harga Setelah Diskon= Rp.${potonganDiskon}`);
// kembalian jika uang rp 100.000
let uangSaku = 100000;
let kembalianUang = uangSaku - potonganDiskon;
console.log(`Pembayaran = Rp.${uangSaku}`);
console.log(`Kembalian =Rp.${kembalianUang}`);
// thank you