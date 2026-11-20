
import React, { useState } from 'react';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const searchWeather = async (e) => {
    e.preventDefault();

    if (!city.trim()) {
      setError('Please enter a city name.');
      return;
    }

    setLoading(true);
    setError('');
    setWeather(null);

    try {
      // Find city coordinates
      const geoResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`
      );

      if (!geoResponse.ok) {
        throw new Error('Unable to search for this city.');
      }

      const geoData = await geoResponse.json();

      if (!geoData.results || geoData.results.length === 0) {
        throw new Error('City not found. Please try another city.');
      }

      const location = geoData.results[0];

      // Get current weather and tomorrow's forecast
      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&wind_speed_unit=mph&timezone=auto&forecast_days=2`
      );

      if (!weatherResponse.ok) {
        throw new Error('Weather service is currently unavailable.');
      }

      const data = await weatherResponse.json();

      setWeather({
        city: location.name,
        country: location.country,
        current: data.current,
        tomorrow: {
          max: data.daily.temperature_2m_max[1],
          min: data.daily.temperature_2m_min[1],
          code: data.daily.weather_code[1],
        },
      });

    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getCondition = (code) => {
    if (code === 0) return 'Clear sky';
    if ([1, 2, 3].includes(code)) return 'Partly cloudy';
    if ([45, 48].includes(code)) return 'Foggy';
    if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) return 'Rainy';
    if ([71, 73, 75, 77, 85, 86].includes(code)) return 'Snowy';
    if ([95, 96, 99].includes(code)) return 'Thunderstorm';
    return 'Unknown conditions';
  };

  return (
    <div className="app">
      <h1>Weather Now</h1>
      <p>Check the current weather in your city.</p>

      <form onSubmit={searchWeather}>
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Search'}
        </button>
      </form>

      {loading && <p>Loading weather information...</p>}

      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="weather-card">
          <h2>{weather.city}, {weather.country}</h2>
          <h1>{Math.round(weather.current.temperature_2m)}°F</h1>
          <h3>{getCondition(weather.current.weather_code)}</h3>

          <p>Feels like: {weather.current.apparent_temperature}°F</p>
          <p>Humidity: {weather.current.relative_humidity_2m}%</p>
          <p>Wind: {weather.current.wind_speed_10m} mph</p>

          <hr />

          <h3>Tomorrow's Forecast</h3>
          <p>Condition: {getCondition(weather.tomorrow.code)}</p>
          <p>High: {weather.tomorrow.max}°F</p>
          <p>Low: {weather.tomorrow.min}°F</p>
        </div>
      )}
    </div>
  );
}

export default App;
