import "./DisplayTodayData.css";

export default function DisplayTodayData({ data }) {
  return (
    <div className="weather-today">
      <div className="weather-description">
        <p id="description">
          {data.condition.description.charAt(0).toUpperCase() +
            data.condition.description.slice(1)}
        </p>
        <p>
          Humidity:{" "}
          <span className="weather-units">{data.temperature.humidity}%</span>
        </p>
        <p>
          Wind speed:{" "}
          <span className="weather-units">{Math.round(data.wind.speed)}</span>
          &nbsp;
          <span className="weather-units">km/hr</span>
        </p>
      </div>
      <div className="temp-today">
        <div id="temp-icon">
          <img src={data.condition.icon_url} alt="weather icon"></img>
        </div>
        <span id="temp-today-val">{Math.round(data.temperature.current)}</span>
        <span id="temp-today-unit">
          <sup>°C</sup>
        </span>
      </div>
    </div>
  );
}
