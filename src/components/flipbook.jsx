// import HTMLFlipBook from 'react-pageflip';
import { Document, Page, pdfjs } from 'react-pdf';
import './scss/flipbook.scss'
import React, { useState, useEffect, useRef } from "react";






function FLipBook({currentPDF, currentPage}){
    const [numPages, setNumPages] = useState(null); 
    const [pageNumber, setPageNumber] = useState(1); 
    const viewerRef = useRef(null); 
    const canvasRef = useRef(null);
    const contextRef = useRef(null);

    const [isDrawing, setIsDrawing] = useState(false);

    const canvasOffSetX = useRef(null);
    const canvasOffSetY = useRef(null);
    const startX = useRef(null);
    const startY = useRef(null);

    const isDrawingRef = useRef(isDrawing); 

    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }
    
    const flip = (action) => {
      if (action === "R" && pageNumber < numPages) {
        setPageNumber((prevPageNumber) => prevPageNumber + 1); 
      } else if (action === "L" && pageNumber > 1) {
        setPageNumber((prevPageNumber) => prevPageNumber - 1); 
      }
      contextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      const canvasOffSet = canvasRef.current.getBoundingClientRect();
      canvasOffSetX.current = canvasOffSet.left;
      canvasOffSetY.current = canvasOffSet.top;
    };
  
    // const handlePageClick = (event) => {
    //   const rect = viewerRef.current.getBoundingClientRect(); 
    //   const x = event.clientX - rect.left; 
    //   const y = event.clientY - rect.top; 
  
    //   console.log(`Clicked on page at X: ${x}, Y: ${y}`);
    // };

    useEffect(() => {
        isDrawingRef.current = isDrawing; 
    }, [isDrawing]);
    const checkCanvas = () => {
        const canvas = document.querySelector('canvas.react-pdf__Page__canvas');
        const parent = document.querySelector('.react-pdf__Page');
        const oldcanvas = document.querySelector('.mycanvas');
        const newCanvas = document.createElement('canvas');
        newCanvas.className = 'mycanvas';
        
        if (canvas && !oldcanvas) {
 
            newCanvas.width = '440';
            newCanvas.height = '612';
            parent.appendChild(newCanvas);
            
            const context = newCanvas.getContext('2d');
            // context.globalAlpha = 0.5;
            context.lineCap = "round";
            context.strokeStyle = "blue";
            context.lineWidth = 3;
            contextRef.current = context;

            const canvasOffSet = canvas.getBoundingClientRect();
            // console.log(canvasOffSet)
            canvasOffSetX.current = canvasOffSet.left;
            canvasOffSetY.current = canvasOffSet.top;

            newCanvas.addEventListener('mousedown', startDrawingRectangle);
            newCanvas.addEventListener('mousemove', drawRectangle);
            newCanvas.addEventListener('mouseup', stopDrawingRectangle);
            newCanvas.addEventListener('mouseleave', stopDrawingRectangle);
            canvasRef.current = newCanvas;

        } else {
            setTimeout(checkCanvas, 100);
        }
    };
    useEffect(() => {
        setTimeout(checkCanvas, 100);

    }, []);

    const startDrawingRectangle = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const canvasOffSet = canvasRef.current.getBoundingClientRect();
        canvasOffSetX.current = canvasOffSet.left;
        canvasOffSetY.current = canvasOffSet.top;
        startX.current = event.clientX - canvasOffSetX.current;
        startY.current = event.clientY - canvasOffSetY.current;

        setIsDrawing(true);
    };

    const drawRectangle = (event) => {
        if (!isDrawingRef.current) return;

        event.preventDefault();
        event.stopPropagation();

        const newMouseX = event.clientX - canvasOffSetX.current;
        const newMouseY = event.clientY - canvasOffSetY.current;

        const rectWidht = newMouseX - startX.current;
        const rectHeight = newMouseY - startY.current;

        contextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

        contextRef.current.strokeRect(startX.current, startY.current, rectWidht, rectHeight);
    };

    const stopDrawingRectangle = () => {
        setIsDrawing(false);
    };

    return (
        <div className='flipbook flex flex-column'>
            <Document
            file={currentPDF}
            onLoadSuccess={onDocumentLoadSuccess}
            // rotate={360}
            >
            <Page width={440} height={612} pageNumber={currentPage} />
            </Document>


        </div>
    );
  };
  
  export default FLipBook;
