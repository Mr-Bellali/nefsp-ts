'use client';

import React, { useEffect, useState } from 'react';
import { getProductService } from '@/services/CommonServices'; // Import your service
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface ProductViewerProps {
  productId: string; 
}

const ProductViewer = ({ productId }: ProductViewerProps) => {
  const [product, setProduct] = useState<any>(null);
  const [stockQuantity, setStockQuantity] = useState<number>(0);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [selectedQuantity, setSelectedQuantity] = useState<number>(1); // Track selected quantity
  const [isInWishlist, setIsInWishlist] = useState<boolean>(false); // State to track wishlist status

  // Fetch product data
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (productId) { // Check if productId is defined
          const product = await getProductService(productId); // Fetch the product using productId
          if (product) {
            setProduct(product);
            setStockQuantity(product.stockQte);
            setSelectedImage(
              product.productImgs && product.productImgs.length > 0
                ? product.productImgs[0].imageUrl
                : '/fallback-image.jpg'
            );
          }
        }
      } catch (error) {
        console.error('Failed to fetch product:', error);
      }
    };

    fetchProduct();

    // Check if the product is already in the wishlist
    const wishlistItems = JSON.parse(localStorage.getItem('wishlist') || '[]');
    const itemInWishlist = wishlistItems.find((item: any) => item.id === productId);
    setIsInWishlist(!!itemInWishlist); // Update state based on whether the product is in the wishlist

  }, [productId]); // Re-fetch if productId changes

  // Function to handle adding the product to the cart
  const addToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]'); // Get existing cart items

    // Find if the product is already in the cart
    const existingProductIndex = cartItems.findIndex((item: any) => item.id === productId);
    
    if (existingProductIndex !== -1) {
      // If the product exists, update the quantity
      cartItems[existingProductIndex].quantity += selectedQuantity;
    } else {
      // If the product doesn't exist, add a new item
      cartItems.push({
        id: productId,
        name: product.productName,
        price: product.sellingPrice,
        quantity: selectedQuantity,
      });
    }

    // Save updated cart back to local storage
    localStorage.setItem('cart', JSON.stringify(cartItems));
    alert(`${selectedQuantity} ${product.productName}(s) added to cart!`); // Optional: Show a confirmation
  };

  // Function to handle adding/removing from wishlist
  const toggleWishlist = () => {
    const wishlistItems = JSON.parse(localStorage.getItem('wishlist') || '[]');

    if (isInWishlist) {
      // If the product is in the wishlist, remove it
      const updatedWishlist = wishlistItems.filter((item: any) => item.id !== productId);
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      setIsInWishlist(false); // Update state
    } else {
      // If the product is not in the wishlist, add it
      wishlistItems.push({
        id: productId,
        name: product.productName,
        price: product.sellingPrice,
      });
      localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
      setIsInWishlist(true); // Update state
    }
  };

  if (!product) {
    return <div>Loading...</div>; // Handle loading state
  }

  return (
    <div>
      {/* Render product information */}
      <div className="my-4 grid items-start grid-cols-1 lg:grid-cols-2 gap-6 max-lg:gap-12">
        <div className="w-full lg:sticky top-0 sm:flex gap-2">
          <div className="sm:space-y-3 w-16 max-sm:w-12 max-sm:flex max-sm:mb-4 max-sm:gap-4">
            {product.productImgs.map((img: any) => (
              <img
                key={img.idImage}
                src={img.imageUrl}
                alt={`Thumbnail ${img.idImage}`}
                className={`w-full cursor-pointer rounded outline-none ${selectedImage === img.imageUrl ? 'border-2 border-red-500' : ''}`} // Removed default border
                onClick={() => setSelectedImage(img.imageUrl)}
              />
            ))}
          </div>
          <img
            src={selectedImage}
            alt={product.productName}
            className="w-full h-96 rounded-md object-cover" // Fixed height for the large image
          />
        </div>

        <div className="w-full h-full flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-800">{product.productName}</h2>
          
          <div className="flex space-x-2 mt-4">
            {[...Array(4)].map((_, idx) => (
              <svg
                key={idx}
                className="w-5 fill-red-500"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            ))}
            <svg
              className="w-5 fill-[#CED5D8]"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <p className="text-gray-500">(150 Reviews)</p>
            <p>|</p>
            <p className="text-cyan-500">{stockQuantity > 0 ? 'In stock' : 'Out of stock'}</p>
          </div>

          <div className="flex flex-wrap gap-4 mt-4">
            <p className="text-gray-800 text-xl font-bold">{product.sellingPrice} DH</p>
            <p className="text-gray-400 text-xl line-through">{product.originalPrice} DH</p>
          </div>

          <div className="mt-8">
            <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-800">
              <li>{product.productDescription}</li>
              <li>Expiration date: {new Date(product.expirationDate).toLocaleDateString()}</li>
            </ul>
          </div>

          <div className="mt-8">
            <p className="font-bold pb-2">
              Store:<span className="ml-4 font-medium text-gray-600">Hanout abdelkader jilali</span>
            </p>
          </div>

          <div className="w-full h-[2px] bg-gray-500 mt-8 mb-2"></div>

          <div className="flex items-center justify-center">
            <div className="w-1/3 mr-3">
              <div className="flex items-center justify-between p-1 border rounded h-full">
                <button
                  type="button"
                  onClick={() => setSelectedQuantity(selectedQuantity > 1 ? selectedQuantity - 1 : 1)} // Prevent decrementing below 1
                  className="px-1 py-1 rounded bg-[#F54D42]"
                >
                  <RemoveRoundedIcon sx={{ color: '#ffffff', fontSize: 30 }} />
                </button>
                <span>{selectedQuantity}</span> {/* This shows the selected quantity */}
                <button
                  type="button"
                  onClick={() => {
                    if (selectedQuantity < stockQuantity) { // Prevent incrementing above stock quantity
                      setSelectedQuantity(selectedQuantity + 1);
                    }
                  }}
                  className="px-1 py-1 rounded bg-blue-500"
                >
                  <AddRoundedIcon sx={{ color: '#ffffff', fontSize: 30 }} />
                </button>
              </div>
            </div>
            <button
              type="button"
              onClick={addToCart} // Attach the addToCart function
              className="w-full px-6 py-3 bg-red-500 hover:bg-red-700 text-white text-sm font-semibold rounded-md h-full"
            >
              Add to cart
            </button>
            <button
              type="button"
              onClick={toggleWishlist} // Attach the toggleWishlist function
              className="ml-5 px-4 py-2 border border-gray-300 rounded-md h-full"
            >
              {isInWishlist ? (
                <FavoriteIcon sx={{ color: 'red', fontSize: 30 }} />
              ) : (
                <FavoriteBorderOutlinedIcon sx={{ color: '#000000', fontSize: 30 }} />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductViewer;
