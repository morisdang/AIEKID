// import HTMLFlipBook from 'react-pageflip';
import './scss/hambo.scss'
import React, { useState, useEffect, useRef } from "react";
import Book from './book';
import Chatcontainer from './chatcontainer';
import BookList from '../components/bookList';
import {booksData} from '../components/helper/bookdata' 
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import pdf from '../pdf/sample_3.pdf';
import {pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function valueLabelFormat(value) {
    return `Trang ${value}`;
  }
export  function SliderPage({setCurrentPage, numPages}) {

    const marks = [
        {
          value: 1,
          label: 'Trang 1',
        },
        {
          value: Math.floor(numPages / 4),
          label: `Trang ${Math.floor(numPages / 4)}`,
        },
        {
          value: Math.floor((numPages * 3) / 4),
          label: `Trang ${Math.floor((numPages * 3) / 4)}`,
        },
        {
          value: numPages,
          label: `Trang ${numPages} `,
        },
      ];
    
  return (
    <Box sx={{ height:"90%", padding: "5px 20px" }}>
      <Slider
        sx={{
            '& input[type="range"]': {
              WebkitAppearance: 'slider-vertical',
            },
          }}
          min={1}
          step={1}
          max={numPages}
          onChange={(e, v) => setCurrentPage(v)}
          getAriaValueText={valueLabelFormat}
          valueLabelFormat={valueLabelFormat}
        orientation="vertical"  
        marks={marks}
      defaultValue={1} aria-label="Default" valueLabelDisplay="auto" />
    </Box>
  );
}
function Hambo(){
    const [booksList, setBooksList] = useState(booksData);
    const [closeToolip, setCloseToolip] = useState(false); 
    const [choiceList, setChoiceList] = useState([]); 
    const [currentBook, setCurrentBook] = useState({}); 
    const [closeBook, setCloseBook] = useState(true); 
    const [currentPage, setCurrentPage] = useState(1); 
    const [currentPDF, setCurrentPDF] = useState(pdf); 
    const [numPages, setNumPages] = useState(null);

    const fetchPdf = async (pdf_file) => {
        try {
          const loadingTask = pdfjs.getDocument(pdf_file);
          const pdf = await loadingTask.promise;
          setNumPages(pdf.numPages);
        } catch (err) {
          setNumPages(0);
        }
      };
    const importBook = (book_id) => {
        if (book_id) {
            const bookData = booksList.filter(book => book.book_id === book_id);
            setCloseBook(false)
            console.log(bookData)

            if (bookData.length > 0) {
                setCurrentBook(bookData[0]); 
                setCurrentPage(1)
                fetchPdf(currentPDF)
            }
        }
    }

    // console.log("currentBook", currentBook)
    return (
      <div
        className='hambo'
        // onClick={handlePageClick}
      >
        <div  className={`hamboBook-toolip-wrapper ${closeToolip ? "hidden" : ""}`}>
            <div className={`hambo-booklib-wrapper ${closeBook ? "" : "hidden"}`}>
                <h3>Thư viện của bạn</h3>
                <BookList importBook={importBook} setChoiceListParent={setChoiceList}  multichoice={false} booksData={booksList}/>
                {/* <Stack direction="row" spacing={2}>

                </Stack> */}
            </div>
            
            <div style={{flex:'0.5'}} className={`book-wrapper flex ${closeBook ? "hidden" :""}`}>
                <Book currentPDF={currentPDF} currentPage={currentPage} setCloseBook={setCloseBook} currentBook={currentBook}/>

                <div className='flex flex-column items-center justify-start gap-3'>
                        {/* <input type="text" /> */}
                        <Fab color="primary" aria-label="add"
                            onClick={setCloseBook} sx={{
                                    width: '40px',
                                    height: '40px'  
                            }}
                            >
                                <RemoveCircleIcon/>
                        </Fab>
                        <SliderPage setCurrentPage={setCurrentPage} numPages={numPages}/>
                </div>
            </div>
        </div>

        <Chatcontainer setCloseToolip={setCloseToolip}/>

      </div>
    );
  };
  
  export default Hambo;
