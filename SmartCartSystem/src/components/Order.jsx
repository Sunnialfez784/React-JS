import React from "react";
import Navbar from "./Navbar";
import Cars from "../assets/Home/c1.png";

const Order = () => {
  return (
    <>
      <Navbar />

      <div className="flex justify-center w-full p-10 h-screen bg-white">
        <div className="flex p-5 items-center bg-gray-200 w-[900px] h-32">
          <div className="h-20 w-24 mr-9">
            <img src={Cars} alt="" className="h-20 w-24 object-contain border border-white" />
          </div>
          <div className="text-black h-20 w-80">
            <h1 className="font-semibold">Audi A6</h1>
          </div>
          <div className="h-20 w-52 text-black font-medium text-lg">₹80,00,000.00</div>
          <div className="flex flex-col gap-2 h-20 w-52 p-2">
            <div className="flex gap-1 items-center">
              <div className="h-3 w-3 bg-green-700 rounded-full"></div>
              <h1 className="text-black font-semibold">Delivered on Jan 23</h1>
            </div>
            <p className="text-black text-sm">Your Item has been Delivered</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
