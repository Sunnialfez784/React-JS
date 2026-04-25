import React, {createContext, useEffect, useState } from 'react'
import { BASE_URL } from '../apis';

export const DataContext = createContext();

const DataProvider = ({children}) => {
  
  const [savedProduct, setSavedProduct] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem('savedProduct'));
    return Array.isArray(storedData) ? storedData : [];
  })
  
  useEffect(() => {
    localStorage.setItem('savedProduct', JSON.stringify(savedProduct))
  }, [savedProduct])
  
  return (
    <DataContext.Provider value={{savedProduct}}>
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider