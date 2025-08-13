// set variable
let headset = 225000;
let mouse = 150000;
let keyboard = 350000;
// show
console.log("===== Rincian Pembelian =====");
console.log(`Headset = Rp.${headset}`);
console.log(`Mouse = Rp.${mouse}`);
console.log(`Keyboard = Rp.${keyboard}`);
// task
// 1.Total
let total = headset + mouse + keyboard;
console.log(`Total Belanja = Rp.${total}`);
// 2.Diskon
// set diskon
let diskon;
// get price after discount
let sudahDiskon;
if (total < 250000){
    diskon = 0;
    sudahDiskon = total - (diskon / 100 * total);
    // show
    console.log(`Diskon = ${diskon}%`);
    console.log(`Total Setelah Diskon = Rp.${sudahDiskon}`);
}else if (total === 250000 || total < 499999){
    diskon = 5;
    sudahDiskon = total - (diskon / 100 * total);
    // show
    console.log(`Diskon = ${diskon}%`);
    console.log(`Total Setelah Diskon = Rp.${sudahDiskon}`);
}else if (total === 500000 || total < 799999){
    diskon = 10;
    sudahDiskon = total - (diskon / 100 * total);
    // show
    console.log(`Diskon = ${diskon}%`);
    console.log(`Total Setelah Diskon = Rp.${sudahDiskon}`);
}else{
    // >= 800000
    diskon = 15;
    sudahDiskon = total - (diskon / 100 * total);
    // show
    console.log(`Diskon = ${diskon}%`);
    console.log(`Total Setelah Diskon = Rp.${sudahDiskon}`);
}


// 3.Kembalian
// set uang Saku
let uangSaku = 800000;
let kembalian = uangSaku - sudahDiskon;
// show
console.log(`Pembayaran = Rp.${uangSaku}`);
console.log(`Kembalian = ${kembalian}`);
// thank you