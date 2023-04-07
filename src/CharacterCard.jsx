//without search
// import React, { useState, useEffect } from "react";

// function CharacterCard() {
//   const [characters, setCharacters] = useState([]);

//   useEffect(() => {
//     fetch(
//       "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=066201a806fa0b522452f78b3d9c61ec&hash=9234926490e1d5b8b9276d78f8c2f00f"
//     )
//       .then((response) => response.json())
//       //access the character data that is nested inside an object data
//       .then((data) => setCharacters(data.data.results))
//       //to catch any error
//       .catch((error) => console.error(error));
//   }, []);

//   return (
//     <div className="character-container">
//         {/* maping each character from the character array */}
//       {characters.map((character) => (
//         <div className="" key={character.id}>
//           <h2>{character.name}</h2>
//           <img
//           //potrait uncanny sets the dimension of the pic
//             src={`${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension}`}alt={character.name} />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default CharacterCard;

//search

// import React, { useState, useEffect } from "react";
// import SearchCharacter from "./SearchCharacter";
// import FilterCharacter from "./FilterCharacter";

// function CharacterCard() {
//     //to store the characters
//   const [characters, setCharacters] = useState([]);
//   //to store filtered characters
//   const [filteredCharacters, setFilteredCharacters] = useState([]);
//   //we are setting to false because it is assumed as found
//   const [characterNotFound, setCharacterNotFound] = useState(false);

//   useEffect(() => {
//     fetch(
//       "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=066201a806fa0b522452f78b3d9c61ec&hash=9234926490e1d5b8b9276d78f8c2f00f"
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         setCharacters(data.data.results);
//         setFilteredCharacters(data.data.results);
//       })
//       .catch((error) => console.error(error));
//   }, []);

//   const handleSearchTermChange = (searchTerm) => {
//     const filtered = characters.filter((character) =>
//     //needs to be changed to lowercase so it can match correctly
//       character.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredCharacters(filtered);
//     //if the length in filtered array is 0, it means that character does not exist
//     setCharacterNotFound(filtered.length === 0);
//   };

//   return (
//     <div>
//       <SearchCharacter onSearchTermChange={handleSearchTermChange} />
//       <div>
//                 <FilterCharacter/>
//             </div>
//       {characterNotFound ? (
//         <div className="character-not-found">Character not found</div>
//       ) : (
//         <div className="character-container">
//           {filteredCharacters.map((character) => (
//             <div className="character-card" key={character.id}>
//               <h2>{character.name}</h2>
//               {/* potrait_uncanny is the size of pic to be shown */}
//               <img className="character-card-pic"
//                 src={`${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension}`}
//                 alt={character.name}
//               />
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default CharacterCard;

// import React, { useState, useEffect } from "react";
// import SearchCharacter from "./SearchCharacter";
// import FilterCharacter from "./FilterCharacter";
// import PopupWindow from "./Components/PopupWindow";

// function CharacterCard() {
//   //to store the characters
//   const [characters, setCharacters] = useState([]);
//   //to store filtered characters
//   const [filteredCharacters, setFilteredCharacters] = useState([]);
//   //we are setting to false because it is assumed as found
//   const [characterNotFound, setCharacterNotFound] = useState(false);

//   useEffect(() => {
//     fetch(
//       "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=066201a806fa0b522452f78b3d9c61ec&hash=9234926490e1d5b8b9276d78f8c2f00f"
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         setCharacters(data.data.results);
//         setFilteredCharacters(data.data.results);
//       })
//       .catch((error) => console.error(error));
//   }, []);

//   const handleSearchTermChange = (searchTerm) => {
//     const filtered = characters.filter((character) =>
//       //needs to be changed to lowercase so it can match correctly
//       character.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredCharacters(filtered);
//     //if the length in filtered array is 0, it means that character does not exist
//     setCharacterNotFound(filtered.length === 0);
//   };

//   return (
//     <div>
//       <SearchCharacter onSearchTermChange={handleSearchTermChange} />
//       <div>
//         <FilterCharacter />
//       </div>
//       {characterNotFound ? (
//         <div className="character-not-found">Character not found</div>
//       ) : (
//         <div className="character-container" >
//           {filteredCharacters.map((character) => (
//             <div className="character-card" key={character.id}>
//               <h2>{character.name}</h2>
//               {/* potrait_uncanny is the size of pic to be shown */}
//               <img
//                 className="character-card-pic"
//                 src={`${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension}`}
//                 alt={character.name}
//               />
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default CharacterCard;

// with new hash
// https://gateway.marvel.com/v1/public/characters?ts=1&apikey=066201a806fa0b522452f78b3d9c61ec&hash=9234926490e1d5b8b9276d78f8c2f00f

// import { useState, useEffect } from 'react';

// function CharacterList() {
//   const [characters, setCharacters] = useState([]);
//   const [filteredCharacters, setFilteredCharacters] = useState({});

//   useEffect(() => {
//     fetchCharactersFromApi().then((data) => {
//       setCharacters(data.results);
//     });
//   }, []);

//   useEffect(() => {
//     const filtered = filterCharacters(characters);
//     setFilteredCharacters(filtered);
//   }, [characters]);

//   return (
//     <div>
//       <h2>Popular Characters</h2>
//       <ul>
//         {filteredCharacters.popular && filteredCharacters.popular.map((character) => (
//           <li key={character.id}>{character.name}</li>
//         ))}
//       </ul>
//       <h2>Less Popular Characters</h2>
//       <ul>
//         {filteredCharacters.lessPopular && filteredCharacters.lessPopular.map((character) => (
//           <li key={character.id}>{character.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import SearchCharacter from "./SearchCharacter";
import FilterCharacter from "./FilterCharacter";
//import PopupWindow from "./Components/PopupWindow";
import Popup from "reactjs-popup";
import HeroDetails from "./Components/HeroDetails";

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
        <FilterCharacter />
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
      )}
    </div>
  );
}

export default CharacterCard;
