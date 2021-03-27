
(function () {

    let API_KEY = "b769d10d052f9ed9de8c73820e08cf7d"


    document.getElementById("send").addEventListener("click", () => {
        let city = document.getElementById("city").value;
        console.log("City is " + city);
        let weather = [];
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
            .then(resp => resp.json())
            .then(json => {
                weather = json;
                let temperature = Math.floor(weather.main.temp - 273);


                let temperatureCity = weather.name;

                let temperatureCountry = weather.sys.country;

                let weatherDescription = weather.weather[0].description;

                let weatherIcon = weather.weather[0].icon;

                return populateFields(temperatureCity, temperatureCountry, weatherDescription, temperature, weatherIcon);
            })


    });

})();


function populateFields(temperatureCity, temperatureCountry, weatherDescription, temperature, weatherIcon) {

    document.querySelector("#city").innerText = `${temperatureCity}, ${temperatureCountry}`;
    document.querySelector("#temperature").innerText = `${temperature}°C`;
    document.querySelector("#description").innerText = `${weatherDescription}`;
    document.querySelector("#icon").src = `http://openweathermap.org/img/wn/${weatherIcon}.png`;
};

