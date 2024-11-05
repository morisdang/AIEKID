// EventList.jsx
import { Card, CardContent, Typography, Grid, Button } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Carousel } from 'antd';
import { styled } from '@mui/material/styles';
import './scss/EventList.scss'

const EventList = ({ explore_mode, eventList }) => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  const updateSlidesToShow = () => {
		const width = window.innerWidth;
		if (width < 752) {
			setSlidesToShow(1);
		} else if (width < 992) {
			setSlidesToShow(2);
		} else {
			setSlidesToShow(3);
		}

	};

	useEffect(() => {
		updateSlidesToShow();
		window.addEventListener('resize', updateSlidesToShow);
		return () => {
			window.removeEventListener('resize', updateSlidesToShow);
		};
	}, []);

  return (
    <div className="py-8 container mt-2 mb-4 shadow-lg rounded-lg cursor-pointer">
      <div className="max-w-screen-xl mx-auto text-left mb-6 flex justify-between items-center">
        <h1 className="text-blue-500 text-3xl font-bold title-detail">{eventList.group_name}</h1>
        <div className="text-right">

          <button className="relative text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm py-2.5 text-center me-2 mb-2">
            <span className="relative px-2 py-2.5 transition-all ease-in duration-75  rounded-md group-hover:bg-opacity-0">
              {explore_mode ? "Xem thêm các chủ đề" : "Xem toàn bộ các sự kiện"}
            </span>
          </button>
        </div>
      </div>
      {/* <Swiper
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        spaceBetween={30}
        slidesPerView={4}
        slidesPerGroup={2}
        modules={[Navigation, Pagination]}
      > */}


        <Carousel
          dots={true}
          infinite
          slidesToShow={slidesToShow}
          slidesToScroll={1}
          autoplay
          >
          {eventList.children && eventList.children.map((item, i) => (
            // <SwiperSlide>

            // </SwiperSlide>

            <div onClick={() => (window.location.href = explore_mode ? `/explore/${item.event_id}` : `/event/${item.event_id}/detail`)} className='w-fit'>

              {/* <Link to={`/event/${item.event_id}/detail`} style={{ textDecoration: 'none' }}> */}
              <Card sx={{ maxWidth: 340, margin: '10px' }}>
                <div className="event-item max-w-sm shadow-lghover:shadow-xl bg-white rounded-lg  overflow-hidden transform transition duration-500 hover:scale-105">
                  <div className="relative">
                    <img className="w-full h-48 object-cover" src={item.image_uri} alt="Hành trình với sao Hỏa" />
                    {/* <div className="absolute top-0 left-0 bg-black bg-opacity-50 px-4 py-2 text-white">
            <i className="fas fa-map-marker-alt"></i>
            <span className="ml-2 text-sm">{item.address}</span>
            </div> */}
                    {explore_mode ? "" : (
                      <div className="absolute top-0 right-0  font-bold text-white px-4 py-2 rounded-bl-lg bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-2  focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                        {item.bonus_point_from} - {item.bonus_point_to} 💰
                      </div>
                    )}


                  </div>

                  {explore_mode ?
                    (
                      <div className="p-2 text-center">
                        <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800'>{item.title}</h2>
                      </div>

                    )
                    :
                    (
                      <div className="p-4 event-content">
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                          <span className="mr-2"><i className="far fa-calendar-alt mr-2"></i>{item.event_date}</span>
                          <span><i className="far fa-clock"></i> {item.time_from} to {item.time_to}</span>
                        </div>

                        <h2 className="text-xl font-semibold text-gray-800 title-detail">{item.title}</h2>
                        <p className="text-gray-600 mb-3">{item.description}</p>

                        <div className="flex space-x-2 text-sm text-gray-500">
                          {item.hashtags && item.hashtags.map((tag, i) => (
                            <span className="px-2 py-1 bg-gray-200 rounded">#{tag}</span>
                          ))}

                        </div>
                      </div>
                    )}


                  {/* <div className="flex justify-between items-center p-4 border-t border-gray-200">
            <button className="text-pink-500 hover:text-pink-700">
            <i className="fas fa-share-alt"></i> Share
            </button>
            <button onClick={() => handleSave(item.event_id)} className={`${saveEvents.includes(item.event_id) ? "text-blue-500 hover:text-blue-700" : ""}`}>
            <i className="fa-solid fa-bookmark"></i> Save
            </button>

            <button onClick={() => handleLike(item.event_id)} className="text-red-500 hover:text-red-700">
            <i className="fas fa-heart"></i> 120+
            </button>
        </div> */}
                </div>

              </Card>
              {/* </Link> */}
            </div>
          ))}
        </Carousel>


      {/* <div className="swiper-button-next"></div>
    <div className="swiper-button-prev"></div> */}
      {/* </Swiper> */}

    </div>
  );
};

export default EventList;
