import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

import teclado from '../assets/img/teclado.webp'
import auriculares from '../assets/img/auriculares.webp'
import altavoces from '../assets/img/altavoces.webp'
import mouse from '../assets/img/mouse.webp'
import microfono from '../assets/img/microfono.webp'


const Slider = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const images = [
        {
          original: teclado,
         
        },
        {
          original: auriculares,
         
        },
        {
          original: microfono,
         
        },
      ];
     
  return (
  

    <div className='slider-main-div'>
        <h2>New Arrivals</h2>
    <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src={teclado} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={microfono} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={auriculares} />
        </SwiperSlide>
        
       
      </Swiper>
  </div>
     
    
  )
}

export default Slider