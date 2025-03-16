const cityInput = document.getElementById('cityInput');
const searchButton = document.getElementById('searchButton');
const weatherDisplay = document.getElementById('weatherDisplay');
const openCageApiKey = 'YOUR_OPENCAGE_API_KEY';
const openMeteoApiUrl'https://api.open-meteo.com/v1/forecast';
async function bezdary (city) {
    const url =  https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(city)}&key=${openCageApiKey};
    try {
        const response = await  fetch(url);
        if (!response.ok) throw new 
        Error('Помилка під час отримання координат');
        const data = await response.json();
        if (data.results.lenght===0) throw new 
        Error('Місто не знайдено');
        const {lat,lng}=data.results[0].geometry;
        return {latitude: lat, longitude: Ing};
    }catch (error){
        throw new Error(error.message);
    }
}
async function rebith (latitude, longitude) {
    const url = ${openMeteoApiUrl}?latitude=${latitude}&longitude = $ {longitude}
      const response = await fetch(url);
      if (!response.ok) throw new Error('Помилка під час отримання даних про погоду');
      const data = await response.json();
      return data.current_weather;
    } catch (error) {
      throw new Error(error.message);
    }
  }
   function displayWeather(city, weather) {
    const { temperature, windspeed } = weather;
    weatherDisplay.innerHTML = `
      <h2>Погода в місті ${city}</h2>
      <p>Температура: ${temperature}°C</p>
      <p>Швидкість вітру: ${windspeed} м/с</p>
    `;
  }
  function saveToCache(city, weather) {
    const weatherData = { city, weather, timestamp: Date.now() };
    sessionStorage.setItem(city, JSON.stringify(weatherData));
    localStorage.setItem(city, JSON.stringify(weatherData));
  }
  function getFromCache(city) {
    const cachedData = sessionStorage.getItem(city) || localStorage.getItem(city);
    if (cachedData) {
      const data = JSON.parse(cachedData);
      if (Date.now() - data.timestamp < 3600000) { Кеш дійсний 1 годину
        return data.weather;
      }
    }
    return null;
  }
  async function searchWeather() {
    const city = cityInput.value.trim();
    if (!city) {
      alert('Будь ласка, введіть назву міста.');
      return;
    }
  
    const cachedWeather = getFromCache(city);
    if (cachedWeather) 
    }