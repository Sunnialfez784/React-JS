import React, {useState} from "react";
import Bike from "../assets/Home/b1.png";
import {TrashIcon} from "@heroicons/react/24/solid";
import Navbar from "./Navbar";

const AddToCard = () => {
  const [count, setCount] = useState(1);

  const addBtn = () => {
    if (count < 7) {
      setCount(count + 1);
    }
  };

  const minusBtn = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const formatNumber = (num) => {
    return Number(num).toLocaleString("INR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-200 h-screen flex justify-center mt-4 w-full text-black">
        <div className="flex justify-center flex-col bg-white w-[1200px] h-[500px]">
          <h1 style={{fontFamily: "Montserrat Alternates"}} className="text-3xl ml-36 mb-2 font-medium">Your Cart</h1>
          <div className="flex justify-center">
            <div className="flex h-32 p-3 justify-between rounded-t-md w-[550px] bg-[#e5e7eba1] ">
              <div className="flex">
                <img src={Bike} alt="" className="h-24 w-24 border" />
                <div className="flex flex-col ml-3">
                  <h1 className="font-semibold text-xl">Bajaj Pulser RS 200</h1>
                  <p>Color: White</p>
                  <h1 className="text-xl font-sans font-bold"> ₹{formatNumber(207635 * count)}</h1>
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <button className="ml-20">
                  <TrashIcon className="w-5 text-red-500" />
                </button>
                <div className="h-10 w-24 bg-[#ffffff8b] rounded-lg mt-2 flex justify-between items-center p-1">
                  <button onClick={minusBtn} className="border">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 font-bold">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                    </svg>
                  </button>

                  <h1 className="font-semibold text-lg">{count}</h1>

                  <button onClick={addBtn} className="border">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="h-72 w-96 ml-4 flex flex-col justify-between rounded-t-md bg-[#e5e7eba1] p-5">
              <div>
                <h1 className="font-semibold">Order Summary</h1>
                <div className="mt-4">
                  <div className="flex justify-between items-center">
                    <h1>Subtotal</h1>
                    <h1>Price</h1>
                  </div>
                  <div className="flex justify-between mt-2">
                    <h1>Delivery fee</h1>
                    <h1>₹40</h1>
                  </div>
                  <div className="h-[1px] my-3 w-full bg-[#ADADAD24]"></div>
                  <div className="flex justify-between mt-2">
                    <h1>total amount</h1>
                    <h1>₹total</h1>
                  </div>
                </div>
              </div>
              <button className="bg-white p-2">Go To Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToCard;
