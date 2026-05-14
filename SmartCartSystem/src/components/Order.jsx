import React, {useEffect, useState} from "react";
import Navbar from "./Navbar";
import Cars from "../assets/Home/c1.png";
import {CheckCircleIcon, ClockIcon, ChevronRightIcon} from "@heroicons/react/24/solid";
import {useAuth} from "../context/AuthContext";
import {BASE_URL} from "../apis";

const Order = () => {
  // const orders = [
  //   {
  //     id: 1,
  //     image: Cars,
  //     title: "Audi A6",
  //     category: "Luxury Sedan",
  //     price: "₹80,00,000.00",
  //     status: "Delivered",
  //     date: "Delivered on Jan 23",
  //     message: "Your item has been delivered successfully",
  //   },
  //   {
  //     id: 2,
  //     image: Cars,
  //     title: "BMW X5",
  //     category: "SUV",
  //     price: "₹95,00,000.00",
  //     status: "Delivered",
  //     date: "Delivered on Feb 10",
  //     message: "Your item has been delivered successfully",
  //   },
  //   {
  //     id: 3,
  //     image: Cars,
  //     title: "Mercedes C-Class",
  //     category: "Premium Sedan",
  //     price: "₹70,00,000.00",
  //     status: "Pending",
  //     date: "Expected on Mar 02",
  //     message: "Your item is on the way",
  //   },
  // ];

  const orderMessage = [{message: "Your item has been delivered successfully"}];

  const [orders, setOrders] = useState([]);
  const {token} = useAuth();

  useEffect(() => {
    fetch(`${BASE_URL}/shops/complete-order`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then(({data}) => {
        setOrders(data || []);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex flex-col justify-center">
      <Navbar />

      <div className="min-h-screen flex justify-center items-center bg-gray-100 py-10 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-black">My Orders</h1>

            <div className="bg-white shadow-sm border px-4 py-2 rounded-xl">
              <p className="text-sm text-gray-500">Total Orders</p>
              <h2 className="text-xl font-bold text-black">{orders.length}</h2>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {orders.map((order) => (
              <div key={order.order_id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    <div className="bg-gray-100 p-3 rounded-xl">
                      <img src={order.productImageUrl} alt={order.snapshot_name} className="h-24 w-28 object-contain" />
                    </div>

                    <div className="w-80">
                      <h1 className="text-2xl font-semibold text-black">{order.snapshot_name}</h1>

                      <h2 className="text-xl font-bold text-black mt-3">{order.snapshot_price}</h2>
                    </div>
                  </div>

                  <div className="hidden md:flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      {order.status === "Delivered" ? <CheckCircleIcon className="h-5 w-5 text-green-600" /> : <ClockIcon className="h-5 w-5 text-yellow-500" />}

                      <h1 className={`font-semibold ${order.status === "Delivered" ? "text-green-600" : "text-yellow-500"}`}>{order.status}</h1>
                    </div>

                    <p className="text-gray-700 text-sm">{order.order_date}</p>

                    <p className="text-gray-500 text-sm">{order.message}</p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
