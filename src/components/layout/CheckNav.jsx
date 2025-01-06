import React from 'react'

function CheckNav() {
  return (
    <div className='w-[100%] sticky bg-zinc-100'>
      <div className="container-nav h-16 mx-5 flex justify-between items-center relative">
        <div className="left flex items-center space-x-4">
        <h1 className='text-2xl font-bold text-gray-900'>Quickbite</h1>      
        </div>
          
      
    

      
        <div className="right flex items-center space-x-4">
        <div className="location relative">
            <i className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lg text-gray-500 ri-search-line"></i>
            <input
              className='bg-white border border-gray-300 rounded-full pl-10 pr-4 py-2 w-full max-w-xs focus:outline-none focus:border-gray-400'
              type="text"
              placeholder='Search for food'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckNav
