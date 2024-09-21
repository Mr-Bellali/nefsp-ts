import Image from 'next/image';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';

interface ProductCardProps {
  title: string;
  price: string;
  image: any; 
  category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, image, category }) => {
  return (
    <div className="w-[215px] h-[325px] rounded-xl overflow-hidden bg-white relative">
      <div className="w-full h-[60%] relative rounded-xl overflow-hidden border">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
        />

        {/* Heart Icon Button */}
        <IconButton
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
          <FavoriteIcon sx={{
             color: '#000000',
             ':hover':{
              color: '#ffffff'
             }
             }} />
        </IconButton>
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
}

export default ProductCard;
