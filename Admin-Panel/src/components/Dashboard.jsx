import React from "react";
import AddUser from "./AddUser";
import { useState } from "react";
import AllUsers from "./AllUsers";

const Dashboard = () => {

  const [first, setfirst] = useState('')  
  return (
    <div className="bg-gray-100 h-screen w-full">
      <AddUser />
      <AllUsers />
    </div>

  );
};

export default Dashboard;
