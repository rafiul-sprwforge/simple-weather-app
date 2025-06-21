import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

const WeatherDisplay = () => {
  const { weather, loading, error, city } = useContext(WeatherContext);

  if (loading) return <p className="text-center text-blue-600">Loading weather...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!weather) return null;

  return (
    <div className="mt-4 p-6 bg-blue-50 rounded-xl shadow-inner text-center">
      <h2 className="text-xl font-semibold text-blue-800 mb-2">{city}</h2>
      <p className="text-4xl font-bold text-blue-900">{Math.round(weather.main.temp)}°C</p>
      <p className="capitalize text-blue-700 mb-2">{weather.weather[0].description}</p>
      <div className="flex justify-around text-sm text-blue-600 mt-4">
        <div>
          <p className="font-medium">Humidity</p>
          <p>{weather.main.humidity}%</p>
        </div>
        <div>
          <p className="font-medium">Wind</p>
          <p>{weather.wind.speed} m/s</p>
        </div>
        <div>
          <p className="font-medium">Feels Like</p>
          <p>{Math.round(weather.main.feels_like)}°C</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
