import React, {useState} from "react";

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [showForm, setShowForm] = useState(false);

  const product = {
    name: "Stylish Voyager Hoodie",
    price: 49.99,
    description: "A comfortable and stylish hoodie perfect for any adventure. Made with a blend of cotton and polyester for durability and softness.",
    imageUrl: "https://placeholder.com",
    colors: ["Green", "Blue", "Black"],
    sizes: ["XS", "S", "M", "L", "XL"],
  };

  return (
    <div className=" bg-gray-100 flex items-center justify-center p-12">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg flex flex-col md:flex-row">
        {/* Product Image Section */}
        <div className="md:w-1/2 p-4">
          <img src={product.imageUrl} alt={product.name} className="w-full h-auto object-cover rounded-lg shadow-md" />
        </div>

        {/* Product Details Section */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-6">{product.description}</p>

            <div className="mb-6">
              <span className="text-4xl font-bold text-indigo-600">${product.price.toFixed(2)}</span>
            </div>

            {/* Color Selector */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Color</h3>
              <div className="flex space-x-3">
                {product.colors.map((color) => (
                  <button key={color} className={`w-8 h-8 rounded-full border-2 focus:outline-none ${color === "Black" ? "bg-black border-indigo-500" : color === "Blue" ? "bg-blue-600 border-indigo-500" : "bg-green-600 border-indigo-500"}`} aria-label={`Select ${color} color`} />
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Size</h3>
              <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                {product.sizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Add to Cart Section */}
          <div className="flex items-center space-x-4">
            <button onClick={() => setShowForm(true)} className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300">
              Add to Cart
            </button>
            {showForm && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-6 rounded-xl w-80 relative">
                  {/* Close Button */}
                  <button onClick={() => setShowForm(false)} className="absolute top-2 right-3 text-gray-500">
                    ✕
                  </button>

                  <h2 className="text-lg font-semibold mb-4">Enter Details</h2>

                  <form className="flex flex-col gap-3">
                    <input type="text" placeholder="Name" className="border p-2 rounded" />

                    <input type="number" placeholder="Quantity" className="border p-2 rounded" />

                    <button className="bg-green-500 text-white py-2 rounded">Submit</button>
                  </form>
                </div>
              </div>
            )}
            <button className="p-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition duration-300" aria-label="Add to favorites">
              {/* Heart Icon (Heroicons) */}
              <svg className="h-6 w-6 text-gray-400" xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
