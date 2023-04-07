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

  useEffect(() => {
    fetch(
      "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=066201a806fa0b522452f78b3d9c61ec&hash=9234926490e1d5b8b9276d78f8c2f00f"
    )
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.data.results);
        setFilteredCharacters(data.data.results);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleSearchTermChange = (searchTerm) => {
    const filtered = characters.filter((character) =>
    //needs to be changed to lowercase so it can match correctly
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCharacters(filtered);
    //if the length in filtered array is 0, it means that character does not exist
    setCharacterNotFound(filtered.length === 0);
  };

  return (
    <div>
      <SearchCharacter onSearchTermChange={handleSearchTermChange} />
      <div>
                <FilterCharacter/>
            </div>    
      {characterNotFound ? (
        <div className="character-not-found">Character not found</div>
      ) : (

        <Popup
          trigger={
            <div className="character-container">
              {filteredCharacters.map((character) => (
                <div className="character-card" key={character.id}>
                  <h2>{character.name}</h2>
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
        // <div className="character-container">
        //   {filteredCharacters.map((character) => (
        //     <div className="character-card" key={character.id}>
        //       <img
        //         className="character-card-pic"
        //         src={`${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension}`}
        //         alt={character.name}
        //       />
              
        //       <h2 className="character-card-name">{character.name}</h2>
        //     </div>
        //   ))}
        // </div>
      )}
    </div>
  );
}

export default CharacterCard;
   
   











