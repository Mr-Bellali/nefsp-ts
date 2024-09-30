import Sardina from "@/assets/sardina.jpg";
import ProductCard from "./ProductCard";

const categories = ["Drinks", "Chips", "Groceries", "Fish"];

const MostSelled = () => {
  return (
    <section className="w-full flex flex-col ">
      <div className="flex flex-row justify-between items-center ">
        <div className="h-full flex justify-center items-center">
          <h1 className="text-xl font-bold">Most Selled Food</h1>
        </div>
        <div className="flex space-x-2">
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
      </div>
      <div className="mt-8 flex flex-row justify-between overflow-auto">
        <div>
          <ProductCard
            title="Pringles"
            price="25.00 DH"
            image={Sardina}
            category="Chips"
          />
        </div>
        <div>
          <ProductCard
            title="Pringles"
            price="25.00 DH"
            image={Sardina}
            category="Chips"
          />
        </div>
        <div>
          <ProductCard
            title="Pringles"
            price="25.00 DH"
            image={Sardina}
            category="Chips"
          />
        </div>
        <div>
          <ProductCard
            title="Pringles"
            price="25.00 DH"
            image={Sardina}
            category="Chips"
          />
        </div>
        <div>
          <ProductCard
            title="Pringles"
            price="25.00 DH"
            image={Sardina}
            category="Chips"
          />
        </div>
        
      </div>
      <div className="w-full flex justify-end">
          <p className="text-xl text-red-500 underline"><a href="/marketplace/products">see more</a></p>
        </div>
    </section>
  );
};

export default MostSelled;
