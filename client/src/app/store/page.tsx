"use client"
import { useState, useEffect } from 'react';
import Navbar from '@/components/store/Navbar';
import SearchAndFilter from '@/components/store/SearchAndFilter';
import ProductGrid from '@/components/store/ProductGrid';
import Modal from '@/components/store/Modal';
import { useAppSelector } from '@/redux/hook'; // Adjust import path as necessary
import { useRouter } from 'next/navigation'; // Import useRouter for redirection

const products = [
  { id: 1, name: 'Pringles', price: 25, category: 'Chips', image: '/pringles.jpg' },
  { id: 2, name: 'Cod Liver', price: 25, category: 'Groceries', image: '/codliver.jpg' },
  // Add more products
];

const Store = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { isAuthenticated } = useAppSelector((state) => state.auth); // Get authentication state
  const router = useRouter();

  useEffect(() => {
    // Redirect to login if not authenticated
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  const handleAddProductClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // Render nothing while redirecting
  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <SearchAndFilter onAddProduct={handleAddProductClick} />
        <ProductGrid products={products} />
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
      </main>
    </div>
  );
};

export default Store;
