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
import Login from './components/Login'
import Register from './components/Register'
import ProtectedRoute from './components/ProtectedRoute'
import Details from './components/Details'
import AddToCard from './components/AddToCard'
import AddProduct from './components/AddProduct'
import Order from './components/Order'
import Profile from './components/Profile'
import Fashion from './pages/Fashion'
import Furniture from './pages/Furniture'
import Sports from './pages/Sports'
import Toys from './pages/Toys'
import Keychain from './pages/Keychain'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex w-full flex-wrap bg-gray-200'>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/Register' element={<Register />} />

        {/* <Route path='/' element={<Home />} />
        <Route path='/cars' element={<Cars />} />
        <Route path='/bikes' element={<Bikes />} />
        <Route path='/laptops' element={<Laptops />} />
        <Route path='/mobiles' element={<Mobiles />} /> */}

        <Route path='/details' element={<ProtectedRoute><Details /></ProtectedRoute>}/>
        <Route path='/addtocard' element={<ProtectedRoute><AddToCard /></ProtectedRoute>}/>
        <Route path='/addproduct' element={<ProtectedRoute><AddProduct /></ProtectedRoute>} />
        <Route path='/orders' element={<ProtectedRoute><Order /></ProtectedRoute>} />
        <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path='/fashion' element={<ProtectedRoute><Fashion /></ProtectedRoute>} />
        <Route path='/furniture' element={<ProtectedRoute><Furniture /></ProtectedRoute>} />
        <Route path='/sports' element={<ProtectedRoute><Sports /></ProtectedRoute>} />
        <Route path='/kids' element={<ProtectedRoute><Toys /></ProtectedRoute>}/>
        <Route path='/keychain' element={<ProtectedRoute><Keychain /></ProtectedRoute>}/>

        <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path='/cars' element={<ProtectedRoute><Cars /></ProtectedRoute>} />
        <Route path='/bikes' element={<ProtectedRoute><Bikes /></ProtectedRoute>} />
        <Route path='/laptops' element={<ProtectedRoute><Laptops /></ProtectedRoute>} />
        <Route path='/mobiles' element={<ProtectedRoute><Mobiles /></ProtectedRoute>} />

        <Route path='*' element={<Errors />} />
      </Routes>
    </div>
  )
}

export default App
