import React from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";

import Apple from "../assets/laptops/Apple MacBook Air M2.png";
import Dell from "../assets/laptops/Dell XPS 13.png";
import HP from "../assets/laptops/HP Pavilion 15.png";
import Lenovo from "../assets/laptops/Lenovo Legion 5.png";
import Asus from "../assets/laptops/Asus VivoBook 14.png";
import Acer from "../assets/laptops/Acer Aspire 7.png";

const Laptops = () => {
  const laptop = [
    {
      id: 1,
      image: Apple,
      product_name: "Apple MacBook Air M2",
      product_short_details: "13.6-inch Retina display, M2 chip, ultra-lightweight design",
      product_price: "₹1,10,000",
    },
    {
      id: 2,
      image: Dell,
      product_name: "Dell XPS 13",
      product_short_details: "Intel i7, 16GB RAM, premium build with InfinityEdge display",
      product_price: "₹1,25,000",
    },
    {
      id: 3,
      image: HP,
      product_name: "HP Pavilion 15",
      product_short_details: "Intel i5, 8GB RAM, good performance for daily tasks",
      product_price: "₹65,000",
    },
    {
      id: 4,
      image: Lenovo,
      product_name: "Lenovo Legion 5",
      product_short_details: "Gaming laptop with Ryzen 7, RTX graphics, high performance",
      product_price: "₹1,20,000",
    },
    {
      id: 5,
      image: Asus,
      product_name: "Asus VivoBook 14",
      product_short_details: "Lightweight laptop with Ryzen 5, ideal for students",
      product_price: "₹55,000",
    },
    {
      id: 6,
      image: Acer,
      product_name: "Acer Aspire 7",
      product_short_details: "Powerful laptop with i5 processor and GTX graphics",
      product_price: "₹70,000",
    },
  ];


  return (
    <>
      <Navbar />
      {laptop.map((item, i) => (
        <Cards key={i} image={item.image} product_name={item.product_name} product_short_details={item.product_short_details} product_price={item.product_price} />
      ))}
    </>
  );
};

export default Laptops;
