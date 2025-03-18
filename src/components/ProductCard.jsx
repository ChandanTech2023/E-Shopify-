import React from 'react'
import { FaStar } from 'react-icons/fa'

function ProductCard({ product }) {
    return (
        <div className='relative bg-white p-2 shadow rounded border transition-transform transform duration-300 '>
            <img src={product.image} alt={product.name} 
            className='w-full h-43 mb-4 object-cover ' />

            <h2 className='font-semibold text-lg'>{product.name}</h2>
            <p className='text-gray-900 '>${product.price}</p>

            <div className='flex items-center mt-3'>
                <FaStar className='text-yellow-400'></FaStar>
                <FaStar className='text-yellow-400'></FaStar>
                <FaStar className='text-yellow-400'></FaStar>
                <FaStar className='text-yellow-400'></FaStar>
                <FaStar className='text-yellow-400'></FaStar>
            </div>
            <div className='absolute bottom-8 right-10 flex items-center justify-center w-10 h-10 bg-red-500
            group text-white text-sm rounded-full hover:w-32 hover:bg-red-500 cursor-pointer'>
                <span className='group-hover:hidden'>+</span>
                <span className='hidden group-hover:block '>Add to card</span>
            </div>
        </div>
    )
}

export default ProductCard