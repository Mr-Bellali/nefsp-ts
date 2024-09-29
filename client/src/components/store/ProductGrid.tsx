import ProductCard from './ProductCard';

interface Product {
  idProduct: number;
  productName: string;
  originalPrice: number;
  expirationDate: Date;
  sellingPrice: number;
  stockQte: number;
  productDescription: string; 
  foodCategory: {              
    idCategory: number;
    categoryName: string;
  };
  productImgs: {              
    idImage: number;
    imageUrl: string;
    productId: number;
  }[];
}


interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-4 gap-6">
      {products.map(product => (
        <ProductCard
          key={product.idProduct}
          id={product.idProduct}
          name={product.productName}
          price={product.sellingPrice}
          category={product.foodCategory.categoryName}
          image={product.productImgs[0]?.imageUrl}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
