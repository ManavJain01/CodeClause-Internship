const apiKey = "94bebed3f56ec406b5b35b4da1bb3cd3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.getElementById("input")
const searchBtn = document.getElementById("btn")
const weatherIcon = document.getElementById("weather-icon")

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.getElementById("error").style.display = "flex";
    document.getElementById("weather").style.display = "none";
  } else {
    let data = await response.json();

    document.getElementById("city").innerHTML = data.name;
    document.getElementById("temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.getElementById("humidity").innerHTML = data.main.humidity + "%";
    document.getElementById("speed").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "./Images/clouds.png"
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "./Images/clear.png"
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "./Images/rain.png"
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "./Images/drizzle.png"
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "./Images/mist.png"
    }

    document.getElementById("weather").style.display = "block";
    document.getElementById("error").style.display = "none";
  }

}

searchBtn.addEventListener("click", () => { checkWeather(searchBox.value) })

