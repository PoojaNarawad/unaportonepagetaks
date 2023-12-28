import React from 'react';
import SearchBar from '../Components/TopMenu/SearchBar';

const SearchPage: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log('Search query:', query);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
    </div>
  );
};

export default SearchPage;