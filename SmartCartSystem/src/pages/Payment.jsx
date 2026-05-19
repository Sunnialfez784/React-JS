import React from "react";
import Navbar from "../components/Navbar";
import {useLocation, useNavigate} from "react-router-dom";
import {BASE_URL} from "../apis";
import {useAuth} from "../context/AuthContext";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const subTotal = Number(location?.state || 0);

  const {token} = useAuth();

  const deliveryFee = 40;
  const totalAmount = subTotal + deliveryFee;

  const formatNumber = (num) => {
    return Number(num).toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const handleOrder = async () => {
    try {
      console.log({
        price: Number(subTotal),
        payment: "COD",
      });

      const res = await fetch(`${BASE_URL}/orders/order-payment`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userOrderAmount: Number(totalAmount),
        }),
      });

      const data = await res.json();

      console.log(data);

      if (data.success) {
        alert("Order placed successfully");
        navigate("/orders");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <>
      <Navbar />

      <div className="bg-gray-200 text-black min-h-[76vh] flex justify-center py-10">
        <div className="w-[880px] flex justify-end">
          <div className="w-96 rounded-2xl bg-white p-6 shadow-xl">
            <h1 className="text-2xl font-bold mb-5">Payment Method</h1>

            <div className="border rounded-xl p-4 bg-gray-100">
              <div className="flex items-center gap-3">
                <input type="radio" checked readOnly className="w-4 h-4" />

                <h1 className="font-semibold text-lg">Cash On Delivery</h1>
              </div>

              <p className="text-sm text-gray-600 mt-2">Pay when your order arrives at your doorstep.</p>
            </div>

            <div className="bg-gray-100 rounded-xl p-4 mt-5">
              <h1 className="font-semibold text-lg mb-3">Order Summary</h1>

              <div className="flex justify-between">
                <span>Subtotal</span>

                <span>₹{formatNumber(subTotal)}</span>
              </div>

              <div className="flex justify-between mt-2">
                <span>Delivery Fee</span>

                <span>₹{formatNumber(deliveryFee)}</span>
              </div>

              <div className="h-[1px] bg-gray-300 my-3"></div>

              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>

                <span>₹{formatNumber(totalAmount)}</span>
              </div>
            </div>

            <button onClick={handleOrder} className="bg-black text-white w-full p-3 rounded-xl font-semibold mt-5 hover:bg-gray-800 duration-200">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
