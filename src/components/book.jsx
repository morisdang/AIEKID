import React from 'react';

// The 'Main' component takes 'booksData' as a prop and renders a list of books.
export default function Book({ book }) {

  return (
    <li key={book.id} className="book">
       <div
        className="relative bg-cover bg-center bg-no-repeat w-[220px] h-[300px]"
        style={{
            backgroundImage: `url(${book.image_uri})`,
            backgroundSize: 'cover', // Ensures the image covers the entire div
            backgroundPosition: 'center', // Centers the image
        }}
        aria-label={`Cover for ${book.title}`}
        ></div>
        {/* <div>
        <h3>{book.title}</h3>
        <p>Year: {book.year}</p>
        <p>Rating: {book.rating}</p>
        </div> */}
    </li>
  );
}
