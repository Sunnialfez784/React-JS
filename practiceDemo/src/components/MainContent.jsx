import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Product from '../pages/Product'
import Contact from '../pages/Contact'
import { Routes,Route } from 'react-router-dom'


const MainContent = () => {
  return (
    <div className='h-[650px] bg-gray-400'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default MainContent