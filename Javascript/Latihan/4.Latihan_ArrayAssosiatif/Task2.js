// TASK 2 SHOW TO HTML

// set variable
let data = {
    Rose: 178,
    Magnolia: 153,
    Daisy: 165,
    Jasmine: 161,
    Violet: 159,
};


// tes
// sort
let setSort = Object.keys(data).sort();
let result;

setSort.forEach(function (n){
    result = result + n + " : "+ data[n] + " cm <br>";
})
document.getElementById("id").innerHTML = result;
