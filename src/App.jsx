import React,{useState} from 'react'
import Nav from './components/layout/Nav'
import Router from '../routers/Router'
import Dishes from './components/layout/Dishes'
import ResCard from './components/layout/ResCard'


function App() {
  
  return (
    <div className='h-auto max-w-screen flex-row'>
      <Nav />
      <ResCard/>
      <Dishes/>
     <Router/>
    </div>
  )
}

export default App

