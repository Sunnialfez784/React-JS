import React, {createContext, useEffect, useState } from 'react'
import { BASE_URL } from '../apis';

export const DataContext = createContext();

const DataProvider = ({children}) => {
  const [bikesData, setBikesData] = useState([])
  const [carsData, setCarsData] = useState([])
  const [mobileData, setMobileData] = useState([])
  const [laptopData, setLaptopData] = useState([])
  const [savedProduct, setSavedProduct] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem('savedProduct'));
    return Array.isArray(storedData) ? storedData : [];
  })

  useEffect(() => {
    fetch(`${BASE_URL}/showroom/bikes`)
    .then((res) => res.json())    
    .then(({data}) =>{      
       setBikesData(data)})
  }, [])

  useEffect(() => {
    fetch(`${BASE_URL}/showroom/cars`)
    .then((res) => res.json())    
    .then(({data}) =>{      
       setCarsData(data)})
  }, [])
  
  useEffect(() => {
    fetch(`${BASE_URL}/showroom/mobiles`)
    .then((res) => res.json())    
    .then(({data}) =>{      
       setMobileData(data)})
  }, [])
  
  useEffect(() => {
    fetch(`${BASE_URL}/showroom/laptops`)
    .then((res) => res.json())    
    .then(({data}) =>{      
       setLaptopData(data)})
  }, [])
  
  
  useEffect(() => {
    localStorage.setItem('savedProduct', JSON.stringify(savedProduct))
  }, [savedProduct])
  

  return (
    <DataContext.Provider value={{bikesData,carsData,mobileData,laptopData,savedProduct}} >
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider