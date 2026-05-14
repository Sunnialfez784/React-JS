import React, {useEffect, useState} from "react";
import Navbar from "../components/Navbar";
import logo from "../assets/Nav/Appsile.png";
import {BASE_URL} from "../apis";
import {useAuth} from "../context/AuthContext";

const ProductBill = () => {
  const [bill, setBill] = useState([]);

  const {token} = useAuth();

  useEffect(() => {
    fetch(`${BASE_URL}/shops/order-bill`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then(({data}) => {
        setBill(data || []);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Navbar />

      <div className="min-h-screen w-full bg-gray-100 py-8 px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* {bill.map((order) => ( ))}  */}
          <div className="border-b px-8 py-6">
            <div className="flex flex-col lg:flex-row justify-between gap-6">
              <div className="flex items-center gap-5">
                <img src={logo} alt="logo" className="h-20 object-contain" />

                <div>
                  <h1 className="text-3xl font-bold text-gray-800">Tech Connect Retail Pvt. Ltd.</h1>

                  <p className="text-gray-500 mt-1">Contact Us: 1800 208 9898</p>

                  <p className="text-gray-500">cs@appsile.com</p>
                </div>
              </div>

              <div className="border-2 border-dashed border-gray-400 rounded-xl px-6 py-4 h-fit bg-gray-50">
                <p className="text-sm text-gray-500">Tax Invoice</p>

                <h1 className="text-lg font-semibold text-gray-800">#FAJO542711501218</h1>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 py-6 border-b bg-gray-50">
            <div>
              <h1 className="text-lg font-semibold text-gray-800 mb-2">Order Details</h1>

              <p className="text-gray-700">
                <span className="font-medium">Order ID:</span> OD177850071342043107
              </p>

              <p className="text-gray-700 mt-2 leading-7">
                <span className="font-medium">Sold By:</span> B-5, Main Market, Lajpat Nagar, Kanpur, Uttar Pradesh 208001
              </p>
            </div>

            <div>
              <h1 className="text-lg font-semibold text-gray-800 mb-2">Billing Address</h1>

              <div className="text-gray-700 leading-7">
                <p>User Name</p>
                <p>Street Address</p>
                <p>City, State</p>
                <p>India - 380001</p>
              </div>
            </div>

            <div>
              <h1 className="text-lg font-semibold text-gray-800 mb-2">Shipping Address</h1>

              <div className="text-gray-700 leading-7">
                <p>User Name</p>
                <p>Street Address</p>
                <p>City, State</p>
                <p>India - 380001</p>
              </div>
            </div>
          </div>

          <div className="px-8 py-6 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-300 text-white">
                  <th className="text-left px-5 py-4 rounded-l-xl">Product</th>

                  <th className="text-left px-5 py-4">Description</th>

                  <th className="text-center px-5 py-4">Qty</th>

                  <th className="text-center px-5 py-4">Price</th>

                  <th className="text-center px-5 py-4">Tax</th>

                  <th className="text-center px-5 py-4 rounded-r-xl">Total</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b hover:bg-gray-50 transition">
                  <td className="px-5 py-5 font-medium text-gray-800">Electric Board</td>

                  <td className="px-5 py-5 text-gray-600">IGST: 18.00% | CESS: 0.00%</td>

                  <td className="px-5 py-5 text-center">5</td>

                  <td className="px-5 py-5 text-center">₹359.00</td>

                  <td className="px-5 py-5 text-center">₹17.95</td>

                  <td className="px-5 py-5 text-center font-semibold text-green-600">₹376.95</td>
                </tr>
              </tbody>
            </table>

            <div className="flex justify-end mt-10">
              <div className="w-full max-w-md bg-gray-50 rounded-2xl p-6 shadow-md">
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">Subtotal</span>

                  <span className="font-medium">₹359.00</span>
                </div>

                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">Tax</span>

                  <span className="font-medium">₹17.95</span>
                </div>

                <div className="flex justify-between pt-5">
                  <span className="text-xl font-bold text-gray-800">Grand Total</span>

                  <span className="text-2xl font-bold text-green-600">₹376.95</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-300 text-white text-center py-4 text-sm">Thank you for shopping with Appsile ❤️</div>
        </div>
      </div>
    </>
  );
};

export default ProductBill;
