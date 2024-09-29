"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getProducrService } from "@/services/SellerService";
import ProductPreview from '@/components/store/ProductPreview';
import Navbar from '@/components/store/Navbar';
import Breadcrumb from '@/components/Breadcrumb';


const ProductPage = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState<any>(null);


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProducrService(id as string);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
        <section className="lg:px-32 px-2 sm:px-10 space-y-4">
            <Navbar />
            <Breadcrumb />
            <ProductPreview product={product} />
        </section>
        
  );
};

export default ProductPage;
