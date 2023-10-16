import React, {createContext} from "react";
import './style.scss';
import SearchContainer from "../../components/SearchContainer";
import BooksList from "../../components/BooksList";
import { useBookContext } from "../../context/BookContext";

const Home = () => {
  const { books } = useBookContext();
  return (
    <div className="home-page-cnt">
      <SearchContainer />
      <BooksList booksData={books} />
    </div>
  )
};

export default Home;
