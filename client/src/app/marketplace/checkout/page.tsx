import Footer from '@/components/Footer'
import Checkout from '@/components/marketplace/Checkout'
import Header from '@/components/marketplace/Header'
import React from 'react'

const Checkoutpage = () => {
  return (
    <section className='bg-white space-y-4'>
        <section className='lg:px-32 px-2 sm:px-10 space-y-4'>
            <Header />
            <Checkout />
        </section>
        <Footer />
    </section>
  )
}

export default Checkoutpage