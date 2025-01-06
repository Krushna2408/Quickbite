import React from 'react'
import AddressComponent from '../layout/AddressComponent'
import CheckNav from '../layout/CheckNav'
import CartSec from '../layout/CartSec'
import Dishes from '../layout/Dishes'
function Checkout() {
  return (
    <div className='bg-gray-200'>
      <CheckNav/>
     
      <div className="flex "><AddressComponent/>
      <CartSec/></div>
      
    </div>
  )
}

export default Checkout
