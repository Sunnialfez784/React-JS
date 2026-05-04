import React, {useContext, useEffect, useState} from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import {BASE_URL} from "../apis";
import Loader from "../components/Loader";
import {useAuth} from "../context/AuthContext";

const Sports = () => {
  const [sports, setSports] = useState([]);
  const [loading, setLoading] = useState(false);
  const {token} = useAuth();

  useEffect(() => {
    setLoading(true);

    fetch(`${BASE_URL}/shops/all-products-filter?productType=sports`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then(({data}) => {
        setSports(data || []);
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return <>
    <Navbar />
    {loading ? <Loader /> : sports.map((item, i) => <Cards key={i} item={item} />)}
    
  </>;
};

export default Sports;
