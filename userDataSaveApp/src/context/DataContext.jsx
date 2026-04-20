import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [userData, setUseData] = useState([]);

  const saveData = (data) => {
    setUseData((prev) => [{ id: Date.now(), ...data }, ...prev]);
  };

  const removeData = (id) => {
    setUseData((prev) => prev.filter((item) => item.id !== id));
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUseData(data));
  }, []);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));

    if (storedData && storedData.length > 0) {
      setUseData(storedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  return (
    <DataContext.Provider value={{ userData, saveData, removeData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;