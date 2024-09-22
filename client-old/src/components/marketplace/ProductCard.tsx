import Image from 'next/image'

interface ProductCardProps {
  title: string
  price: string
  image: any // Or string if you're using a URL
  category: string
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, image, category }) => {
  return (
    <div className="w-[215px] h-[325px] rounded-xl overflow-hidden bg-white">
      {/* Image Container */}
      <div className="w-full h-[60%] relative rounded-xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      
      {/* Product Details */}
      <div className="w-full h-full flex flex-col  pt-6 pl-4">
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
  )
}

export default ProductCard
