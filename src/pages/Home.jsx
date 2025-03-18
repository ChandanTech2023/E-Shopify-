import React from 'react'
import { Categories, mockData } from '../assets/category-data'
import HeroImage from '../assets/images/hero-image.jpg'
import Carddetails from '../components/Carddetails'
import CategorySection from '../components/CategorySection'
import { setProducts } from '../redux/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import ProductCard from '../components/ProductCard'

function Home() {
    const dispatch = useDispatch()
    const products = useSelector(state => state.product.products)
    useEffect(() => {
        dispatch(setProducts(mockData))

    }, [dispatch])

    return (
        <div className='bg-white mt-3 px-4 md:px-15 lg:px-4'>
            <div className='container mx-auto py-4 flex flex-col md:flex-row space-x-2'>
                <div className='w-full  md:w-2/12 '>
                    <div className='bg-blue-400 text-white font-bold text-xs px-2 py-2.5'>
                        Shop By Categories
                    </div>
                    <ul className='space-y-4 p-3 border bg-gray-100'>
                        {
                            Categories.map((category, index) => (
                                <li key={index} className='flex items-center text-sm font-medium'>
                                    <div className='w-2 h-2 border border-yellow-500 mr-2 rounded-full '></div>
                                    {category}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className='relative w-full md:w-9/12 mt-6 md:mt-0 h-96'>
                    <img src={HeroImage} alt="hero-image" className='w-full h-full' />
                    <div className='absolute top-44 left-36 md:left-36 text-xl lg:left-60' >
                        <h1 className='text-gray-700 text-2xl mb-2 font-bold'>WELCOME TO E-SHOP </h1>
                        <p className='text-xl text-gray-500 '>EASY RETURN | PAY AND DELIVERY </p>
                        <button className='bg-amber-300 px-3 py-3 hover:bg-amber-700 hover:text-white rounded-2xl cursor-pointer mt-4 
                    transform transition-transform duration-300 hover:scale-100'>Shop Now</button>
                    </div>
                </div>
            </div>
            <Carddetails />
            <div className='flex items-center justify-center font-bold mt-10 text-2xl text-blue-600 '>Product Category 🌟</div>
            <CategorySection />
            <div className='container mx-auto py-12'>
                <h2 className='text-2xl mb-7 font-bold text-center text-blue-600'>Top Products 🔥</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5'>
                    {
                        products?.slice(0,5).map((product) => (
                            // <div key={product.id}>{product.name}</div>
                            <ProductCard product={product}/>
                        ))
                    }
                </div>
                
            </div>
        </div>

    )
}

export default Home