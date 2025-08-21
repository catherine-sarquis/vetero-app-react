import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import DisplayCity from "./components/DisplayCity";
import axios from "axios";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("London");

  useEffect(() => {
    if (!city) return;

    const apiKey = "c3ae07f646b904bce9d83oat69c5764d";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then((response) => {
      setWeatherData(response.data);
    });
  }, [city]);

  function handleSearch(newCity) {
    setCity(newCity);
  }

  if (!weatherData && city) {
    return <div>Loading weather for {city}...</div>;
  }

  console.log(weatherData);

  return (
    <>
      <Header data={weatherData} />
      <SearchForm onSearch={handleSearch} />
      <DisplayCity city={city} />
    </>
  );
}

export default App;
