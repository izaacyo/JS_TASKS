function Enter() {

    let number1 = Number(document.getElementById("number1").value);

    let number2 = Number(document.getElementById("number2").value);

    let number3 = Number(document.getElementById("number3").value);


    if (number1 && number1 & number2 && number2 & number3 && number3 >= 0) {
        alert(number1 * number2 * number3)
    }

    else if (number1 && number1 & number2 && number2 & number3 && number3 < 0) {
        alert("Only negatives")
    }

    else {
        alert(number1 + number2 + number3)

    }
}
