function calculate() {
    let price = Number(document.getElementById("price").value);
    let money = Number(document.querySelector("#money").value);
    let answer = document.getElementById("answer");


    let liters = money / price;

    let text;

    let calculator = document.getElementById("solution");

    answer.textContent = Math.floor(liters);

    liters >= 10
        ? (text = "You put over 10 liters")
        : (text = "You should add at least until 10 liters to travel safely");


    console.log(price);
    console.log(money);
    console.log((price * money));

    answer.textContent = ` The amount of liters that can be bought are ${liters}`;
    solution.textContent = text;
}