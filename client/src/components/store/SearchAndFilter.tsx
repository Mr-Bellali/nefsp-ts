import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

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
      <button onClick={onAddProduct} className="px-4 py-2 bg-red-500 text-white rounded-md">
        <AddIcon /> Product
      </button>
    </div>
  );
};

export default SearchAndFilter;
