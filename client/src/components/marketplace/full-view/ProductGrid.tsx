import React from 'react'
import ProductCard from '../ProductCard'


const ProductGrid = ({ products }: any) => {
  return (
    <div className="grid grid-cols-5 gap-6 p-4">
      {products.map((product, index) => (
        <ProductCard
          id = {product.idProduct}
          key={index}
          title={product.productName}
          price={product.sellingPrice}
          image={product.productImgs[0].imageUrl}
          category={product.foodCategory.categoryName}
        />
      ))}
    </div>
  )
}

export default ProductGrid
