import React from 'react';
import marvel from "../../Images/Scroller/marvel.png";
import blackPanther from "../../Images/Scroller/black-panther.png";
import captain from "../../Images/Scroller/captain.png";
import drDoom from "../../Images/Scroller/drDoom.png";
import groot from "../../Images/Scroller/groot.png";
import spiderman from "../../Images/Scroller/spiderman.png";
import ironman from "../../Images/Scroller/ironman.png";
import wanda from "../../Images/Scroller/wanda.png";

const slides = [
  { url: marvel, title: "marvel" },
  { url: blackPanther, title: "black-panther" },
  { url: captain, title: "captain-america" },
  { url: drDoom, title: "dr-doom" },
  { url: groot, title: "groot" },
  { url: spiderman, title: "spiderman" },
  { url: ironman, title: "ironman" },
  { url: wanda, title: "wanda" },
];

const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  
  const slidesContainerStyles = {
    display: "flex",
    height: "100%",
    transition: "transform ease-out 0.5s",
  };
  
  const ImgScroll = ({ parentWidth }) => {
    const timerRef = React.useRef(null);
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const goToPrevious = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };

    const goToNext = React.useCallback(() => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }, [currentIndex]);
    const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex);
    };
    const getSlideStylesWithBackground = (slideIndex) => ({
      ...slideStyles,
      backgroundImage: `url(${slides[slideIndex].url})`,
      width: `${parentWidth}px`,
    });
    const getSlidesContainerStylesWithWidth = () => ({
      ...slidesContainerStyles,
      width: parentWidth * slides.length,
      transform: `translateX(${-(currentIndex * parentWidth)}px)`,
    });
  
    React.useEffect(() => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => {
        goToNext();
      }, 3000);
  
      return () => clearTimeout(timerRef.current);
    }, [goToNext]);
  
    return (
      <div className="slider-style">
        <div>
          <div onClick={goToPrevious} className="left-arrow-style">
            ❰
          </div>
          <div onClick={goToNext} className="right-arrow-style">
            ❱
          </div>
        </div>
        <div className="slides-contain-overflow">
          <div style={getSlidesContainerStylesWithWidth()}>
            {slides.map((_, slideIndex) => (
              <div
                key={slideIndex}
                style={getSlideStylesWithBackground(slideIndex)}
              ></div>
            ))}
          </div>
        </div>
        <div className="dot-container-styles">
          {slides.map((slide, slideIndex) => (
            <div
              className="dot-style"
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
            >
              ●
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ImgScroll;
  