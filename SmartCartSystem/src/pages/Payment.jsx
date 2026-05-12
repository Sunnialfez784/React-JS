import React from "react";
import Navbar from "../components/Navbar";

const Payment = () => {
  const subtotal = 2499;
  const deliveryFee = 40;
  const totalAmount = subtotal + deliveryFee;

  const formatNumber = (num) => {
    return Number(num).toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const handleOrder = () => {
    alert("Order Placed Successfully");
  };

  return (
    <>
      <Navbar />

      <div className="bg-gray-200 text-black min-h-screen flex justify-center py-10">
        <div className="w-[880px] flex justify-end">
          {/* Right Side COD Card */}
          <div className="w-96 h-[480px] rounded-md bg-white p-5 shadow-md">
            <h1 className="text-2xl font-semibold mb-5">
              Payment Method
            </h1>

            {/* Cash On Delivery */}
            <div className="border rounded-md p-4 bg-gray-100">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  checked
                  readOnly
                  className="w-4 h-4"
                />

                <h1 className="font-semibold text-lg">
                  Cash On Delivery
                </h1>
              </div>

              <p className="text-sm text-gray-600 mt-2">
                Pay when your order arrives at your doorstep.
              </p>
            </div>

            {/* Order Summary */}
            <div className="bg-gray-100 rounded-md p-4 mt-5">
              <h1 className="font-semibold text-lg mb-3">
                Order Summary
              </h1>

              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{formatNumber(subtotal)}</span>
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

            <button
              onClick={handleOrder}
              className="bg-black text-white w-full p-3 rounded-md font-semibold mt-5 hover:bg-gray-800 duration-200">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;