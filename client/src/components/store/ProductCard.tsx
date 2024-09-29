"use client";
import { useRouter } from 'next/navigation'

interface ProductCardProps {
  id: number; // Add product ID prop
  name: string;
  price: number;
  category: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, category, image }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/store/${id}`); // Navigate to the dynamic product page
  };

  return (
    <div
      className="bg-white shadow rounded-md overflow-hidden hover:shadow-lg transition-shadow duration-200 cursor-pointer"
      onClick={handleClick} // Add click handler
    >
      <img src={image} alt={name} className="w-full h-32 object-cover" />
      <div className="p-4">
        <div className="text-lg font-semibold">{price} DH</div>
        <div className="text-sm text-gray-600">{name}</div>
        <div className="text-xs text-gray-500">{category}</div>
      </div>
    </div>
  );
};

export default ProductCard;
