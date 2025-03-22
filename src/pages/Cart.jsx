import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import EmptyCart from '../assets/images/emptycart.png'
import { FaTrashAlt } from 'react-icons/fa'
import Modal from '../components/Modal'
import ChangeAddress from '../components/ChangeAddress'
function Cart() {
  const cart = useSelector((state) => state.cart)
  const [address, setAddress] = useState('main street,Sh-84 ,848212')
  const [isModelOpen, setIsModelOpen] = useState(false)


  return (
    <div className='container mx-auto py-8 min-h-90 md:px-16 lg:px-24'>
      {
        cart.products.length > 0 ? (
          <div className='bg-gray-200 rounded-lg p-3'>
            <h2 className='text-2xl font-semibold mb-5'>Shopping Card</h2>
            <div className='flex flex-col md:flex-row justify-between space-x-10 mt-6'>
              <div className=' md:w-2/3'>
                <div className='flex justify-between border-b items-center mb-4 text-xs font-bold'>
                  <p >Products</p>
                  <div className='flex space-x-5'>
                    <p>Price </p>
                    <p>Quantity</p>
                    <p>Subtotal</p>
                    <p>Remove</p>
                  </div>
                </div>
                <div>
                  {
                    cart.products.map((product) => (
                      <div key={product.id}
                        className='flex items-center justify-between p-3 border-b'>
                        <div className='md:flex items-center space-x-3 cursor-pointer'>
                          <img src={product.image} alt={product.name}
                            className='w-18 h-18 rounded object-contain' />
                          <div className='ml-4 flex-1'>
                            <h3 className='text-lg font-semibold'>{product.name}</h3>
                          </div>
                        </div>
                        <div className='flex items-center space-x-9 '>
                          <p>${product.price}</p>
                          <div className='flex items-center justify-center border'>
                            <button className='text-xl font-bold px-1.5 border-r'>-</button>
                            <p className='text-xl px-3'>{product.quantity}</p>
                            <button className='text-xl font-bold px-1 border-l'>+</button>
                          </div>
                          <p>${(product.quantity * product.price).toFixed(2)}</p>
                          <button className='text-red-400 hover:text-red-600 cursor-pointer'><FaTrashAlt size={20} /></button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div className='bg-white md:w-1/3 p-6 rounded-lg shadow-md border' >
                <h3 className='font-semibold text-sm mb-3'>CART TOTAL</h3>
                <div className='flex justify-between mb-5 border-b pb-1'>
                  <span className='text-sm text-gray-800 font-semibold'>Total item :</span>
                  <span>{cart.totalQuantity}</span>
                </div>
                <div className='mb-1 border-b pb-2'>
                  <p>Shipping:</p>
                  <p className='ml-2'>Shipping to : {""}
                    <span className='text-xs font-bold'>{address}</span>
                  </p>
                  <button className='text-red-500 inset-0 mt-2 hover:underline ml-2'
                    onClick={() => setIsModelOpen(true)} >Change Address</button>
                </div>
                <div className='flex justify-between mb-4'>
                  <span>Total Price:</span>
                  <span>{cart.totalPrice.toFixed(2)}</span>
                </div>
                <button className='w-full bg-red-500 text-white py-2'>Proced to Checkout </button>
              </div>
            </div>
            <Modal isModelOpen={isModelOpen}
              setIsModelOpen={setIsModelOpen}>
              <ChangeAddress setAddress={setAddress} setIsModelOpen={setIsModelOpen}/>
            </Modal>
          </div>
        ) : (
          <div className="flex justify-center">
            <img src={EmptyCart} alt="empty cart" className='h-84 ' />
          </div>
        )}

    </div>

  )
}

export default Cart