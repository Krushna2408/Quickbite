import React, { useState } from 'react';


const CartSec = () => {
    const items = [
        { name: "Pizza", price: 200,quantity :0},
        { name: "Burger", price: 100  ,quantity :0},
        { name: "Biryani", price: 150 ,quantity :0},
        { name: "Chicken", price: 250 ,quantity :0},
        { name: "Fries", price: 50    ,quantity :0},
        { name: "Burger", price: 100  ,quantity :0},
        { name: "Biryani", price: 150 ,quantity :0},
        { name: "Chicken", price: 250 ,quantity :0},
        { name: "Fries", price: 50 ,quantity :0},
    ];
    const [quant, setquant] = useState(items.quantity);


    const [showAllItems, setShowAllItems] = useState(false);
 
    const quantityIncrementHandle=()=>{
        setquant(items.quantity+1)
    }
    const quantityDecrementHandle=()=>{
        if(items.quantity==0){
            return
        }
        setquant(items.quantity-1)
    }
    const displayedItems = showAllItems ? items : items.slice(0, 5);

    return (
        <div className=" bg-white">
        <div className="cart-sec max-w-3xl mx-auto p-4">
         
            <div className="restaurant-details flex flex-col md:flex-row items-center gap-4 bg-white p-4  shadow-md">
                <img
                    src="https://via.placeholder.com/100"
                    alt="Restaurant Placeholder"
                    className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-center md:text-left">
                    <h2 className="text-xl font-semibold">Restaurant Name</h2>
                    <p className="text-gray-500">Rating: Placeholder</p>
                    <p className="text-gray-500">Delivery time: Placeholder</p>
                </div>
            </div>

           
            <div className="cart-items  font-thin text-gray-800 my-6 bg-white p-4  shadow-md">
                <h3 className="text-lg font-semibold border-b pb-2">Your Items</h3>
                {displayedItems.map((item, index) => (
                    <div
                        key={index}
                        className="item flex justify-between items-center py-2 border-b"
                    >
                        <div className="item-name text-base font-medium flex-1">{item.name}</div>
                        
                        <div className=" quantity-controls flex items-center gap-2">
                            <button onClick={quantityDecrementHandle} className="bg-gray-200 text-gray-600 font-bold px-2 py-1 rounded hover:bg-gray-300">
                                -
                            </button>
                            <span className="quantity text-green-700 font-semibold">{item.quantity}</span>
                            <button onClick={quantityIncrementHandle} className="bg-gray-200 text-green-700 font-bold px-2 py-1 rounded hover:bg-gray-300">
                                +
                            </button>
                        </div>
                        
                        <p className="item-price text-gray-800 font-semibold w-20 text-right">₹{item.price}</p>
                    </div>
                ))}

               
                {items.length > 5 && (
                    <button
                        onClick={() => setShowAllItems(!showAllItems)}
                        className="text-blue-500 mt-3"
                    >
                        {showAllItems ? 'Show Less' : `More (${items.length - 5})`}
                    </button>
                )}
            </div>

           
            <div className="bill-details  bg-white p-4 shadow-md">
                <h3 className="text-lg font-semibold border-b pb-2">Bill Details</h3>
                <div className="bill-item flex justify-between py-2">
                    <p>Item Total</p>
                    <p className="font-medium">₹ItemTotal</p>
                </div>
                <div className="bill-item flex justify-between py-2">
                    <p>Delivery Fee</p>
                    <p className="font-medium">₹DeliveryFee</p>
                </div>
                <div className="total-amount flex justify-between py-2 border-t font-semibold text-lg">
                    <p>Total Amount</p>
                    <p>₹FinalAmount</p>
                </div>
            </div>

           
            <div className="text-center mt-6">
                <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-6  font-semibold shadow-lg w-full md:w-auto">
                    Place Order
                </button>
            </div>
        </div>
        </div>
    );
};

export default CartSec;
