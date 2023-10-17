import React from "react";
import './style.scss';
import defaultImg from '../../assets/thumbnail-default.jpg';
import { useNavigate } from "react-router-dom";
import Card from "../ui/Card";

interface BooksListProps {
  booksData: any;
	handleLoadMore: (...args: any[]) => any;
}

const BooksList: React.FC<BooksListProps> = ({ booksData, handleLoadMore }) => {
	const navigate = useNavigate();

	//navigates the card to the details page
	const handleClick = (itemData: any) =>{
		if(itemData.selfLink){
			navigate(`/bookDetail/${itemData.id}`);
		}
	};

  return (
    <>
      {booksData.length > 0 ? (
				<>
					<section className="books-list-container">
						{booksData.map((item: any) => {
							return (
								<Card cardData={item} key={item.id} handleClick={handleClick} />
							);
						})}
					</section>
					{ booksData.length >= 20 && (
							<div className="load-more-cnt">
								<button className="load-more-btn" onClick={handleLoadMore}>Load More</button>
							</div>
						)
					}
				</>
      ) : (
        <div className="no-books-cnt">
					<p className="no-books-text">No results</p>
				</div>
      )}
    </>
  );
};

export default BooksList;
