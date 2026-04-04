import React, { useState } from 'react'
import { userData } from '../context/UserDataContext'

const AddUser = () => {
  
  const [formData, setFormData] = useState({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  
    const [errors, setErrors] = useState({});
  
    const handleChange = (e) => {
      setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      });
    };
    
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

    const validate = () => {
      let newErrors = {};
  
      if (!formData.fullName) {
        newErrors.fullName = "Full name is required";
      }
  
      if (!formData.email) {
        newErrors.email = "Email is required";
      } else if (!emailRegex.test(formData.email)) {
        newErrors.email = "Invalid email format";
      }

      if (!formData.password) {
        newErrors.password = "Password is required";
      } else if (formData.password.length < 8) {
        newErrors.password = "Password must be at least 8 characters";
      }
  
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = "Confirm your password";
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
  
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    const {addData} = userData()
    const add = (e) => {
    e.preventDefault();

  if (validate()) {
    addData(formData);   
    alert("Form submitted successfully");
    console.log(formData);
  }
};

    
  return (
    <div className="flex justify-center p-6 bg-slate-300 mb-20">
        <button commandfor="demo-dialog-form" command="show-modal" className="bg-black font-semibold text-2xl p-3">
          Open form dialog
        </button>
        <dialog id="demo-dialog-form">
          <form method="dialog" onSubmit={add} className="bg-gray-400 rounded-xl shadow-lg w-full">
            <header>
              <h3 className='font-semibold text-2xl'>Add User</h3>
            </header>
            <div className="vstack">
              <div>
          <label 
              data-field 
              className="block mb-1 font-medium"
            >
            Full Name
            <input 
              type="text" 
              name='fullName'
              value={formData.fullName} 
              onChange={handleChange} 
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
              placeholder="Enter your Fullname" 
            />    
          </label>
          {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
        </div>

        <div className="mb-4">
          <label 
            data-field 
            className="block mb-1 font-medium"
          >
          Email
          <input 
            type="email"
            name='email'
            value={formData.email} 
            onChange={handleChange} 
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2   focus:ring-blue-400" 
            placeholder="you@example.com" 
            required
          />
          </label>
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label 
            data-field 
            className="block mb-1 font-medium"
          >
          Password
          <input 
            type="password"
            name='password' 
            value={formData.password} 
            onChange={handleChange} 
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
            placeholder="Password" 
          />
          </label>
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>

        <div className="mb-4">
          <label 
            data-field 
            className="block mb-1 font-medium"
          >
          Confirm Password
          <input 
            type="password"
            name='confirmPassword'
            value={formData.confirmPassword} 
            onChange={handleChange} 
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
            placeholder="Confirm Password" 
          />
          </label>
          {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
        Add User
        </button>
            </div>
            <footer>
              <button type="button" commandfor="demo-dialog-form" command="close" className="outline px-2 py-1 font-semibold">
                Cancel
              </button>
            </footer>
          </form>
        </dialog>      
    </div>
  )
}

export default AddUser