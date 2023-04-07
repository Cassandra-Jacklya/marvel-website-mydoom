import React from "react";
import Popup from "reactjs-popup";
import CharacterCard from "../Components/CharacterCard";
import NavBar from "../Components/NavBar";

const CharactersPage = ({ children }) => {
  return (
    <div className="Characters">
      {children}
      <CharacterCard />
    </div>
  );
};

export default CharactersPage;
