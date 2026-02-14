const key = '0cb2a94d8372941766303c654da36058';

async function coordinate(city) {
  const response = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${key}`,
  );
  const data = await response.json();

  if (!data.length) {
    throw new Error('City not found');
  }

  return {
    glat: data[0].lat,
    glon: data[0].lon,
  };
}

async function weatherData(city) {
  const { glat, glon } = await coordinate(city);

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${glat}&lon=${glon}&appid=${key}`,
  );

  if (!response.ok) {
    throw new Error('Weather fetch failed');
  }

  return response.json();
}

weatherData('Delhi')
  .then((data) => console.log(data.weather))
  .catch((err) => console.error(err.message));

export { weatherData };
