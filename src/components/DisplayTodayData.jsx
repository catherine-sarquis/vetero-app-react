import "./DisplayTodayData.css";

export default function DisplayTodayData({ data }) {
  return (
    <div className="weather-today">
      <div className="weather-description">
        <p id="description">{data.condition.description}</p>
        <p>
          Humidity:{" "}
          <span id="humidity-percentage">{data.temperature.humidity}</span>
        </p>
        <p>
          Wind speed: <span id="windspeed">{data.wind.speed}</span>{" "}
          <span id="windspeed-unit">kilometres per hour</span>
        </p>
      </div>
      <div className="temp-today">
        <div id="temp-icon">
          <img src={data.condition.icon_url} alt="weather icon"></img>
        </div>
        <span id="temp-today-val">{data.temperature.current}</span>{" "}
        <span id="temp-today-unit">°C</span>
      </div>
    </div>
  );
}
