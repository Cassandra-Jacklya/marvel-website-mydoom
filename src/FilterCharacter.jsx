import React from "react";

function FilterCharacter({ onFilterChange }) {
  return (
    <div className="filter-container">
      <button className="filter-btn" onClick={() => onFilterChange("All")}>
        All
      </button>
      <button className="filter-btn" onClick={() => onFilterChange("Popular")}>
        Popular
      </button>
      <button
        className="filter-btn"
        onClick={() => onFilterChange("Less Popular")}
      >
        Less Popular
      </button>
    </div>
  );
}

export default FilterCharacter;






























































