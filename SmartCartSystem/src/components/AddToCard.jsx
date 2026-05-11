import React, {useEffect, useState} from "react";
import {TrashIcon} from "@heroicons/react/24/solid";
import Navbar from "./Navbar";
import {Link} from "react-router-dom";
import {useAuth} from "../context/AuthContext";
import {BASE_URL} from "../apis";

const AddToCard = () => {
  const [products, setProducts] = useState([]);

  const {token} = useAuth();

  useEffect(() => {
    fetch(`${BASE_URL}/shops/get-all-cart-item`, {
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
          quantity: 1,
        }));

        setProducts(updatedProducts);
      })
      .catch((err) => console.error(err));
  }, [token]);

  const addBtn = (id) => {
    const updated = products.map((item) => (item.cart_item_id === id ? {...item, quantity: item.quantity + 1} : item));

    setProducts(updated);
  };

  const minusBtn = (id) => {
    const updated = products.map((item) => (item.cart_item_id === id && item.quantity > 1 ? {...item, quantity: item.quantity - 1} : item));

    setProducts(updated);
  };

  const deleteProduct = async (id) => {
    try {
      const res = await fetch(`${BASE_URL}/shops/delete-cart-item/${id}`, {
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

  const subtotal = products.reduce((acc, item) => acc + item.snapshot_price * item.quantity, 0);

  return (
    <>
      <Navbar />

      <div className="bg-gray-200  flex justify-center mt-4 w-full text-black py-10">
        <div className="flex flex-col bg-white w-[1200px] h-[500px] p-5 rounded-lg">
          <h1 style={{fontFamily: "Montserrat Alternates"}} className="text-3xl ml-10 mb-5 font-medium">
            Your Cart
          </h1>

          <div className="flex justify-between">
            <div
              className="w-[700px] max-h-96 overflow-y-auto 
     [&::-webkit-scrollbar]:w-2
     [&::-webkit-scrollbar-track]:bg-gray-100
     [&::-webkit-scrollbar-thumb]:bg-gray-300
     [&::-webkit-scrollbar-thumb]:rounded-full">
              {products.length > 0 ? (
                products.map((item) => (
                  <div key={`${item.cart_item_id}`} className="flex h-32 p-3 justify-between rounded-md mb-4 bg-[#e5e7eba1]">
                    <div className="flex">
                      <img src={item.productImageUrl} alt="" className="h-24 w-24 border object-cover" />

                      <div className="flex flex-col ml-3">
                        <h1 className="font-semibold text-xl">{item.snapshot_name}</h1>

                        <p>{item.productDetails}</p>

                        <h1 className="text-xl font-bold">₹{formatNumber(item.snapshot_price * item.quantity)}</h1>
                      </div>
                    </div>

                    <div className="flex flex-col justify-between">
                      <button onClick={() => deleteProduct(item.cart_item_id)} className="ml-20">
                        <TrashIcon className="w-5 text-red-500" />
                      </button>

                      <div className="h-10 w-24 bg-[#ffffff8b] rounded-lg mt-2 flex justify-between items-center p-1">
                        <button onClick={() => minusBtn(item.cart_item_id)} className="border">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                          </svg>
                        </button>

                        <h1 className="font-semibold text-lg">{item.quantity}</h1>

                        <button onClick={() => addBtn(item.cart_item_id)} className="border">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <h1 className="text-xl font-semibold text-center mt-10">Cart is Empty</h1>
              )}
            </div>

            <div className="h-72 w-96 ml-4 flex flex-col justify-between rounded-md bg-[#e5e7eba1] p-5">
              <div>
                <h1 className="font-semibold text-xl">Order Summary</h1>

                <div className="mt-4">
                  <div className="flex justify-between items-center">
                    <h1>Subtotal</h1>
                    <h1>₹{formatNumber(subtotal)}</h1>
                  </div>

                  <div className="flex justify-between mt-2">
                    <h1>Delivery fee</h1>
                    <h1>₹40.00</h1>
                  </div>

                  <div className="h-[1px] my-3 w-full bg-[#ADADAD24]"></div>

                  <div className="flex justify-between mt-2 font-bold">
                    <h1>Total Amount</h1>
                    <h1>₹{formatNumber(subtotal + 40)}</h1>
                  </div>
                </div>
              </div>

              <Link to="/orders">
                <button className="bg-white w-full p-2 rounded-md font-semibold">Go To Checkout</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToCard;
