import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import { BASE_URL } from "../apis";
import Loader from "../components/Loader";

const Cars = () => {

  const [carsData, setCarsData] = useState([])
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
      fetch(`${BASE_URL}/showroom/cars`)
      .then((res) => res.json())    
      .then(({data}) =>{      
       setCarsData(data)
      }).finally(()=>{
        setLoading(false)
      })
    }, [])

  return (
    <>
      <Navbar />
      {loading ? <Loader /> : carsData.map((item,i) => (
        <Cards key={i} item={item} />
      ))}
    </>
  );
};

export default Cars;
