import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import { BASE_URL } from "../apis";
import Cards from "../components/Cards";
import { useAuth } from "../context/AuthContext";

const Shoes = () => {
  const [shoes, setShoes] = useState([]);
  const [loading, setLoading] = useState(false);
  const {token} = useAuth();

  const type = "shoes";

  if (!type) return;

  // useEffect(() => {
  //     setLoading(true);
  
  //     fetch(`${BASE_URL}/shops/all-products-by-name?productType=shoes`, {
  //       method: "GET",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then(({data}) => {
  //         setShoes(data || []);
  //       })
  //       .catch((err) => console.error(err))
  //       .finally(() => {
  //         setLoading(false);
  //       });
  //   }, []);

  return (
    <>
      <Navbar />  
      {loading ? <Loader /> : shoes.map((item, i) => <Cards key={i} item={item} />)}
    </>
  );
};

export default Shoes;
