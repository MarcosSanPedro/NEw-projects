/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from "react";

export const getWeather = async (city, apiKey) => {
  const response = fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`
  )
  const data = await response.json
  console.log(data)
  return data
};

const Weather = ({data}) => {

  return (
    <div className="ml-4">
      {data ? (
        <>
          <span role="img" aria-label="Weather Icon">
            {data.weather[0].main === "Clear" ? "☀️" : "🌧️"}
          </span>
          <span>{data.main.temp}°C</span>
        </>
      ) : (
        "Loading weather..."
      )}
    </div>
  );
};

export default Weather;
