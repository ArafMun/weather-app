
import React from 'react';
import { WeatherData } from '../types';

interface WeatherDisplayProps {
  weatherData: WeatherData;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weatherData }) => {
  const { name, main, weather } = weatherData;
  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <div className="weather-display">
      <h2>{name}</h2>
      <img src={iconUrl} alt={weather[0].description} />
      <p>{weather[0].description}</p>
      <p>Temperature: {main.temp}°C</p>
      <p>Feels Like: {main.feels_like}°C</p>
      <p>Min: {main.temp_min}°C | Max: {main.temp_max}°C</p>
    </div>
  );
};

export default WeatherDisplay;