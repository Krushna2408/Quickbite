import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Nav() {

  
  
  return (
    <div className='main-nav w-[90%] sticky z-50 top-0 left-0 right-0 rounded-bl-xl rounded-br-xl mx-auto bg-zinc-100 shadow-md '>
      <div className="container-nav h-16 mx-5 flex justify-between items-center relative">
        
      
        <div className="left flex items-center space-x-4">
          <h1 className='text-xl font-semibold text-gray-800'>Hii </h1>
          <div className="location relative">
            <i className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lg text-gray-500 ri-search-line"></i>
            <input
              className='bg-white border border-gray-300 rounded-full pl-10 pr-4 py-2 w-full max-w-xs focus:outline-none focus:border-gray-400'
              type="text"
              placeholder='Search for food'
            />
          </div>
        </div>
          
      
        <div className="middle flex-grow text-center">
          <h1 className='text-2xl font-bold text-gray-900'>Quickbite</h1>
        </div>

      
        <div className="right flex items-center space-x-4">
        <Link className="right flex items-center space-x-4" to='/cart'>
          <i className="text-lg relative top-1/2 left-3 text-black ri-shopping-cart-line"></i>
          <button >hii</button>
         <a href='' className='text-black'>Cart </a>
          </Link>
         <Link to='/signin'>
          <i className="bg-black text-xl p-2 text-white rounded-full ri-user-fill w-10 h-10 flex items-center justify-center"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
