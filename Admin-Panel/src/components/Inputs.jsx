import React from 'react'

const Inputs = () => {
  return (
    <>
      <div>
            <label 
                data-field 
                className="block mb-1 font-medium"
              >
              Name
              <input 
                type="text" 
                name='name'
                value={formData.name} 
                onChange={handleChange} 
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
                placeholder="Enter your Fullname" 
              />    
            </label>
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
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
            Number
            <input 
              type="text"
              name='number'
              value={formData.number} 
              onChange={handleChange} 
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
              placeholder="Number" 
            />
            </label>
            {errors.number && <p className="text-red-500 text-sm mt-1">{errors.number}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
          Add User
          </button>
    </>
  )
}

export default Inputs