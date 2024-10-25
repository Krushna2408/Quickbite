import React from 'react';

function Signin() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex bg-white shadow-2xl rounded-lg overflow-hidden">
        
        <div className="container w-96 h-auto p-8 flex flex-col justify-center">
          <h1 className="text-center text-2xl font-bold text-gray-800 mb-6">Create your account</h1>

          <div className="flex flex-col mb-5">
            <label htmlFor="email" className="mb-2 text-gray-700">Email</label>
            <input
              className="bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 p-3"
              type="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="flex flex-col mb-5">
            <label htmlFor="password" className="mb-2 text-gray-700">Password</label>
            <input
              className="bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 p-3"
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex justify-center mb-6">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-lg hover:bg-blue-600 transition-colors">
              Sign up
            </button>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-gray-600">Remember me</label>
            </div>
            <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
          </div>
        </div>
        <div className="right w-96">
          <img
            src="https://norecipes.com/wp-content/uploads/2017/05/chicken-biryani-006.jpg"
            alt="Delicious food"
            className="object-cover h-full w-full rounded-r-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Signin;
