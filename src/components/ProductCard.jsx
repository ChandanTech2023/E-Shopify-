import React from 'react'
import { FaStar } from 'react-icons/fa'
import { addtoCart } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'

function ProductCard({ product }) {

    const dispatch = useDispatch() //Create instance of dispatch
    const handleAddToCard = (e, product) => {
        e.stopPropagation(); // Prevent parent onClick
        e.preventDefault(); // Prevent default behavior
        dispatch(addtoCart(product))
        alert("product added successfully ")


    }
    return (
        <div className='relative p-2 bg-white rounded shadow-md transform transition-transform duration-300 hover:scale-104 cursor-pointer'>
            <img src={product.image} alt={product.name}
                className='w-full h-43 mb-2 object-top ' />

            <h2 className='font-semibold text-lg '>{product.name}</h2>
            <p className='text-gray-900 '>${product.price}</p>

            <div className='flex items-center mt-3 '>
                <FaStar className='text-yellow-400'></FaStar>
                <FaStar className='text-yellow-400'></FaStar>
                <FaStar className='text-yellow-400'></FaStar>
                <FaStar className='text-yellow-400'></FaStar>
                <FaStar className='text-yellow-400'></FaStar>
            </div>
            <div onClick={(e) => handleAddToCard(e, product)}>
                <div className='absolute bottom-5 right-10 flex items-center justify-center w-10 h-10 bg-red-500
            group text-white text-sm rounded-full hover:w-22 hover:bg-red-500 cursor-pointer'>
                    <span className='group-hover:hidden'>+</span>
                    <span className='hidden group-hover:block '>Add to card</span>
                </div>
            </div>
        </div>
    )
}

export default ProductCard