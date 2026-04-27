import React, {useEffect, useState} from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import { BASE_URL } from "../apis";
import Loader from "../components/Loader";

const Laptops = () => {
  
  const [laptopData, setLaptopData] = useState([])
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetch(`${BASE_URL}/showroom/laptops`)
      .then((res) => res.json())
      .then(({data}) => {
        setLaptopData(data);
      }).finally(()=>{
        setLoading(false)
      })
  }, []);

  return (
    <>
      <Navbar />
      {loading ? <Loader /> : laptopData.map((item, i) => (
        <Cards key={i} item={item} />
      ))}
    </>
  );
};

export default Laptops;
