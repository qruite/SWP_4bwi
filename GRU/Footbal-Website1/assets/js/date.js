var clDatum = document.getElementById('headerClHeutigesDatum');
var llDatum = document.getElementById('headerLlHeutigesDatum');
var plDatum = document.getElementById('headerPlHeutigesDatum');
var blDatum = document.getElementById('headerBlHeutigesDatum');

let today = new Date();

let day = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();

if(day < 10) {
    day = '0' + day;
}

if(month < 10) {
    month = '0' + month;
}

let dateInString = day + '/' + month + '/' + year;

clDatum.innerHTML = dateInString;
llDatum.innerHTML = dateInString;
plDatum.innerHTML = dateInString;
blDatum.innerHTML = dateInString;

