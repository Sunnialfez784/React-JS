import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showError, setShowError] = useState(false);
  
  const admin = email === "alfez@gmail.com" && password === "1234"

  const errors = (<div role="alert" data-variant="error">
  <strong>Error!</strong> Please Enter the Right email or Password.
</div>);

  const add = (e) => {
    e.preventDefault();

    if(admin) {
      navigate('/dashboard')  
    }else{
      setShowError(true);  
    }
  };

  return (
    <>
    {showError && errors}
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form 
        onSubmit={add} 
        className="bg-gray-400 p-8 rounded-2xl shadow-lg w-full max-w-md"
        >
        <h1 className="text-2xl font-bold mb-6 text-center">Login Form</h1>
        <div className="mb-4">
          <label 
            data-field 
            className="block mb-1 font-medium"
          >
          Email
          <input 
            type="email"  
            value={email} 
            onChange={((e) => setEmail(e.target.value))} 
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
            placeholder="you@example.com" 
            required 
          />
          </label>
        </div>

        <div className="mb-4">
          <label 
            data-field 
            className="block mb-1 font-medium"
          >
          Password
          <input 
            type="password" 
            value={password} 
            onChange={((e) => setPassword(e.target.value))} 
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
            placeholder="Password" 
          />
          </label>
        </div>

        <button 
          type="submit" 
          onClick={add}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
        Submit
        </button>
      </form>
    </div>
    </>
  )
}

export default Login