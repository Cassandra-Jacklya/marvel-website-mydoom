import React, { useState } from "react";

//accepts search as input(props)
function SearchCharacter(search) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    search.onSearchTermChange(event.target.value);
  };

  return (
    <div className="character-search">
      <input
        type="text"
        placeholder="Search characters"
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default SearchCharacter;
