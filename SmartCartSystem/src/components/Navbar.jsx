import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import Appsile from "../assets/Nav/Appsile.png"

const Navbar = () => {
  return (
    <header className="shadow sticky w-full z-50 top-0 mb-2">
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
          <div className="flex flex-wrap justify-between items-center px-8">
            <div className="flex items-center font-medium text-2xl">
              <img src={Appsile} alt="" className='h-10 w-10 rounded-full mr-1'/>
              Appsile Shop
            </div>
            <div className="justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <NavLink to='/' className={({isActive}) =>    
                    `
                    block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0
                  `
                  }>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/cars' className={({isActive}) => 
                    `
                    block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0
                  `
                  }>
                    Cars
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/bikes' className={({isActive}) => 
                    `
                    block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0
                  `
                  }>
                    Bikes
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/laptops' className={({isActive}) => 
                    `
                    block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0
                  `
                  }>
                    Laptops
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/mobiles' className={({isActive}) => 
                    `
                    block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0
                  `
                  }>
                    Mobiles
                    <img src="../assets/hero.png" alt="" />
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
  )
}

export default Navbar