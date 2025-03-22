import React, { useState } from 'react'

function ChangeAddress({setAddress,setIsModelOpen}) {
    const [newAddress,setNewAddress] = useState("")
  return (
    <div >
        <input type="text"
         placeholder='Enter your address'
         onChange={(e)=>setNewAddress(e.target.value)}
        className='border p-2 w-full mb-4'/>
        <div className='flex justify-end'>
            
            <button className='bg-red-500 text-white py-2 px-4 rounded mr-3 '
            onClick={()=> setIsModelOpen(false)}>Cancel</button>
            <button className='bg-green-500 text-white py-2 px-4 rounded '
            onClick={()=> setAddress(newAddress)}>Save Address</button>
            
        </div>
    </div>
  )
}

export default ChangeAddress