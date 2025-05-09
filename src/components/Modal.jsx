import React from 'react'

function Modal({isModelOpen,setIsModelOpen ,children}) {
    if(!isModelOpen) return null
  return (
    <div className='fixed bg-gray-400 opacity-70 flex items-center justify-center '>
        <div className='bg-white rounded-lg shadow-lg w-full p-6 max-w-md'>
            <button className='absolute top-1 right-1 text-3xl text-gray-500 font-bold' onClick={()=> setIsModelOpen(false)}>
             &times;
            </button>
            <div>{children} </div>

        </div>

    </div>
  )
}

export default Modal