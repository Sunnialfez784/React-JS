import React from "react";
import errors from '../assets/Home/error5.png'

const Errors = () => {
  return (
    <div className="flex h-screen bg-white w-full justify-center items-center">
        <img src={errors} alt="" className="h-[50%] w-[50%]"/>
    </div>
  );
};

export default Errors;
