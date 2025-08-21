import { useState } from "react";
import axios from "axios";

export default function SearchForm() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function formatWeather(response) {
    const data = response.data;
    setWeatherData({
      temperature: data.temperature.current,
      description: data.condition.description,
      humidity: data.temperature.humidity,
      wind: data.wind.speed,
      icon: data.condition.icon_url,
    });
  }

  function getWeatherinCity(city) {
    const url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=c3ae07f646b904bce9d83oat69c5764d`;
    axios.get(url).then(formatWeather);
  }

  function search(event) {
    event.preventDefault();
    getWeatherinCity(city);
  }

  return (
    <>
      <form onSubmit={search}>
        <input
          type="text"
          name="searchInput"
          id="searchInput"
          placeholder="Enter a city"
          value={city}
          onChange={handleCityChange}
        />
        <input type="submit" value="search" />
      </form>

      {weatherData && (
        <ul>
          <li>Temperature: {weatherData.temperature}°C</li>
          <li>Description: {weatherData.description}</li>
          <li>Humidity: {weatherData.humidity}%</li>
          <li>Wind: {weatherData.wind} km/h</li>
          <li>
            <img src={weatherData.icon} alt={weatherData.description} />
          </li>
        </ul>
      )}
    </>
  );
}
