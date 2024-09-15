import Banner from '@/components/marketplace/Banner'
import Header from '@/components/marketplace/Header'
import Hero from '@/components/marketplace/Hero'
import MostSelled from '@/components/marketplace/MostSelled'
import React from 'react'

const Marketplace = () => {
  return (
    <main className='px-2 sm:px-10 lg:px-32 space-y-4'>
      <Header />
      <Hero />
      <Banner />
      <MostSelled />
    </main>
  )
}

export default Marketplace
