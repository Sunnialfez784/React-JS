import React, {useContext, useEffect, useState} from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import { BASE_URL } from "../apis";
import Loader from "../components/Loader";
import { useAuth } from "../context/AuthContext";

const Mobiles = () => {
  const [mobileData, setMobileData] = useState([]);
  const [loading, setLoading] = useState(false);
  const {token} = useAuth();

  useEffect(() => {
  setLoading(true);

  fetch(`${BASE_URL}/shops/all-products-filter?productType=mobiles`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then(({ data }) => {
      setMobileData(data || []);
    })
    .catch((err) => console.error(err))
    .finally(() => {
      setLoading(false);
    });
}, []);

  return (
    <>
      <Navbar />
      {loading ? <Loader /> : mobileData.map((item, i) => (
        <Cards key={i} item={item} isMobile />
      ))}
    </>
  );
};

export default Mobiles;
