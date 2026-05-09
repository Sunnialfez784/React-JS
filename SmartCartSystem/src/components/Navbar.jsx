import React, {useState} from "react";
import {Link, NavLink, useNavigate} from "react-router-dom";
import Header from "./Header";
import AddProduct from "./AddProduct";
import AddToCard from "./AddToCard";
import {MdCable , MdOutlineHome} from "react-icons/md";
import {LiaCarSideSolid} from "react-icons/lia";
import {RiMotorbikeLine} from "react-icons/ri";
import {GiLaptop} from "react-icons/gi";
import {FaMobileScreen} from "react-icons/fa6";
import {AiOutlineProduct} from "react-icons/ai";
import {LuShirt} from "react-icons/lu";
import toys from "../assets/Home/toys.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBaseballBatBall, faCouch, faShoePrints} from "@fortawesome/free-solid-svg-icons";
import {GiBearHead} from "react-icons/gi";
import {IoCamera} from "react-icons/io5";
import {RiKey2Line} from "react-icons/ri";
import {IoHeadset} from "react-icons/io5";
import { KeyboardMusic, Speaker, SportShoe, Watch } from "lucide-react";

const Navbar = ({isButton}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="shadow sticky text-black w-full z-50 top-0">
        <nav className="bg-white border-gray-200 px-4 py-2.5">
          <Header />
          <div className="mt-2">
            <div className="flex items-center w-full py-2 px-6 justify-between  border-y-[1px] lg:flex lg:w-auto lg:order-1">
              <ul className="flex items-center mt-4 ml-2 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <NavLink
                    to="/"
                    className={({isActive}) =>
                      `
                      text-[14px] leading-4 h-9 w-10 flex flex-col justify-center font-sans items-center rounded py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent leading-none lg:border-0 hover:text-orange-700 lg:p-0
                  `
                    }>
                    <MdOutlineHome className="h-9 w-9" />
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/cars"
                    className={({isActive}) =>
                      `
                      text-[14px] leading-4 h-9 w-10 flex flex-col justify-center font-sans items-center rounded py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent leading-none lg:border-0 hover:text-orange-700 lg:p-0
                  `
                    }>
                    <LiaCarSideSolid className="h-9 w-9" />
                    Cars
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/bikes"
                    className={({isActive}) =>
                      `
                       text-[14px] leading-4 h-9 w-10 flex flex-col justify-center font-sans items-center rounded py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent leading-none lg:border-0 hover:text-orange-700 lg:p-0
                  `
                    }>
                    <RiMotorbikeLine className="h-9 w-9" />
                    Bikes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/laptops"
                    className={({isActive}) =>
                      `
                     text-[14px] leading-4 h-9 w-10 flex flex-col justify-center font-sans items-center rounded py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent leading-none lg:border-0 hover:text-orange-700 lg:p-0
                  `
                    }>
                    <GiLaptop className="h-9 w-9" />
                    Laptops
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/mobiles"
                    className={({isActive}) =>
                      `
                     text-[14px] leading-4 h-9 w-10 flex flex-col justify-center font-sans items-center rounded py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent leading-none lg:border-0 hover:text-orange-700 lg:p-0
                  `
                    }>
                    <FaMobileScreen className="h-9 w-9" />
                    Mobiles
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/fashion"
                    className={({isActive}) =>
                      `
                     text-[14px] leading-4 h-9 w-10 flex flex-col justify-center font-sans items-center rounded py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent leading-none lg:border-0 hover:text-orange-700 lg:p-0
                  `
                    }>
                    <LuShirt className="h-9 w-9" />
                    Fashion
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/kids"
                    className={({isActive}) =>
                      `
                     text-[14px] leading-4 h-9 w-10 flex flex-col justify-center font-sans items-center rounded py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent leading-none lg:border-0 hover:text-orange-700 lg:p-0
                  `
                    }>
                    <GiBearHead className="h-8 w-8" />
                    Kids
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/sports"
                    className={({isActive}) =>
                      `
                     text-[14px] leading-4 h-9 w-10 flex flex-col justify-center font-sans items-center rounded py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent leading-none lg:border-0 hover:text-orange-700 lg:p-0
                  `
                    }>
                    <FontAwesomeIcon icon={faBaseballBatBall} className="h-4 w-5" />
                    Sports
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/furniture"
                    className={({isActive}) =>
                      `
                     text-[14px] leading-4 h-9 w-10 flex flex-col justify-center font-sans items-center rounded py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent leading-none lg:border-0 hover:text-orange-700 lg:p-0
                  `
                    }>
                    <FontAwesomeIcon icon={faCouch} className="h-6 w-6" />
                    Furniture
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/keychain"
                    className={({isActive}) =>
                      `
                     text-[14px] leading-4 h-9 w-10 flex flex-col justify-center font-sans items-center rounded py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent leading-none lg:border-0 hover:text-orange-700 lg:p-0
                  `
                    }>
                    <RiKey2Line className="h-6 w-6" />
                    Keychain
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/camera"
                    className={({isActive}) =>
                      `
                     text-[14px] leading-4 h-9 w-10 flex flex-col justify-center font-sans items-center rounded py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent leading-none lg:border-0 hover:text-orange-700 lg:p-0
                  `
                    }>
                    <IoCamera className="h-6 w-6" />
                    Camera
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/headset"
                    className={({isActive}) =>
                      `
                     text-[14px] leading-4 h-9 w-10 flex flex-col justify-center font-sans items-center rounded py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent leading-none lg:border-0 hover:text-orange-700 lg:p-0
                  `
                    }>
                    <IoHeadset className="h-6 w-6" />
                    Headset
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/shoes"
                    className={({isActive}) =>
                      `
                     text-[14px] leading-4 h-9 w-10 flex flex-col justify-center font-sans items-center rounded py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent leading-none lg:border-0 hover:text-orange-700 lg:p-0
                  `
                    }>
                    <SportShoe size={52} strokeWidth={2.7} />
                    Shoes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/watch"
                    className={({isActive}) =>
                      `
                     text-[14px] leading-4 h-9 w-10 flex flex-col justify-center font-sans items-center rounded py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent leading-none lg:border-0 hover:text-orange-700 lg:p-0
                  `
                    }>
                    <Watch size={44} strokeWidth={3} absoluteStrokeWidth />
                    Watch
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Speaker"
                    className={({isActive}) =>
                      `
                     text-[14px] leading-4 h-9 w-10 flex flex-col justify-center font-sans items-center rounded py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent leading-none lg:border-0 hover:text-orange-700 lg:p-0
                  `
                    }>
                    <Speaker size={44} strokeWidth={4} absoluteStrokeWidth />
                    Speaker
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/instrument"
                    className={({isActive}) =>
                      `
                     text-[14px] leading-4 h-9 ml-1.5 w-10 flex flex-col justify-center font-sans items-center rounded py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent leading-none lg:border-0 hover:text-orange-700 lg:p-0
                  `
                    }>
                    <KeyboardMusic size={44} strokeWidth={3} absoluteStrokeWidth />
                    Instruments
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/charging"
                    className={({isActive}) =>
                      `
                     text-[14px] leading-4 h-9 ml-1.5 w-10 flex flex-col justify-center font-sans items-center rounded py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent leading-none lg:border-0 hover:text-orange-700 lg:p-0
                  `
                    }>
                    <MdCable size={22} />
                    Charging
                  </NavLink>
                </li>
              </ul>
              {isButton ? (
                ""
              ) : (
                <button onClick={() => setIsOpen(true)} className="bg-white h-10 w-24 flex rounded text-xs justify-center font-sans font-medium items-center py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0">
                  <AiOutlineProduct className="h-4 w-4" />
                  Add Product
                </button>
              )}
            </div>
          </div>
          {isOpen && <AddProduct setIsOpen={setIsOpen} />}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
