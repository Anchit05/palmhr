import React, { createContext } from "react";
import "./style.scss";
import SearchContainer from "../../components/SearchContainer";
import BooksList from "../../components/BooksList";
import { useBookContext } from "../../context/BookContext";
import { handleSearch } from "../../services/apis";

const Home = () => {
  const {
    books,
    startIndex,
    setStartIndex,
    setBooks,
    searchString,
    filterCriteria,
  } = useBookContext();
  const handleLoadMore = async () => {
    let index = books.length;
    const response = await handleSearch(searchString, filterCriteria, index);
    response?.data?.items?.length &&
      setBooks([...books, ...response.data.items]);
    setStartIndex(index);
  };
  return (
    <div className="home-page-cnt">
      <SearchContainer />
      <BooksList booksData={books} handleLoadMore={handleLoadMore} />
    </div>
  );
};

export default Home;
