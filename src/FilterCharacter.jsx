import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function FilterCharacter({ onFilterChange }) {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState("All");

  const handleButtonClick = (filterType) => {
    setActiveButton(filterType);
    navigate(onFilterChange(filterType));
  };

  return (
    <div className="filter-container" >
      <button
        className={`filter-btn ${activeButton === "All" ? "active" : ""}`}
        onClick={() => handleButtonClick("All")}
      >
        All
      </button>
      <button
        className={`filter-btn ${activeButton === "Popular" ? "active" : ""}`}
        onClick={() => handleButtonClick("Popular")}
      >
        Popular
      </button>
      <button
        className={`filter-btn ${activeButton === "Less Popular" ? "active" : ""}`}
        onClick={() => handleButtonClick("Less Popular")}
      >
        Less Popular
      </button>
    </div>
  );
}

export default FilterCharacter;
