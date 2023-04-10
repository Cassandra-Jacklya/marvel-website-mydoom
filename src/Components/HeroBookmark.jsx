import React, { useEffect, useState } from "react";
import { db } from "../Firebase";
import { set, ref, onValue, remove } from "@firebase/database";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function HeroBookmark() {
  const [bookmarkArr, setbookmarkArr] = useState([]);

  //read data from firebase
  useEffect(() => {
    getFavourites();
  }, []);

  const getFavourites = () => {
    const t = new Promise((resolve) => {
      onValue(ref(db), (snapshot) => {
        setbookmarkArr([]);
        const data = snapshot.val();
        if (data !== null) {
          Object.values(data).map((hero) => {
            setbookmarkArr((oldArray) => [...oldArray, hero]);
            return resolve(bookmarkArr);
          });
        }
      });
    });
    return t;
  };

  //deletes the data in the db when the x is clicked on the image
  const handleBookmarkDelete = async (hero) => {
    remove(ref(db, `/${hero.heroID}`));
  };

  //logging the array of bookmarked heroes
  console.log(bookmarkArr);

  return (
    <div className="bookmark-container">
      {bookmarkArr.map((hero) => (
        <React.Fragment key={hero.uuid}>
          <img
            src={hero.heroImage}
            alt={hero.id}
            className="bookmark-hero-image"
          />
          <div className="overlay-bookmarkDeleteBtn">
            <FontAwesomeIcon
              icon={faXmark}
              className="icon-deletebtn"
              onClick={() => handleBookmarkDelete(hero)}
            />
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default HeroBookmark;
