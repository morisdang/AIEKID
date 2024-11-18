// SwiperPagination.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import './scss/SwiperPagination.scss'


const SwiperPagination = ({swiperData, slidesPerView=3, delay=3000, pagination=true}) => {
  return (
    <Swiper

      spaceBetween={30} 
      slidesPerView={slidesPerView} 
      autoplay={{ 
        delay: delay,
        disableOnInteraction: false 
      }}
      pagination={{ clickable: pagination }} 
      navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
      modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
      effect="coverflow"
      coverflowEffect={{
        rotate: 10,
        stretch: 0,
        depth: 120,
        modifier: 1,
        slideShadows: true,
      }}
    >
      {swiperData && swiperData.map((item, i) => (
        <SwiperSlide>
        <img className='h-100'  src={item.imageShow} alt={`Slide ${i}`} />
        </SwiperSlide>
      ))}
        
    </Swiper>
  );
};

export default SwiperPagination;
