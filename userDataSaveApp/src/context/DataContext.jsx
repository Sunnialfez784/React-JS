import React, {createContext, useEffect, useState} from "react";

export const DataContext = createContext();

const DataProvider = ({children}) => {
  const [userData, setUserData] = useState([]);
  const [savedUsers, setSavedUser] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem("savedUsers"));
    return Array.isArray(storedData) ? storedData : [];
  });

  const saveData = (user) => {
    setSavedUser((prev) => {
      const alreadySaved = prev.some((item) => item.id === user.id);

      if (alreadySaved) {
        return prev;
      }
      return [user, ...prev];
    });
  };

  const removeData = (id) => {
    setSavedUser((prev) => prev.filter((item) => item.id !== id));
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("savedUsers", JSON.stringify(savedUsers));
  }, [savedUsers]);

  return <DataContext.Provider value={{userData, savedUsers, saveData, removeData}}>{children}</DataContext.Provider>;
};

export default DataProvider;
