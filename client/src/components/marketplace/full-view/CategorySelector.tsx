"use client"

import { useState } from "react";

const CategorySelector = ({ categories }: any) => {
  const [selectedCategory, setSelectedCategory] = useState("All"); // Default to "All"

  const handleCategoryChange = (category: string) => {
    // Toggle selection for "All" category
    if (category === "All") {
      setSelectedCategory(selectedCategory === "All" ? "" : "All"); // Deselect "All"
    } else {
      setSelectedCategory(selectedCategory === category ? "" : category); // Toggle other categories
    }
  };

  return (
    <div className="flex space-x-2 overflow-auto ">
      {/* All category */}
      <label className="flex items-center cursor-pointer">
        <input
          type="radio"
          name="category"
          value="All"
          className="hidden peer"
          checked={selectedCategory === "All"}
          onChange={() => handleCategoryChange("All")}
        />
        <span className="px-4 py-2 rounded-full border border-gray-300 peer-checked:bg-blue-500 peer-checked:text-white transition-all">
          All
        </span>
      </label>

      {/* Other categories */}
      {categories.map((category, index) => (
        <label key={index} className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="category"
            value={category.categoryName}
            className="hidden peer"
            checked={selectedCategory === category.categoryName}
            onChange={() => handleCategoryChange(category.categoryName)}
          />
          <span className="px-4 py-2 rounded-full border border-gray-300 peer-checked:bg-blue-500 peer-checked:text-white transition-all">
            {category.categoryName}
          </span>
        </label>
      ))}
    </div>
  );
};

export default CategorySelector;
