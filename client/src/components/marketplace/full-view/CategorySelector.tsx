const categories = ["Drinks", "Chips", "Groceries", "Fish"];

const CategorySelector = () => {
  return (

      <div className="flex space-x-2 ">
        {categories.map((category, index) => (
          <label key={index} className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="category"
              value={category}
              className="hidden peer"
            />
            <span className="px-4 py-2 rounded-full border border-gray-300 peer-checked:bg-blue-500 peer-checked:text-white transition-all">
              {category}
            </span>
          </label>
        ))}
      </div>
  );
};

export default CategorySelector;
