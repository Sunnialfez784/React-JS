import React from "react";
import Cards from "../components/Cards";
import Navbar from "../components/Navbar";

import Yamaha from "../assets/bikes/R15.png"
import KTM from "../assets/bikes/KTM Duke 200.png"
import Royal from "../assets/bikes/Royal Enfield Classic 350.png"
import Bajaj from "../assets/bikes/Bajaj Pulsar NS200.png"
import TVS from "../assets/bikes/APACHE RTR 160 4V.png"
import Honda from "../assets/bikes/Honda Hornet.png"

const Bikes = () => {
  const bikes = [
    {
      id: 1,
      image: Yamaha,
      product_name: "Yamaha R15 V4",
      product_short_details: "155cc liquid-cooled engine, sporty design, best for racing lovers",
      product_price: "₹1,85,000",
    },
    {
      id: 2,
      image: KTM,
      product_name: "KTM Duke 200",
      product_short_details: "199.5cc powerful engine, aggressive naked street bike",
      product_price: "₹1,96,000",
    },
    {
      id: 3,
      image: Royal,
      product_name: "Royal Enfield Classic 350",
      product_short_details: "349cc retro cruiser, smooth ride and iconic design",
      product_price: "₹2,10,000",
    },
    {
      id: 4,
      image: Bajaj,
      product_name: "Bajaj Pulsar NS200",
      product_short_details: "200cc sporty street bike with great performance",
      product_price: "₹1,50,000",
    },
    {
      id: 5,
      image: TVS,
      product_name: "TVS Apache RTR 160",
      product_short_details: "160cc racing bike with smart features and good mileage",
      product_price: "₹1,25,000",
    },
    {
      id: 6,
      image: Honda,
      product_name: "Honda Hornet 2.0",
      product_short_details: "184cc engine, stylish design, best for city rides",
      product_price: "₹1,40,000",
    },
  ];

  return (
    <>
      <Navbar />
      {bikes.map((item,i) => (
        <Cards key={i} image={item.image} product_name={item.product_name} product_short_details={item.product_short_details} product_price={item.product_price} />
      ))}
    </>
  );
};

export default Bikes;
