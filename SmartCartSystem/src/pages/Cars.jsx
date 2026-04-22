import React from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";

import Tesla from '../assets/Cars/Tesla Model 3.png'
import BMW from '../assets/Cars/BMW M4.png'
import Audi from '../assets/Cars/Audi A6.png'
import Thar from '../assets/Cars/Mahindra Thar.png'
import Hyundai from '../assets/Cars/Hyundai Creta.png'
import Toyota from '../assets/Cars/Toyota Fortuner.png'

const Cars = () => {
  const cars = [
    {
      id: 1,
      image: Tesla,
      product_name: "Tesla Model 3",
      product_short_details: "Electric sedan with autopilot and long-range battery",
      product_price: "₹55,00,000",
    },
    {
      id: 2,
      image: BMW,
      product_name: "BMW M4",
      product_short_details: "Luxury sports coupe with 3.0L twin-turbo engine",
      product_price: "₹1,40,00,000",
    },
    {
      id: 3,
      image: Audi,
      product_name: "Audi A6",
      product_short_details: "Premium sedan with advanced tech and comfort",
      product_price: "₹70,00,000",
    },
    {
      id: 4,
      image: Thar,
      product_name: "Mahindra Thar",
      product_short_details: "Off-road SUV with rugged design and 4x4 capability",
      product_price: "₹15,00,000",
    },
    {
      id: 5,
      image: Hyundai,
      product_name: "Hyundai Creta",
      product_short_details: "Popular compact SUV with modern features",
      product_price: "₹13,50,000",
    },
    {
      id: 6,
      image: Toyota,
      product_name: "Toyota Fortuner",
      product_short_details: "Powerful SUV with premium interior and reliability",
      product_price: "₹38,00,000",
    },
  ];

  return (
    <>
      <Navbar />
      {cars.map((item,i) => (
        <Cards key={i} image={item.image} product_name={item.product_name} product_short_details={item.product_short_details} product_price={item.product_price} />
      ))}
    </>
  );
};

export default Cars;
