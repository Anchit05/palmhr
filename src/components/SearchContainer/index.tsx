import React, { useState } from "react";
import './style.scss';
import InputCnt from "../ui/InputCnt";
import { handleSearch } from "../../services/apis";
import { useBookContext } from "../../context/BookContext";

function SearchContainer() {
	// const [booksData, setBooksData] = useState<any>();
	const { setBooks } = useBookContext();

	async function handleBooksSearch(searchValue:string) {
		try {
			const response = await handleSearch(searchValue);
			// Handle the response data here
			console.log(response.data);
			response?.data?.items?.length && setBooks(response.data.items);
		} catch (error) {
			// Handle the error here
			console.error(error);
		}
	}

  return (
    <section className="search-section">
      <div className="bg-image">
        <div className="search-cnt">
          <h1>Find Your Book</h1>
          <InputCnt handleBooksSearch={handleBooksSearch} />
        </div>
      </div>
    </section>
  );
}

export default SearchContainer;
