import React, { useState } from "react";
import './style.scss';

interface DropDownProps {
  updateFilter: (...args: any[]) => any;
}

const DropDown: React.FC<DropDownProps> = ({ updateFilter }) => {
	const [filterCriteria, setFilterCriteria] = useState<string>('');

	const handleChange = (e: any) =>{
		let value = e.target.value;
		setFilterCriteria(value);
		updateFilter(value);
	}

  return (
    <div className="filter-options-cnt">
      <label className="white">Filter Options: </label>
      <select
        className=""
        value={filterCriteria}
        onChange={handleChange}
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
  );
};

export default DropDown;
