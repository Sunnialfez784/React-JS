import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";

import iPhone from "../assets/Mobile/iPhone 17.png";
import Samsung from "../assets/Mobile/Samsung galaxy S25 Ultra.png";
import OnePlus from "../assets/Mobile/OnePlus Ace 6t.png";
import Xiaomi from "../assets/Mobile/Xiaomi Redmi Note 14 pro.png";
import Vivo from "../assets/Mobile/Vivo X300 Pro.png";
import Google from "../assets/Mobile/Google Pixel 10 Pro XL.png";

const Mobiles = () => {
  
  const {mobileData} = useContext(DataContext)

  return (
    <>
      <Navbar />
      {mobileData.map((item, i) => (
        <Cards key={i} item={item} />
      ))}
    </>
  );
};

export default Mobiles;
