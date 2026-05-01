import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import { BASE_URL } from "../apis";
import Cards from "../components/Cards";

const Fashion = () => {
  const [carsData, setCarsData] = useState([]);
  const [loading, setLoading] = useState(false);



  useEffect(() => {
    setLoading(true);
    fetch(`${BASE_URL}/showroom/cars`)
      .then((res) => res.json())
      .then(({data}) => {
        setCarsData(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />
      {loading ? <Loader /> : carsData.map((item, i) => <Cards key={i} item={item} />)}
    </>
  );
};

export default Fashion;
