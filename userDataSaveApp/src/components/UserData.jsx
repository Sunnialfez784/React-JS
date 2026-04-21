import React, {useContext, useState} from "react";
import {DataContext} from "../context/DataContext";
import Header from "./Header";
import { HiOutlineUserAdd } from "react-icons/hi";
import { IoMdPersonAdd } from "react-icons/io";

const UserData = () => {
  const {userData, savedUsers, saveData} = useContext(DataContext);

  const addBtn = (data) =>{
    saveData(data);
  }

  return (
    <>
    <Header/>
      <div className="px-28 py-14">
        <div className="overflow-hidden rounded-md border border-gray-200">
          <table className="text-black min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="font-semibold h-9 border-b-2  text-[13px]">
                <th className="w-48 text-[#5c5a5a]">Users</th>
                <th className="w-48 text-[#5c5a5a]">Email</th>
                <th className="w-48 text-[#5c5a5a]">Phone</th>
                <th className="w-48 text-[#5c5a5a]">Website</th>
                <th className="w-48 text-[#5c5a5a]">Add</th>
              </tr>
            </thead>

            <tbody className="font-medium text-[14px]">
              {userData.map((user) => (
                <tr key={user.id} className="border-b-2 h-11 text-center text-[13px] hover:bg-[#ebebeb]">
                  <td className="">{user.name}</td>
                  <td className="">{user.email}</td>
                  <td className="">{user.phone}</td>
                  <td className="">{user.website}</td>
                  <td className="flex gap-2 justify-center">
                    <button onClick={()=>addBtn(user)} className="flex items-center px-2 py-2 bg-green-900 text-white gap-1 mt-1.5 rounded-[5px]"><IoMdPersonAdd className="text-base text-white" /> Save</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserData;
