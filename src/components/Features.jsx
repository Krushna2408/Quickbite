import React from 'react';

function Features() {
    return (
        <div>
            <p className="text-2xl font-bold text-center">
                Your Favourite Food <br />
                <span className="block">Delivery Partner</span>
            </p>
            <div className="flex flex-wrap justify-evenly">
                <div className="w-52 h-48 rounded-lg bg-green-200 text-center m-2 flex flex-col items-center justify-center p-2">
                    <img className="w-2/3 h-2/3" src="https://cdni.iconscout.com/illustration/premium/thumb/food-order-successful-illustration-download-in-svg-png-gif-file-formats--success-woman-business-fastfood-marketplace-online-pack-e-commerce-shopping-illustrations-7778129.png?f=webp" alt="Successful food order illustration" />
                    <p className="font-bold">Easy To Order</p>
                    <p className="text-sm">You only need a few steps in ordering food.</p>
                </div>
                <div className="w-52 h-48 rounded-lg bg-green-200 text-center flex flex-col items-center justify-center m-2 p-2">
                    <img className="w-3/4 h-3/4" src="https://cdni.iconscout.com/illustration/premium/thumb/fast-delivery-illustration-download-in-svg-png-gif-file-formats--express-courier-postman-service-mailman-carrying-box-e-commerce-pack-shopping-illustrations-3581433.png?f=webp" alt="Fast delivery illustration" />
                    <p className="font-semibold mt-[-10px]">Fastest Delivery</p>
                    <p className="text-sm">Delivery that is always on time, even faster.</p>
                </div>
                <div className="w-52 h-48 rounded-lg bg-green-200 text-center m-2 flex flex-col items-center justify-center p-2">
                    <img className="w-2/3 h-2/3" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/food-quality-4529184-3761124.png" alt="Quality food analysis illustration" />
                    <p className="font-semibold">Best Quality</p>
                    <p className="text-sm">Not only fast, for us quality is also number one.</p>
                </div>
            </div>
        </div>
    );
}

export default Features;
