import React, {useEffect, useState} from "react";

const DataContext = ({children}) => {
  const [useData, setUseData] = useState([]);
  const saveData = (data) =>{
    setUseData((prev)=> [{id: Date.now(), ...data}, ...prev])
  }

  const removeData = (data) => {
    setUseData((prev) => {
      return prev.filter((prevData)=> prevData.id !== id);
    })
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((res) => res.json())
    .then((data) => setUseData(data))
  }, [])
  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))

    if(user && user.length > 0){
      setUseData(user)
    }
  }, [])
  
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])
  

  return (
    <DataContext.provider value={useData,saveData,removeData}>
    {children}
    </DataContext.provider>
  )
};

export default DataContext;
