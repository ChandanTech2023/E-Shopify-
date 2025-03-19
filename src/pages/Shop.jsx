import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
const Shop = () => {
    const products = useSelector(state => state.product.products)

    return (
        <div className=' mx-auto py-8 px-4 md:px-12 lg:px-20'>
            <h2 className='text-2xl mb-7 font-bold text-center text-blue-600'>Shop All 🔥</h2>
            <div className='grid grid-rows-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4'>
                {
                     products?.slice(0).reverse().map((product) => (
                        // <div key={product.id}>{product.name}</div>
                        <ProductCard product={product} key={product.id}/>
                    ))
                    
                }
            </div>


        </div>
    )
}

export default Shop