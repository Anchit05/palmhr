import React, { useState } from "react";
import './style.scss';
import InputCnt from "../ui/InputCnt";
import { handleSearch } from "../../services/apis";
import { useBookContext } from "../../context/BookContext";

function SearchContainer() {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [filterCriteria, setFilterCriteria] = useState('');
	const { setBooks } = useBookContext();

	async function handleBooksSearch(searchValue:string) {
		try {
			setIsLoading(true);
			const response = await handleSearch(searchValue, filterCriteria);
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
					<div className="filter-options-cnt">
						<label className="white">Filter Options: </label>
						<select
							className=""
							value={filterCriteria}
							onChange={(e) => setFilterCriteria(e.target.value)}
						>
							<option value="">Select Filter</option>
							<option value="intitle">Title</option>
							<option value="inauthor">Author</option>
							<option value="inpublisher">Publisher</option>
							<option value="subject">Subject</option>
							<option value="isbn">ISBN</option>
							<option value="lccn">LCCN</option>
							<option value="oclc">OCLC</option>
						</select>
					</div>
        </div>
      </div>
    </section>
  );
}

export default SearchContainer;
