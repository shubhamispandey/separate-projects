'use strict';
// ! -----------------------------------Dark Mode-----------------------------------
// ! -------------------------------------------------------------------------------

const darkMode = document.querySelector('.darkmode input');
const switchDark = document.querySelector('.darkmode span');
const info = document.querySelector('.info');

// * functions
let switchDarkFunction = function () {
    info.classList.toggle('info__dark')
}

darkMode.addEventListener('click', function () {
    if (darkMode.checked) {
        switchDark.classList.toggle('span-btn-active');
        switchDarkFunction();
    } else {
        switchDark.classList.toggle('span-btn-active');
        switchDarkFunction();
    }
})

// ! -----------------------------------Quote Changer-----------------------------------
// ! -----------------------------------------------------------------------------------


const quoteBtn = document.querySelector('.quote-btn');
let rno = 1;
const quoteGenerateFunction = function () {
    document.querySelector(`.quote-${rno}`).style.display = 'none';
    rno = Number(Math.trunc((Math.random() * 4) + 1));
    const quote = document.querySelector(`.quote-${rno}`);
    quote.style.display = 'block';
}

document.querySelector('body').onload = quoteGenerateFunction;
quoteBtn.addEventListener('click', function () {
    quoteGenerateFunction();
    quoteBtn.load
});

// ! -----------------------------------Date Reciever-----------------------------------
// ! -----------------------------------------------------------------------------------

setInterval(timer, 1000);

function timer() {
    let times = new Date();
    let hrs = times.getHours();
    let mins = times.getMinutes();
    let en = "AM";

    if (hrs > 11) {
        en = "PM";
    }
    if (hrs > 12) {
        hrs -= 12;
    }
    if (hrs < 10) {
        hrs = `0${hrs}`;
    }
    if (mins < 10) {
        mins = `0${mins}`;
    }
    document.querySelector(".weather__time h1").textContent = `${hrs}:${mins} ${en}`;
}

function backgroundTimer() {
    const backgImg = document.querySelector('main');
    const weatherText = document.querySelector('.weather__desc span');
    let times = new Date();
    let hrs = times.getHours();
    console.log(hrs);

    if(hrs >= 0){
        backgImg.style.background = `url('1.jpg')`;
        weatherText.textContent = `GOOD MORNING, IT'S CURRENTLY`;
    }
    else if(hrs >= 15 && hrs <= 19){
        backgImg.style.background = `url('2.jpg')`;
        weatherText.textContent = `GOOD EVENING, IT'S CURRENTLY`;
    }
    else{
        backgImg.style.background = `url('3.jpg')`;
        weatherText.textContent = `GOOD NIGHT, IT'S CURRENTLY`;
    }
}
backgroundTimer();