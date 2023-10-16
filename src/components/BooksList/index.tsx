import React from "react";
import { useBookContext } from "../../context/BookContext";

interface BooksListProps{
	booksData: any;
}

const BooksList: React.FC<BooksListProps> = ({ booksData }) => {
	console.log("books : ", booksData);
  return (
		<>
			{ booksData.length > 0 ? (
					<div className="books-list-container">

					</div>
				) : (
					<div className="no-books-cnt">No Books</div>
				)
			}
		</>
	);
}

export default BooksList;
