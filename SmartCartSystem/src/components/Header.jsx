import React, {useEffect, useState} from "react";
import Appsile from "../assets/Nav/Appsile.png";
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../context/AuthContext";
import {TbLogout} from "react-icons/tb";
import {BASE_URL} from "../apis";
import {CgProfile} from "react-icons/cg";
import {IoIosArrowDown} from "react-icons/io";
import {MagnifyingGlassIcon} from "@heroicons/react/24/solid";

const Header = () => {
  const navigate = useNavigate();
  const {logout} = useAuth();
  const [allProducts, setAllProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [dropDown, setDropDown] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const [cars, bikes, mobiles, laptops] = await Promise.all
        ([fetch(`${BASE_URL}/shops/all-products-by-name?productType=cars`)
          .then((res) => res.json()),
        fetch(`${BASE_URL}/shops/all-products-by-name?productType=bikes`)
          .then((res) => res.json()), 
        fetch(`${BASE_URL}/shops/all-products-by-name?productType=mobiles`)
          .then((res) => res.json()), 
        fetch(`${BASE_URL}/shops/all-products-by-name?productType=laptops`)
          .then((res) => res.json())]);

      setAllProducts([...cars.data, ...bikes.data, ...mobiles.data, ...laptops.data]);
    };

    fetchData();
  }, []);

  const filteredProducts = search ? allProducts.filter((item) => item.product_name?.toLowerCase().includes(search.toLowerCase())) : [];

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("accessToken");

      const res = await fetch(`${BASE_URL}/shops/logout-user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      console.log("Logout response:", data);

      localStorage.removeItem("accessToken");
      logout();
      navigate("/login");
    } catch (err) {
      console.log(err);

      localStorage.removeItem("accessToken");
      logout();
      navigate("/login");
    }
  };

  return (
    <>
      <div className="w-full">
        <div className="flex items-center font-poppins mb-3 font-medium text-2xl">
          <img src={Appsile} alt="" className="h-10 w-10 rounded-full" />
          Appsile Shop
        </div>

        <div className="flex items-center">
          <div className="relative w-full">
            <div className="">
              <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input type="text" placeholder="Search by Product" value={search} onChange={(e) => setSearch(e.target.value)} className="w-full pl-10 pr-3 py-1 border border-blue-400 rounded-lg focus:outline-none bg-white" />
            </div>

            <Link to="/addtocard">
              {search && (
                <div className="absolute z-50 bg-white w-full max-h-60 overflow-y-auto shadow-lg">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((item, index) => (
                      <Link to={`/product/${item.id}`} key={item.id}>
                        <div className="p-2 border-b hover:bg-gray-100">
                          <h2>{item.product_name}</h2>
                          <p>{item.product_price}</p>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <p className="p-2 text-gray-500">No product found</p>
                  )}
                </div>
              )}
            </Link>
          </div>

          <div className="flex items-center">
            <div className="flex relative items-center">
              <button onClick={() => setDropDown(!dropDown)} id="dropdownInformationButton" data-dropdown-toggle="dropdownInformation" className="inline-flex items-center justify-center text-black bg-brand box-border border border-transparent hover:bg-brand-strong w-28 focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button">
                <CgProfile className="h-5 w-5" />
                User
                <svg className="w-3 h-3 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                </svg>
              </button>

              {dropDown && (
                <div id="dropdownInformation" className="z-10 absolute right-0 mt-2  bg-white border rounded shadow-lg w-72">
                  <div className="p-2">
                    <div className="z-10 bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-72">
                      <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Rounded avatar" />
                      <div className="text-sm">
                        <div className="font-medium text-heading">Bonnie Green</div>
                        <div className="truncate text-body">name@flowbite.com</div>
                      </div>
                    </div>
                  </div>

                  <ul className="px-2 pb-2 text-sm text-body font-medium" aria-labelledby="dropdownInformationButton">
                    <li>
                      <Link to="/profile" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
                        <svg className="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" strokeWidth="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        Account
                      </Link>
                    </li>

                    <li>
                      <h1 onClick={handleLogout} href="#" className="inline-flex items-center w-full p-2 text-fg-danger hover:bg-neutral-tertiary-medium rounded">
                        <svg className="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2" />
                        </svg>
                        Sign out
                      </h1>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <Link to="/addtocard">
              {" "}
              <button className="bg-white h-8 w-28 flex rounded text-xs justify-center font-sans font-medium items-center py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0">
                {" "}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4">
                  <path d="M1 1.75A.75.75 0 0 1 1.75 1h1.628a1.75 1.75 0 0 1 1.734 1.51L5.18 3a65.25 65.25 0 0 1 13.36 1.412.75.75 0 0 1 .58.875 48.645 48.645 0 0 1-1.618 6.2.75.75 0 0 1-.712.513H6a2.503 2.503 0 0 0-2.292 1.5H17.25a.75.75 0 0 1 0 1.5H2.76a.75.75 0 0 1-.748-.807 4.002 4.002 0 0 1 2.716-3.486L3.626 2.716a.25.25 0 0 0-.248-.216H1.75A.75.75 0 0 1 1 1.75ZM6 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
                </svg>
                Add To Card
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
