import React from 'react'
import { FaHeadset, FaLock, FaMoneyBillWave, FaShippingFast } from 'react-icons/fa'

const Carddetails = () => {
  const cardItems = [
    {
      icon: <FaShippingFast className='text-3xl text-amber-400' />,
      title: 'Free Shipping',
      description: 'Get your order delivery Free.',
    },
    {
      icon: <FaHeadset className='text-3xl text-amber-400' />,
      title: 'Support 24/7',
      description: 'We are here to assists you anytime.',
    },
    {
      icon: <FaMoneyBillWave className='text-3xl text-amber-400' />,
      title: '100 % Money back',
      description: 'Money refund if you not satisfied.',
    },
    {
      icon: <FaLock className='text-3xl text-amber-400' />,
      title: 'Secure Payment',
      description: 'Your Payment information is safe with us.',
    },
    {
      icon: <FaMoneyBillWave className='text-3xl text-amber-400' />,
      title: 'Discount',
      description: 'Get 20% discount on our each products.',
    },
  ]

  return (
    <div className='bg-white pt-13'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
        {
          cardItems.map((item, index) => (
            <div key={index} className='flex flex-col items-center text-center p-4 border rounded-lg shadow-md transform transition-transform duration-300 hover:scale-104 cursor-pointer'>
              {item.icon}
            <h2 className='mt-2 text-xl font-semibold'>{item.title}</h2>
            <p className='text-gray-600 mt-3'>{item.description}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Carddetails