// SwiperPagination.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import './scss/SwiperPagination.scss'


const SwiperPagination = ({swiperData, slidesPerView=3, delay=3000, pagination=true}) => {
  return (
    <Swiper

      spaceBetween={30} // Space between slides
      slidesPerView={slidesPerView} // Show one slide at a time
      autoplay={{ 
        delay: delay, // Delay between slides (in ms)
        disableOnInteraction: false // Continue autoplay after interaction
      }}
      pagination={{ clickable: pagination }} // Enable clickable pagination
      modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
      effect="coverflow"
      coverflowEffect={{
        rotate: 10,
        stretch: 0,
        depth: 120,
        modifier: 1,
        slideShadows: true, // Enable slide shadows
      }}
    >
      {/* Swiper slides */}
      {swiperData && swiperData.map((item, i) => (
        <SwiperSlide>
        <img className='h-100'  src={item.imageShow} alt={`Slide ${i}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperPagination;
