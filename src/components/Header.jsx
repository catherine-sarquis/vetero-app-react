import FormatDate from "./FormatDate";
import "./Header.css";

export default function Header({ data }) {
  // format the date

  const dateObject = new Date(data.time * 1000);
  const formattedDate = FormatDate(dateObject);

  const dateString = `${formattedDate.day}, ${formattedDate.dayNo}${formattedDate.suffix} ${formattedDate.month} ${formattedDate.year}`;

  return (
    <header>
      <div className="title-bar-container">
        <div className="title-bar-left">
          <div className="title">VETERO APP</div>
        </div>
        <div className="today-date" id="today-date">
          {dateString}
        </div>
      </div>
    </header>
  );
}
