"use client"
import Footer from "@/components/Footer";
import CategorySelector from "@/components/marketplace/full-view/CategorySelector";
import PaginationBar from "@/components/marketplace/full-view/PaginationBar";
import ProductGrid from "@/components/marketplace/full-view/ProductGrid";
import Header from "@/components/marketplace/Header";
import SearchBar from "@/components/marketplace/SearchBar";
import { getCategoriesService, getProductsServices } from "@/services/CommonServices";
import { useEffect, useState } from "react";

interface Product {
  idProduct: number;
  productName: string;
  originalPrice: number;
  expirationDate: string;
  sellingPrice: number;
  stockQte: number;
  productDescription: string;
  idCategory: number;
  idProfile: string;
  foodCategory: {
    idCategory: number;
    categoryName: string;
  };
  profile: {
    idProfile: string;
    pictureUrl: string | null;
    idUser: string;
    storeName: string;
    storeAddress: string;
    storeType: string;
    storeImage: string;
  };
  productImgs: Array<{
    idImage: number;
    imageUrl: string;
    productId: number;
  }>;
}

interface ProductResponse {
  data: Product[];
  meta: {
    totalItems: number;
    currentPage: number;
    totalPages: number;
    itemsPerPage: number;
  };
}

const Products = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState<ProductResponse>({ data: [], meta: { totalItems: 0, currentPage: 0, totalPages: 0, itemsPerPage: 0 } });
  const [searchOpen, setSearchOpen] = useState(false); // Define searchOpen state

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getCategoriesService();
      setCategories(categories);
    };

    const fetchProducts = async () => {
      const products = await getProductsServices(1);
      setProducts(products); // Set the entire response
    };

    fetchCategories();
    fetchProducts();
  }, []);

  return (
    <main className="flex flex-col min-h-screen bg-white ">
      <div className="lg:px-32 px-2 sm:px-10 ">
        <Header onSearchClick={() => setSearchOpen(true)} /> 
        <SearchBar open={searchOpen} onClose={() => setSearchOpen(false)} /> 
      </div>
      <section className="flex-grow lg:px-32 px-2 sm:px-10 space-y-4">
        <CategorySelector categories={categories} />
        <ProductGrid products={products.data} />
      </section>
      <PaginationBar maxpages={products.meta.totalPages} />
      <Footer />
    </main>
  );
};

export default Products;
