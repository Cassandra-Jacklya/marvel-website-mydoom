import React, { useState } from "react";

//accepts search as input(props)
const SearchCharacter = (search) => {
  console.log(search, 'search')
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    console.log('onchange')
    setSearchTerm(event.target.value);
    search.onSearchTermChange(event.target.value);
  };

  return (
    <div className="character-search">
      <input
        type="text"
        id="search"
        test
        placeholder="Search characters"
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default SearchCharacter;
