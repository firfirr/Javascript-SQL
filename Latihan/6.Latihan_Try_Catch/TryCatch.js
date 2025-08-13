// TASK 6

// set fungsi
function bagiAngka(a, b){
    let hasil = a / b;
    console.log("Hasil pembagian : ", hasil);
    console.log("Program Selesai.");
}

let angka1 = 10;
let angka2 = 0;

//bagiAngka(angka1, angka2);

// taks 1
console.log(">> Test Try-Catch <<");
function bagiAngka1(a, b){
    if( b == 0){
        console.log("Error: Tidak bisa membagi dengan nol");
    } else {
        try{
            let hasil = a / b;
            console.log("Hasil pembagian : ", hasil);
            
        }catch (e){
            console.log("Error: Tidak bisa membagi dengan nol", e);
        }
    }
    
    console.log("Program Selesai.");
}
bagiAngka1(angka1, angka2);
angka2 = 5;
// taks 2
try{
    bagiAngka(angka1, angka2);
}catch (e){
    console.log("Error: Variabel tidak dikenali")
}

// task 3 
try{
    bagiAngka(angka1, angka22);
}catch (e){
    console.log("Terjadi Kesalahan Lain: ",e);
}
