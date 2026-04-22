import React, { useEffect, useState } from 'react'

const DataContext = () => {
  
  const [carsData, setCarsData] = useState([])
  const [savedProduct, setSavedProduct] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem('savedProduct'));
    return Array.isArray(storedData) ? storedData : [];
  })


  const cars = fetch("https://myfakeapi.com/api/cars/")
  useEffect(() => {
    cars.then((res) => res.json())
    .then((data) => setCarsData(data))
  }, [])
  
  useEffect(() => {
    localStorage.setItem('savedProduct', JSON.stringify(savedProduct))
  }, [savedProduct])
  

  return (
    <div></div>
  )
}

export default DataContext