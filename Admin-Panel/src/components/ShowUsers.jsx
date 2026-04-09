import {useState, useEffect} from "react";
import {usersData} from "../context/UserDataContext";
import AddUser from "./AddUser";

import {PencilSquareIcon, TrashIcon, EyeIcon, EyeSlashIcon} from "@heroicons/react/24/solid";

const ShowUsers = () => {
  const {userData, deleteData} = usersData();

  const [isEditMode, setIsEditMode] = useState(false);
  const [visibleId, setVisibleId] = useState(null);
  const [form, setForm] = useState({
    id: null,
    name: "",
    email: "",
    password: "",
    number: "",
  });

  const togglePassword = (id) => {
    setVisibleId(visibleId === id ? null : id);
  };

  const handleUpdateData = (user) => {
    setForm(user);
    setIsEditMode(true);
  };

  useEffect(() => {
    if (isEditMode && form?.image) {
      setPreview(form.image);
    }
  }, [isEditMode, form]);

  return (
    <>
      <div className="px-28">
        <div className="overflow-hidden rounded-xl border border-gray-200 shadow-md">
          <table className="text-black min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="font-semibold text-lg border-b-2">
                <th className="w-48">Name</th>
                <th className="w-60">Email</th>
                <th className="w-60">Password</th>
                <th className="w-60">Phone</th>
                <th className="w-48">Action</th>
              </tr>
            </thead>

            <tbody className="font-medium text-[14px]">
              {userData.map((user) => (
                <tr key={user.id} className="border-b-2 hover:bg-gray-200">
                  <td className="flex gap-1 items-center">
                    <img src={user.image} alt="user" className="w-10 h-10 rounded-full object-cover" />
                    {user.name}
                  </td>
                  <td>{user.email}</td>
                  <td className="flex gap-2">
                    {visibleId === user.id ? user.password : "********"}

                    <button onClick={() => togglePassword(user.id)}>{visibleId === user.id ? <EyeSlashIcon className="w-5 h-5 text-gray-600" /> : <EyeIcon className="w-5 h-5 text-gray-600" />}</button>
                  </td>
                  <td>+91 {user.number}</td>
                  <td className="flex gap-2">
                    <button onClick={() => handleUpdateData(user)} className="w-6 h-6 rounded bg-green-50">
                      <PencilSquareIcon className="w-4 h-4 text-green-700" />
                    </button>
                    <button onClick={() => deleteData(user.id)} className="w-6 h-6 rounded bg-red-50">
                      <TrashIcon className="w-4 h-4 text-red-700" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isEditMode && <AddUser form={form} setIsOpen={setIsEditMode} isEditMode={true} />}
    </>
  );
};

export default ShowUsers;
