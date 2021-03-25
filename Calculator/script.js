let firstNumber = ``;
let secondNumber = ``;
let operation = ``;

document.getElementById("result").addEventListener(`click`, perfromCalculation);


function perfromCalculation() {

    let result;

    if (!firstNumber || !secondNumber || !operation) return


    if (operation === "plus") result = Number(firstNumber) + Number(secondNumber)
    if (operation === "minus") result = Number(firstNumber) - Number(secondNumber)
    if (operation === "multiply") result = Number(firstNumber) * Number(secondNumber)
    if (operation === "divide") result = Number(firstNumber) / Number(secondNumber)

    document.getElementById('input').innerText = result

    firstNumber = `` + result;
    secondNumber = ``;
    operation = ``;
}



document.querySelectorAll(`.operators > div`).forEach(button => {
    button.addEventListener(`click`, function () {
        updateSelectedOperation();
        if (secondNumber) firstNumber = secondNumber
        secondNumber = ''
    })
})

document.querySelectorAll(`.numbers > div`).forEach(button => {
    button.addEventListener(`click`, function () {
        if (this.innerText === 'C') {
            reset()
            updateDisplay();
            return
        }

        updateSelectedNumber();

        updateDisplay();
    });
});


function updateDisplay() {
    document.getElementById("input").innerText =
        `${secondNumber}`
}

function updateSelectedNumber() {
    if (this.event.target.innerText === "." && firstNumber.indexOf(".") > -1) {
        return;
    }

    secondNumber += this.event.target.innerText;

}

function reset() {
    firstNumber = '';
    secondNumber = '';
    operation = '';
}

/* no results will come (void function) but updates the variable operation with the user choice */
function updateSelectedOperation() {
    switch (this.event.target.innerText) {
        case `+`:
            operation = `plus`;
            break;
        case `-`:
            operation = `minus`;
            break;
        case `×`:
            operation = `multiply`;
            break;
        case `÷`:
            operation = `divide`;
            break;
        default:
            console.log(`Error`)
            break;

    }
}

