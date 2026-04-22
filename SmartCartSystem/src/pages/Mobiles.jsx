import React from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";

import iPhone from "../assets/Mobile/iPhone 17.png";
import Samsung from "../assets/Mobile/Samsung galaxy S25 Ultra.png";
import OnePlus from "../assets/Mobile/OnePlus Ace 6t.png";
import Xiaomi from "../assets/Mobile/Xiaomi Redmi Note 14 pro.png";
import Vivo from "../assets/Mobile/Vivo X300 Pro.png";
import Google from "../assets/Mobile/Google Pixel 10 Pro XL.png";

const Mobiles = () => {
  const mobile = [
    {
      id: 1,
      image: iPhone,
      product_name: "iPhone 17 Pro",
      product_short_details: "6.1-inch display, A15 Bionic chip, dual camera system",
      product_price: "₹134,900",
    },
    {
      id: 2,
      image: Samsung,
      product_name: "Samsung Galaxy S25 Ultra",
      product_short_details: "Snapdragon 8 Gen 2, AMOLED display, high-end performance",
      product_price: "₹139,999 ",
    },
    {
      id: 3,
      image: OnePlus,
      product_name: "OnePlus Ace 6t",
      product_short_details: "Fast performance, Hasselblad camera, smooth UI",
      product_price: "₹34,990",
    },
    {
      id: 4,
      image: Xiaomi,
      product_name: "Xiaomi Redmi Note 14 Pro",
      product_short_details: "Affordable smartphone with AMOLED display and good battery",
      product_price: "₹25,999",
    },
    {
      id: 5,
      image: Vivo,
      product_name: "Vivo X300 Pro",
      product_short_details: "Budget phone with stylish design and decent performance",
      product_price: "₹109,999",
    },
    {
      id: 6,
      image: Google,
      product_name: "Google Pixel 10 Pro XL",
      product_short_details: "Clean Android experience with powerful camera",
      product_price: "₹124,999",
    },
  ];

  return (
    <>
      <Navbar />
      {mobile.map((item, i) => (
        <Cards key={i} image={item.image} product_name={item.product_name} product_short_details={item.product_short_details} product_price={item.product_price} />
      ))}
    </>
  );
};

export default Mobiles;
