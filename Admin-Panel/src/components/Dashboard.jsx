import React, {useState} from "react";
import AddUser from "./AddUser";
import AllUsers from "./ShowUsers";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate()

  const handleLogout = () =>{
    if(navigate){
      
    }
  }

  return (
    <div>
      <div className="text-black py-4 px-10 items-center w-full flex justify-between h-16 bg-gray-300">
        <h1 className="text-2xl font-bold">Admin-Dashboard</h1>
        <button className="h-8 w-16 bg-red-500">Logout</button>
      </div>
      <div className="w-full flex justify-center p-8">
        <button 
          onClick={() => setIsOpen(true)} 
          className="bg-black text-white font-semibold px-4 py-2 rounded">
          Add User
        </button>
      </div>
      {isOpen && <AddUser setIsOpen={setIsOpen} />}
      <AllUsers setIsOpen={setIsOpen} />
    </div>
  );
};

export default Dashboard;
