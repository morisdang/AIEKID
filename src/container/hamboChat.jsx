// import HTMLFlipBook from 'react-pageflip';
import { Document, Page, pdfjs } from 'react-pdf';
import './scss/hompage.scss'
import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hambo from './hambo';
function HamboChat(){

    return (
      <div
        className='hamboChat'
        // onClick={handlePageClick}
      >
            {/* <Routes>
                    <Route path='chat' element={<DrawerCOM component={Hambo}/>} />
                    <Route path='lib' element={<DrawerCOM component={BookLib}/>} />
            </Routes> */}
        {/* <DrawerCOM component={Hambo}/> */}
        
        <Hambo/>
        {/* <div className='flip-chat-interactive'>
        </div> */}

      </div>
    );
  };
  
  export default HamboChat;
