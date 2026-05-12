import {TrashIcon} from "@heroicons/react/24/solid";
import React, {useEffect, useState} from "react";

const BillingDetails = () => {
  const [fullName, setFullName] = useState("");
  const [country] = useState("India");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [error, setError] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const [savedAddresses, setSavedAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    const registerUsers =
      JSON.parse(localStorage.getItem("registeredUsers")) || [];

    if (currentUser) {
      setEmail(currentUser.email || "");
      setFullName(currentUser.name || "");

      const matchedUser = registerUsers.find(
        (user) => user.email === currentUser.email
      );

      if (matchedUser) {
        setPhone(matchedUser.phone || "");
      }

      const allAddresses =
        JSON.parse(localStorage.getItem("savedAddresses")) || [];

      const userAddresses = allAddresses.filter(
        (item) => item.email === currentUser.email
      );

      setSavedAddresses(userAddresses);

      if (userAddresses.length > 0) {
        setSelectedAddress(userAddresses[0]);
      } else {
        setShowForm(true);
      }
    }
  }, []);

  const deleteAddress = (deleteItem) => {
    const allAddresses =
      JSON.parse(localStorage.getItem("savedAddresses")) || [];

    const updatedAddresses = allAddresses.filter(
      (item) =>
        !(
          item.email === deleteItem.email &&
          item.address === deleteItem.address
        )
    );

    localStorage.setItem(
      "savedAddresses",
      JSON.stringify(updatedAddresses)
    );

    const currentUserAddresses = updatedAddresses.filter(
      (item) => item.email === email
    );

    setSavedAddresses(currentUserAddresses);

    if (
      selectedAddress?.address === deleteItem.address
    ) {
      setSelectedAddress(currentUserAddresses[0] || null);
    }
  };

  const addUserDetails = (e) => {
    e.preventDefault();

    setError({});

    let newError = {};

    if (!fullName) newError.fullName = "Full Name required";
    if (!address) newError.address = "Address required";
    if (!city) newError.city = "City required";
    if (!state) newError.state = "State required";
    if (!pincode) newError.pincode = "Pincode required";

    if (Object.keys(newError).length > 0) {
      setError(newError);
      return;
    }

    const billingData = {
      fullName,
      country,
      address,
      city,
      state,
      pincode,
      email,
      phone,
    };

    const oldAddresses =
      JSON.parse(localStorage.getItem("savedAddresses")) || [];

    oldAddresses.push(billingData);

    localStorage.setItem(
      "savedAddresses",
      JSON.stringify(oldAddresses)
    );

    const currentUserAddresses = oldAddresses.filter(
      (item) => item.email === email
    );

    setSavedAddresses(currentUserAddresses);

    setSelectedAddress(billingData);

    setShowForm(false);

    alert("Address Saved Successfully");
  };

  return (
    <div className="w-full min-h-52 bg-[#f1f3f6] text-black flex justify-center ">
      <div className="w-[800px]">

        {/* Selected Address */}
        {selectedAddress && (
          <div className="bg-white p-5 rounded shadow border">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="font-semibold text-lg">
                  Deliver To
                </h1>

                <p className="text-sm text-gray-600 mt-2">
                  {selectedAddress.fullName},
                  {selectedAddress.address},
                  {selectedAddress.city},
                  {selectedAddress.state} -
                  {selectedAddress.pincode}
                </p>

                <p className="text-sm text-gray-600 mt-1">
                  {selectedAddress.phone}
                </p>
              </div>

              <button
                onClick={() => setShowModal(true)}
                className="text-blue-600 font-medium">
                Change
              </button>
            </div>
          </div>
        )}

        {/* Add Address Form */}
        {showForm && (
          <div className="bg-white p-6 rounded shadow mt-5">
            <h1 className="text-3xl font-bold mb-6">
              Add Address
            </h1>

            <form onSubmit={addUserDetails}>
              <div className="mb-4">
                <label className="text-sm text-gray-500">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border px-3 py-2 rounded mt-1"
                  value={fullName}
                  onChange={(e) =>
                    setFullName(e.target.value)
                  }
                />

                {error.fullName && (
                  <p className="text-red-500 text-xs mt-1">
                    {error.fullName}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-500">
                    Country
                  </label>

                  <input
                    type="text"
                    value={country}
                    readOnly
                    className="w-full border px-3 py-2 rounded mt-1 bg-gray-100"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-500">
                    State
                  </label>

                  <select
                    className="w-full border px-3 py-2 rounded mt-1"
                    value={state}
                    onChange={(e) =>
                      setState(e.target.value)
                    }>
                    <option value="">Select State</option>

                    <option value="Gujarat">
                      Gujarat
                    </option>

                    <option value="Goa">Goa</option>

                    <option value="Maharashtra">
                      Maharashtra
                    </option>
                  </select>
                </div>
              </div>

              <div className="mt-4">
                <label className="text-sm text-gray-500">
                  Address
                </label>

                <input
                  type="text"
                  placeholder="Street Address"
                  className="w-full border px-3 py-2 rounded mt-1"
                  value={address}
                  onChange={(e) =>
                    setAddress(e.target.value)
                  }
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="text-sm text-gray-500">
                    Pincode
                  </label>

                  <input
                    type="number"
                    placeholder="Pincode"
                    className="w-full border px-3 py-2 rounded mt-1"
                    value={pincode}
                    onChange={(e) =>
                      setPincode(e.target.value)
                    }
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-500">
                    City
                  </label>

                  <input
                    type="text"
                    placeholder="City"
                    className="w-full border px-3 py-2 rounded mt-1"
                    value={city}
                    onChange={(e) =>
                      setCity(e.target.value)
                    }
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded mt-6 font-medium">
                Save Address
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Address Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-[500px] rounded-lg p-6">
            <div className="flex items-center justify-between mb-5">
              <h1 className="text-xl font-semibold">
                Select Address
              </h1>

              <button
                onClick={() => setShowModal(false)}
                className="text-2xl">
                ×
              </button>
            </div>

            {/* Add Address Button */}
            <button
              onClick={() => {
                setShowForm(true);
                setShowModal(false);
              }}
              className="w-full border-2 border-dashed border-blue-500 text-blue-600 py-3 rounded mb-5 font-medium">
              + Add New Address
            </button>

            <div className="space-y-4 max-h-[400px] overflow-y-auto">
              {savedAddresses.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedAddress(item)}
                  className={`border p-4 rounded cursor-pointer transition ${
                    selectedAddress?.address ===
                    item.address
                      ? "border-blue-600 bg-blue-50"
                      : "border-gray-300"
                  }`}>
                  <div className="flex justify-between">
                    <div className="flex gap-3">
                      <input
                        type="radio"
                        checked={
                          selectedAddress?.address ===
                          item.address
                        }
                        readOnly
                        className="mt-1"
                      />

                      <div>
                        <h1 className="font-semibold">
                          {item.fullName}
                        </h1>

                        <p className="text-gray-600 text-sm mt-1">
                          {item.address},{item.city},
                          {item.state} -
                          {item.pincode}
                        </p>

                        <p className="text-gray-600 text-sm">
                          {item.phone}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() =>
                        deleteAddress(item)
                      }
                      className="h-fit p-2 border rounded">
                      <TrashIcon className="w-5 text-red-500" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowModal(false)}
              className="w-full bg-blue-600 text-white py-2 rounded mt-5">
              Deliver Here
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BillingDetails;