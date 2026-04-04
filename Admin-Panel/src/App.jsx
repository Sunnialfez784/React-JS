import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import AddUser  from "./components/AddUser";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/adduser' element={<AddUser />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
