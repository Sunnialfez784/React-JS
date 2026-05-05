import React, {useContext, useEffect, useState} from "react";
import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
import {BASE_URL} from "../apis";
import Loader from "../components/Loader";
import AddProduct from "../components/AddProduct";
import { useAuth } from "../context/AuthContext";
import Details from "../components/Details";

const Bikes = () => {
  const [bikesData, setBikesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const {token} = useAuth();

  const type = "bikes";

  if (!type) return;

  useEffect(() => {
  setLoading(true);

  fetch(`${BASE_URL}/shops/all-products-by-name?productType=bikes`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then(({ data }) => {
      setBikesData(data || []);
    })
    .catch((err) => console.error(err))
    .finally(() => {
      setLoading(false);
    });
}, []);

  return (
    <>
      <Navbar />
      
      {loading ? <Loader /> : bikesData.map((item, i) => <Cards key={i} item={item} />)}
      {loading ?  <Loader /> :  bikesData.map((item,i) => <Details key={i} item={item}/>)}
    </>
  );
};

export default Bikes;
