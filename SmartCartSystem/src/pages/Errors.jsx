import React from "react";
import errors from '../assets/Home/errorPage.png'

const Errors = () => {
  return (
    <div className="flex h-screen w-full justify-center items-center">
        <img src={errors} alt="" />
    </div>
  );
};

export default Errors;
