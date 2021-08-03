//Get Current Date and Time
function formatDate() {
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[now.getDay()];
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getUTCMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day},${hours}:${minutes}`;
}
let nowElement = document.querySelector("#current-day");
nowElement.innerHTML = formatDate();




// Search Engine and Button

function displayWeatherCondition(response) {
  document.querySelector("#current-city").innerHTML = response.data.name;
  document.querySelector("#current-temp").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector(
    "#humidity"
  ).innerHTML = `Humidity: ${response.data.main.humidity}%`;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;


    let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
}






function searchCity(city) {
  let apiKey = "d395633e12b8e5d20de90a77b90b43eb";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}
searchCity("Montreal");

// Unit Conversion
function displayFahrenheitTemp (event); {
    event.preventDefault ();
    let temperatureElement =document.querySelector (#temperature);
    let fahrenheitTemp =  (celsiusTemperature *9) / 5  + 32;
    temperatureElement.innerHTML = Math.round (fahrenheitTemp);
}

function displayCelsiusTemperature (event); {
    event.preventDefault ();
    let temperatureElement =document.querySelector (#temperature);
    temperatureElement.innerHTML = celsiusTemperature;

}

let celsiusTemperature = null;

let fahrenheitLink = document.querySelector ("#fahrenheit-link");
fahrenheitLink.addEventListener ("click", displayFahrenheitTemp);

let celsiusLink = document.querySelector ("#celsius-link");
celsiusLink.addEventListener ("click", displayCelsiusTemperature);  

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

function searchLocation(position) {
  let apiKey = "d395633e12b8e5d20de90a77b90b43eb";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeatherCondition);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

 dateElement = document.querySelector("#current-day");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

let currentLocationButton = document.querySelector(".locationButton");
currentLocationButton.addEventListener("click", getCurrentLocation);



