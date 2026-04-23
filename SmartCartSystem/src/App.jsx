import { useState } from 'react'
import './App.css'
import Cards from './components/Cards'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cars from './pages/Cars'
import Bikes from './pages/Bikes'
import Laptops from './pages/Laptops'
import Mobiles from './pages/Mobiles'
import Navbar from './components/Navbar'
import Errors from './pages/Errors'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex w-full flex-wrap bg-gray-200'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cars' element={<Cars />} />
        <Route path='/bikes' element={<Bikes />} />
        <Route path='/laptops' element={<Laptops />} />
        <Route path='/mobiles' element={<Mobiles />} />

        <Route path='*' element={<Errors />} />
      </Routes>
    </div>
  )
}

export default App
