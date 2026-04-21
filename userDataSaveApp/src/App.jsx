import { useState } from 'react'
import './App.css'

import UserData from './components/UserData'
import SaveData from './components/SaveData'
import Header from './components/Header'

import { Outlet, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<UserData />}/>
        <Route path='/header' element={<Header />}/>
        <Route path='/savedata' element={<SaveData />}/>
      </Routes>
    </>
  )
}

export default App
