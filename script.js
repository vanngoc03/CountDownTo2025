const countDowDate = new Date("jan, 22, 2025 00:00:00").getTime() ; 
const dayEl = document.getElementById("days");
const hourEl = document.getElementById("hours");
const minEl = document.getElementById("minutes");
const secEl = document.getElementById("seconds");
const coundown = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDowDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24 ));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 24 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60 ));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000 );
    dayEl.innerHTML  = days;
    hourEl.innerHTML = hours;
    minEl.innerHTML = minutes;
    secEl.innerHTML = seconds;
}, 1000 );