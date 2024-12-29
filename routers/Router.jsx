import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../src/components/auth/Login'
import Signin from '../src/components/auth/Signin'
import Cart from '../src/components/layout/Cart'
import Home from '../src/components/pages/Home'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signin' element={<Signin/>}/>
        <Route path='/Cart' element={<Cart/>}/>
    </Routes>
  )
}

export default Router
