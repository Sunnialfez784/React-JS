import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {BASE_URL} from "../apis";
import {useAuth} from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [showError, setShowError] = useState("");

  const navigate = useNavigate();
  const {login} = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/users/login-user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      console.log("API DATA:", data);

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      const accessToken = data?.data?.accessToken;

      const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];

      console.log("REGISTERED USERS:", registeredUsers);

      const matchedUser = registeredUsers.find((item) => item.email.trim().toLowerCase() === email.trim().toLowerCase());

      console.log("MATCHED USER:", matchedUser);

      if (!matchedUser) {
        throw new Error("User not found");
      }

      localStorage.setItem("user", JSON.stringify(matchedUser));

      localStorage.setItem("currentUser", JSON.stringify(matchedUser));

      login({
        user: matchedUser,
        accessToken,
      });

      navigate("/", {replace: true});
    } catch (err) {
      console.log(err);
      setShowError(err.message);
    }
  };

  return (
    <>
      {showError && (
        <div role="alert" className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mx-auto w-96 mt-4">
          <strong>Error!</strong> {showError}
        </div>
      )}

      <div className="flex justify-center text-black items-center w-full h-screen">
        <form onSubmit={handleLogin} className="min-h-80 w-96 flex p-10 flex-col rounded-md bg-white shadow-md">
          <h1 className="text-3xl font-semibold text-gray-500 mb-5">Login</h1>

          <div className="flex flex-col gap-1">
            <label className="text-gray-500 text-[12px] mb-1">Email</label>

            <input type="email" placeholder="Enter Your Email" className="text-black border mb-2 px-2 py-1.5 w-full rounded-md bg-white text-[16px]" value={email} onChange={(e) => setEmail(e.target.value)} required />

            <div className="relative w-full">
              <label className="text-gray-500 text-[12px] mb-1">Password</label>

              <input type={visible ? "text" : "password"} placeholder="Enter Your Password" className="text-black border mb-2 px-2 py-1.5 w-full rounded-md bg-white text-[16px]" value={password} onChange={(e) => setPassword(e.target.value)} required />

              <span onClick={() => setVisible(!visible)} className="absolute right-2.5 text-sm text-black top-10 -translate-y-1/2 cursor-pointer">
                <FontAwesomeIcon icon={visible ? faEyeSlash : faEye} />
              </span>
            </div>
          </div>

          <button type="submit" className="mt-6 py-2 rounded-md font-semibold bg-slate-500 hover:bg-slate-600 text-white text-sm">
            Login
          </button>

          <div className="text-sm flex items-center mt-3 gap-1 justify-center">
            Don't have an account?
            <Link to="/register" className="text-blue-500">
              Create one
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
