import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { data } from '../../public/restaurants.json'; 
function ResCard() {


  return (
    <div className='bg-white p-4 sm:p-6 rounded-lg shadow-lg flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 max-w-4xl mx-auto'>
      
      <div className="flex-1 mb-4 sm:mb-0">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">{data.name}</h1>
        <h2 className="text-lg sm:text-xl font-semibold text-gray-600 mb-1">
          <FontAwesomeIcon icon={faIndianRupeeSign} style={{color: "#4b5563", height:"19px", marginRight: '0.5rem'}} /> 
          250
        </h2>
        <p className="text-sm text-yellow-500 font-semibold mb-4">
          Rating: 
          <FontAwesomeIcon icon={faStar} style={{ color: "#eab308", marginLeft: '0.5rem' }} /> 
          (4.5)
        </p>
        <div className="text-gray-600 text-sm sm:text-base">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus quae omnis at nostrum culpa tempora beatae quos earum porro nobis.</p>
        </div>
      </div>

      <div className="sm:ml-4 flex flex-col items-center sm:items-end">
        <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-lg overflow-hidden shadow-md mb-3">
          <img 
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/4ea18bd1ae39fe6d1b65a695028aefe8" 
            alt="Chicken Biryani" 
            className="w-full h-full object-cover"
          />
        </div>
        <button className='self-center px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 focus:outline-none'>
          Add
        </button>
      </div>
    </div>
  );
}

export default ResCard;
