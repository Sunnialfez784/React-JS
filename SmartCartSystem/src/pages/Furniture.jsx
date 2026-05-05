import React, {useContext, useEffect, useState} from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import { BASE_URL } from "../apis";
import Loader from "../components/Loader";
import { useAuth } from "../context/AuthContext";

const Furniture = () => {
  const [furniture, setFurniture] = useState([]);
  const [loading, setLoading] = useState(false);
  const {token} = useAuth();

  const type = "furniture";

  if (!type) return;

  useEffect(() => {
    setLoading(true);

    fetch(`${BASE_URL}/shops/all-products-by-name?productType=furniture`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then(({data}) => {
        setFurniture(data || []);
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />
      
      {loading ? <Loader /> : furniture.map((item, i) => <Cards key={i} item={item} />)}
    
    </>
  );
};

export default Furniture;
