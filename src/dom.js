import { weatherData } from './data';
const cityName = document.getElementById('cityName');
const num = document.querySelector('.num');
const tempNum = document.querySelectorAll('.tempNum');
const WeatherIcon = document.querySelector('.WeatherIcon');
const userCity = document.getElementById('userCity');
function upDateData(
  city,
  temp,
  feelLike,
  humdity,
  minTemp,
  maxTemp,
  icon,
  des,
) {
  cityName.textContent = city;
  num.textContent = temp;
  tempNum[0].textContent = feelLike;
  tempNum[1].textContent = humdity + '%';
  tempNum[2].textContent = minTemp;
  tempNum[3].textContent = maxTemp;
  WeatherIcon.innerHTML = '';
  const img = document.createElement('img');
  img.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  img.alt = des;
  WeatherIcon.append(img);
}
async function init() {
  const initCity = await weatherData('Delhi');
  const temp = initCity.main.temp - 273.15;
  const feelLike = initCity.main.feels_like - 273.15;
  const humdity = initCity.main.humidity;
  const minTemp = initCity.main.temp_min - 273.15;
  const maxTemp = initCity.main.temp_max - 273.15;
  const icon = initCity.weather[0].icon;
  const des = initCity.weather[0].description;
  console.log(initCity);
  upDateData(
    'Delhi',
    temp.toFixed(2),
    feelLike.toFixed(2),
    humdity,
    minTemp.toFixed(2),
    maxTemp.toFixed(2),
    icon,
    des,
  );
}
async function updateCity(city) {
  const cityStr = city.trim().toLowerCase();
  const initCity = await weatherData(cityStr);
  const temp = initCity.main.temp - 273.15;
  const feelLike = initCity.main.feels_like - 273.15;
  const humdity = initCity.main.humidity;
  const minTemp = initCity.main.temp_min - 273.15;
  const maxTemp = initCity.main.temp_max - 273.15;
  const icon = initCity.weather[0].icon;
  const des = initCity.weather[0].description;
  upDateData(
    city.charAt(0).toUpperCase() + city.slice(1).toLowerCase(),
    temp.toFixed(2),
    feelLike.toFixed(2),
    humdity,
    minTemp.toFixed(2),
    maxTemp.toFixed(2),
    icon,
    des,
  );
}
userCity.addEventListener('submit', (e) => {
  e.preventDefault();
  updateCity(userCity.City.value);
  userCity.reset();
});

export { init };
