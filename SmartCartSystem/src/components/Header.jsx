import React, { useState } from "react";
import Appsile from "../assets/Nav/Appsile.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {TbLogout} from "react-icons/tb";


const Header = () => {

  const navigate = useNavigate();
  const {logout} = useAuth();
  const [filterProduct, setFilterProduct] = useState('')

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      <div className="flex flex-wrap justify-between w-full items-center">
        <div className="flex items-center font-medium text-2xl">
          <img src={Appsile} alt="" className="h-10 w-10 rounded-full mr-1" />
          Appsile Shop
        </div>
        <div className="flex items-center">
          <input type="text" placeholder="Search by Product" className="w-72 bg-gray-200 text-lg px-3 py-2" />
          <button onClick={handleLogout} className="border-[2px] ml-5 px-2 py-1 mb-1">
            <TbLogout /> Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
