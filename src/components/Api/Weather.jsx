// Weather.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const apiKey = 'YOUR_API_KEY';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    axios.get(apiUrl)
      .then(response => setWeatherData(response.data))
      .catch(error => console.error('Error fetching weather data:', error));
  }, [city]);

  return (
    <div className="p-4 border rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Weather Information</h2>

      {weatherData && (
        <div>
          <p className="mb-2">{weatherData.name}</p>
          <p className="text-2xl font-bold mb-2">{Math.round(weatherData.main.temp)}°C</p>
          <p className="capitalize">{weatherData.weather[0].description}</p>
        </div>
      )}

      {!weatherData && <p>Loading...</p>}
    </div>
  );
};

export default Weather;
