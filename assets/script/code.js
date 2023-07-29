const apiKey = "e6db0657b5b53300d2e0d9cb0599c065";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weatherIcon");
async function checkweather(city) {
  const response = await fetch(apiurl + city + `&appid=${apiKey}`);
  if (response.status == 404 || searchBox.value == "") {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
    document.querySelector(".report").style.display = "none";
  } else {
    const data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".report").innerHTML = data.weather[0].main;

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "assets/images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "assets/images/clear.png";
    } else if (data.weather[0].main == "Haze") {
      weatherIcon.src = "assets/images/mist.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "assets/images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "assets/images/mist.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "assets/images/rain.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "assets/images/snow.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    document.querySelector(".report").style.display = "block";
  }
}
searchBtn.addEventListener("click", () => {
  checkweather(searchBox.value);
});