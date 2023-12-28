import React, { useState } from "react";
import "./topmenu.css";

interface DropdownProps {
  options: string[] | undefined;
  onSelect: (selectedOption: string) => void;
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
        <select
          value={selectedOption || undefined}
          onChange={(e) => handleSelect(e.target.value)}
        >
          <option value="" disabled>
            Select an option
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default SearchBar;
