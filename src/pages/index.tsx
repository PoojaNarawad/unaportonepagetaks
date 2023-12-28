// import React from "react";

// export default function HomePage() {
//   return (
//     <div>
     
//     </div>
//   );
// }


import React from 'react';
import SearchBar from '@/Components/TopMenu/SecondNav';

const Index: React.FC = () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];

  const handleSelect = (selectedOption: string) => {
    console.log(`Selected option: ${selectedOption}`);
  };

  return (
    <div>
      <h1>Hello UmiJS with TypeScript!</h1>
      <SearchBar options={options} onSelect={handleSelect} />
    </div>
  );
};

export default Index;