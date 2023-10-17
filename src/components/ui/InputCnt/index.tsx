import React, { useEffect, useState } from "react";
import "./style.scss";

interface InputProps {
  handleBooksSearch: (...args: any[]) => any;
	isLoading: boolean;
	searchVal: string;
}

const InputCnt: React.FC<InputProps> = ({ handleBooksSearch, isLoading, searchVal }) => {
  const [inputValue, setInputValue] = useState<string>(searchVal || "");

  const handleSearch = (value: string) => {
    handleBooksSearch(value);
  };

  const handleChange = (event: any) => {
    let value: string = event.target.value;
    setInputValue(value);
  };

	const handleKeyDown = (event: any) => {
		if (event.key === "Enter") {
      event.preventDefault();
      handleSearch(inputValue);
    }
	}

  return (
    <div className="search">
      <input
        className="search-input"
        placeholder="search a book"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
				value={inputValue}
      />
			{ isLoading ? (
					<i className="fas fa-solid fa-spinner fa-spin loading-icon" data-testid="loading-icon"></i>
				) : (
					<i
						className="fas fa-search search-icon"
						aria-hidden="true"
						data-testid="search-icon"
						onClick={() => handleSearch(inputValue)}
					></i>
				)

			}
    </div>
  );
};

export default InputCnt;
