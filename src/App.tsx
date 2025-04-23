import React, { useState } from 'react';
import axios from 'axios';
import WeatherForm from './components/WeatherForm';
import WeatherDisplay from './components/WeatherDisplay';
import './App.css';
import { WeatherData } from './types';

const App: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async (city: string) => {
    const apiKey = '51900002bdf6bc7c144c373fbdb520ef';
    const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
    try {
      const response = await axios.get(baseUrl, {
        params: {
          q: city,
          appid: apiKey,
          units: 'metric',
        },
      });
      setWeatherData(response.data);
      setError(null);
    } catch (err) {
      setError('City not found or invalid API response.');
      setWeatherData(null);
    }
  };

  return (
    <div className="App">
      <h1>Simple Weather App</h1>
      <WeatherForm fetchWeather={fetchWeather} />
      {error && <p className="error">{error}</p>}
      {weatherData && <WeatherDisplay weatherData={weatherData} />}
    </div>
  );
};

export default App;