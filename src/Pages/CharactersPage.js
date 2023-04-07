import React from "react";
import CharactersCard from "../CharacterCard";
import Popup from "reactjs-popup";

const CharactersPage = ({ children }) => {
  return (
    <div className="Characters">
      {children}
      <CharactersCard />
    </div>
  );
};

export default CharactersPage;
