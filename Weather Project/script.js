"use-strict";

const inputField = document.querySelector("#city-input");
const weatherButton = document.querySelector("#search-btn");
const API_KEY = "d762e6a93e52d41b124fdf18116c6ee8";
const weatherCard = document.querySelector("#weather-card");
const forecastContainer = document.querySelector("#forecast-container");
const weatherWrap = document.querySelector("#weather-wrap");

function showSpinner1() {
  weatherCard.innerHTML = `
    <div class="spinner"></div>
  `;
}

function showSpinner2() {
  forecastContainer.innerHTML = `
    <div class="spinner"></div>
  `;
}

function cardRemoval() {
  weatherWrap.classList.remove(
    "weather-card-cold",
    "weather-card-hot",
    "weather-card-colddd",
  );
}

const getWeatherr = function () {
  showSpinner1();
  showSpinner2();

  const getWeather = async function () {
    const city = inputField.value.trim();

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`,
      );

      if (city === "") alert("Please Enter a City Name");

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();

      const response2 = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`,
      );
      const data2 = await response2.json();
      console.log(data2);

      if (!response.ok) {
        throw new Error("City not found");
      }
      weatherCard.innerHTML = "";

      weatherCard.insertAdjacentHTML(
        "beforeend",
        `<div id="current-weather">
        <h2 id="city-name">${data.name}</h2>
        <img id="weather-icon" src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Weather Icon" />
        <p id="temperature">${data.main.temp}°C</p>
        <p id="description">${data.weather[0].description}</p>
        <p id="humidity">Humidity: ${data.main.humidity}%</p>
        <p id="windspeed">WindSpeed: ${data.wind.speed}m/s</p>
      </div>`,
      );

      inputField.value = "";

      cardRemoval();

      function backgroundRemove() {
        if (data.main.temp > 0 && data.main.temp < 20) {
          weatherWrap.classList.add("weather-card-cold");
          document.body.style.backgroundColor = "white";
        } else if (data.main.temp >= 25) {
          weatherWrap.classList.add("weather-card-hot");
          document.body.style.backgroundColor = "teal";
        } else if (data.main.temp < 0) {
          weatherWrap.classList.add("weather-card-colddd");
          document.body.style.backgroundColor = "grey";
        }
      }
      backgroundRemove();

      // 5 day forecast
      const forecastFilter = data2.list.filter((_, index) => index % 8 === 0);
      console.log(forecastFilter);

      const forecastHTML = forecastFilter
        .map(
          (day) =>
            `<div class="forecast-card"
            <p>${day.dt_txt.split(" ")[0]}</p>
            <img id="weather-icon" src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Weather Icon" />
            <p>${day.main.temp}°C</p>
            <p>${day.weather[0].description}</p>
            <p id="humidity">Humidity: ${day.main.humidity}%</p>
        <p id="windspeed">WindSpeed: ${day.wind.speed}m/s</p>
          </div>`,
        )
        .join("");

      forecastContainer.innerHTML = "";

      forecastContainer.innerHTML = forecastHTML;
    } catch (err) {
      console.error(err);
      weatherCard.innerHTML = `<p>${err}</p>`;
    }
  };

  getWeather();
};

weatherButton.addEventListener("click", getWeatherr);
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") getWeatherr();
});
