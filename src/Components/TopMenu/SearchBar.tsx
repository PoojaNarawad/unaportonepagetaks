import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');


  return (
    <div>
      <div   className='searchbar'>
        <div className='searchicon'>
        <AiOutlineSearch size={15} />
        </div>
        <input
          type="text"
          placeholder="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ flex: 1}}
        />
      </div>
    </div>
  );
};

export default SearchBar;