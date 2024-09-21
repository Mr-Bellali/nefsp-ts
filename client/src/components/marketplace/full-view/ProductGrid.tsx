import React from 'react'
import ProductCard from '../ProductCard'
import Sardina from '@/assets/sardina.jpg'
// Dummy data for products
const products = Array.from({ length: 30 }, (_, index) => ({
  title: `Product ${index + 1}`,
  price: `$${(Math.random() * 100 + 1).toFixed(2)}`,
  image: Sardina , // You can replace this with actual image URLs
  category: 'Category',
}))

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-5 gap-6 p-4">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          title={product.title}
          price={product.price}
          image={product.image}
          category={product.category}
        />
      ))}
    </div>
  )
}

export default ProductGrid
