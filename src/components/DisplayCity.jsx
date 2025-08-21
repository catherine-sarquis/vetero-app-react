import Corner from "../assets/corner.svg";
import "./DisplayCity.css";

export default function DisplayCity({ city }) {
  return (
    <div className="city-name">
      <img className="corner-top-left" src={Corner} alt="corner decoration" />
      <h1 id="city">{city}</h1>
      <img
        className="corner-bottom-right"
        src={Corner}
        alt="corner decoration"
      />
    </div>
  );
}
