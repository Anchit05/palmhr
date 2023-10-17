import React, { useState } from "react";
import './style.scss';
import InputCnt from "../ui/InputCnt";
import { handleSearch } from "../../services/apis";
import { useBookContext } from "../../context/BookContext";
import DropDown from "../ui/DropDown";

function SearchContainer() {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [filterCriteria, setFilterCriteria] = useState('');
	const { setBooks } = useBookContext();

	/**
	 * fetches the bookslist according to the query params
	 * @param searchValue 
	 */
	async function handleBooksSearch(searchValue:string) {
		try {
			setIsLoading(true);
			const response = await handleSearch(searchValue, filterCriteria);
			response?.data?.items?.length && setBooks(response.data.items);
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
			console.error(error);
			setBooks([]);
		}
	}

  return (
    <section className="search-section">
      <div className="bg-image">
        <div className="search-cnt">
          <h1>Find Your Book</h1>
          <InputCnt handleBooksSearch={handleBooksSearch} isLoading={isLoading} />
					<DropDown updateFilter={setFilterCriteria} />
        </div>
      </div>
    </section>
  );
}

export default SearchContainer;
