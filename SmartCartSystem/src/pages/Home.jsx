import React from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";

import image from "../assets/Home/download (3).png";
import Bike from "../assets/bikes/Royal Enfield Classic 350.png"
import Cars from "../assets/Cars/Tesla Model 3.png"
import Laptop from "../assets/Home/Macbook-Pro-1.jpg"
import Mobiles from "../assets/Home/1945291-17.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />

      <main className="w-full flex text-black items-center flex-col">
        <div className="w-[95%] h-80 mb-3 flex justify-between overflow-hidden bg-white px-24 py-4">
          <div className="mt-10">
            <p className="bg-black text-white p-0.5 flex justify-center items-center w-[115px] text-[10px] rounded-full"><span>Welcome to Appsile Shop</span></p>
            <div className=" leading-relaxed">
              <h1 className="text-yellow-500 leading-9 text-4xl font-extrabold">Best Electronic</h1>
              <h1 className="text-4xl font-extrabold leading-8">Product Online Shop</h1>
              <h1 className="text-4xl font-extrabold leading-10">In The World</h1>
            </div>
            <p className="text-lg font-medium">Our shop provide the perfect & best quality product</p>
            <button className=" bg-black rounded-sm text-sm py-2.5 px-6 font-medium mt-2 text-white shadow-gray-200 shadow-xl">Shop Now</button>
          </div>
          <img src={image} alt="" className="h-80  mr-3 object-cover bg-white" />
        </div>
        <div className="w-[95%] h-80 p-5 bg-white">
          <h1 style={{fontFamily: "Rubik"}} className="font-medium text-xl">
            Electronic Accesspries
          </h1>
          <div className="flex gap-2 mt-4">
            <div className="h-40 w-64 rounded-md overflow-hidden object-contain bg-gray-400">
              <img src={Bike} alt="" className="h-40 w-full object-cover object-bottom" />
              <Link to='/bikes'>
                Bike
              </Link>
            </div>
            <div className="h-40 w-64 rounded-md overflow-hidden bg-gray-400">
              <img src={Cars} alt="" className="h-40 w-full object-cover object-center"/>
            </div>
            <div className="h-40 w-auto rounded-md overflow-hidden bg-gray-400">
              <img src={Laptop} alt="" className="h-40 w-full object-scale-down object-center"/>
            </div>
            <div className="h-40 w-64 rounded-md overflow-hidden bg-gray-400">
              <img src={Mobiles} alt="" className="h-40 w-full object-fit:cover"/>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
