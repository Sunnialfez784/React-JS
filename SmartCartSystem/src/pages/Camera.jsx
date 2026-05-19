import React, {useContext, useEffect, useState} from "react";
import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
import {BASE_URL} from "../apis";
import Loader from "../components/Loader";
import AddProduct from "../components/AddProduct";
import {useAuth} from "../context/AuthContext";
import Details from "../components/Details";

const Camera = () => {
  const [camera, setCamera] = useState([]);
  const [loading, setLoading] = useState(false);
  const {token} = useAuth();

  const type = "camera";

  if (!type) return;

  useEffect(() => {
    setLoading(true);

    fetch(`${BASE_URL}/products/all-products-by-name?productType=camera`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then(({data}) => {
        setCamera(data || []);
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />

      {loading ? <Loader /> : camera.map((item, i) => <Cards key={i} item={item} />)}
    </>
  );
};

export default Camera;