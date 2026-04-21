import React from 'react'
import Header from './Header'
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { TrashIcon  } from "@heroicons/react/24/solid";

const SaveData = () => {

  const {savedUsers, removeData} = useContext(DataContext);

  const deleteData = (id) =>{
    removeData(id)
  }

  return (
    <>
    <Header/>
      <div className="px-28 py-14">
        <div className="overflow-hidden rounded-md border border-gray-200">
          <table className="text-black min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="font-semibold h-9 border-b-2  text-[13px]">
                <th className="w-48 text-[#5c5a5a]">Name</th>
                <th className="w-48 text-[#5c5a5a]">Email</th>
                <th className="w-48 text-[#5c5a5a]">Phone</th>
                <th className="w-48 text-[#5c5a5a]">Website</th>
                <th className="w-48 text-[#5c5a5a]">Add</th>
              </tr>
            </thead>

            <tbody className="font-medium text-[14px]">
              {savedUsers.map((user) => (
                <tr key={user.id} className="border-b-2 h-11 text-center text-[13px] hover:bg-[#ebebeb]">
                  <td className="">{user.name}</td>
                  <td className="">{user.email}</td>
                  <td className="">{user.phone}</td>
                  <td className="">{user.website}</td>
                  <td className="flex gap-2 justify-center">
                    <button onClick={() => deleteData(user.id)} className="flex items-center px-2 py-2 bg-red-900 text-white gap-1 mt-1.5 rounded-[5px]"><TrashIcon className="w-4 text-white" /> Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default SaveData