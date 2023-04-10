import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import BoxDetails from './BoxDetails';
import hulkPath from "../../Images/Transparent/hulk.png";
import bWPath from "../../Images/Transparent/black-widow.png";
import captainPath from "../../Images/Transparent/captain-america.png";
import thorPath from "../../Images/Transparent/thor2.png";
import ironPath from "../../Images/Transparent/ironman.png";

function Avengers() {
    const [show, setShow] = useState(false);
    const overallDeets = "Earth's Mightiest Heroes stand as the planet's first line of defense against the most powerful threats in the universe."
    const ironman = {
        name: "Iron Man",
        bio:  "Genius. Billionaire. Philanthropist. Tony Stark's confidence is only matched by his high-flying abilities as the hero called Iron Man.",
        story: "Tony Stark is the wealthy son of industrialist and weapons manufacturer Howard Stark and his wife, Maria. Tony grew up a genius with a brilliant mind for technology and inventions and, naturally, followed in his father’s footsteps, inheriting Stark Industries upon his parents’ untimely death. Tony designed many weapons of war for Stark Industries, far beyond what any other company was creating, while living the lifestyle of a bon vivant.",
        quote: "“YOU CAN TAKE AWAY MY HOUSE, ALL MY TRICKS AND TOYS. ONE THING YOU CAN'T TAKE AWAY...I AM IRON MAN.”",
        path: ironPath,
        visible: false,
    }

    const blackWidow = {
        name: "Black Widow",
        bio: "Despite super spy Natasha Romanoff’s checkered past, she’s become one of S.H.I.E.L.D.’s most deadly assassins and a frequent member of the Avengers.",
        story: "Natasha Romanoff was trained from a young age to cultivate a very specific set of skills in a Russian facility called the Red Room. There she honed the skills that would turn her into a human warrior who continues to stand shoulder-to-shoulder with super soldiers, Asgardians and people in armored suits. However, she eventually eschewed her KGB masters, switched allegiances and began working for the good guys.",
        quote: "“AT SOME POINT WE ALL HAVE TO CHOOSE: BETWEEN WHO THE WORLD WANTS YOU TO BE, AND WHO YOU ARE.”",
        path: bWPath,
        visible: false,
        swipe: false,
    }

    const thor = {
        name: "Thor",
        bio: "The son of Odin uses his mighty abilities as the God of Thunder to protect his home Asgard and planet Earth alike.",
        story: "Thor is the God of Thunder, a member of the race known as the Asgardians, a group of humanoid beings from the pocket dimension of Asgard, the Realm Eternal. Thor is the son of Odin, the All-Father and King of Asgard. He was worshiped by the humans known as Vikings and became part of Norse mythology. Armed with his enchanted Uru hammer Mjolnir, which helps him to channel his godly energies, he became the mightiest warrior in the Ten Realms.",
        quote: "“I CHOOSE TO RUN TOWARDS MY PROBLEMS AND NOT AWAY FROM THEM. BECAUSE THAT'S WHAT HEROES DO.”",
        path: thorPath,
        visible: false,
        swipe: false,
    }

    const hulk = {
        name: "Hulk",
        bio: "Dr. Bruce Banner lives a life caught between the soft-spoken scientist he’s always been and the uncontrollable green monster powered by his rage.",
        story: "Dr. Bruce Banner lives a quiet life, until he saves the life of teenager Rick Jones from a gamma bomb explosion. After this, the mild-mannered scientist transforms into a powerful being called the Hulk whenever he gets angry.",
        quote: "“I JUST GET SO ANGRY ALL THE TIME! HULK ALWAYS... ALWAYS ANGRY.”",
        path: hulkPath,
        visible: false,
        swipe: false,
    }

    const captainAmerica = {
        name: "Captain America",
        bio: "Recipient of the Super Soldier serum, World War II hero Steve Rogers fights for American ideals as one of the world’s mightiest heroes and the leader of the Avengers.",
        story: "As Captain America, Steve Rogers carries a nearly indestructible shield fashioned from the rare Wakandan metal known as vibranium. Designed and crafted by genius inventor Howard Stark during World War II, the shield is a perfectly balanced instrument capable of withstanding intense stress and damage, yet also able to be thrown as an offensive weapon that rebounds back to its owner. Rogers maintains the shield as an almost constant companion after it was recovered from the wreckage of the Red Skull’s airplane, as it has become a symbol of strength to all those who recognize Captain America as the country’s defender.",
        quote: "“I CAN DO THIS ALL DAY.”",
        path: captainPath,
        visible: false,
        swipe: false,
    }
    
    const avengers = [blackWidow, captainAmerica, hulk, ironman, thor];

    const handleClick = (a) => {
      a.visible = !a.visible;
      setShow(!show);
    }

    return (
      <div className="container">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {avengers.map((a, key) => 
            <div>
              <SwiperSlide key={key}>
                <img src={a.path} alt="slide_image" className='avengers-overlay-text' onClick={() => handleClick(a)}/>
                <div className="middle">
                  <div className="overlay-text-opacity">
                  {show ? <BoxDetails name={a.name} bio={a.bio} story={a.story} quote={a.quote} /> : <div>Swipe? Click?</div>}
                  </div>
                </div>
              </SwiperSlide>
            </div>
          )}
          <div className="slider-controller">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
          </div>
        </Swiper>
      </div>
    );

}

export default Avengers;