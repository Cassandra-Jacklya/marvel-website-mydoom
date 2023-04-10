import React from "react";
import { useNavigate } from 'react-router-dom';

function FilterCharacter({ onFilterChange }) {

  const navigate = useNavigate();

  return (
    <div className="filter-container">
      <button className="filter-btn" onClick={() => navigate(onFilterChange("All"))}>
        All
      </button>
      <button className="filter-btn" onClick={() => navigate(onFilterChange("Popular"))}>
        Popular
      </button>
      <button
        className="filter-btn"
        onClick={() => navigate(onFilterChange("Less Popular"))}
      >
        Less Popular
      </button>
    </div>
  );
}

export default FilterCharacter;