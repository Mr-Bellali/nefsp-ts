"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/store/Navbar";
import SearchAndFilter from "@/components/store/SearchAndFilter";
import ProductGrid from "@/components/store/ProductGrid";
import Modal from "@/components/store/Modal";
import { useAppDispatch } from "@/redux/hook";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { sellerGetProductServices } from "@/services/SellerService";

const Store = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useAppDispatch();
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [products, setProducts] = useState([]);
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);


  useEffect(() => {
    const tokenFromCookie = Cookies.get("token");

    if (tokenFromCookie) {
      try {
        const decodedToken: any = jwtDecode(tokenFromCookie);
        console.log(decodedToken);
        const currentTime = Math.floor(Date.now() / 1000);

        console.log("Decoded token:", decodedToken);
        console.log(
          "Current time:",
          currentTime,
          "Token expiration:",
          decodedToken.exp
        );

        if (decodedToken.exp && decodedToken.exp > currentTime) {
          dispatch({ type: "SET_AUTHENTICATED", payload: true });
          setIsAuthenticated(true);
        } else {
          console.log("Token expired.");
          dispatch({ type: "SET_AUTHENTICATED", payload: false });
          Cookies.remove("token");
          router.push("/login");
        }
      } catch (error) {
        console.error("Invalid token:", error);
        dispatch({ type: "SET_AUTHENTICATED", payload: false });
        Cookies.remove("token");
        router.push("/login");
      }
    } else {
      dispatch({ type: "SET_AUTHENTICATED", payload: false });
      router.push("/login");
    }
  }, [dispatch, router]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await sellerGetProductServices(currentPage);
        if (productsData && productsData.length > 0) {
          setProducts(productsData);
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, [currentPage]);

  const handleAddProductClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="px-32 min-h-screen bg-gray-100">
      <Navbar />
      <main className="py-6">
        <SearchAndFilter onAddProduct={handleAddProductClick} />
        <ProductGrid products={products} />
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
      </main>
      <div>
        <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}>
          Previous Page
        </button>
        <button onClick={() => setCurrentPage((prev) => prev + 1)}>
          Next Page
        </button>
      </div>
    </div>
  );
};

export default Store;
