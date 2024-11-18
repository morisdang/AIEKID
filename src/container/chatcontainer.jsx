// import HTMLFlipBook from 'react-pageflip';
import './scss/book.scss'
import React, { useState, useEffect, useRef } from "react";
import Chatbot from '../components/chat';
import { IOSSwitch } from '../components/switch';
function Chatcontainer({setCloseToolip}){
    const [checked, setChecked] = useState(true); 
    
    const handleChange = (e) =>{
        console.log(checked)
        setCloseToolip(checked)
        setChecked(!checked)
    }
    return (
      <div
        className='ChatcontainerContainer'
        // onClick={handlePageClick}
      >
        {/* <div className={`${pdfLoaded ? "" : "hidden"}`}>
            
        </div> */}
        <IOSSwitch checked={checked} onClick={handleChange} sx={{ m: 1 }} defaultChecked />

        <Chatbot/>
      </div>
    );
  };
  
  export default Chatcontainer;
