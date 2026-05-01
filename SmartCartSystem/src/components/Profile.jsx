import React, { useState } from "react";

const Profile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="flex justify-center gap-2 flex-col items-center bg-gray-200 w-full h-screen">
      <div className="h-[120px] w-[550px] rounded-md bg-white">

      </div>

      <div className="bg-white h-[320px] w-[550px] rounded-md p-5 shadow-md backdrop-blur-3xl">
        <div className="flex flex-col gap-0.5">
          <div className="flex gap-4 items-center mb-2">
            <div className="w-[50%]">
              <label htmlFor="" className="text-gray-500 text-[12px] mb-1">
                First Name
              </label>
              <input type="text" placeholder="First name" className="text-black border mb-2 px-2 py-1.5 w-full rounded-md bg-white text-[16px]" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div className="w-[50%]">
              <label htmlFor="" className="text-gray-500 text-[12px] mb-1">
                Last Name
              </label>
              <input type="text" placeholder="Last name" className="text-black border mb-2 px-2 py-1.5 w-full rounded-md bg-white text-[16px]" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
          </div>

          <div className="flex gap-4 items-center mb-2">
            <div className="w-[50%]">
              <label htmlFor="" className="text-gray-500 text-[12px] mb-1">
                Email
              </label>
              <input type="email" placeholder="example@email.com" className="text-black border mb-2 px-2 py-1.5 w-full rounded-md bg-white text-[16px]" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="w-[50%]">
              <label htmlFor="" className=" text-gray-500 text-[12px] mb-1">
                Number
              </label>
              <input type="text" placeholder="+91xxxxxxxxxx" className="text-black border mb-2 px-2 py-1.5 w-full rounded-md bg-white text-[16px]" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
          </div>

          <div className="">
            <label className="text-[12px] font-medium text-gray-700 mb-1">Gender</label>
            <div className="flex w-full items-center gap-2">
              <div className="space-y-2 flex items-center h-10 w-[30%] border rounded-md p-2">
                <label className="inline-flex items-center">
                  <input type="radio" name="gender" value="male" checked={gender === "male"} onChange={(e) => setGender(e.target.value)} className="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                  <span className="ml-2 text-gray-900">Male</span>
                </label>
              </div>
              <div className="space-y-2 flex items-center h-10 w-[30%] border rounded-md p-2">
                <label className="inline-flex items-center">
                  <input type="radio" name="gender" value="female" checked={gender === "female"} onChange={(e) => setGender(e.target.value)} className="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                  <span className="ml-2 text-gray-900">Female</span>
                </label>
              </div>
            </div>
          </div>
          <button type="submit" className="mt-6 py-1 rounded-sm bg-slate-500 text-white text-sm">
            Update Information
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
