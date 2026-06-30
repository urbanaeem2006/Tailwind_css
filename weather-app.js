const temp = document.querySelector(".temp");
const cityElement = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");

const searchInput = document.querySelector(".search-input");
const searchbtn = document.querySelector(".search-btn");

searchbtn.addEventListener("click", () => {

    const city = searchInput.value;

    fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`)
        .then(response => response.json())
        .then(locationData => {

            if (!locationData.results) {
                alert("City not found");
                return;
            }

            const latitude = locationData.results[0].latitude;
            const longitude = locationData.results[0].longitude;

            fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
                .then(response => response.json())
                .then(weatherData => {

                    temp.innerHTML = weatherData.current_weather.temperature.toFixed(1) + "°C";
                    cityElement.innerHTML = city;
                    wind.innerHTML = weatherData.current_weather.windspeed + " km/h";

                });

        });

});