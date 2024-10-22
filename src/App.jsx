import React,{useState} from 'react'
import Nav from './components/Nav'
import Router from '../routers/Router'
import Dishes from './components/Dishes'
import ResCard from './components/ResCard'
import Restaurant from './components/Restaurant'
import data from "../public/restaurants.json"
import Cart from './components/Cart'
import Card from './components/Card'
import Signin from './components/Signin'
import Login from './components/Login'

function App() {
  
  return (
    <div className='h-auto max-w-screen flex-row'>
      <Nav />
      <Login/>
    <Signin/>  
      <ResCard />
      <Cart/>
      <Card/>
    </div>
  )
}

export default App

