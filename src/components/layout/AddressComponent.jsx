import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faLocationDot } from '@fortawesome/free-solid-svg-icons';

function AddressComponent() {
  return (
    <div className="w-[60vw] h-[60%] mt-20 mx-auto border bg-white border-gray-300 p-8">
     
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Select Delivery Address</h1>
        <p className="text-gray-600">You have a saved address in this location</p>
      </div>

     
      <div className="flex gap-5">
       
        <div className="savedAddress flex w-full md:w-[40vw] lg:w-[30vw] items-center border border-gray-300 p-4 cursor-pointer hover:shadow-lg transition ">
          <div className="text-gray-500 mr-4">
            <FontAwesomeIcon icon={faBriefcase} size="lg" />
          </div>
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col items-start mb-2">
              <h2 className="font-semibold text-lg">Work</h2>
              <p className="font-thin mb-5 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. In id tempora nam quod facere, reprehenderit nisi modi deserunt optio quos dolorum excepturi vitae, voluptate perferendis.</p>
            </div>
            <div className="flex justify-between items-baseline w-full">
            <button className="w-32 bg-green-600  hover:bg-green-800 p-1 text-white font-semibold ">DELIVER HERE</button>
            </div>
          </div>
        </div>

        
        <div className="savedAddress flex w-full md:w-[40vw] lg:w-[30vw] items-center border border-gray-300 p-4 cursor-pointer hover:shadow-lg transition ">
          <div className="text-gray-500 mr-4">
            <FontAwesomeIcon icon={faLocationDot} size="lg" />
          </div>
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col items-start mb-2">
              <h2 className="font-semibold text-lg">Add New Address</h2>
              <p className="mb-5 font-thin text-gray-600">Enter a new location</p>
            </div>
            <div className="flex justify-between items-baseline w-full">
              <button className="w-32 border-2 border-green-600 bg-white text-green-600 hover:text-green-800 hover:border-green-800 p-1  font-semibold ">ADD NEW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddressComponent;
