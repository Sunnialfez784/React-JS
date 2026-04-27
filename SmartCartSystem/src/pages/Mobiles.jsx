import React, {useContext, useEffect, useState} from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import { BASE_URL } from "../apis";
import Loader from "../components/Loader";

const Mobiles = () => {
  const [mobileData, setMobileData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetch(`${BASE_URL}/showroom/mobiles`)
      .then((res) => res.json())
      .then(({data}) => {
        setMobileData(data);
      })
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
