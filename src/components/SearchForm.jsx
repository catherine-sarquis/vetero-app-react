import React, { useState } from "react";

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
      <input
        type="text"
        placeholder="Enter a city"
        value={inputCity}
        onChange={handleInputChange}
      />
      <input type="submit" value="Search" />
    </form>
  );
}
