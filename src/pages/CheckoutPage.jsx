import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'

function CheckoutPage() {
    const [billingToogle, setBillingToggle] = useState(false)
    const [shippingToggle, setShippingToggle] = useState(true)
    const [paymentToggle, setPaymentToggle] = useState(false)
    const [paymentMethod, setPaymentMethod] = useState('cd')
    return (
        <div className='container mx-auto py-8 min-h-90 md:px-6 lg:px-12'>
            <h2 className='text-2xl mb-4 font-semibold'>Checkout </h2>
            <div className='flex flex-col md:flex-row justify-between space-x-8 mt-4'>
                <div className='md:w-2/3'>
                    <div className='border p-2 mb-6'>
                        <div className='flex items-center justify-between '
                            onClick={() => setBillingToggle(!billingToogle)} >
                            <h3 className='text-lg font-semibold'>Shipping Address</h3>
                            {
                                billingToogle ? <FaAngleUp className='text-gray-500' /> : <FaAngleDown />
                            }
                        </div>
                        <div className={`spacey-4 ${billingToogle ? '' : 'hidden'}`}>
                            <div>
                                <label className='block mt-2 text-gray-500 font-semibold' htmlFor=''>Full Name</label>
                                <input type='text' name='name' className='w-full border rounded px-3 py-2' placeholder='Enter Name' />
                            </div>
                            <div>
                                <label className='block mt-2 text-sm text-gray-500 font-semibold' htmlFor=''>Email</label>
                                <input type='email' className='w-full border rounded py-2 px-3' placeholder='John Doe' />
                            </div>

                            <div>
                                <label className='block mt-2 text-sm text-gray-500 font-semibold' htmlFor=''>Phone</label>
                                <input type='text' className='w-full border rounded py-2 px-3' placeholder='John Doe' />
                            </div>
                        </div>
                    </div>
                    {/* Shipping address */}
                    <div className='border p-2 mb-6'>
                        <div className='flex items-center justify-between '
                            onClick={() => setShippingToggle(!shippingToggle)} >
                            <h3 className='text-lg font-semibold'>Shipping information</h3>
                            {
                                shippingToggle ? <FaAngleUp className='text-gray-500' /> : <FaAngleDown />
                            }
                        </div>
                        <div className={`spacey-4 ${shippingToggle ? '' : 'hidden'}`}>
                            <div>
                                <label className='block mt-2 text-gray-500 font-semibold' htmlFor=''>Address</label>
                                <input type='text' name='name' className='w-full border rounded px-3 py-2' placeholder='Enter Name' />
                            </div>
                            <div>
                                <label className='block mt-2 text-sm text-gray-500 font-semibold' htmlFor=''>City</label>
                                <input type='text' className='w-full border rounded py-2 px-3' placeholder='Enter city' />
                            </div>

                            <div>
                                <label className='block mt-2 text-sm text-gray-500 font-semibold' htmlFor=''>Zip Code </label>
                                <input type='text' className='w-full border rounded py-2 px-3' placeholder='Enter Zip code' />
                            </div>
                        </div>
                    </div>
                    {/* Payment method */}
                    <div className='border p-2 mb-6'>
                        <div className='flex items-center justify-between '
                            onClick={() => setPaymentToggle(!paymentToggle)} >
                            <h3 className='text-lg font-semibold'>Payment Methods</h3>
                            {
                                paymentToggle ? <FaAngleUp className='text-gray-500' /> : <FaAngleDown />
                            }
                        </div>
                        <div className={`spacey-4 ${paymentToggle ? '' : 'hidden'}`}>
                            <div className='flex items-center'>
                                <input type='radio' name='payment'
                                    checked={paymentMethod === 'cd'}
                                    onChange={() => setPaymentMethod('cd')} />
                                <label className='block mt-2 text-gray-500 font-semibold ml-2' htmlFor=''>Cash on Delivery</label>
                            </div>
                            <div className='flex items-center'>
                                <input type='radio'
                                    name='payment'
                                    checked={paymentMethod === 'db'}
                                    onChange={() => setPaymentMethod('db')}
                                />
                                <label className='block mt-2 text-gray-500 font-semibold ml-2' htmlFor=''>Debit Card</label>
                            </div>
                            {paymentMethod === 'db' && (
                                <div className='mt-4'>
                                    <h3>Debit card Information </h3>
                                    <div>
                                        <label className='block mt-2 text-sm text-gray-500 font-semibold' htmlFor=''>Card Holder Name</label>
                                        <input type='text' className='w-full border rounded py-2 px-3' placeholder='card holder name' />
                                    </div>
                                    <div>
                                        <label className='block mt-2 text-sm text-gray-500 font-semibold' htmlFor=''>Card Number</label>
                                        <input type='text' className='w-full border rounded py-2 px-3' placeholder='card number' />
                                    </div>
                                    <div className='flex space-x-4'>
                                        <div className='w-1/2'>
                                            <label className='block mt-2 text-sm text-gray-500 font-semibold' htmlFor=''>Expiry Date</label>
                                            <input type='text' className='w-full border rounded py-2 px-3' placeholder='MM/YY' />
                                        </div>
                                        <div className='w-1/2'>
                                            <label className='block mt-2 text-sm text-gray-500 font-semibold' htmlFor=''>CVV</label>
                                            <input type='text' className='w-full border rounded py-2 px-3' placeholder='CVV' />
                                        </div>
                                    </div>

                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border mt-4'>
                    <h3 className='font-semibold text-sm mb-3'>Order Summary</h3>
                    {/* Order summary details go here */}
                </div>

            </div>
        </div>
    )
}

export default CheckoutPage