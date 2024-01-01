import React, { useState } from "react";
import "./topmenu.css";

interface DropdownProps {
  options: string[];
  onSelect: (selectedOption: string) => void;
}

const SearchBar: React.FC<DropdownProps> = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
  };
  return (
    <div className="secondnav">
      <div>
        <p>Created By</p>
        <select
          value={selectedOption || undefined}
          onChange={(e) => handleSelect(e.target.value)}
        >
          <option value="" >
            please enter
          </option>
          {options.map((option , index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div>
      <p>Tracking ID</p>
        <select
          value={selectedOption || undefined}
          onChange={(e) => handleSelect(e.target.value)}
        >
          <option value="" >
          please enter
          </option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div>
      <p>Vua ID</p>
        <select
          value={selectedOption || undefined}
          onChange={(e) => handleSelect(e.target.value)}
        >
          <option value="" >
          please enter
          </option>
          {options.map((option,index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="secondnavbuttons">
        <button className="search">Search</button>
        <button className="reset">Reset</button>
      </div>
    </div>
  );
};

export default SearchBar;
