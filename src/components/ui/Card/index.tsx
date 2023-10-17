import React from "react";
import defaultImg from '../../../assets/thumbnail-default.jpg';

interface CardProps {
	cardData: any;
	handleClick: (...args: any[]) => any;
}
const Card: React.FC<CardProps> = ({ cardData, handleClick }) => {
  return (
    <div className="card" onClick={() => handleClick(cardData)} data-testid="card">
      {cardData?.volumeInfo?.imageLinks?.smallThumbnail ? (
        <img src={cardData?.volumeInfo?.imageLinks?.smallThumbnail} alt="" />
      ) : (
        <img className="default-img" src={defaultImg} alt="No Image" />
      )}
      <div className="bottom">
        <h3 className="title">{cardData.volumeInfo.title}</h3>
        {cardData?.saleInfo?.listPrice?.amount ? (
          <p className="amount" data-testid={"amountid"}>
            &#8377;{cardData?.saleInfo?.listPrice?.amount || ""}
          </p>
        ) : (
          <p className="no-price" data-testid={"amountid"}>Not mentioned</p>
        )}
      </div>
    </div>
  );
};

export default Card;
