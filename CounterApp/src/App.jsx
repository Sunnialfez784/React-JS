import { useState } from 'react'
import './App.css'

function App() {
  
  let [counter , setCounter] = useState(0);
  
  const addValue = () =>{
    setCounter(counter + 1)
    console.log("Value Added",counter)
  }

  const dicrisValue = ()=>{
    if(counter > 0){
      setCounter(counter - 1)
    }
    console.log("Value Dicris",counter);
  }

  const reset = () =>{
    setCounter(counter = 0)
  }


  return (
    <>
      <div style={{height:280,width:550,boxShadow:"0px 4px 10px rgba(0,0,0,0.9)",textAlign:'center',padding:15,borderRadius:7,fontFamily: {poppins: ["Poppins", "sans-serif"]}}}>

      <h1 style={{fontVariant:'small-caps'}}>Counter App</h1>
      <h2 style={{fontSize:30,}}>Counter Value: {counter}</h2>

      <button style={{fontSize:15 , margin:20}} onClick={addValue}>Add Value</button>
      <button style={{fontSize:15 , margin:20}} onClick={dicrisValue}>Dicris Value</button>
      <button style={{fontSize:15 , margin:20}} onClick={reset}>Reset Value</button>

      </div>
    </>
  )
}

export default App
