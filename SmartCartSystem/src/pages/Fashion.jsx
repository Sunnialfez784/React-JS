import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import { BASE_URL } from "../apis";
import Cards from "../components/Cards";
import { useAuth } from "../context/AuthContext";

const Fashion = () => {
  const [fashion, setFashion] = useState([]);
  const [loading, setLoading] = useState(false);
  const {token} = useAuth();

  useEffect(() => {
      setLoading(true);
  
      fetch(`${BASE_URL}/shops/all-products-filter?productType=fashions`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then(({data}) => {
          setFashion(data || []);
        })
        .catch((err) => console.error(err))
        .finally(() => {
          setLoading(false);
        });
    }, []);

  return (
    <>
      <Navbar />
      {loading ? <Loader /> : fashion.map((item, i) => <Cards key={i} item={item} />)}
    </>
  );
};

export default Fashion;
