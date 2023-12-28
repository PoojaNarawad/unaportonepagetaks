import React, { useState } from "react";
import "./topmenu.css";

interface DropdownProps {
  options?: string[] | undefined;
  onSelect?: (selectedOption: string) => void;
}

const SearchBar: React.FC<DropdownProps> = ({ options = [], onSelect }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
  };
  return (
    <div className="searchbar">
      <div>
        <p>Created By</p>
        <select
          value={selectedOption || undefined}
          onChange={(e) => handleSelect(e.target.value)}
        >
          <option value="" >
            please enter
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
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
          {options.map((option) => (
            <option key={option} value={option}>
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
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button className="search">Search</button>
      </div>
      <div>
        <button className="reset">Reset</button>
      </div>
    </div>
  );
};

export default SearchBar;
