import React,{useState} from 'react'
import Nav from './components/layout/Nav'
import Router from '../routers/Router'
import Dishes from './components/layout/Dishes'
import ResCard from './components/layout/ResCard'
import  Card  from './components/layout/Card'


function App() {
  
  return (
    <div className='h-auto max-w-screen flex-row'>
     
     <Router/>
    </div>
  )
}

export default App

