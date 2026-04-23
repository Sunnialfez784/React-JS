import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";

import Apple from "../assets/laptops/Apple MacBook Air M2.png";
import Dell from "../assets/laptops/Dell XPS 13.png";
import HP from "../assets/laptops/HP Pavilion 15.png";
import Lenovo from "../assets/laptops/Lenovo Legion 5.png";
import Asus from "../assets/laptops/Asus VivoBook 14.png";
import Acer from "../assets/laptops/Acer Aspire 7.png";

const Laptops = () => {
  
  const {laptopData} = useContext(DataContext)

  return (
    <>
      <Navbar />
      {laptopData.map((item, i) => (
        <Cards key={i} item={item} />
      ))}
    </>
  );
};

export default Laptops;
