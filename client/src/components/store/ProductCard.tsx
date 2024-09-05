interface ProductCardProps {
  name: string;
  price: number;
  category: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, category, image }) => {
  return (
    <div className="bg-white shadow rounded-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
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
