import FormatDate from "./FormatDate";
import "./FiveDayForecast.css";

export default function FiveDayForecast({ data }) {
  const forecastDays = data.daily;

  return (
    <>
      <h2>Five-day Forecast</h2>
      <div className="next-5-days">
        {forecastDays.slice(1, 6).map(function (day) {
          const dateObject = new Date(day.time * 1000);
          const formattedDate = FormatDate(dateObject);

          return (
            <div className="day" key={day.time}>
              <p>{formattedDate.day}</p>
              <div className="temp-icon">
                <img
                  src={day.condition.icon_url}
                  alt={day.condition.description}
                />
                <p className="forecast-temp">
                  {Math.round(day.temperature.day)}°C
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
