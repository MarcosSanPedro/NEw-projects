import React, { useState, useEffect } from 'react';

const Weather = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
    const apiKey = '80b47afa1ad2aac02a39597cd1573ed0';
    const city = 'Jacksonville'; // Replace with the desired city name or coordinates

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`)
      .then((response) => response.json())
      .then((data) => setWeather(data))
      .catch((error) => console.error('Error fetching weather data:', error));
  }, []);

  return (
    <div className="ml-4">
      {weather ? (
        <>
          <span role="img" aria-label="Weather Icon">
            {weather.weather[0].main === 'Clear' ? '☀️' : '🌧️'}
          </span>
          <span>{weather.main.temp}°C</span>
        </>
      ) : (
        'Loading weather...'
      )}
    </div>
  );
};

export default Weather;
