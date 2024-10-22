import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Card() {
  return (
    <>
      <div className="max-w-xs mx-auto bg-white shadow-xl rounded-xl overflow-hidden transform transition-all hover:scale-105 duration-300">
        <div className="w-full h-48">
          <img
            src="https://plus.unsplash.com/premium_photo-1694141253763-209b4c8f8ace?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Biryani"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-4 text-center">
          <h1 className="text-lg font-bold text-gray-900 mb-2">Name</h1>

          <div className="flex items-center justify-center text-yellow-500 space-x-1 mb-3">
          <h2 className=" font-semibold  mb-1">Ratings:
          <FontAwesomeIcon icon={faStar} style={{color: "#eab308", height:"15px", marginRight: '0.5rem'}} /> 
          15-20 min
        </h2>
          </div>

          <p className="text-gray-700 text-sm mb-4">Biryani, Chicken, Tandoori Chicken</p>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700">
            Order Now
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;