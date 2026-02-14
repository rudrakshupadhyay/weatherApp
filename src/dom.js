import weatherData from './data';
const cityName = document.getElementById('cityName');
const num = document.querySelector('.num');
const tempNum = document.querySelectorAll('tempNum');
function upDateData(city, temp, feelLike, humdity, minTemp, maxTemp, icon) {
  cityName.textContent = city;
  num.textContent = temp;
}
