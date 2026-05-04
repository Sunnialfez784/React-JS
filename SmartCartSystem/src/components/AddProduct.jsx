import React, {useEffect, useState} from "react";
import {BASE_URL} from "../apis";

const AddProduct = ({setIsOpen}) => {
  const [picture, setPicture] = useState("");
  const [productName, setProductName] = useState("");
  const [productDetails, setProductDetails] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null);

  const handlePicture = () => {
    const file = e.target.files[0];
    setPicture(URL.createObjectURL(file));
  };

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setPicture(URL.createObjectURL(selectedFile));
  };

  const add = (e) => {
    e.preventDefault();

    useEffect(() => {
      fetch(`${BASE_URL}/shops/add-product`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          picture,
          productName,
          productDetails,
          productPrice,
          category,
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log("Success:", data))
        .catch((error) => console.log("Error:", error));
    }, []);

    if (!productName || !productPrice) {
      alert("Fill required fields");
      return;
    }

    const newProduct = {
      picture,
      productName,
      productDetails,
      productPrice,
      category,
    };

    console.log(newProduct);

    setIsOpen(false);
  };

  return (
    <div className="flex justify-center p-6 mt-6 mb-6">
      <div className="fixed inset-0 flex items-center backdrop-blur justify-center bg-black bg-opacity-50">
        <div className="bg-[#ffffff] p-6 rounded-md shadow-lg w-[470px]">
          <h3 className=" text-black font-medium text-xl mb-4 ">Add Product</h3>
          <form onSubmit={add}>
            <div className="flex gap-3 justify-between items-center">
              <div>
                <label className="mt-3.5 mb-1">Select Product</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)} aria-label="Select an option" className="w-40 border bg-white p-2">
                  <option value="">Select an option</option>
                  <option value="Cars">Cars</option>
                  <option value="Bikes">Bikes</option>
                  <option value="Laptops">Laptops</option>
                  <option value="Mobiles">Mobiles</option>
                </select>
              </div>

              <div className="flex gap-2">
                <label htmlFor="uploadFile" className="flex items-center w-max gap-2 h-10 py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer tracking-wide text-white border border-orange-600 bg-orange-600 hover:bg-orange-700 transition-all focus-within:ring-2 focus-within:ring-orange-500 mx-auto mt-9">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-4 fill-white inline" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M15.241 8 13.26 6.018v8.732a1.25 1.25 0 1 1-2.5 0V6.018L8.777 8a1.25 1.25 0 1 1-1.768-1.768l4.116-4.116a1.25 1.25 0 0 1 1.768 0l4.116 4.116A1.25 1.25 0 0 1 15.24 8z" data-original="#000000" />
                    <path d="M20.009 14c-.69 0-1.25.56-1.25 1.25v3.5h-13.5v-3.5a1.25 1.25 0 1 0-2.5 0V19a2.25 2.25 0 0 0 2.25 2.25h14a2.25 2.25 0 0 0 2.25-2.25v-3.75c0-.69-.56-1.25-1.25-1.25" data-original="#000000" />
                  </svg>
                  Upload
                  <input onChange={handleImageChange} type="file" id="uploadFile" className="sr-only" />
                </label>
                {picture && <img src={picture} alt="preview" className="mt-3 w-24 h-24 object-cover rounded border" />}
              </div>
            </div>

            <label className="text-black text-sm mt-3 mb-1">Product Name</label>
            <input type="text" placeholder="Enter the Product Name" value={productName} onChange={(e) => setProductName(e.target.value)} className="w-full text-sm mb-5 bg-[#f9f8f8f0] px-3 text-black py-2 border rounded" />

            <label className="text-black text-sm mb-1">Product Details</label>
            <input type="text" placeholder="Enter the Product Details" value={productDetails} onChange={(e) => setProductDetails(e.target.value)} className="w-full mb-5 bg-[#f9f8f8f0] px-3 text-black text-sm py-2 border rounded" />

            <label className="text-black text-sms mb-1">Product Price</label>
            <input type="number" placeholder="Enter the Product Price" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} className="w-full mb-5 bg-[#f9f8f8f0] px-3 text-black text-sm py-2 border rounded" />

            <div className="flex justify-between mt-4">
              <button type="button" onClick={() => setIsOpen(false)} className="px-4 py-2 bg-white border rounded">
                Cancel
              </button>

              <button type="submit" className="px-4 py-2 bg-orange-600 text-white rounded">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
