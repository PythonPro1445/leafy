const apiKey = '6b4d3e073aa65157264d755c1b701d61'; // Replace with your OpenWeatherMap API Key
const city = 'Singapore'; // Replace with the desired city
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

function getWeatherData() {
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('API request failed');
      }
      return response.json();
    })
    .then(data => {
      if (data.main && data.main.temp && data.weather && data.weather.length > 0) {
        const temperatureKelvin = data.main.temp; // Temperature in Kelvin
        const temperatureCelsius = temperatureKelvin - 273.15; // Temperature in Celsius
        const temperatureFahrenheit = (temperatureCelsius * 9/5) + 32; // Temperature in Fahrenheit

        const humidity = data.main.humidity; // Humidity in percentage
        const pressure = data.main.pressure; // Atmospheric pressure in hPa
        const weatherDescription = data.weather[0].description; // Weather description
        const weatherIcon = data.weather[0].icon; // Weather icon code

        // Update your HTML elements with weather data
        const temperatureElement = document.getElementById('temperature');
        const descriptionElement = document.getElementById('description');
        const humidityElement = document.getElementById('humidity');
        const pressureElement = document.getElementById('pressure');
        const iconElement = document.getElementById('weather-icon');
        // You can use the weatherIcon variable to display an icon (you'll need to have the appropriate icons available).
        
      } else {
        console.error('Data structure is not as expected.');
      }
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
    });
}

getWeatherData();
