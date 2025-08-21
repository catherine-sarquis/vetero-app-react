import React, { useState } from "react";
import magnifyingGlass from "../assets/magnifying-glass.svg";
import "./SearchForm.css";

export default function SearchForm({ onSearch }) {
  const [inputCity, setInputCity] = useState("");

  function handleInputChange(event) {
    setInputCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (inputCity.trim()) {
      onSearch(inputCity);
    }

    setInputCity("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-inner-container">
        <input
          className="search"
          type="text"
          placeholder="Enter a city"
          value={inputCity}
          onChange={handleInputChange}
          required
        />
        <button type="submit" className="submit-button-svg">
          <img src={magnifyingGlass} alt="Search" width="25" height="25" />
        </button>
      </div>
    </form>
  );
}
