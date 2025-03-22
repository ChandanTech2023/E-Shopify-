import React from 'react'

function ChangeAddress({setAddress,setIsModelOpen}) {
  return (
    <div>
        <input type="text" placeholder='Enter your address'
        className='border p-2 w-full mb-4'/>
        <div className='flex justify-end'>
            
            <button className='bg-gray text-white py-2 px-4 rounded mr-3 '
            onClick={()=> setIsModelOpen(false)}>Cancel</button>
            <button className='bg-blue text-white py-2 px-4 rounded '
            onClick={()=> setAddress(true)}>Save Address</button>
            
        </div>
    </div>
  )
}

export default ChangeAddress