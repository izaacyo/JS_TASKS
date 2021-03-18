
const bulbsConstructor = document.getElementsByClassName("bulb");


let counter = 0;
let bulbContainer = document.querySelector("#bulbs");
let result = document.querySelector("#result");
let gameover = document.querySelector("#gameover");
let close = document.getElementById("close");


let winSound = new Audio("audio/win.mp3");
let loseSound = new Audio("audio/lose.mp3");
let backgroundSound = new Audio("audio/background.mp3");

backgroundSound.play();


const cycloneArcade = () => {


    const bulbsNumber = document.querySelector("#bulbAmount").value;
    const blinkSpeed = document.querySelector("#speed").value;
    const lightedBulb = Math.round(Math.random() * bulbsNumber);

    document.getElementById("start-btn").disabled = true;
    document.getElementById("stop-btn").disabled = false;


    while (counter < bulbsNumber) {
        const newBulb = document.createElement("div");
        newBulb.className = "bulb";
        bulbContainer.appendChild(newBulb);
        counter++;
    }


    const bulbsConstructor = document.getElementsByClassName("bulb");


    Circle(bulbsConstructor);


    bulbsConstructor[lightedBulb].classList.add("chosen");


    if (cycloneArcade) {
        backgroundSound.play();
    }

    counter = 0;
    bulbsConstructor[counter].classList.add("active");

    const startInterval = setInterval(() => {
        bulbsConstructor[counter].classList.remove("active");

        //counter < bulbsNumber - 1 ? counter++ : (counter = 0);
        if (counter < bulbsNumber - 1) {
            counter++
        } else {
            counter = 0
        }

        bulbsConstructor[counter].classList.add("active");
    }, blinkSpeed);



    const stopInterval = () => {
        clearInterval(startInterval);
        result.style.visibility = "visible";


        if (counter === lightedBulb) {
            winSound.play();
            gameover.textContent = "Congratulations, you won!";
        } else {
            loseSound.play();
            gameover.textContent = "Unfortunately, you lost.Try again!";
        }

        const reload = () => {
            location.reload();
        };
        close.addEventListener("click", reload);
    };

    document.getElementById("stop-btn").addEventListener("click", stopInterval);

};


document.getElementById("start-btn").addEventListener("click", cycloneArcade);





const Circle = (nodes) => {
    const radius = "12em",
        start = -90,
        $els = [...nodes],
        numberOfEls = $els.length,
        slice = 360 / numberOfEls,
        index = 0;

    $els.forEach((el, index) => {
        const rotate = slice * index + start;
        const rotateReverse = rotate * -1;

        el.style.transform = `rotate(${rotate}deg) translate(${radius}) rotate(${rotateReverse}deg)`;
    });
};