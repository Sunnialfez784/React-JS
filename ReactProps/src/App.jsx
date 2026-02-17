import { useState } from 'react'
import Card from './components/card'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const myObj = {
    name: "Sunnialfez",
    age: 21
  }

  let arr = [1,2,3]
  return (
    <>
    <Card projectName="Modern Pictures" someObj={myObj} myArr={arr} btn="Lern More"/>
    <Card projectName="Modern Designs" btn="Click Here"/>
    </>
  )
}

export default App
