import React, {useEffect, useState} from "react";
import {PiUserCircle} from "react-icons/pi";
import {useAuth} from "../context/AuthContext";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import {BASE_URL} from "../apis";

const Profile = () => {
  const {user, setUser} = useAuth();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [visible, setVisible] = useState(false);

  const {token} = useAuth()

  console.log(user,"hello");
  useEffect(() => {
    if (user) {
      setFirstName(user.firstName || "");
      setLastName(user.lastName || "");
      setEmail(user.email || "");
      setPhone(user.phone || "");
      setGender(user.gender || "");
    }
  }, [user]);

  const handleUpdate = async (user_id) => {
    try {
      const response = await fetch(`${BASE_URL}/users/edit-user`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          user_id: 13,
          firstName,
          lastName,
          email,
          phone,
          gender,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Success:", data);
    } catch (error) {
      console.error("Error updating data:", error);
    }

    const updatedUser = {
      ...user,
      firstName,
      lastName,
      email,
      phone,
      gender,
    };

    localStorage.setItem("currentUser", JSON.stringify(updatedUser));

    setUser(updatedUser);

    alert("Profile Updated Successfully");
  };

  return (
    <div className="flex justify-center gap-2 flex-col items-center bg-gray-200 w-full min-h-screen py-10">
      <div className="flex gap-6 h-[100px] w-[550px] rounded-md py-3 px-10 bg-white shadow-md">
        <PiUserCircle className="rounded-full bg-black text-white h-20 w-20" />

        <div className="flex flex-col mt-3">
          <h1 className="text-black text-xs">Hello</h1>

          <h1 className="text-black text-2xl font-medium">
            {firstName} {lastName}
          </h1>
        </div>
      </div>

      <div className="bg-white min-h-[320px] w-[550px] rounded-md p-5 shadow-md">
        <div className="flex flex-col gap-0.5">
          <h1 className="text-black font-medium text-[20px] mb-4">Change User Information here</h1>

          <div className="flex gap-4 items-center mb-2">
            <div className="w-[50%]">
              <label className="text-gray-500 text-[12px] mb-1 block">First Name</label>

              <input type="text" placeholder="First name" className="text-black border px-2 py-1.5 w-full rounded-md bg-white text-[16px]" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>

            <div className="w-[50%]">
              <label className="text-gray-500 text-[12px] mb-1 block">Last Name</label>

              <input type="text" placeholder="Last name" className="text-black border px-2 py-1.5 w-full rounded-md bg-white text-[16px]" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
          </div>

          <div className="flex gap-4 items-center mb-2">
            <div className="w-[50%]">
              <label className="text-gray-500 text-[12px] mb-1 block">Email</label>

              <input type="email" placeholder="example@email.com" className="text-black border px-2 py-1.5 w-full rounded-md bg-white text-[16px]" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="w-[50%]">
              <label className=" text-gray-500 text-[12px] mb-1 block">Number</label>

              <input type="text" placeholder="+91xxxxxxxxxx" className="text-black border px-2 py-1.5 w-full rounded-md bg-white text-[16px]" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
          </div>

          <div className="mt-2">
            <label className="text-[12px] font-medium text-gray-700 mb-1 block">Gender</label>

            <div className="flex w-full items-center gap-2">
              <div className="flex items-center h-10 w-[30%] border rounded-md p-2">
                <label className="inline-flex items-center">
                  <input type="radio" name="gender" value="male" checked={gender === "male"} onChange={(e) => setGender(e.target.value)} />

                  <span className="ml-2 text-gray-900">Male</span>
                </label>
              </div>

              <div className="flex items-center h-10 w-[30%] border rounded-md p-2">
                <label className="inline-flex items-center">
                  <input type="radio" name="gender" value="female" checked={gender === "female"} onChange={(e) => setGender(e.target.value)} />

                  <span className="ml-2 text-gray-900">Female</span>
                </label>
              </div>
            </div>
          </div>

          <button type="button" onClick={handleUpdate} className="mt-6 py-2 rounded-md bg-slate-600 hover:bg-slate-700 text-white text-sm">
            Update Information
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
