import React, { useState } from "react";

const App = () => {

  const [title, setTitle] = useState("")
  const [detais, setDetais] = useState("")

  const formSubmitHandler = (e) =>{
    e.preventDefault();
    console.log(title);
    console.log(detais);

    setTitle("");
    setDetais("");
  }

  return (
    <div className="h-screen lg:flex bg-black">
      <form onSubmit={(e)=>{
        formSubmitHandler(e);
      }} className="flex lg:w-1/2 flex-col gap-4 items-start p-10">
        <h1 className="text-3xl font-bold text-white">Add Notes</h1>
          <input 
            type="text"
            placeholder="Enter Nodes Heading" 
            className="px-5 py-2 border-2 font-medium outline-none w-full rounded"
            value={title}
            onChange={(e)=>{
              setTitle(e.target.value)
            }}
          />
          
          <textarea 
            type="text" 
            placeholder="Enter Details" 
            className="px-5 py-2 border-2 w-full font-medium outline-none h-32 rounded flex items-start flex-row"
            value={detais}
            onChange={(e)=>{
              setDetais(e.target.value)
            }}
          />

          <button className="bg-white w-full text-black font-medium outline-none px-5 py-2 rounded">Add Notes</button>
      </form>
      <div className="lg:w-1/2 lg:border-l-2 p-10 ">
        <h1 className="text-3xl font-bold text-white">Recent Notes</h1>
        <div className="flex flex-wrap gap-5 h-full overflow-auto my-5">
          <div className="h-52 w-40 rounded-2xl bg-white"></div>
          <div className="h-52 w-40 rounded-2xl bg-white"></div>
          <div className="h-52 w-40 rounded-2xl bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
