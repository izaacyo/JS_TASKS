const BmiCalc = () => {

    let height = document.getElementById("Height").value / 100;
    let weight = document.getElementById("Kilograms").value;


    let BMI = weight / (height * height);


    if (BMI < 18.5) {
        alert("underweight")
    }

    else if (BMI > 18.5 && BMI < 24.9) {
        alert(" Normal or Healthy Weight")
    }

    else if (BMI > 25.0 && BMI < 29.9) {
        alert("Overweight")

    } else if (BMI > 30.0) {
        alert("Obese")
    }

}

BmiCalc;


