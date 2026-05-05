import React, {useContext, useEffect, useState} from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import {BASE_URL} from "../apis";
import Loader from "../components/Loader";
import {useAuth} from "../context/AuthContext";

const Cars = () => {
  const [carsData, setCarsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const {token} = useAuth();

  const type = "cars";

  if (!type) return;

  useEffect(() => {
    if (!token) return;

    setLoading(true);

    fetch(`${BASE_URL}/shops/all-products-by-name?productType=cars`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then(({data}) => {
        setCarsData(data || []);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [token]);

  return (
    <>
      <Navbar />
      {loading ? <Loader /> : carsData.map((item, i) => <Cards key={i} item={item} />)}
    </>
  );
};

export default Cars;
