import React, { useState } from "react";
import './style.scss';
import InputCnt from "../ui/InputCnt";
import { handleSearch } from "../../services/apis";
import { useBookContext } from "../../context/BookContext";

function SearchContainer() {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const { setBooks } = useBookContext();

	async function handleBooksSearch(searchValue:string) {
		try {
			setIsLoading(true);
			const response = await handleSearch(searchValue);
			console.log(response.data);
			response?.data?.items?.length && setBooks(response.data.items);
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
			console.error(error);
		}
	}

  return (
    <section className="search-section">
      <div className="bg-image">
        <div className="search-cnt">
          <h1>Find Your Book</h1>
          <InputCnt handleBooksSearch={handleBooksSearch} isLoading={isLoading} />
        </div>
      </div>
    </section>
  );
}

export default SearchContainer;
