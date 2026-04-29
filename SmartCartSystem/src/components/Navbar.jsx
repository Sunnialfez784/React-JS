import React, { useState } from "react";
import {Link, NavLink, useNavigate} from "react-router-dom";
import Header from "./Header";
import AddProduct from './AddProduct'
import AddToCard from "./AddToCard";

const Navbar = ({isButton}) => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="shadow sticky text-black w-full z-50 top-0">
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
          <Header />
          <div className="mt-2">
            <div className="items-center w-full py-2 px-3 justify-between rounded-md bg-[#9CA3AF33] lg:flex lg:w-auto lg:order-1">
              <ul className="flex flex-col mt-4 ml-2 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <NavLink
                    to="/"
                    className={({isActive}) =>
                      `
                     bg-white text-xs h-10 w-24 flex justify-center font-sans items-center rounded py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0
                  `
                    }>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/cars"
                    className={({isActive}) =>
                      `
                     bg-white h-10 text-xs w-24 rounded flex justify-center font-sans items-center py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0
                  `
                    }>
                    Cars
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/bikes"
                    className={({isActive}) =>
                      `
                     bg-white h-10 w-24 text-xs flex rounded justify-center font-sans items-center py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0
                  `
                    }>
                    Bikes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/laptops"
                    className={({isActive}) =>
                      `
                     bg-white h-10 w-24 flex text-xs rounded justify-center font-sans items-center py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0
                  `
                    }>
                    Laptops
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/mobiles"
                    className={({isActive}) =>
                      `
                     bg-white h-10 w-24 flex rounded text-xs justify-center font-sans items-center py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0
                  `
                    }>
                    Mobiles
                    <img src="../assets/hero.png" alt="" />
                  </NavLink>
                </li>
              </ul>
              {isButton ? <Link to='/addtocard'> <button className="bg-white h-10 w-24 flex rounded text-xs justify-center font-sans font-medium items-center py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0">Add To Card</button></Link> : 
              <button onClick={() => setIsOpen(true)} className="bg-white h-10 w-24 flex rounded text-xs justify-center font-sans font-medium items-center py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0">Add Product</button>}
            </div>
          </div>
        {isOpen && <AddProduct setIsOpen={setIsOpen} />}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
