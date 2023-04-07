import React from "react";

function FilterCharacter({characters}) {
  //filter the one with less comics than 25
  const lessPopular = characters.filter((character) => character.comics.available < 25);
  const popular = characters.filter((character) => character.comics.available >= 25);


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






























































