import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBookDetails } from "../../services/apis";
import defaultImage from "../../assets/thumbnail-default.jpg";
import "./style.scss";

function Details() {
  const { bookId } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [bookDetailsData, setBookDetailsData] = useState<any>({});

	/**
	 * fetching book details
	 */
  async function fetchBooksDetails() {
    try {
      const response = await getBookDetails(bookId);
      response?.data?.id && setBookDetailsData(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  }

  useEffect(() => {
    fetchBooksDetails();
  }, []);

	/**
	 * returns image element according to the data
	 */
  const getImage = () => {
    const thumbnail =
      bookDetailsData?.volumeInfo?.imageLinks?.smallThumbnail ||
      bookDetailsData?.volumeInfo?.imageLinks?.thumbnail;
    return (
      <img className="book-image" src={thumbnail || defaultImage} alt="" />
    );
  };

	/**
	 * 
	 * @param description 
	 * @returns description for the book, have used dangerouslySetInnerHTML
	 * because sometimes, the description is returned as html data
	 */
	const getBookDescription = (description: string) => {
		return (
				<span dangerouslySetInnerHTML={{ __html: description }}></span>
		);
	}
	

  if (isLoading) {
    return (
      <div className="loading-cnt">
        <i className="fas fa-solid fa-spinner fa-spin"></i>
      </div>
    );
  }

  return (
    <section className="book-details-cnt">
      <h1 className="title-text">
        <span className="title">{bookDetailsData?.volumeInfo?.title}: </span>
        <span className="subtitle">
          {bookDetailsData?.volumeInfo?.subtitle}
        </span>
      </h1>
      <div className="book-image-heading-cnt">
        <div className="book-image-cnt">{getImage()}</div>
        <div className="book-heading-info">
          <h3>{bookDetailsData?.volumeInfo?.authors}</h3>
          <p className="publisher">
            {bookDetailsData?.volumeInfo?.publisher}
            <span>
              {", "}
              {bookDetailsData?.volumeInfo?.publishedDate}
            </span>
            {bookDetailsData?.volumeInfo?.pageCount && (
              <span>
                {" - "}
                {bookDetailsData?.volumeInfo?.pageCount} pages{" "}
              </span>
            )}
          </p>
          {bookDetailsData?.volumeInfo?.previewLink && (
            <a href={bookDetailsData?.volumeInfo?.previewLink}>
              <button className="more-button">More</button>
            </a>
          )}
        </div>
      </div>
      <div className="description-cnt">
        {getBookDescription(bookDetailsData?.volumeInfo?.description)}
      </div>
    </section>
  );
}

export default Details;
