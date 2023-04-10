import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { Rating } from "@mui/material";
import { db } from "../Firebase";
import { uid } from "uid";
import { set, ref } from "@firebase/database";

const HeroDetails = (props) => {
  const [heroItem, setHeroItem] = useState();
  const [bookmarkSelect, setBookmarkSelect] = useState(false);
  const [bookmarkedHero, setBookmarkedHero] = useState();

  const [url, setUrl] = useState(
<<<<<<< HEAD
    `http://gateway.marvel.com/v1/public/characters/${props.characterID}?ts=1&apikey=066201a806fa0b522452f78b3d9c61ec&hash=9234926490e1d5b8b9276d78f8c2f00`
=======
    `http://gateway.marvel.com/v1/public/characters/${props.characterID}?ts=1&apikey=066201a806fa0b522452f78b3d9c61ec&hash=9234926490e1d5b8b9276d78f8c2f00f`
>>>>>>> c81f530351f7523faf11cbca281999cf9a166d0d
  );

  useEffect(() => {
    //fetch() function used to retrieve the API
    const fetch = async () => {
      const response = await axios.get(url);
      setHeroItem(response.data.data.results);
    };
    fetch();
  }, [url]);

  //setBookmarkedHero() sets the bookmarkedHero state with the results from the API
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(url);
      setBookmarkedHero(response.data.data.results);
    };
    fetch();
  }, [url]);

  //function to handle the bookmark icon when it is clicked
  const bookmarkHandler = () => {
    setBookmarkSelect(!bookmarkSelect);
    document.getElementsByClassName("icon");
  };

  //write data to the firebase database
  const writeToDB = () => {
    bookmarkHandler();
    //uuid will be assigned a random uid using the uid()
    const uuid = uid();
    //map out the bookmarkedHero state to access the id, thumbnail
    bookmarkedHero.map((item) => {
      //console.log("here", item);
      const bookmarkHeroID = item.id;

      const bookmarkHeroImg = `${item.thumbnail.path}.${item.thumbnail.extension}`;
      const bookmarkHeroName = item.name;

      set(ref(db, `/${bookmarkHeroID}`), {
        heroID: bookmarkHeroID,
        heroName: bookmarkHeroName,
        bookmarkStatus: !bookmarkSelect,
        uuid,
        heroImage: bookmarkHeroImg,
      });
    });
  };

  return (
    <>
      {heroItem?.map((item) => {
        return (
          <div className="hero-details">
            {/* ISSUE: Warning: Each child in a list should have a unique "key" prop.*/}
            <div className="hero-img">
              {/* $ is used to access the value */}
              <img
                src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                alt={item.name}
                key={item.id}
                className="image"
              />

              <div className="overlay-bookmark">
                <FontAwesomeIcon
                  icon={faBookmark}
                  className="icon-bookmark"
                  // when onClick is clicked {writeToDB} is executed
                  onClick={writeToDB}
                  style={{ color: bookmarkSelect ? "red" : "#eee" }}
                />
              </div>
            </div>

            <div className="hero-information">
              <h1 className="hero-information-name" key={item.id}>
                {item.name}
              </h1>
              <div>
                <h3 className="hero-information-description" key={item.id}>
                  {item.description}
                </h3>
                <div className="rating">
                  <Rating name="simple-controlled" />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default HeroDetails;
