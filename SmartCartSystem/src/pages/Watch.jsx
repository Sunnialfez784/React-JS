import React, {useContext, useEffect, useState} from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import {BASE_URL} from "../apis";
import Loader from "../components/Loader";
import {useAuth} from "../context/AuthContext";

const Watch = () => {
  const [watch, setWatch] = useState([]);
  const [loading, setLoading] = useState(false);
  const {token} = useAuth();

  const type = "watch";

  if (!type) return;

  useEffect(() => {
    setLoading(true);

    fetch(`${BASE_URL}/shops/all-products-by-name?productType=watch`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then(({data}) => {
        setWatch(data || []);
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return <>
    <Navbar />
    {loading ? <Loader /> : watch.map((item, i) => <Cards key={i} item={item} />)}
    
  </>;
};

export default Watch;
