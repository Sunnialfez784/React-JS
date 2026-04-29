import React, {useEffect, useState} from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";

import Laptop1 from "../assets/Home/l1.png";
import Phone1 from "../assets/Home/m1.png";
import Car1 from "../assets/Home/c1.png";
import Bike1 from "../assets/Home/b1.png";

import Bike from "../assets/bikes/Royal Enfield Classic 350.png";
import Cars from "../assets/Cars/Tesla Model 3.png";
import Laptop from "../assets/Home/Macbook-Pro-1.jpg";
import Mobiles from "../assets/Home/1945291-17.png";
import {Link} from "react-router-dom";

const Home = () => {
  const image = [Laptop1, Bike1, Car1, Phone1];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const changeImage = () => {
      setCurrentIndex((prev) => (prev + 1) % image.length);
    };

    changeImage();

    const interval = setInterval(changeImage, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar isButton/>

      <main className="w-full flex text-black items-center flex-col">
        <div className="w-[95%] h-80 mb-3 flex justify-between overflow-hidden bg-white px-24 py-4">
          <div className="mt-10">
            <div className=" leading-relaxed">
              <h1 className="text-yellow-500 leading-9 text-4xl font-extrabold">India’s Smart Hub</h1>
              <h1 className="text-4xl font-extrabold leading-8">for Tech & Vehicles</h1>
              {/* <h1 className="text-4xl font-extrabold leading-10">In The World</h1> */}
            </div>
            <p className="text-lg font-medium">Our shop provide the perfect & best quality product</p>
            <button className=" bg-black rounded-sm text-sm py-2.5 px-6 font-medium mt-2 text-white shadow-gray-200 shadow-xl">Shop Now</button>
          </div>
          <img src={image[currentIndex]} alt="slider" className="h-80 mr-3 object-cover bg-white opacity-100 hover:opacity-50 transition-opacity duration-500 ease-in-out" />
        </div>
        <div className="w-[95%] h-80 p-5 bg-white">
          <h1 style={{fontFamily: "Rubik"}} className="font-medium text-xl">
            All Products
          </h1>
          <div className="flex gap-2 mt-4">
            <div className="h-40 w-64 rounded-md overflow-hidden bg-gray-400">
              <Link to="/Cars">
                <img src={Cars} alt="" className="h-40 w-full object-cover object-center" />
              </Link>
            </div>
            <div className="h-40 w-64 rounded-md overflow-hidden object-contain bg-gray-400">
              <Link to="/bikes">
                <img src={Bike} alt="" className="h-40 w-full object-cover object-bottom" />
              </Link>
            </div>
            <div className="h-40 w-auto rounded-md overflow-hidden bg-gray-400">
              <Link to="/laptops">
                <img src={Laptop} alt="" className="h-40 w-full object-scale-down object-center" />
              </Link>
            </div>
            <div className="h-40 w-64 rounded-md overflow-hidden bg-gray-400">
              <Link to="/mobiles">
                <img src={Mobiles} alt="" className="h-40 w-full object-cover" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
