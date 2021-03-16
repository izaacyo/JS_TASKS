
const daySalary = () => {

    let HourlySalary = document.getElementById("HourSalary").value;

    let HoursWorked = document.getElementById("HoursWorked").value

    let answer = document.getElementById("answer")

    let extra1 = HourlySalary * 1.5;
    let extra2 = HourlySalary * 2;
    let solution


    if (HoursWorked <= 7) {
        solution = "Your salary is " + HourlySalary * HoursWorked + " euros"
    }
    else if (HoursWorked >= 8 && HoursWorked <= 9) {

        solution = "Your salary is " + (HourlySalary * 7 + extra1 * (HoursWorked - 7)) + " euros"
    }

    else if (HoursWorked > 9) {
        solution = "Your salary is " + (HourlySalary * 7 + extra1 * 2 + extra2 * (HoursWorked - 9)) + " euros"
    }

    answer.textContent = solution

}

daySalary();

