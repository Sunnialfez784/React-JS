import React from "react";
import {Link} from "react-router-dom";
import CarImg from "../assets/Cars/Audi A6.png";
import {IMAGE_BASE_URL} from "../apis";
import Mobiles from "../pages/Mobiles";

const Cards = ({item, isMobile = false, isHome = false}) => {
  return (
    <>
      <div className={`${isHome ? "" : "h-[638px]"} flex text-black p-5`} key={item.image}>
        <div className={`h-52 ${isMobile ? "" : "w-[265px]"} mb-2 bg-gray-300 rounded-md`}>
          <Link state={item} to="/details">
            <img src={item.productImageUrl} alt="test" className={`w-full h-full  rounded-md ${isMobile ? "object-contain" : "object-cover"} `} />
            <div className="flex items-center gap-1">
              <img src={item.productImageUrl} alt="test" className="w-5 h-5 object-cover mt-1 rounded-full " />
              <h1 className="text-[14px] mt-1 font-semibold mb-1">{item.productName}</h1>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cards;
