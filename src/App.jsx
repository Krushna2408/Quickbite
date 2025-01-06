import React,{useState} from 'react'
import Nav from './components/layout/Nav'
import Router from '../routers/Router'
import Dishes from './components/layout/Dishes'
import ResCard from './components/layout/ResCard'
import  Card  from './components/layout/Card'
import CartSec from './components/layout/CartSec'
import AddressComponent from './components/layout/AddressComponent'
import CheckNav from './components/layout/CheckNav'

import Checkout from './components/pages/Checkout'
function App() {
  
  return (
    <div className='h-auto max-w-screen flex-row'>
      <Checkout/>
      <Router/>
    </div>
  )
}

export default App

