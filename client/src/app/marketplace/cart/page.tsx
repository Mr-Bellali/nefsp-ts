import Footer from '@/components/Footer'
import Cart from '@/components/marketplace/Cart'
import Header from '@/components/marketplace/Header'
import React from 'react'

const page = () => {
  return (
    <section className='bg-white space-y-4'>
        <section className='lg:px-32 px-2 sm:px-10 space-y-4'>
            <Header />
            <Cart />
        </section>
        <Footer />
    </section>

  )
}

export default page