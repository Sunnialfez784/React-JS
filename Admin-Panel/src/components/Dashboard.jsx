import React from "react";
import AddUser from "./AddUser";
import AllUsers from "./ShowUsers";

const Dashboard = () => {

  return (
    <div>
      <div className="text-black py-4 px-10 items-center w-full flex justify-between h-16 bg-gray-300">
        <h1 className="text-2xl font-bold">Admin-Dashboard</h1>
        <button className="h-8 w-16 bg-red-500">Logout</button>
      </div>
      <AddUser />
      <AllUsers />
    </div>

  );
};

export default Dashboard;
