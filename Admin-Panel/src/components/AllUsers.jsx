import React, { useEffect } from "react";

const AllUsers = () => {

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('userData'))
  }, [])
  

  return (
    <div>
      <div className="table">
        <table>
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
            <tr>
              <td>Alice Johnson</td>
              <td>alice@example.com</td>
              <td>Admin</td>
              <td>
                <span className="badge success">Active</span>
              </td>
            </tr>
            <tr>
              <td>Bob Smith</td>
              <td>bob@example.com</td>
              <td>Editor</td>
              <td>
                <span className="badge">Active</span>
              </td>
            </tr>
            <tr>
              <td>Carol White</td>
              <td>carol@example.com</td>
              <td>Viewer</td>
              <td>
                <span className="badge secondary">Pending</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
