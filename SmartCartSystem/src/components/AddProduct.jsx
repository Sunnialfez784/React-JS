import React, { useState } from "react";

const AddProduct = ({setIsOpen}) => {

  const [picture, setPicture] = useState("")
  const [productName, setProductName] = useState("")
  const [productDetails, setProductDetails] = useState("")
  const [productPrice, setProductPrice] = useState("")

  const add = (e) => {
  e.preventDefault();
  
  const newProduct = {
    picture,
    productName,
    productDetails,
    productPrice
  };

  console.log(newProduct);

  setIsOpen(false);
};

  return (
    <div className="flex justify-center p-6 mt-6 mb-6">
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-[#ffffff] p-6 rounded-md shadow-lg w-[470px]">
          <h3 className=" text-black font-medium text-xl mb-4 ">Add Product</h3>
          <form onSubmit={add}>
            <div className="flex gap-3 items-center">
              <div>
                <label className="text-black mt-3 mb-1">Select Product Picture</label>
                <input 
                  type="file" 
                  name="" 
                  id="" 
                  onChange={(e) => setPicture(e.target.files[0])}
                  className="bg-gray-200 text-black" 
                />
              </div>

              <div>
                <label className="mt-3.5 mb-1">Select Product</label>
                <select aria-label="Select an option" className="w-40 border bg-white p-2">
                  <option value="">Select an option</option>
                  <option value="Cars">Cars</option>
                  <option value="Bikes">Bikes</option>
                  <option value="Laptops">Laptops</option>
                  <option value="Mobiles">Mobiles</option>
                </select>
              </div>
            </div>

            <label className="text-black mt-3 mb-1">Product Name</label>
            <input 
              type="text" 
              placeholder="Enter the Product Name" 
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="w-full mb-5 bg-[#f9f8f8f0] px-3 text-black py-2 border rounded" 
            />

            <label className="text-black mb-1">Product Details</label>
            <input 
              type="text" 
              placeholder="Enter the Product Details" 
              value={productDetails}
              onChange={(e) => setProductDetails(e.target.value)}
              className="w-full mb-5 bg-[#f9f8f8f0] px-3 text-black py-2 border rounded" 
            />

            <label className="text-black mb-1">Product Price</label>
            <input 
              type="text" 
              placeholder="Enter the Product Price" 
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              className="w-full mb-5 bg-[#f9f8f8f0] px-3 text-black py-2 border rounded" 
            />

            <div className="flex justify-between mt-4">
              <button type="button" onClick={() => setIsOpen(false)} className="px-4 py-2 bg-gray-400 rounded">
                Cancel
              </button>

              <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
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
