import React, {useEffect, useState} from "react";
import Appsile from "../assets/Nav/Appsile.png";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../context/AuthContext";
import {TbLogout} from "react-icons/tb";
import {BASE_URL} from "../apis";

const Header = () => {
  const navigate = useNavigate();
  const {logout} = useAuth();
  const [allProducts, setAllProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const [cars, bikes, mobiles, laptops] = await Promise.all([fetch(`${BASE_URL}/showroom/cars`).then((res) => res.json()), fetch(`${BASE_URL}/showroom/bikes`).then((res) => res.json()), fetch(`${BASE_URL}/showroom/mobiles`).then((res) => res.json()), fetch(`${BASE_URL}/showroom/laptops`).then((res) => res.json())]);

      setAllProducts([
        ...cars.data,
        ...bikes.data,
        ...mobiles.data,
        ...laptops.data
      ]);
    };

    fetchData();
  }, []);
  
  

  const filteredProducts = search
  ? allProducts.filter((item) =>
      item.product_name?.toLowerCase().includes(search.toLowerCase())
    )
  : [];

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      <div className="flex flex-wrap justify-between w-full items-center">
        <div className="flex items-center font-medium text-2xl">
          <img src={Appsile} alt="" className="h-10 w-10 rounded-full mr-1" />
          Appsile Shop
        </div>
        <div className="flex items-center">
          <div className="relative">
            <input type="text" placeholder="Search by Product" value={search} onChange={(e) => setSearch(e.target.value)} className="w-72 bg-gray-200 text-lg px-3 py-2" />
            
            {search && (
              <div className="absolute z-50 bg-white w-full max-h-60 overflow-y-auto shadow-lg">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((item, index) => (
                    <div key={`${item.id}-${index}`}  className="p-2 border-b">
                      <h2>{item.product_name}</h2>
                      <p>{item.product_price}</p>
                    </div>
                  ))
                ) : (
                  <p className="p-2 text-gray-500">No product found</p>
                )}
              </div>
            )}
          </div>
          <button onClick={handleLogout} className="border-[2px] ml-5 px-2 py-1 mb-1">
            <TbLogout /> Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
