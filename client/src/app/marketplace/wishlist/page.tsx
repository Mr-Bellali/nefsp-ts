import Footer from '@/components/Footer'
import Header from '@/components/marketplace/Header'
import WishList from '@/components/marketplace/WishList'
import React from 'react'

const Wishlist = () => {
  return (
    <section className='bg-white space-y-4'>
        <section className='lg:px-32 px-2 sm:px-10 space-y-4'>
            <Header />
            <WishList />
        </section>
        <Footer />
    </section>
  )
}

export default Wishlist