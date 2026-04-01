import { Link } from 'react-router-dom'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-center p-3 bg-green-800'>
      <div className='flex gap-9 text-white font-semibold'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/product'>Product</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar