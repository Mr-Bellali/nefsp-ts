import { useState } from 'react';

interface SearchAndFilterProps {
  onAddProduct: () => void;
}

const SearchAndFilter: React.FC<SearchAndFilterProps> = ({ onAddProduct }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="flex justify-between items-center mb-6">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search"
        className="border rounded-md py-2 px-4 w-1/3"
      />
      <div className="space-x-2">
        <button className="px-4 py-2 bg-red-500 text-white rounded-md">Drinks</button>
        <button className="px-4 py-2 bg-gray-200 text-black rounded-md">Chips</button>
        <button className="px-4 py-2 bg-gray-200 text-black rounded-md">Groceries</button>
      </div>
      <button onClick={onAddProduct} className="px-4 py-2 bg-red-500 text-white rounded-md">
        + Product
      </button>
    </div>
  );
};

export default SearchAndFilter;
