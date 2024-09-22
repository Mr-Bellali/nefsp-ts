"use client";
import { useState, useEffect } from 'react';
import Navbar from '@/components/store/Navbar';
import SearchAndFilter from '@/components/store/SearchAndFilter';
import ProductGrid from '@/components/store/ProductGrid';
import Modal from '@/components/store/Modal';
import { useAppSelector, useAppDispatch } from '@/redux/hook'; 
import { useRouter } from 'next/navigation'; 
import Cookies from 'js-cookie'; 
import { jwtDecode } from "jwt-decode";

const products = [
  { id: 1, name: 'Pringles', price: 25, category: 'Chips', image: '/pringles.jpg' },
  { id: 2, name: 'Cod Liver', price: 25, category: 'Groceries', image: '/codliver.jpg' },
];

const Store = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useAppDispatch(); 
  const [ isAuthenticated, setIsAuthenticated ] = useState(true);
  const router = useRouter();

  // useEffect(() => {
  //   const tokenFromCookie = Cookies.get('token');

  //   if (tokenFromCookie) {
  //     try {
  //       const decodedToken: any = jwtDecode(tokenFromCookie);
  //       console.log(decodedToken);
  //       const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds

  //       console.log('Decoded token:', decodedToken);
  //       console.log('Current time:', currentTime, 'Token expiration:', decodedToken.exp);

  //       // Check if the token is expired
  //       if (decodedToken.exp && decodedToken.exp > currentTime) {
  //         // Token is valid
  //         dispatch({ type: 'SET_AUTHENTICATED', payload: true });
  //         setIsAuthenticated(true)
  //       } else {
  //         // Token is expired
  //         console.log('Token expired.');
  //         dispatch({ type: 'SET_AUTHENTICATED', payload: false });
  //         Cookies.remove('token'); // Remove expired token
  //         router.push('/login'); // Redirect to login page
  //       }
  //     } catch (error) {
  //       // Handle invalid token
  //       console.error('Invalid token:', error);
  //       dispatch({ type: 'SET_AUTHENTICATED', payload: false });
  //       Cookies.remove('token'); // Remove invalid token
  //       router.push('/login'); // Redirect to login page
  //     }
  //   } else {
  //     // No token found
  //     dispatch({ type: 'SET_AUTHENTICATED', payload: false });
  //     router.push('/login'); // Redirect to login page
  //   }
  // }, [dispatch, router]);

  const handleAddProductClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // If not authenticated, prevent rendering the store
  // if (!isAuthenticated) {
  //   return null;
  // }

  return (
    <div className=" px-32 min-h-screen bg-gray-100">
      <Navbar />
      <main className="py-6">
        <SearchAndFilter onAddProduct={handleAddProductClick} />
        <ProductGrid products={products} />
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
      </main>
    </div>
  );
};

export default Store ;