import React from 'react'
import Header from './Header'
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

const SaveData = () => {

  const {userData, saveData, removeData} = useContext(DataContext);


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
              {userData.map((user) => (
                <tr key={user.id} className="border-b-2 h-11 text-center text-[13px] hover:bg-[#ebebeb]">
                  <td className="">{user.name}</td>
                  <td className="">{user.email}</td>
                  <td className="">{user.phone}</td>
                  <td className="">{user.website}</td>
                  <td className="flex gap-2 justify-center">
                    <button className="h-7 w-12 p-1 bg-red-200 mt-1.5 rounded-md">Delete</button>
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