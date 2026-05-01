import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {BASE_URL} from "../apis";

const Register = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("")
  const [phone, setPhone] = useState("");
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState({});

  const navigate = useNavigate();

  const addUser = (e) => {
    setError("");
    e.preventDefault();

    if (!firstName || !lastName || !password || !email || !phone || !gender) {
      setError({
        firstName: !firstName && 'Firstname required',
        lastName: !lastName && "Name required",
        password: !password && "Password required",
        email: !email && "Email required",
        phone: !phone && "Phone required",
        gender: !gender && 'Gender required'
      });
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(email)) {
      setError({email: "Invalid email format"});
      return;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%]).{8,}$/;
    if (!passwordRegex.test(password)) {
      setError({password: "Weak password"});
      return;
    }

    const phoneRegex = /^(\+91[\-\s]?)?[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      setError({phone: "Invalid phone number"});
      return;
    }

    const users = JSON.parse(localStorage.getItem("registeredUsers") || "[]");
    const userExists = users.some((user) => user.email.toLowerCase() === email.toLowerCase() || user.phone === phone);

    if (userExists) {
      alert("User already exists with this email");
      return;
    }

    const newUser = {
      id: Date.now(),
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      password,
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      gender,
    };

    localStorage.setItem("registeredUsers", JSON.stringify([...users, newUser]));

    setFirstName("");
    setLastName("");
    setPassword("");
    setEmail("");
    setPhone("");
    alert("Registration successful. Please login.");
    navigate("/login", {replace: true});

    fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        password,
        email,
        phone,
        gender,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log("Success:", data))
      .catch((error) => console.log("Error:", error));

    console.log({firstName, lastName, email, password, phone});
  };

  return (
    <>
      <div className="flex justify-center items-center w-full h-screen">
        <form onSubmit={addUser} className="min-h-[500px] w-[550px] flex p-9 flex-col rounded-md bg-white">
          <h1 className="text-3xl font-semibold text-gray-500 mb-5">Register</h1>

          <div className="flex flex-col gap-0.5">
            <div className="flex gap-4 items-center mb-2">
              <div className="w-[50%]">
                <label htmlFor="" className="text-gray-500 text-[12px] mb-1">
                  First Name
                </label>
                <input type="text" placeholder="First name" className="text-black border mb-2 px-2 py-1.5 w-full rounded-md bg-white text-[16px]" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                {error.firstName && <p className="text-red-500 text-xs">{error.firstName}</p>}
              </div>
              <div className="w-[50%]">
                <label htmlFor="" className="text-gray-500 text-[12px] mb-1">
                  Last Name
                </label>
                <input type="text" placeholder="Last name" className="text-black border mb-2 px-2 py-1.5 w-full rounded-md bg-white text-[16px]" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                {error.lastName && <p className="text-red-500 text-xs">{error.lastName}</p>}
              </div>
            </div>

            <div className="flex gap-4 items-center mb-2">
              <div className="w-[50%]">
                <label htmlFor="" className="text-gray-500 text-[12px] mb-1">
                  Email
                </label>
                <input type="email" placeholder="example@email.com" className="text-black border mb-2 px-2 py-1.5 w-full rounded-md bg-white text-[16px]" value={email} onChange={(e) => setEmail(e.target.value)} />
                {error.email && <p className="text-red-500 text-xs">{error.email}</p>}
              </div>

              <div className="w-[50%]">
                <label htmlFor="" className=" text-gray-500 text-[12px] mb-1">
                  Number
                </label>
                <input type="text" placeholder="+91xxxxxxxxxx" className="text-black border mb-2 px-2 py-1.5 w-full rounded-md bg-white text-[16px]" value={phone} onChange={(e) => setPhone(e.target.value)} />
                {error.phone && <p className="text-red-500 text-xs">{error.phone}</p>}
              </div>
            </div>

            <div className="">
              <label className="text-[12px] font-medium text-gray-700 mb-1">Gender</label>
              <div className="flex w-full items-center gap-2">
                <div className="space-y-2 flex items-center h-10 w-[30%] border rounded-md p-2">
                  <label className="inline-flex items-center">
                    <input 
                      type="radio" 
                      name="gender" 
                      value="male"
                      checked={gender === "male"}
                      onChange={(e) => setGender(e.target.value)} 
                      className="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                    <span className="ml-2 text-gray-900">Male</span>
                  </label>
                </div>

                <div className="space-y-2 flex items-center h-10 w-[30%] border rounded-md p-2">
                  <label className="inline-flex items-center">
                    <input 
                      type="radio" 
                      name="gender" 
                      value="female"
                      checked={gender === "female"}
                      onChange={(e)=> setGender(e.target.value)} 
                      className="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                    <span className="ml-2 text-gray-900">Female</span>
                  </label>
                </div>
                {error.gender && <p className="text-red-500 text-xs">{error.gender}</p>}s
              </div>
            </div>

            <div className="relative w-[62%] mt-3">
              <label htmlFor="" className="text-[12px] font-medium text-gray-700 mb-1">
                Password
              </label>
              <input type={visible ? "text" : "password"} placeholder="Password" className="text-black border mb-2 px-2 bg-white py-1.5 w-full rounded-md text-[16px]" value={password} onChange={(e) => setPassword(e.target.value)} />

              <span onClick={() => setVisible(!visible)} className="absolute right-2.5 text-sm text-black top-10 -translate-y-1/2 cursor-pointer">
                <FontAwesomeIcon icon={visible ? faEyeSlash : faEye} />
              </span>
              {error.password && <p className="text-red-500 text-xs">{error.password}</p>}
            </div>
          </div>
          <button type="submit" className="mt-6 py-1 rounded-sm bg-slate-500 text-white text-sm">
            Submit
          </button>
          <div className="text-sm text-black flex mt-1 items-center gap-0.5 justify-center">
            Already have an account?
            <Link to="/login" className="text-sm text-blue-400">
              Log in.
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
