import React, {useEffect, useState} from "react";

const Payment = () => {
  const [fullName, setFullName] = useState("");
  const [country] = useState("India");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState({});

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const registerUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];

    if (currentUser) {
      setEmail(currentUser.email || "");
      setFullName(currentUser.name || "");

      const matchedUser = registerUsers.find((user) => user.email === currentUser.email);

      if (matchedUser) {
        setPhone(matchedUser.phone || "");
      }
    }
  }, []);

  const addUserDetails = (e) => {
    e.preventDefault();
    setError({});

    let newError = {};

    if (!fullName) newError.fullName = "Full Name required";
    if (!address) newError.address = "Address required";
    if (!city) newError.city = "City required";
    if (!state) newError.state = "State required";
    if (!pincode) newError.pincode = "Pincode required";
    if (!email) newError.email = "Email required";
    if (!phone) newError.phone = "Phone required";

    if (Object.keys(newError).length > 0) {
      setError(newError);
      return;
    }

    console.log("Form Submitted");
  };

  return (
    <div className="w-full min-h-screen bg-white gap-10 flex flex-col items-center p-20">
      <h1 className="text-gray-600 text-5xl font-semibold">CheckOut</h1>

      <div className="flex items-center justify-center gap-x-7 text-black">
        <div>
          <h1 className="font-medium text-xl mb-2">Billing Details</h1>

          <div className="border-t-2">
            <form onSubmit={addUserDetails}>
              <div className="flex flex-col w-[700px] gap-1 py-4">
                <div>
                  <label className="text-gray-500 text-[13px] mb-1">Full Name</label>

                  <input type="text" placeholder="Full Name" className="text-black border mb-2 px-2 py-1.5 w-full rounded-sm bg-white text-[16px]" value={fullName} onChange={(e) => setFullName(e.target.value)} />

                  {error.fullName && <p className="text-red-500 text-xs">{error.fullName}</p>}
                </div>

                <div className="flex gap-2">
                  <div className="w-[50%]">
                    <label className="text-gray-500 text-[12px] mb-1">Country / Region</label>

                    <input type="text" className="text-black border mb-2 px-2 py-1.5 w-full rounded-sm bg-gray-100 text-[16px]" value={country} readOnly />
                  </div>

                  <div className="w-[50%]">
                    <label className="text-gray-500 text-[12px] mb-1">State</label>

                    <select className="text-black border mb-2 px-2 py-2 w-full rounded-sm bg-white text-[16px]" value={state} onChange={(e) => setState(e.target.value)}>
                      <option value="">Select State</option>
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Goa">Goa</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Meghalaya">Meghalaya</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="Haryana">Haryana</option>
                    </select>

                    {error.state && <p className="text-red-500 text-xs">{error.state}</p>}
                  </div>
                </div>

                <div>
                  <label className="text-gray-500 text-[12px] mb-1">Street Address</label>

                  <input type="text" placeholder="House number and street name" className="text-black border mb-2 px-2 py-1.5 w-full rounded-sm bg-white text-[16px]" value={address} onChange={(e) => setAddress(e.target.value)} />

                  {error.address && <p className="text-red-500 text-xs">{error.address}</p>}
                </div>

                <div>
                  <label className="text-gray-500 text-[12px] mb-1">Pincode</label>

                  <input type="number" placeholder="Pincode" className="text-black border mb-2 px-2 py-1.5 w-full rounded-sm bg-white text-[16px]" value={pincode} onChange={(e) => setPincode(e.target.value)} />

                  {error.pincode && <p className="text-red-500 text-xs">{error.pincode}</p>}
                </div>

                <div>
                  <label className="text-gray-500 text-[12px] mb-1">Town / City</label>

                  <input type="text" placeholder="Town / City" className="text-black border mb-2 px-2 py-1.5 w-full rounded-sm bg-white text-[16px]" value={city} onChange={(e) => setCity(e.target.value)} />

                  {error.city && <p className="text-red-500 text-xs">{error.city}</p>}
                </div>

                <div className="flex gap-3 w-full">
                  <div className="w-[50%]">
                    <label className="text-gray-500 text-[12px] mb-1">Email</label>

                    <input type="email" placeholder="example@email.com" className="text-black border mb-2 px-2 py-1.5 w-full rounded-sm bg-gray-100 text-[16px]" value={email} readOnly />

                    {error.email && <p className="text-red-500 text-xs">{error.email}</p>}
                  </div>

                  <div className="w-[50%]">
                    <label className="text-gray-500 text-[12px] mb-1">Number</label>

                    <input type="text" placeholder="+91xxxxxxxxxx" className="text-black border mb-2 px-2 py-1.5 w-full rounded-sm bg-gray-100 text-[16px]" value={phone} readOnly />

                    {error.phone && <p className="text-red-500 text-xs">{error.phone}</p>}
                  </div>
                </div>

                <button type="submit" className="bg-black text-white py-2 rounded-sm mt-3">
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
