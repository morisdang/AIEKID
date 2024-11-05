import Book from './book';
import './scss/bookList.scss'
// The 'Main' component takes 'booksData' as a prop and renders a list of books.
import React, { useState, useEffect, useRef } from "react";
export default function BookList({ setChoiceListParent, multichoice, booksData, importBook }) {

const [choiceList, setChoiceList] = useState([]); 
const [currentId, setCurrentId] = useState(''); 
useEffect(() => {
    if (setChoiceListParent){
        setChoiceListParent(choiceList)
    }
}, [choiceList]);

const chooseBook = (e) => {
    const nearestParent = e.target.closest('[value]');
    const value = nearestParent ? nearestParent.getAttribute("value") : null;

    if (value) {
        if (e.detail === 2 && !multichoice) {
            importBook(value) 
        }
        else if (multichoice) {
            setChoiceList((prevList) => 
                prevList.includes(value) 
                    ? prevList.filter(id => id !== value) 
                    : [...prevList, value]
            );
        } else {
            setChoiceList([value]);
        }
        setCurrentId(value);
    }
    
    }

    
  return (
    <div className="box">
    <ul className="books-list">
        {booksData.map(book => (
            <div onClick={chooseBook} value={book.book_id} className={`book-item-wrapper ${choiceList && choiceList.includes(book.book_id) ? "choice" : ""}`}>
                <Book book={book}/>
            </div>
        ))}
    </ul>
    </div>
  );
}
