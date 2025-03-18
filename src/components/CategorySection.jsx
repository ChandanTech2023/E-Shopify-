import React from 'react'
import ManImage from '../assets/images/men.jpeg'
import Electronic from '../assets/images/electronics.jpeg'
import Sport from '../assets/images/sports.jpeg'
import Furniture from '../assets/images/Furniture.jpeg'

const Category = [
    {
        title: 'Men',
        imageUrl: ManImage
    },
    {
        title: 'Furnitures',
        imageUrl: Furniture
    },
    
    {
        title: 'Electronics',
        imageUrl: Electronic
    },
    {
        title: 'Electronics',
        imageUrl: Electronic
    },
    {
        title: 'Sports',
        imageUrl: Sport
    },
    {
        title: 'Furnitures',
        imageUrl: Furniture
    }
    
]
function CategorySection() {

    return (
        <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5 mt-8'>
            {
                Category.map((category, index) => (
                    <div key={index} className='relative h-60 transform transition-transform duration-300 hover:scale-104 '>
                        <img src={category.imageUrl} alt="Category_Image" className='w-full h-full object-cover rounded-lg shadow-md' />
                        <div className='absolute top-21 left-10'>
                            <p className='text-xl font-bold text-gray-500'>{category.title}</p>
                            <button className='text-white p-4 hover:bg-blue-500 rounded-2xl cursor-pointer'>view all</button>
                            
                        </div>
                        
                    </div>
                ))
            }

        </div>
    )
}

export default CategorySection