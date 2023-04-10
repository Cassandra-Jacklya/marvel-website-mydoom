import React, { useEffect, useState } from "react";
import { db } from "../Firebase";
import { set, ref, onValue, remove } from "@firebase/database";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function HeroBookmark() {
  const [bookmarkArr, setbookmarkArr] = useState([]);

  //read data from firebase
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setbookmarkArr([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((hero) => {
          setbookmarkArr((oldArray) => [...oldArray, hero]);
        });
      }
    });
  }, []);

  //deletes the data in the db when the x is clicked on the image
  const handleBookmarkDelete = (hero) => {
    remove(ref(db, `/${hero.uuid}`));
  };

  //logging the array of bookmarked heroes
  console.log(bookmarkArr);

  return (
    <div className="bookmark-container">
      {bookmarkArr.map((hero) => (
        <>
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
        </>
      ))}
    </div>
  );
}

export default HeroBookmark;
