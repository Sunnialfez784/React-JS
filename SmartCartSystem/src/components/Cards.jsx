import React from "react";
import CarImg from "../assets/Cars/Audi A6.png";
import {IMAGE_BASE_URL} from "../apis";
import Mobiles from '../pages/Mobiles'

const Cards = ({item, isMobile=false}) => {

  return (
    <>
      <div className="flex text-black p-5" key={item.image}>
        {/* <div className="min-h-[370px] flex flex-col justify-between w-64 bg-white">
          <div className="flex items-center justify-center w-full mt-9 mb-2">
            <img src={`${IMAGE_BASE_URL}${item.imageUrl}`} alt="test" className="w-28 h-24 sm:object-contain " />
          </div>
          <div className="px-10 py-3">
            <h1 className="text-2xl font-semibold mb-1 text-center">{item.product_name}</h1>
            <p className="text-center leading-tight text-base">{item.product_short_details}</p>
          </div>
          <div>
            <h1 className="text-3xl text-center">{item.product_price}</h1>
            <button className="h-9 mt-11 bg-green-300 font-semibold w-full text-xl  text-center">Add to Card</button>
          </div>
        </div> */}
        <div className={`h-52 ${isMobile ? 'w-[265px]' : 'w-[265px]'} bg-gray-300 rounded-md`}>
          <img src={`${IMAGE_BASE_URL}${item.imageUrl}`} alt="test" className={`w-full h-full  rounded-md ${isMobile ? 'object-contain' : 'object-cover'} `}/>
          <div className="flex items-center gap-1">
            <img src={`${IMAGE_BASE_URL}${item.imageUrl}`} alt="test" className="w-5 h-5 object-cover mt-1 rounded-full " />
            <h1 className="text-[14px] mt-1 font-semibold mb-1">{item.product_name}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
