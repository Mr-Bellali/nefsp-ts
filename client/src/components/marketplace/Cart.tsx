"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getProductService } from "@/services/CommonServices";

interface CartItem {
  idProduct: string;
  productName: string;
  productImgs: { imageUrl: string }[];
  quantity: number;
  sellingPrice: number;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");

        console.log("Stored Cart:", storedCart); // Check if items are in localStorage

        if (storedCart.length === 0) {
          console.log("Cart is empty"); // Cart is empty
          setLoading(false);
          return;
        }

        const detailedCartItems = await Promise.all(
          storedCart.map(async (item: { idProduct: string; quantity: number }) => {
            if (!item.idProduct) {
              console.error("Missing product ID:", item); // Debugging
              return null;
            }
            try {
              const product = await getProductService(item.idProduct);
              console.log("Fetched product:", product); // Log each fetched product
              return { ...product, quantity: item.quantity };
            } catch (error) {
              console.error(`Error fetching product ${item.idProduct}:`, error);
              return null;
            }
          })
        );

        const validItems = detailedCartItems.filter(Boolean) as CartItem[];
        setCartItems(validItems);

        console.log("Final Cart Items:", validItems); // Check final state
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cart items:", error);
        setLoading(false); // Stop loading even if there's an error
      }
    };

    fetchCartItems();
  }, []);

  const handleRemove = (productId: string) => {
    const updatedCart = cartItems.filter(
      (item) => item.idProduct !== productId
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Use the correct key
  };

  const handleQuantityChange = (productId: string, quantity: number) => {
    const updatedCart = cartItems.map((item) =>
      item.idProduct === productId
        ? { ...item, quantity: item.quantity + quantity }
        : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Use the correct key
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-10">
        <p className="text-xl text-gray-600 mb-4">
          Start shopping and add products to your cart
        </p>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => router.push("/marketplace/products")}
        >
          Go to Marketplace
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="grid lg:grid-cols-3 bg-[#FAFAFA] rounded">
        <div className="lg:col-span-2 p-6 overflow-x-auto">
          <div className="flex gap-2 border-b pb-4">
            <h2 className="text-2xl font-bold text-gray-800 flex-1">
              Shopping Cart
            </h2>
            <h3 className="text-base text-gray-800">
              {cartItems.length} Items
            </h3>
          </div>
          <table className="mt-6 w-full border-collapse divide-y">
            <thead className="whitespace-nowrap text-left">
              <tr>
                <th className="text-base text-gray-800 p-4">Product</th>
                <th className="text-base text-gray-800 p-4">Quantity</th>
                <th className="text-base text-gray-800 p-4">Price</th>
              </tr>
            </thead>
            <tbody className="whitespace-nowrap divide-y">
              {cartItems.map((item) => (
                <tr key={item.idProduct}>
                  <td className="p-4">
                    <div className="flex items-center gap-4 w-max">
                      <div className="h-32 shrink-0">
                        <img
                          src={item.productImgs[0]?.imageUrl || ""}
                          className="w-full h-full object-contain rounded-lg"
                          alt={item.productName}
                        />
                      </div>
                      <div>
                        <p className="text-base font-bold text-gray-800">
                          {item.productName}
                        </p>
                        <button
                          type="button"
                          className="mt-2 font-semibold text-red-400 text-sm"
                          onClick={() => handleRemove(item.idProduct)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex divide-x border w-max rounded-lg overflow-hidden">
                      <button
                        type="button"
                        className="flex items-center justify-center bg-red-500 w-10 h-10 font-semibold"
                        onClick={() => handleQuantityChange(item.idProduct, -1)}
                        disabled={item.quantity === 1}
                      >
                        {/* Minus button SVG */}
                      </button>
                      <button
                        type="button"
                        className="bg-transparent w-10 h-10 font-semibold text-gray-800 text-base"
                      >
                        {item.quantity}
                      </button>
                      <button
                        type="button"
                        className="flex justify-center items-center bg-blue-800 text-white w-10 h-10 font-semibold"
                        onClick={() => handleQuantityChange(item.idProduct, 1)}
                      >
                        {/* Plus button SVG */}
                      </button>
                    </div>
                  </td>
                  <td className="p-4">
                    <h4 className="text-base font-bold text-gray-800">
                      {item.sellingPrice} DH
                    </h4>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-gray-50 p-6 lg:sticky lg:top-0 lg:h-screen lg:border-l-2">
          <h2 className="text-2xl font-bold text-gray-800 border-b pb-4">
            Order Summary
          </h2>
          <ul className="text-gray-800 divide-y mt-6">
            <li className="flex flex-wrap gap-4 text-base py-3">
              Subtotal
              <span className="ml-auto font-bold">
                {cartItems
                  .reduce(
                    (acc, item) => acc + item.sellingPrice * item.quantity,
                    0
                  )
                  .toFixed(2)}{" "}
                DH
              </span>
            </li>
            <li className="flex flex-wrap gap-4 text-base py-3">
              Shipping <span className="ml-auto font-bold">40 DH</span>
            </li>
            <li className="flex flex-wrap gap-4 text-base py-3">
              Tax <span className="ml-auto font-bold">40 DH</span>
            </li>
            <li className="flex flex-wrap gap-4 text-base py-3 font-bold">
              Total{" "}
              <span className="ml-auto">
                {(
                  cartItems.reduce(
                    (acc, item) => acc + item.sellingPrice * item.quantity,
                    0
                  ) +
                  40 +
                  40
                ).toFixed(2)}{" "}
                DH
              </span>
            </li>
          </ul>
          <button
            type="button"
            className="mt-6 text-base px-5 py-2.5 w-full border border-[#F54D42] hover:bg-[#F54D42] text-[#F54D42] font-bold hover:text-white rounded-lg"
            onClick={() => router.push("/marketplace/checkout")}
          >
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
