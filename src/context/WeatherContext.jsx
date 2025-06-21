/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from 'react';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError('');
    setCity(cityName);

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2e758dbdde0c313750d78fa22ce2a9fb&units=metric
`
      );
      const data = await res.json();
      console.log(data)

      if (res.ok) {
        setWeather(data);
      } else {
        setError(data.message || 'Error fetching weather');
      }
    } catch (err) {
      setError('Network error',err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <WeatherContext.Provider value={{ city, weather, loading, error, fetchWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};
