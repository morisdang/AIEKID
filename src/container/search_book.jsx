// import HTMLFlipBook from 'react-pageflip';
import { Document, Page, pdfjs } from 'react-pdf';
import './scss/search_book.scss'
import React, { useState, useEffect, useRef } from "react";
import SearchBox from '../components/searchbox';

import { top100Films, level_data } from '../components/helper/top100Films'
function SearchBook({ onTypeChange, onLevelChange, setPremiumBook }) {


    useEffect(() => {
        //         type
        // label
        // level
    }, []);
    return (
        <div className='container-header-search-book'>
            <div
                className='SearchBook'
            // onClick={handlePageClick}
            >
                <SearchBox searchChange={onTypeChange} options={top100Films} label='Type...' />
                <SearchBox searchChange={onLevelChange} options={level_data} label='Level...' />
            </div>
            <div className='selected-book-container'>
                <button onClick={() => setPremiumBook(0)} className="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300">
                    <span className="btn-book-rank relative px-5 py-2.5 transition-all ease-in duration-75   rounded-md group-hover:bg-opacity-0">
                        Sách của tôi
                    </span>
                </button>

                <button onClick={() => setPremiumBook(1)} className="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200">
                    <span className="btn-book-rank relative px-5 py-2.5 transition-all ease-in duration-75   rounded-md group-hover:bg-opacity-0">
                        Sách Premium
                    </span>
                </button>
            </div>
        </div>

    );
};

export default SearchBook;
