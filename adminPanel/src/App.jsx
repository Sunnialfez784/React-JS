import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Login />
      {/* <Dashboard /> */}
    </div>
  )
}

export default App
