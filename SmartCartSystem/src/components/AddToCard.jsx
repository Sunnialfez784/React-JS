import React, {useEffect, useState} from "react";
import {TrashIcon} from "@heroicons/react/24/solid";
import Navbar from "./Navbar";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../context/AuthContext";
import {BASE_URL} from "../apis";
import BillingDetails from "../pages/BillingDetails";

const AddToCard = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const {state} = useLocation();
  const {token, addBtn, minusBtn, getQuantity} = useAuth();

  useEffect(() => {
    fetch(`${BASE_URL}/carts/all-cart-item`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);

        const updatedProducts = (res.data || []).map((item) => ({
          ...item,
          checked: false,
        }));

        setProducts(updatedProducts);
      })
      .catch((err) => console.error(err));
  }, [token]);

  const handleCheckbox = (id) => {
    const updated = products.map((item) => (item.cart_item_id === id ? {...item, checked: !item.checked} : item));

    setProducts(updated);
  };

  const subtotal = products.reduce((acc, item) => {
    if (item.checked) {
      return acc + item.snapshot_price * getQuantity(item.productId);
    }

    return acc;
  }, 0);

  const checkOut = async () => {
    try {
      const checkedProduct = products.map((p) => p.checked && p.productId).filter(Boolean);
      console.log(checkedProduct);
      console.log(
        JSON.stringify({
          productIds: checkedProduct,
        }),
      );

      const res = await fetch(`${BASE_URL}/orders/order-items`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productIds: checkedProduct,
        }),
      });

      console.log("products", products);
      console.log(checkedProduct);
      const data = await res.json();
      navigate("/payment", {state: subtotal});
      console.log("Success:", data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const res = await fetch(`${BASE_URL}/carts/delete-cart-item/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await res.json();

      console.log(result);

      if (result.success) {
        const filtered = products.filter((item) => item.cart_item_id !== id);

        setProducts(filtered);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const formatNumber = (num) => {
    return Number(num).toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <>
      <Navbar />

      <div className="flex items-center min-h-screen justify-center w-full ">
        <div className="bg-[#f1f3f6] py-6 px-4 text-black">
          <div className="max-w-[1400px] mx-auto">
            <div className="">
              <BillingDetails />
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-1 bg-white rounded-xl shadow-sm p-5">
                <h2 className="text-2xl font-semibold mb-5">Cart Items</h2>

                <div
                  className="max-h-[350px] overflow-y-auto pr-2
              [&::-webkit-scrollbar]:w-2
              [&::-webkit-scrollbar-track]:bg-gray-100
              [&::-webkit-scrollbar-thumb]:bg-gray-300
              [&::-webkit-scrollbar-thumb]:rounded-full">
                  {products.length > 0 ? (
                    products.map((item) => (
                      <div key={item.cart_item_id} className="flex justify-between items-center bg-[#f8f9fb] border border-gray-200 rounded-xl p-4 mb-4 hover:shadow-md duration-200">
                        <div className="flex gap-4">
                          <input type="checkbox" className="h-3.5 w-3.5" checked={item.checked} onChange={() => handleCheckbox(item.cart_item_id)} />
                          <img src={item.productImageUrl} alt="" className="w-28 h-28 rounded-lg border object-contain bg-white" />

                          <div className="flex flex-col justify-between">
                            <div>
                              <h1 className="font-semibold text-xl">{item.snapshot_name}</h1>

                              <p className="text-gray-500 text-sm mt-1 line-clamp-2">{item.productDetails}</p>
                            </div>

                            <h1 className="text-2xl font-bold mt-3">₹{formatNumber(item.snapshot_price * getQuantity(item.productId))}</h1>
                          </div>
                        </div>

                        <div className="flex flex-col items-end justify-between h-28">
                          <button onClick={() => deleteProduct(item.cart_item_id)} className="p-2 rounded-full hover:bg-red-100 duration-200">
                            <TrashIcon className="w-5 text-red-500" />
                          </button>

                          <div className="flex items-center gap-4 bg-white border rounded-lg px-3 py-2 shadow-sm">
                            <button onClick={() => minusBtn(item.productId)} className="w-7 h-7 border rounded flex items-center justify-center hover:bg-gray-100">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                              </svg>
                            </button>

                            <h1 className="font-semibold text-lg min-w-[20px] text-center">{getQuantity(item.productId)}</h1>

                            <button onClick={() => addBtn(item.productId)} className="w-7 h-7 border rounded flex items-center justify-center hover:bg-gray-100">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="h-[300px] flex items-center justify-center">
                      <h1 className="text-2xl font-semibold text-gray-500">Cart is Empty</h1>
                    </div>
                  )}
                </div>
              </div>

              <div className="w-[380px] sticky top-5">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h1 className="text-2xl font-semibold mb-5">Order Summary</h1>

                  <div className="space-y-4">
                    <div className="flex justify-between text-gray-600">
                      <h1>Subtotal</h1>

                      <h1>₹{formatNumber(subtotal)}</h1>
                    </div>

                    <div className="flex justify-between text-gray-600">
                      <h1>Delivery Fee</h1>

                      <h1>₹40.00</h1>
                    </div>

                    <div className="border-t pt-4 flex justify-between text-xl font-bold">
                      <h1>Total Amount</h1>

                      <h1>₹{formatNumber(subtotal + 40)}</h1>
                    </div>
                  </div>

                  {subtotal > 0 ? (
                    <button onClick={checkOut} className="w-full bg-black text-white py-3 rounded-lg mt-6 font-semibold hover:bg-gray-800 duration-200">
                      Go To Checkout
                    </button>
                  ) : (
                    <button disabled className="w-full bg-black text-white py-3 rounded-lg mt-6 font-semibold hover:bg-gray-800 duration-200">
                      Go To Checkout
                    </button>
                  )}

                  <p className="text-xs text-gray-500 text-center mt-4">Cash on Delivery Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToCard;
