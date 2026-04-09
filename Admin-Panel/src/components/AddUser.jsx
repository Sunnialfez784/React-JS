import React, {useState} from "react";
import {usersData} from "../context/UserDataContext";
import {faEye , faEyeSlash} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddUser = ({isEditMode = false, form, setIsOpen}) => {
  const [formData, setFormData] = useState({
    name: isEditMode ? form?.name : "",
    email: isEditMode ? form?.email : "",
    password: isEditMode ? form?.password : "",
    number: isEditMode ? form?.number : "",
  });

  const [errors, setErrors] = useState({});
  const [visible, setVisible] = useState(false)
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null)

  const {addData, updateData} = usersData();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) =>{
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    if(selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setPreview(imageUrl);
    }
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

  const validate = () => {
    let newErrors = {};

    if (!formData.name) {
      newErrors.name = "Full name is required";
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

    if (!formData.number) {
      newErrors.number = "Number is required";
    } else if (formData.number.length !== 10) {
      newErrors.number = "Number must be 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const add = (e) => {
    e.preventDefault();

    if (validate()) {
      const userObj = {
        ...formData,
        id: isEditMode ? form.id : Date.now(),
        image: preview
      };

      if (isEditMode) {
        updateData(form.id, userObj);
      } else {
        addData(userObj);
      }

      setIsOpen(false);
    }
  };

  return (
    <div className="flex justify-center p-6 mt-6 mb-6">
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-xl shadow-lg w-[400px]">
          <h3 className="text-3xl font-bold mb-4 text-black">Add User</h3>
          <form onSubmit={add}>
            <input className="bg-black mb-2" type="file" onChange={handleFileChange} />
            {preview && (
              <img src={preview} alt="preview" width='200' />
            )}

            <input 
              type="text" 
              name="name"
              value={formData.name} 
              onChange={handleChange} 
              placeholder="Full Name" 
              className="w-full mb-3 px-3 py-2 border rounded" />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="Email" 
              className="w-full mb-3 px-3 py-2 border rounded" />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

            <div className="relative w-[352px]">
            <input 
              type={visible ? 'text' : 'password'}
              name="password" 
              value={formData.password} 
              onChange={handleChange}
              placeholder="Password" 
              className="w-full mb-3 px-3 py-2 border rounded" />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            
            <span
              onClick={() => setVisible(!visible)}
              className="absolute right-2.5 top-5 -translate-y-1/2 cursor-pointer"
            >
              <FontAwesomeIcon icon={visible ? faEyeSlash : faEye} />
            </span>
            </div>

            <input 
              type="text" 
              name="number" 
              value={formData.number} 
              onChange={handleChange} 
              placeholder="Mobile Number" 
              className="w-full mb-3 px-3 py-2 border rounded" />
            {errors.number && <p className="text-red-500 text-sm">{errors.number}</p>}

            <div className="flex justify-between mt-4">
              <button 
                type="button" 
                onClick={() => setIsOpen(false)} 
                className="px-4 py-2 bg-gray-400 rounded">
                Cancel
              </button>

              <button 
                type="submit" 
                className="px-4 py-2 bg-blue-500 text-white rounded">
                {isEditMode ? "Edit" : "Add"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
