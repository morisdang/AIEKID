// import HTMLFlipBook from 'react-pageflip';
import './scss/book.scss'
import React, { useState, useEffect, useRef } from "react";
import FLipBook from '../components/flipbook';
import Box from '@mui/material/Box';


function Book({currentPDF, currentPage, setCloseBook, currentBook}){
    return (
      <div
        className={`BookContainer`}
        // onClick={handlePageClick}
      >
        <Box sx={{ '& > :not(style)': { m: 1, float: 'right' } }}>
            <h4 style={{float: 'left'}}>{currentBook.title || "No title"}</h4>
        </Box>
        <FLipBook currentPDF={currentPDF} currentPage={currentPage}/>

      </div>
    );
  };
  
  export default Book;
