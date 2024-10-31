import React from 'react';

// The 'Main' component takes 'booksData' as a prop and renders a list of books.
export default function Book({ book }) {
  return (
    <li key={book.id} className="book">
        <img src={book.image_uri} alt={`Cover for ${book.title}`} />
        <div>
        <h3>{book.title}</h3>
        <p>Year: {book.year}</p>
        <p>Rating: {book.rating}</p>
        </div>
    </li>
  );
}
