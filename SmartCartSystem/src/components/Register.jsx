import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { BASE_URL } from "../apis";

const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState({});

  const navigate = useNavigate();

  const addUser = (e) => {
    setError("");
    e.preventDefault();

    if (!name || !password || !email || !phone) {
      setError({
        name: !name && "Name required",
        password: !password && "Password required",
        email: !email && "Email required",
        phone: !phone && "Phone required",
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
      name: name.trim(),
      password,
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
    };

    localStorage.setItem("registeredUsers", JSON.stringify([...users, newUser]));

    setName("");
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
        name,
        password,
        email,
        phone,
      }), 
    })
      .then((response) => response.json())
      .then((data) => console.log("Success:", data))
      .catch((error) => console.log("Error:", error));

    console.log({name, email, password, phone});
  };

  return (
    <>
      <div className="flex justify-center text-black items-center w-full h-screen">
        <form onSubmit={addUser} className="h-[430px] w-96 flex p-9 flex-col rounded-md bg-white">
          <h1 className="text-3xl font-semibold mb-5">Register</h1>

          <div className="flex flex-col gap-0.5">
            <div>
              <label htmlFor="" className="text-[12px]">
                User Name
              </label>
              <input type="text" placeholder="Enter Your UserName" className="border mb-2 px-2 py-0.5 w-full rounded-sm bg-white text-[16px]" value={name} onChange={(e) => setName(e.target.value)} />
              {error.name && <p className="text-red-500 text-xs">{error.name}</p>}
            </div>

            <div className="relative w-full">
              <label htmlFor="" className="text-[12px]">
                Password
              </label>
              <input type={visible ? "text" : "password"} placeholder="Enter Your Password" className="border mb-2 px-2 bg-white py-0.5 w-full rounded-sm text-[16px]" value={password} onChange={(e) => setPassword(e.target.value)} />

              <span onClick={() => setVisible(!visible)} className="absolute right-2.5 text-xs text-black top-9 -translate-y-1/2 cursor-pointer">
                <FontAwesomeIcon icon={visible ? faEyeSlash : faEye} />
              </span>
              {error.password && <p className="text-red-500 text-xs">{error.password}</p>}
            </div>

            <div>
              <label htmlFor="" className="text-[12px]">
                Email
              </label>
              <input type="email" placeholder="Enter Your Email" className="border px-2 py-0.5 mb-2 w-full rounded-sm bg-white text-[16px]" value={email} onChange={(e) => setEmail(e.target.value)} />
              {error.email && <p className="text-red-500 text-xs">{error.email}</p>}
            </div>

            <div>
              <label htmlFor="" className="text-[12px]">
                Number
              </label>
              <input type="text" placeholder="Enter Your Number" className="border px-2 bg-white py-0.5 mb-2 w-full rounded-sm text-[16px]" value={phone} onChange={(e) => setPhone(e.target.value)} />
              {error.phone && <p className="text-red-500 text-xs">{error.phone}</p>}
            </div>
          </div>
          <button type="submit" className="mt-6 py-1 rounded-sm bg-slate-500 text-white text-sm">
            Submit
          </button>
          <div className="text-sm flex mt-1 items-center gap-0.5 justify-center">
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