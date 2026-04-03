import React from "react";
import {useState, useContext} from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {setUser} = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({username, password});
  };

  return (
    <div className="flex flex-col gap-14 justify-center items-center">
      <h2 className="font-bold text-5xl">Login</h2>
      <div className="flex flex-col gap-5 items-center">
        <input className="p-1 rounded-md font-medium" type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="UserName" />
        <input className="p-1 rounded-md font-medium" type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button className="h-7 w-16 bg-green-700 rounded-md" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Login;
