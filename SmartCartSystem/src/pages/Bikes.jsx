import React, {useContext, useEffect, useState} from "react";
import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
import {BASE_URL} from "../apis";
import Loader from "../components/Loader";

const Bikes = () => {
  const [bikesData, setBikesData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${BASE_URL}/showroom/bikes`)
      .then((res) => res.json())
      .then(({data}) => {
        setBikesData(data);
        setLoading(false);
      }).finally(()=>{
        setLoading(false)
      })
  }, []);

  return (
    <>
      <Navbar />
    
      {loading ? <Loader/>: bikesData.map((item, i) => (
        <Cards key={i} item={item} />
      ))}
    </>
  );
};

export default Bikes;
