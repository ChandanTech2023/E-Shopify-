import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <footer className='bg-gray-700 text-white py-6 px-4 md:px-16 lg:px-24'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5'>
        <div>
          <h3 className='text-xl font-semibold'>E-Shopify</h3>
          <p className='mt-4 '>India's favourite online shopping destination, offering some of the best prices and a completely hassle-free experience.</p>
        </div>
        <div className='flex flex-col md:items-center'>
          <h4 className='text-lg font-semibold'>Quick link</h4>
          <ul className='mt-2 space-y-1 '>
            <li>
              <Link to='/' className='hover:text-gray-500 '>Home</Link>
            </li>
            <li>
              <Link to='/about'className='hover:text-gray-500 '>About</Link>
            </li>
            <li>
              <Link to='/shop'className='hover:text-gray-500 '>Shop</Link>
            </li>
            <li>
              <Link to='contact'className='hover:text-gray-500 '>Contact</Link>
            </li>
            <li>
              <Link to='career'className='hover:text-gray-500 '>Career</Link>
            </li>

          </ul>
        </div>
        <div>
          <h4 className='text-lg font-semibold items-center'>Follow Us💗</h4>
          <div className='flex space-x-4 mt-4 text-3xl'>
            <a href="" className='hover:text-gray-400'><FaFacebook/></a>
            <a href="" className='hover:text-gray-400'><FaInstagram/></a>
            <a href="" className='hover:text-gray-400'><FaLinkedin/></a>
            <a href="" className='hover:text-gray-400'><FaGithub/></a>
          </div>
          <form className='flex items-center justify-center mt-4 '>
            <input type="email" placeholder='enter your email' className='w-full border border-gray-600 rounded-l-lg p-2 ' />
            <button className='px-4 py-2 rounded-r-lg text-white bg-yellow-400 font-bold cursor-pointer'>Subscribe</button>
          </form>
        </div>
      </div>
      <div className='pt-3 mt-3 border-t text-gray-300 '>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
          <p>Chandan&copy; 2025 E-Shopify All right reserved</p>
          <div className='flex space-x-5 md:mt-0'>
            <a href="" className='hover:underline'>privacy policy</a>
            <a href="" className='hover:underline'>Tearms & Conditions </a>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer