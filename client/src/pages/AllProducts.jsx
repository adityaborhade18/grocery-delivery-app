import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import ProductCard from '../components/ProductCard'

const AllProducts = () => {
  const { products, searchQuery } = useAppContext()
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    if (searchQuery.length > 0) {
      setFilteredProducts(
        products.filter(product =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    } else {
      setFilteredProducts(products)
    }
  }, [products, searchQuery])

  return (
    <div className='mt-16 flex flex-col'>
      <div className='flex flex-col items-end w-max mx-auto sm:mx-0'>
        <p className='text-2xl font-medium uppercase'>All Products</p>
        <div className='w-16 h-0.5 bg-primary rounded-full'></div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6  lg:grid-cols-4 mt-6 place-items-center sm:place-items-stretch'>
        {filteredProducts
          .filter(product => product.inStock)
          .map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
      </div>
    </div>
  )
}

export default AllProducts
