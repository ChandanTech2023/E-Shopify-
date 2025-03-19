import React from 'react'
import { Link } from 'react-router-dom'
import { FaGift,  FaSearch, FaShoppingCart, FaUserCircle } from "react-icons/fa";
function Navbar() {
  return (
    <nav className='bg-white-200 shadow-md py-3 '>
      <div className='container mx-auto px-3 md:px-16 lg:px-24 flex justify-between items-center  '>
        <div className='font-bold text-2xl cursor-pointer'>
          <Link to='/' >E-Shop </Link>
        </div>
        <div className='relative mx-3 flex-1'>
          <form action="" >
            <input type="text" placeholder='Seacrh Products, brands, More'
            className='w-full rounded-4xl border px-3 py-2 '/>
            <FaSearch className='absolute top-3 right-3 text-red-300'/>
            
          </form>
        </div>
        <div className='flex items-center space-x-5'>
          <Link to='/cart'> <FaShoppingCart size={'22px'}/> </Link>
          <Link to='/gift' className='hidden md:block '> <FaGift size={'22px'}/> </Link>

          <button className='hidden md:block '>Login | Register</button>
          <button ><FaUserCircle size={'22px'}/></button>
        </div>
      </div>
      <div className='flex items-center justify-center space-x-8 text-sm font-bold mt-4'>
        <Link to='/' className='hover:underline '>Home</Link>
        <Link to='/about' className='hover:underline '>About</Link>
        <Link to='/shop' className='hover:underline '>Shop</Link>
        <Link to='/contact' className='hover:underline '>Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar