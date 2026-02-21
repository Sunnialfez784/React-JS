import { useEffect, useState } from "react";


function UseStateHook(){
  const [inputValue , setInputValue] = useState("")

  useEffect(() =>{
    console.log("reRendered");
  },[])

  return(
    <div className="flex justify-center align-middle colum flex-col w-72 ml-96 mt-40">
      <input 
        type="text" 
        placeholder="Type something..."
        onChange={(e) => setInputValue(e.target.value)}
        className="border-gray-600 m-5"
      />

      <p className="ml-5 text-white">
        You Typed: <strong>{inputValue}</strong>
      </p>
    </div>
  )
}

export default UseStateHook