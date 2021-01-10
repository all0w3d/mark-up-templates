let daysEl = document.getElementById("days");
let hrsEl = document.getElementById("hrs");
let minsEl = document.getElementById("mins");
let secEl = document.getElementById("sec");

let myBirthday = "15 Jun 2021";

function countdown() {


    

let currentDate = new Date();
let myBirthdayDate = new Date(myBirthday);
let totalLeftSec = Math.floor((myBirthdayDate - currentDate) / 1000);
    
let days = Math.floor(totalLeftSec / 3600 / 24);
let hrs = Math.floor((totalLeftSec / 3600) % 24);
let mins = Math.floor((totalLeftSec / 60) % 60);
let sec = Math.floor((totalLeftSec) % 60);

daysEl.innerHTML = days;
hrsEl.innerHTML = hrs;
minsEl.innerHTML = mins;
secEl.innerHTML = sec;



}



countdown();

setInterval (countdown, 1000);