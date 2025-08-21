import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import axios from "axios";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  let city = "London";

  useEffect(() => {
    const apiKey = "c3ae07f646b904bce9d83oat69c5764d";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then((response) => {
      setWeatherData(response.data);
    });
  }, [city]);

  if (!weatherData) {
    return <div>Loading weather... </div>;
  }

  return (
    <>
      <Header data={weatherData} />
    </>
  );
}

export default App;
