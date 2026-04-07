import { useState } from "react";
import { usersData } from "../context/UserDataContext";

const ShowUsers = () => {
  const {userData, updateData, deleteData } = usersData();
  const [form, setForm] = useState({
    id : null,
    name : "",
    email : "",
    password : "",
    number : ""
  })

  const handleUpdateData = (user) =>{
    setForm(user)
    document.getElementById("demo-dialog-form").showModal();
  }

  return (
    <div className="pl-28">
      <div className="table">
        <table className="text-black">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.number}</td>
                <td>
                  <button
                    onClick={() => handleUpdateData(user)}
                    className="bg-green-700 mr-1 p-2 font-semibold text-base"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteData(user.id)}
                    className="bg-orange-700 p-2 font-semibold text-base"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ShowUsers;
