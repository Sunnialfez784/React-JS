import React, {useEffect, useState} from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";

import Laptop1 from "../assets/Home/l1.png";
import Phone1 from "../assets/Home/m1.png";
import Car1 from "../assets/Home/c1.png";
import Bike1 from "../assets/Home/b1.png";

import {BASE_URL} from "../apis";
import Loader from "../components/Loader";
import {useAuth} from "../context/AuthContext";

const Home = () => {
  const image = [Laptop1, Bike1, Car1, Phone1];
  const {token} = useAuth();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${BASE_URL}/shops/all-products`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then(({data}) => {
        setProduct(data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % image.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar isButton />

      <main className="w-full flex text-black items-center flex-col">
        <div className="w-[95%] min-h-80 mb-3 flex justify-between overflow-hidden bg-white px-24 py-4">
          <div className="mt-20">
            <div className=" leading-relaxed">
              <h1 className="text-yellow-500 leading-9 text-4xl font-extrabold">India’s Smart Hub</h1>
              <h1 className="text-4xl font-extrabold leading-8">for Tech & Vehicles</h1>
            </div>
            <p className="text-lg font-medium">Our shop provide the perfect & best quality product</p>
            <button className=" bg-black rounded-sm text-sm py-2.5 px-6 font-medium mt-2 text-white shadow-gray-200 shadow-xl">Shop Now</button>
          </div>
          <img src={image[currentIndex]} alt="slider" className="h-80 mr-3 object-cover bg-white opacity-100 hover:opacity-50 transition-opacity duration-500 ease-in-out" />
        </div>
        <div className="w-[95%] flex flex-col p-5 bg-white">
          <h1 style={{fontFamily: "Rubik"}} className="font-medium text-xl">
            All Products
          </h1>
          <div className="flex flex-wrap text-black">{loading ? <Loader /> : product.map((item) => <Cards key={item.productId} item={item} isHome/>)}</div>
        </div>
      </main>
    </>
  );
};

export default Home;
