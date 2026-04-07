import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import AddUser  from "./components/AddUser";
import ShowUsers from './components/ShowUsers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-gray-100 h-screen w-full'>
    
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/adduser' element={<AddUser />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/showuser' element={<ShowUsers />} />
      </Routes>
    </div>
  )
}

export default App
