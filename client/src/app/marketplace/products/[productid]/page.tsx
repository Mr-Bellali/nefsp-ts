"use client";
import Breadcrumb from "@/components/Breadcrumb";
// app/marketplace/products/[ProductId]/page.tsx

import Footer from "@/components/Footer";
import ProductViewer from "@/components/marketplace/full-view/ProductViewer";
import Header from "@/components/marketplace/Header";

interface ProductPageProps {
  params: {
    productid: string;
  };
}

const ProductPage = ({ params }: ProductPageProps) => {
    const { productid } = params; // 
    console.log("params: ", params)
    console.log("inside the dynamic page :", productid)

    // if (!productId) {
    //   return <div>Error: Product not found{productId} hh</div>; // Handle cases where ProductId is not available
    // }
  
    return (
        <section className="flex flex-col min-h-screen">
        <section className="lg:px-32 px-2 sm:px-10 flex-grow space-y-4">
          <Header />
          <div className="w-full py-2 ">
            <Breadcrumb />
          </div>
          <ProductViewer productId={productid} />
        </section>
        <Footer />
      </section>
    );
  };
  

export default ProductPage;
