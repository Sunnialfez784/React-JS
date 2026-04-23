import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import Cards from "../components/Cards";
import Navbar from "../components/Navbar";

import Yamaha from "../assets/bikes/R15.png"
import KTM from "../assets/bikes/KTM Duke 200.png"
import Royal from "../assets/bikes/Royal Enfield Classic 350.png"
import Bajaj from "../assets/bikes/Bajaj Pulsar NS200.png"
import TVS from "../assets/bikes/APACHE RTR 160 4V.png"
import Honda from "../assets/bikes/Honda Hornet.png"

const Bikes = () => {
  
  const {bikesData} = useContext(DataContext)

  return (
    <>
      <Navbar />
      {bikesData.map((item,i) => (
        <Cards key={i} item={item} /> 
      ))}
    </>
  );
};

export default Bikes;
