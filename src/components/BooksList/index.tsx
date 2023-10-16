import React from "react";
import './style.scss';
import defaultImg from '../../assets/thumbnail-default.jpg';
import { useNavigate } from "react-router-dom";

interface BooksListProps {
  booksData: any;
}

const BooksList: React.FC<BooksListProps> = ({ booksData }) => {
  console.log("books : ", booksData);
	const navigate = useNavigate();

	const handleClick = () =>{
		navigate("/bookDetail");
	};

  return (
    <>
      {booksData.length > 0 ? (
        <section className="books-list-container">
          {booksData.map((item: any) => {
            // if (thumbnail != undefined && amount != undefined) {
            return (
              <div className="card" key={item.id} onClick={handleClick}>
                {item?.volumeInfo?.imageLinks?.smallThumbnail ? (
                  <img src={item?.volumeInfo?.imageLinks?.smallThumbnail} alt="" />
                ) : (
                  <img className="default-img" src={defaultImg} alt="No Image" />
                )}
                <div className="bottom">
                  <h3 className="title">{item.volumeInfo.title}</h3>
									{ item?.saleInfo?.listPrice?.amount ? (
											<p className="amount">
												&#8377;{item?.saleInfo?.listPrice?.amount || ""}
											</p>
										) : (
											<p className="no-price">
												Not mentioned
											</p>
										)
									}
                </div>
              </div>
            );
            // }
          })}
        </section>
      ) : (
        <div className="no-books-cnt">
					<p className="no-books-text">No results</p>
				</div>
      )}
    </>
  );
};

export default BooksList;
