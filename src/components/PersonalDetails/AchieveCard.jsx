import React from 'react';
import { useState, useEffect } from "react";
import doremon from '../../assests/doremon.jpg'
const AchieveCard = ({section}) => {

const [isAchieved, setIsAchieved] = useState(section.progress === 100);


  return (
    <div className={`mb-20 ${isAchieved ? "" : "opacity-40 select-none"}`}>
    <div className="w-full border-2 border-black/10 bg-white relative flex flex-column rounded-lg shadow-xl p-0 max-w-sm mx-auto">
      <div className="flex justify-center mb-4 absolute top-0 left-0 right-0 transform -translate-y-1/2">
        <div className="relative">
          <div className={`bg-[url(${doremon})] bg-center bg-no-repeat rounded-full w-[100px] h-[100px]`}>
           
          </div>
          <div className={`absolute bg-[#35c80e] rounded-full bottom-0 right-0 ${isAchieved ? "" : "hidden"}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                stroke="white"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="mt-16 text-center text-gray-700 mb-2">
        <span className="text-s uppercase font-bold text-gray-500">Bạn đã nhận được huy hiệu</span>
        <h2 className="text-3xl font-bold m-3 mb-0 mt-2 font-sans">{section.title}</h2>
      </div>
      <div className="text-center text-3xl font-bold text-purple-700">+{section.bonus}</div>
      <div className="text-center text-lg text-gray-500">bonus points</div>
      <div className="h-[180px] rounded-bl-lg rounded-br-lg bg-gradient-to-r from-purple-500 to-blue-500 p-0">
        <div className="bg-white rounded-b-[100%] pt-6">
        </div>
        <h3 className="text-2xl font-bold text-white text-center mt-4">Xin chúc mừng!</h3>
        <p className="text-3sm m-4 text-white text-center mt-2">
        {section.message}
        </p>
      </div>
      {/* <button className="mt-4 bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded
        w-1/2 h-10 text-xs left-0 right-0 bottom-0 absolute transform translate-x-1/2 translate-y-1/2 -bottom-1.25 shadow
      ">
        More detail
      </button> */}
    </div>
    </div>

  );
};

export default AchieveCard;