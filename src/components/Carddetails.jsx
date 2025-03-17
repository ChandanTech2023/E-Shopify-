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
    <div>
      <div>
        {
          Carddetails.map((item, index) => (
            <div key={index}>{item.icon}</div>
          ))
        }
      </div>
    </div>
  )
}

export default Carddetails