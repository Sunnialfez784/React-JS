import React, {useState} from "react";
import AddUser from "./AddUser";
import AllUsers from "./ShowUsers";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()

  const handleLogout = () =>{
    navigate("/")
  }

  return (
    <div>
      <div className="text-black py-4 px-10 items-center w-full flex justify-between h-16 bg-gray-300">
        <div className="flex items-center w-52 py-1 text-white pl-2 rounded-3xl bg-[#A49F9F]">
          <img className="h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPkAbNTgZjnt0bon0Zxv8R7RtuEjQfQmDJAA&s" alt="" /> 
          <h1 className="bg-gradient-to-r from-[#423bf6ab] to-[#ea3333b3] bg-clip-text text-transparent font-extrabold mx-2 text-2xl">Sunni Alfez</h1>
        </div>
        <button onClick={handleLogout} className="h-9 w-24 text-lg font-bold bg-red-500">Logout</button>
      </div>
      <div className="w-full flex mt-7 justify-between text-black py-2 px-32">
        <h1 className="text-2xl mt-2 font-bold">Users Admin-Dashboard</h1>
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-[#3D473E6B] text-white flex justify-center font-semibold px-4 py-2 h-10 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg> Add User

        </button>
      </div>
      {isOpen && <AddUser setIsOpen={setIsOpen} />} {/*<-- Conditional Rendering */}
      <AllUsers setIsOpen={setIsOpen} />
    </div>
  );
};

export default Dashboard;
