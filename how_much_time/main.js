let form = document.querySelector("form");
let text = document.getElementById("output");
let countdown = document.getElementById("clock");

let alldays = [];
let businessdays = [];
let countdowntimer;


const daysLeft = (event) => {
    event.preventDefault();

    let start = new Date(document.getElementById("startDate").value);
    let end = new Date(document.getElementById("endDate").value);
    let eventName = document.getElementById("eventName").value;

    console.log(start, end, eventName)


    while (start < end) {
        start.setDate(start.getDate() + 1);
        alldays.push(start);
        if (start.getDay() !== 6 && start.getDay() !== 0) {
            businessdays.push(start);
        }
    }

    text.textContent = `Until ${eventName} there are ${alldays.length} days out of which ${businessdays.length} are workdays`;


    form.reset();
    alldays = [];
    businessdays = [];


    timer(end, eventName);
};



const timer = (a, b) => {
    if (countdowntimer) {
        clearInterval(countdowntimer);
    }


    countdowntimer = setInterval(function () {
        let present = new Date();
        let future = a - present;

        let days = Math.floor(future / (1000 * 60 * 60 * 24));
        let hours = Math.floor((future % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((future % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((future % (1000 * 60)) / 1000);

        countdown.textContent = ` Until ${b} there are ${days} days ${hours} hours ${minutes} minutes and ${seconds} seconds`;

    }, 1000);
};

form.addEventListener("submit", daysLeft);