import React from 'react';
import blackWidow from '../Images/Transparent/black-widow.png';
import captainAmerica from '../Images/Transparent/captain-america.png';
import hulk from '../Images/Transparent/hulk.png';
import ironman from '../Images/Transparent/ironman.png';
import thor from '../Images/Transparent/thor2.png';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

function Avengers() {
    const avengers = [blackWidow, captainAmerica, hulk, ironman, thor];

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
          {avengers.map((a) => 
            <SwiperSlide>
              <img src={a} alt="slide_image" 
              style={{width: '800px', height: '100%',
              objectFit: "contain"}} />
            </SwiperSlide>
          )}
          <div className="slider-controller">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            {/* <div className="swiper-pagination"></div> */}
          </div>
        </Swiper>
      </div>
    );

}

export default Avengers;

