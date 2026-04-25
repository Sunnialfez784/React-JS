import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { BASE_URL } from "../apis";
import { useAuth } from "../context/AuthProvider";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [showError, setShowError] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    const userData = { email: "test@gmail.com" };

    login(userData);
    navigate("/home");
  }

  const errors = (
    <div role="alert" data-variant="error">
      <strong>Error!</strong> Please Enter the Right email or Password.
    </div>
  );

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("registeredUsers") || "[]");
    const accessToken = JSON.parse(localStorage.getItem("accessToken"))
    const user = users.find((u) => u.email === email.toLowerCase() && u.password === password);
    if(user){
      localStorage.setItem("users", JSON.stringify(accessToken))
    }else{
      accessToken=""
    }

    if (!user) {
      setShowError(errors);
      return; 
    }

    fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }), 
    })
      .then((response) => response.json())
      .then((data) => console.log("Success:", data))
      .catch((error) => console.log("Error:", error));

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("currentUser", JSON.stringify(user));

    navigate("/", {replace: true});
  };


  return (
    <>
    {showError && errors}
      <div className="flex justify-center text-black items-center w-full h-screen">
        <form onSubmit={handleLogin} className="h-80 w-96 flex p-10 flex-col rounded-md bg-white">
          <h1 className="text-3xl text-blue-950 font-semibold mb-5">Login</h1>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-[12px]">
              Email
            </label>
            <input type="text" placeholder="Enter Your Email" className="border bg-white px-2 py-0.5 w-full rounded-sm text-[16px]" value={email} onChange={(e) => setEmail(e.target.value)} />

            <div className="relative w-full">
              <label htmlFor="" className="text-[12px]">
                Password
              </label>
              <input type={visible ? "text" : "password"} placeholder="Enter Your Password" className="border px-2 py-0.5 bg-white w-full rounded-sm text-[16px]" value={password} onChange={(e) => setPassword(e.target.value)} />
              <span onClick={() => setVisible(!visible)} className="absolute right-2.5 text-xs text-black top-9 -translate-y-1/2 cursor-pointer">
                <FontAwesomeIcon icon={visible ? faEyeSlash : faEye} />
              </span>
            </div>
          </div>
          <button type="submit" className="mt-6 py-1 rounded-sm bg-slate-500 text-white text-sm">
            Login
          </button>

          <div className="text-sm flex items-center mt-1 gap-0.5 justify-center">
            Don't have an account?
            <Link to="/register" className="text-xs text-blue-400">
              Create one.
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
