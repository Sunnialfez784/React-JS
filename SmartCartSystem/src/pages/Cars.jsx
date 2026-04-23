import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";

import Tesla from '../assets/Cars/Tesla Model 3.png'
import BMW from '../assets/Cars/BMW M4.png'
import Audi from '../assets/Cars/Audi A6.png'
import Thar from '../assets/Cars/Mahindra Thar.png'
import Hyundai from '../assets/Cars/Hyundai Creta.png'
import Toyota from '../assets/Cars/Toyota Fortuner.png'

const Cars = () => {
  
  const {carsData} = useContext(DataContext);

  return (
    <>
      <Navbar />
      {carsData.map((item,i) => (
        <Cards key={i} item={item} />
      ))}
    </>
  );
};

export default Cars;
