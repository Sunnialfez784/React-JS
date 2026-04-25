import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col w-full h-[600px] justify-center items-center">
      <div class="loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Loader;
