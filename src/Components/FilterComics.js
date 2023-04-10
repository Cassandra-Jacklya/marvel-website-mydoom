import React from "react";


function FilterComics({ onFilterChange }) {
  return (
    <div className="comic-filter-container">
      <button className="comic-filter-btn" onClick={() => onFilterChange("All")}>
        All
      </button>
      <button className="comic-filter-btn" onClick={() => onFilterChange("Popular")}>
        Popular
      </button>
      <button
        className="comic-filter-btn"
        onClick={() => onFilterChange("The Avengers")}
      >
        The Avengers
      </button>

      <button
        className="comic-filter-btn"
        onClick={() => onFilterChange("Star Wars")}
      >
        Star Wars
      </button>
    </div>
  );
}

export default FilterComics;