import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import DisplayCity from "./components/DisplayCity";
import DisplayTodayData from "./components/DisplayTodayData";
import axios from "axios";
import FiveDayForecast from "./components/FiveDayForecast";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [city, setCity] = useState("London");

  useEffect(() => {
    if (!city) return;

    const apiKey = "c3ae07f646b904bce9d83oat69c5764d";
    const currentWeatherUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    const forecastUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios
      .all([axios.get(currentWeatherUrl), axios.get(forecastUrl)])
      .then(
        axios.spread((currentWeatherResponse, forecastResponse) => {
          setWeatherData(currentWeatherResponse.data);
          setForecastData(forecastResponse.data);
        })
      )
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, [city]);

  function handleSearch(newCity) {
    setCity(newCity);
  }

  if (!weatherData || !forecastData) {
    return <div>Loading weather for {city}...</div>;
  }

  console.log(weatherData);

  return (
    <>
      <Header data={weatherData} />
      <SearchForm onSearch={handleSearch} />
      <DisplayCity city={city} />
      <DisplayTodayData data={weatherData} />
      <FiveDayForecast data={forecastData} />
    </>
  );
}

export default App;
