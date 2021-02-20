let input = document.getElementById ("day");
const submit = document.getElementById ("submit-1");
const years = document.getElementById("year-1");
const weeks = document.getElementById("week");
const dayer = document.getElementById("d");
const reset1 = document.querySelector("reset");

submit.addEventListener("click", fastFuncation);

function fastFuncation (){

let value1 = input.value;

let day= value1;
let  year = day/365;
let year1 = parseInt(year);
 
years.innerText=year1;

 let week= (day % 365)/7;
 let week1 = parseInt (week);

weeks.innerText = week1;

let sum = day - (year1*356)+ (week1*7);

let days = parseInt(sum);

dayer.innerText = days;






}

