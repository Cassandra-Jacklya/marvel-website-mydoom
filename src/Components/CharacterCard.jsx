import React, { useState, useEffect } from "react";
import SearchCharacter from "../SearchCharacter";
import FilterCharacter from "../FilterCharacter";
import Popup from "reactjs-popup";
import HeroDetails from "./HeroDetails";

function CharacterCard() {
  //to store the characters
  const [characters, setCharacters] = useState([]);
  //to store filtered characters
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  //we are setting to false because it is assumed as found
  const [characterNotFound, setCharacterNotFound] = useState(false);
  //additional state for filtering
  const [, setFilterType] = useState("All");
  //setting visibility to limit character showing
  const [visible,setVisible] = useState(50);

  const loadMore = () => {
    setVisible(visible + 20);
  }

  useEffect(() => {
    fetch(
      "https://gateway.marvel.com/v1/public/characters?offset=0&limit=100&ts=1&apikey=066201a806fa0b522452f78b3d9c61ec&hash=9234926490e1d5b8b9276d78f8c2f00f"
    )
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.data.results);
        setFilteredCharacters(data.data.results);
      })
      .catch((error) => console.error(error));
  }, []);

  //function to handle filtering
  const handleFilterChange = (filter) => {
    //set filterType state based on button click
    setFilterType(filter);

    switch (filter) {
      case "All":
        setFilteredCharacters(characters);
        break;
      case "Popular":
        const popularCharacters = characters.filter(
          (character) => character.comics.available >= 25
        );
        setFilteredCharacters(popularCharacters);
        break;
      case "Less Popular":
        const lessPopularCharacters = characters.filter(
          (character) => character.comics.available < 25
        );
        setFilteredCharacters(lessPopularCharacters);
        break;
      default:
        setFilteredCharacters(characters);
        break;
    }
  };

 

  const handleSearchTermChange = (searchTerm) => {
    const filtered = characters.filter((character) =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCharacters(filtered);
    setCharacterNotFound(filtered.length === 0);
  };

  return (
    <div>
      <SearchCharacter onSearchTermChange={handleSearchTermChange} />
      <div>
        <FilterCharacter onFilterChange={handleFilterChange} />
      </div>
      {characterNotFound ? (
        <div className="character-not-found">Character not found</div>
      ) : (

        <Popup
          trigger={
            <div className="character-container">
              {filteredCharacters.slice(0,visible).map((character) => (
                <div className="character-card" key={character.id}>
                  <h2 className="character-name">{character.name}</h2>
                  {/* potrait_uncanny is the size of pic to be shown */}
                  <img
                    className="character-card-pic"
                    src={`${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension}`}
                    alt={character.name}
                  />
                </div>
              ))}
              
            </div>
          }
          modal
          nested
        >
          {(close) => (
            <div className="modal">
              <button className="close" onClick={close}>
                &times;
              </button>
              {/* <div className="header"> Modal Title </div> */}
              <div className="content">
                <HeroDetails />
              </div>
              <div className="actions"></div>
            </div>
          )}
          </Popup>      
        )}

<div className="load-more"><button className="load-btn" onClick={loadMore}>Load More</button></div>
      

      
    </div>
  );
}

export default CharacterCard;