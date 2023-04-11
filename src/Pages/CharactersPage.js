import React from "react";
import Popup from "reactjs-popup";
import CharacterCard from "../Components/Characters/CharacterCard";
import NavBar from "../Components/NavBar";
import { AnimatePresence } from "framer-motion";

const CharactersPage = ({ children }) => {
  return (
    <div className="Characters">
      {children}  
      <CharacterCard />
    </div>
  );
};

export default CharactersPage;
