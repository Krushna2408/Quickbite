import React from 'react';

function Cart() {
  return (
    <div className="flex justify-center items-center min-h-screen rounded-md bg-gray-100">
      <div className="container bg-white shadow-lg rounded-md p-8 w-96 flex flex-col items-center">
        
       
        <div className="image mb-4 w-96">
        <img src="https://evyapari.com/static/media/empty_cart.45e2dadaaca71284eb3a.jpg" alt="" />
        </div>

       
        <div className="flex flex-col justify-center items-center ">
          <p className="text-xl font-semibold mb-2">Your cart is empty</p>
          <p className="text-gray-600 text-center">You can go to the home page to view more restaurants.</p>
          <button className='bg-yellow-300 m-5 p-2 rounded-md'><a href=""> Browse more </a></button>
        </div>
     
      </div>
    </div>
  );
}

export default Cart;
