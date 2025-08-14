// TASK 4


// set variable
let data = [
    ["New Balance NB530", 390000],
    ["Nike Vomero 5", 350000],
    ["Addidas Samba", 180000],
    ["Onitsuka Tiger Mexico", 420000],
];
// set uang saku
let uangSaku = 1200000;

// tes
console.log("===== Rincian Belanja Sepatu =====");
for(let i = 0; i < data.length ; i++){
    // console.log(data[i][1])
    console.log(`${i+1}. ${data[i][0]} - Rp. ${data[i][1]}`);
}
// belanjaan info
let totalBelanja = 0;
for(let i in data){
    totalBelanja += data[i][1];
}
console.log("Total Belanja = ",totalBelanja);
// cek diskon
let myDiskon;
if(totalBelanja < 250000){
    myDiskon = 0;
    console.log(`Diskon = ${myDiskon}%`);
    totalBelanja = totalBelanja - totalBelanja;
    console.log("Total Setelah Diskon = ",totalBelanja);
}else if(totalBelanja > 250000 && totalBelanja < 499999){
    myDiskon = 5;
    console.log(`Diskon = ${myDiskon}%`);
    totalBelanja = totalBelanja - (myDiskon / 100 * totalBelanja);
    console.log("Total Setelah Diskon = ",totalBelanja);
}else if(totalBelanja > 500000 && totalBelanja < 799999){
    myDiskon = 10;
    console.log(`Diskon = ${myDiskon}%`);
    totalBelanja = totalBelanja - (myDiskon / 100 * totalBelanja);
    console.log("Total Setelah Diskon = ",totalBelanja);
}else{
    myDiskon = 15;
    console.log(`Diskon = ${myDiskon}%`);
    totalBelanja = totalBelanja - (myDiskon / 100 * totalBelanja);
    console.log("Total Setelah Diskon = ",totalBelanja);
}

// pembayaran
console.log("Pembayaran = Rp.",uangSaku);
// kembalian
let kembalian = uangSaku - totalBelanja;
console.log("Kembalian = Rp.", kembalian);