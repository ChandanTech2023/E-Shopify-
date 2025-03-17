import React from 'react'
import { Categories } from '../assets/category-data'
import HeroImage from '../assets/images/hero-image.jpg'
function Home() {
  return (
    <div className='bg-white mt-3 px-4 md:px-15 lg:px-4'>
        <div className='container mx-auto py-4 flex flex-col md:flex-row space-x-2'>
            <div className='w-full  md:w-2/12 '>
                <div className='bg-blue-400 text-white font-bold text-xs px-2 py-2.5'>
                    Shop By Categories 
                </div>
                <ul className='space-y-4 p-3 border bg-gray-100'>
                {
                    Categories.map((category , index)=>(
                        <li key={index} className='flex items-center text-sm font-medium'>
                        <div className='w-2 h-2 border border-yellow-300-500 mr-2 rounded-full '></div>    
                        {category}</li>
                    ))
                }
                </ul>
            </div>
            <div className='relative w-full md:w-9/12 mt-6 md:mt-0 h-96'>
                <img src={HeroImage} alt="hero-image" className='w-full h-full'/>
                <div className='absolute top-46 left-37 md:left-35 lg:left-60' >
                    <h1 className='text-gray-700 text-2xl mb-2 font-bold'>WELCOME TO E-SHOP </h1>
                    <p className='text-xl text-gray-500 '>EASY RETURN | PAY AND DELIVERY </p>
                    <button className='bg-amber-300 px-3 py-3 hover:bg-amber-700 rounded-2xl cursor-pointer mt-4 
                    transform transition-transform duration-600 hover:scale-100'>Shop Now</button>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Home