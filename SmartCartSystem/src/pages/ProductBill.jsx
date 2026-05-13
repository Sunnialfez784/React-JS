import React from "react";
import Navbar from "../components/Navbar";
import logo from "../assets/Nav/Appsile.png";

const ProductBill = () => {
  return (
    <>
      <Navbar />

      <div className="flex justify-center items-center h-[75vh] w-full">
        <div className="h-[450px] w-[1000px] text-black shadow-lg p-7 bg-white">
          <header className="flex justify-between gap-2 w-full border-b-2">
            <div>
              <img src={logo} alt="" className="h-[90px] ml-3" />
            </div>
            <div className="flex flex-col mr-36 justify-center">
              <h1 className="text-sm">Contact Us: 1800 208 9898 || cs@appsile.com</h1>
              <h1 className="text-2xl leading-none font-medium">Tech Connent Retail Private Limited</h1>
            </div>
            <div className="border-dashed border border-black h-9 p-2">
              <h1>Tax Invoice: FAJO542711501218</h1>
            </div>
          </header>

          <div className="flex gap-28 flex-row w-full border-b-2 mt-1.5">
            <div className="w-80 h-auto ml-4">
              <h1 className="text-lg mt-0 font-medium">Order ID: OD177850071342043107</h1>
              <h1 className="text-lg font-medium">
                soldBy: <span className="font-normal">B-5, Main Market, Lajpat Nagar, Kanpur, Uttar Pradesh 208001</span>
              </h1>
            </div>
            <div>
              <h1 className="font-medium text-lg">billing Address</h1>
              <h1 className="text-base">user</h1>
            </div>
            <div>
              <h1 className="font-medium text-lg">shippingAddress</h1>
              <h1 className="text-base">user</h1>
            </div>
          </div>

          <div className="mt-3">
            <table>
              <th className="border-y-2 w-full">
                <td>Product</td>
                <td>Title</td>
                <td>Qty</td>
                <td>Price</td>
                <td>Tax</td>
                <td>Total</td>
              </th>

              {/* <tr>
                <td>electric board</td>
                <td>IGST: 18.00% | CESS: 0.00%</td>
                <td>5</td>
                <td>359.00</td>
                <td>17.95</td>
                <td>359.0017.95</td>
              </tr> */}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductBill;
