import React from "react";
import {Link} from "react-router-dom";

const Cards = ({item, isProduct = false, isHome = false}) => {
  return (
    <div className={`${isHome ? "" : "min-h-screen"}`}>
      <div
        className={`
        ${isHome ? "" : "h-[330px]"}
        w-[265px]
        bg-white
        rounded-xl
        overflow-hidden
        border
        border-gray-200
        hover:shadow-lg
        transition-all
        duration-300
        mx-3 my-2
        `}>
        <Link to="/details" state={item}>
          <div className="h-52 bg-gray-100 flex items-center justify-center overflow-hidden p-2">
            <img
              src={item.productImageUrl}
              alt={item.productName}
              className="
              w-full
              h-full
              object-contain
              hover:scale-105
              transition-all
              duration-300
              "
            />
          </div>

          <div className="p-3">
            <div className="flex items-center gap-2">
              <img src={item.productImageUrl} alt="product" className="w-8 h-8 rounded-full object-cover border" />

              <h1 className="text-[15px] font-semibold text-gray-800 line-clamp-1">{item.productName}</h1>
            </div>

            <div className="mt-3 flex items-center justify-between">
              <h2 className="text-lg font-bold text-black">₹{item.productPrice}</h2>

              <button className="px-3 py-1 bg-black text-white rounded-md text-sm hover:bg-gray-800">View</button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Cards;
