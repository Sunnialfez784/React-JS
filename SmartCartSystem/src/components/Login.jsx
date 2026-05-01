import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {BASE_URL} from "../apis";
import {useAuth} from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [showError, setShowError] = useState(false);

  const navigate = useNavigate();
  const {login} = useAuth();

  const errors = (
    <div role="alert" data-variant="error">
      <strong>Error!</strong> Please Enter the Right email or Password.
    </div>
  );

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // const res = await fetch(`${BASE_URL}/users/login`, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({email, password}),
      // });

      // const data = await res.json();

      console.log("Response Data:", data);
      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      const accessToken = data.data?.accessToken;
      const user = data.user;

      if (!accessToken) {
        throw new Error("Token not found");
      }

      localStorage.setItem("accessToken", accessToken);
      login({user, accessToken});
      navigate("/", {replace: true});
    } catch (err) {
      console.log(err);
      setShowError(err.message);
      localStorage.removeItem("accessToken");
    }
  };

  return (
    <>
      {showError && errors}
      <div className="flex justify-center text-black items-center w-full h-screen">
        <form
          onSubmit={handleLogin}
          className="min-h-80 w-96 flex p-10 flex-col rounded-md bg-white"
        >
          <h1 className="text-3xl font-semibold text-gray-500 mb-5">Login</h1>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-gray-500 text-[12px] mb-1">
              Email
            </label>
            <input
              type="text"
              placeholder="Enter Your Email"
              className="text-black border mb-2 px-2 py-1.5 w-full rounded-md bg-white text-[16px]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="relative w-full">
              <label htmlFor="" className="text-gray-500 text-[12px] mb-1">
                Password
              </label>
              <input
                type={visible ? "text" : "password"}
                placeholder="Enter Your Password"
                className="text-black border mb-2 px-2 py-1.5 w-full rounded-md bg-white text-[16px]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                onClick={() => setVisible(!visible)}
                className="absolute right-2.5 text-sm text-black top-10 -translate-y-1/2 cursor-pointer"
              >
                <FontAwesomeIcon icon={visible ? faEyeSlash : faEye} />
              </span>
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 py-1 rounded-sm font-semibold bg-slate-500 text-white text-sm"
          >
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
