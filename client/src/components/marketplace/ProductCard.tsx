"use client"
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import { useRouter } from 'next/navigation'

interface ProductCardProps {
  id: string;
  title: string;
  price: string;
  image: any; 
  category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({id, title, price, image, category }) => {
  const router = useRouter();
  console.log("inside the product card: ", id)

  const handleClick = () => {
    router.push(`/marketplace/products/${id}`); // Ensure product id is pushed correctly
  };

  return (
    <div className="w-[215px] h-[325px] rounded-xl overflow-hidden bg-white relative hover:cursor-pointer" onClick={handleClick}>
      <div className="w-full h-[60%] relative rounded-xl overflow-hidden border">
        <img src={image} alt={title} />
        {/* Heart Icon Button */}
        {/* <IconButton
          sx={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            backgroundColor: 'white',
            ':hover': {
              backgroundColor: '#f54d42',
              color: 'white',
            },
          }}
        >
          <FavoriteIcon sx={{ color: '#000000', ':hover': { color: '#ffffff' }}} />
        </IconButton> */}
      </div>
      
      {/* Product Details */}
      <div className="w-full h-full flex flex-col pt-6 pl-4">
        <div>
          <h3 className="font-semibold text-lg">{price}</h3>
        </div>
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
        </div>
        <div>
          <p className="font-light">{category}</p>
        </div>
      </div>
    </div>
  );
};


export default ProductCard;
