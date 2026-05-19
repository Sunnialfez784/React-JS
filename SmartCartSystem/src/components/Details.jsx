import React, {useState} from "react";
import Bike from "../assets/Home/b1.png";
import {Link, useLocation} from "react-router-dom";
import {useAuth} from "../context/AuthContext";
import Navbar from "./Navbar";
import {BASE_URL} from "../apis";

const Details = ({item}) => {
  const {state} = useLocation();

  const {addBtn, minusBtn, getQuantity} = useAuth();

  const {token} = useAuth();

  const count = getQuantity(state.productId);

  const formatNumber = (num) => {
    return Number(num).toLocaleString("INR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const addToCart = async () => {
    try {
      console.log("TOKEN:", token);

      const res = await fetch(`${BASE_URL}/carts/add-product-to-cart`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: state.productId,
          quantity: count,
        }),
      });

      const data = await res.json();
      if (data.success) {
        console.log("Success:", data);
        alert("Product added successfully");
      } else {
        console.log("Failed:", data);
        alert(data.message);
      }
    } catch (error) {
      console.log("Error:", error);
      alert("Product not added");
    }
  };

  return (
    <>
      <Navbar />
      <div className=" text-black p-10 h-screen w-full bg-white">
        <div className="flex w-full justify-center flex-row">
          <div>
            <img src={state.productImageUrl} alt="Img" className="h-96 w-96 object-contain rounded-md" />
          </div>
          <div className="flex flex-col justify-between w-[450px] h-96 ml-10 p-[30px]">
            <div className="flex items-center w-full">
              <h1 className="text-2xl font-semibold">{state.productName}</h1>
            </div>
            <div>
              <div className="mt-2 text-sm leading-[1.2]">
                <p>{state.productDetails}</p>
                <div className="h-10 w-24 bg-[#ffffff8b] rounded-lg mt-2 flex justify-between items-center p-1">
                  <button onClick={() => minusBtn(state.productId)} className="border">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 font-bold">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                    </svg>
                  </button>

                  <h1 className="font-semibold text-lg">{count}</h1>

                  <button onClick={() => addBtn(state.productId)} className="border">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <h1 className="text-2xl font-sans font-bold"> ₹{formatNumber(state.productPrice * count)}</h1>
            </div>
            <div className="flex h-16 items-end">
              <button onClick={addToCart} className="bg-green-400 h-10 w-96 rounded-sm">
                Add to Card
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
