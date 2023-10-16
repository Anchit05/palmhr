import React, { useState } from "react";
import "./style.scss";

interface InputProps {
  handleBooksSearch: (...args: any[]) => any;
}

const InputCnt: React.FC<InputProps> = ({ handleBooksSearch }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleSearch = (value: string) => {
    handleBooksSearch(value);
  };

  const handleChange = (event: any) => {
    let value: string = event.target.value;
    setInputValue(value);
    console.log("value: ", value);
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
      />
      <i
        className="fas fa-search search-icon"
        aria-hidden="true"
        onClick={() => handleSearch(inputValue)}
      ></i>
    </div>
  );
};

export default InputCnt;
