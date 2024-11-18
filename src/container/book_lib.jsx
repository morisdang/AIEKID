import { Document, Page, pdfjs } from 'react-pdf';
import './scss/book_lib.scss';
import React, { useState, useEffect } from "react";
import BookList from '../components/bookList';
import { booksData } from '../components/helper/bookdata'; 
import SearchBook from './search_book';
import { top100Films, level_data } from '../components/helper/top100Films';

function BookLib() {
    const [filteredBooks, setFilteredBooks] = useState(booksData);
    const [selectedBookCodes, setSelectedBookCodes] = useState(top100Films);
    const [selectedLevels, setSelectedLevels] = useState(level_data);
    const [premiumBook, setPremiumBook] = useState(0);
    const [showBookList, setShowBookList] = useState([]);

    const filterBookPremium = (combinedBooks, premiumBook)=> {
        let book = combinedBooks.filter(book => book.premium === premiumBook);
        setShowBookList(book);
    }


    useEffect(() => {
        let combinedBooks = []; 
        
        selectedBookCodes.forEach(code => {
            const matchingBooks = booksData.filter(book => book.book_code === code.value);
            combinedBooks = [...combinedBooks, ...matchingBooks];
        });

        const levelValues = selectedLevels.map(level => level.value);
        combinedBooks = combinedBooks.filter(book => levelValues.includes(book.level));

        setFilteredBooks(combinedBooks)
        filterBookPremium(combinedBooks, premiumBook);
    }, [selectedBookCodes, selectedLevels, premiumBook]);

    const handleTypeChange = (e, selectedList) => {
        setSelectedBookCodes(selectedList.length > 0 ? selectedList : top100Films);
    };

    const handleLevelChange = (e, selectedList) => {
        setSelectedLevels(selectedList.length > 0 ? selectedList : level_data);
    };
    return (
        <div className="BookLibContainer flex-1 container">
            <SearchBook setPremiumBook={setPremiumBook} onTypeChange={handleTypeChange} onLevelChange={handleLevelChange} />
            <BookList multichoice={true} booksData={showBookList} />
        </div>
    );
}

export default BookLib;