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

          <div className="flex items-center justify-between text-yellow-500 mb-3">
  <span className="font-semibold mb-1 flex items-center justify-center">
    <FontAwesomeIcon icon={faStar} style={{ color: "#267e3e", height: "12px", marginRight: '0.5rem' }} />
    4.5
  </span>
  <span className="ml-2">15-20 min</span>
</div>

          <p className="text-gray-700 text-sm mb-4">Biryani, Chicken, Tandoori Chicken</p>
        </div>
      </div>
    </>
  );
}

export default Card;
