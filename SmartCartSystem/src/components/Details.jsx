import React, {useState} from "react";
import Bike from "../assets/Home/b1.png";
import {Link, useLocation} from "react-router-dom";

const Details = ({item}) => {
  const [count, setCount] = useState(1);
  const {state} = useLocation();

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

  const addToCart = () => {
    alert("Add Successfully");
  };

  return (
    <div className=" text-black p-10 h-screen w-full bg-white">
      <div className="flex w-full justify-center flex-row">
        <div>
          <img src={state.productImageUrl} alt="Img" className="h-96 w-96 object-contain rounded-md border" />
        </div>
        <div className="flex flex-col justify-between w-[450px] h-96 ml-10 p-[30px] border">
          <div className="flex items-center w-full">
            <h1 className="text-2xl font-semibold">{state.productName}</h1>
          </div>
          <div>
            <div className="mt-2 text-sm leading-[1.2]">
              <p>{state.productDetails}</p>
            </div>
          </div>
          <div className="mt-5">
            <h1 className="text-2xl font-sans font-bold"> ₹{formatNumber(state.productPrice * count)}</h1>
          </div>
          <div className="flex h-16 items-end">
            <button onClick={addToCart} className="bg-green-400 h-10 w-96">
              Add to Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
