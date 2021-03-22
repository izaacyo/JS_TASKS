let button = document.querySelectorAll(".circle");
let presentScore = document.getElementById("score");
let result = document.querySelector("#result");
let gameover = document.querySelector("#gameover");
let buttonStart = document.getElementById("start");
let buttonStop = document.getElementById("stop");
let close = document.getElementById("close");
let score = 0;
let active = 0;
let sec = 1000;
let counter = 0;
let miss = 0;
let arrowSound = new Audio("audio/arrow.mp3.mp3");
let backgroundSound = new Audio("audio/backgroundSound.mp3");
let endSound = new Audio("audio/endSound.mp3");

/*arrow.Mousemove = function (mouseMovement) {
    let arrow = document.getElementById("arrow");
    let positionX;
    let positionY;
    if (mouseMovement) {
        positionX = mouseMovement.pageX;
        positionY = mouseMovement.pageY;
        arrow.style.top = positionY + 1 + `px`;
        arrow.style.left = positionX + `px`;
    }
} */

button[0].onclick = function () {
    clicked(0);
};

button[1].onclick = function () {
    clicked(1);
};

button[2].onclick = function () {
    clicked(2);
};

button[3].onclick = function () {
    clicked(3);
};



const clicked = (a) => {
    console.log("clicked:", a);
    if (a === active) {
        score++;
        miss = 4;
        sec -= 10;
        console.log(sec);
    } else {
        console.log("Game Over");
        Stop();

    }

    if (clicked) {
        arrowSound.play()
        counter++;
    }
};



backgroundSound.play();

const Start = () => {
    console.log("Game started");


    let nextActive = New(active);
    button[nextActive].classList.toggle("active");
    button[active].classList.remove("active");
    active = nextActive;

    timer = setTimeout(Start, sec);

    buttonStart.disabled = true;
    buttonStop.disabled = false;

    if (clicked) {
        backgroundSound.play()
        counter++;
    }

    presentScore.textContent = `Your score is ${score}`;


    function New(active) {
        let nextActive = random(0, 3);

        if (nextActive != active) {

            return nextActive;
        } else {
            return New(active);
        }
    }

    miss++;
    if (miss === 4) {
        Stop();
        endSound.play();
        alert("You forgot to play. Be more attentive next time! Try again!")
    }

};

function disableButton(b) {
    b.disabled = true;
    b.value = "submitting...."
    b.form.submit();
}

const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


const Stop = () => {
    clearTimeout(timer);
    result.style.visibility = "visible";
    backgroundSound.play();
    endSound.play();
    if (score < 5) {
        gameover.textContent = `You can do better than this! Your score is ${score}. Press "Close" and try again!`

    }
    else if (5 < score < 15) {
        gameover.textContent = `Well done! Your score is ${score}. You are almost a pro!  Press "Close" and try again!`
    }
    else if (score > 15) {
        gameover.textContent = `Congratulations you mastered this game! Your score is ${score}. Press "Close" and try again!`
    }

};


const reload = () => {
    console.log("Close");
    window.location.reload();
};


close.addEventListener("click", reload);
