// TASK 5

// set variable
const fs = require("fs");

// set variable output
let result = {};

/*
    fungsi addFilm
    *judul = untuk nama film
    *tahun = untuk tahun film
    *genre = untuk genre film
*/
function addFilm(soal){
    // buat file jika tidak ada
    try{
        data = JSON.stringify(soal);
        // add data to file 
        fs.writeFileSync("film.json", data);
    } catch (e){
        console.log(`Errornya di fungsi addfilm = ${e}`);
    }
}

// tampilkan semua daftar film dari db
function tampilkanFilm(){
    let list = 0;
    try{
        let output = fs.readFileSync("film.json", "utf8");
        // parse data to json
        let res = JSON.parse(output);
        // show data
        for(let i in res){
            list++;
            console.log(`${list}. ${res[i].Judul} - ${res[i].Tahun} - ${res[i].Genre}`)
        }
    }catch (e){
        console.log(`Errornya di fungsi tampilkan= ${e}`);
    }
}
// tes soal
let soal = [
    {
        Judul: "Agak Laen",
        Tahun: 2024,
        Genre: ["Horor", "Komedi"],
    },
    {
        Judul: "Habibie & Ainun",
        Tahun: 2012,
        Genre: ["Drama", "Romantis"],
    },
    {
        Judul: "Dilan 1990",
        Tahun: 2018,
        Genre: ["Romantis"],
    },
]
// tes show
addFilm(soal);
tampilkanFilm();