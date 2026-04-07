import { createContext,useContext } from "react";

export const UserDataContext = createContext({
  data : [
    {
      name : "alfez",
      Email : "alfez@gmail.com",
      Password : "1234",
      Numbers : ""
  }
  ],
  addData : () => {},
  updateData : () => {},
  deleteData : () => {}
})  

export const usersData = () =>{
  return useContext(UserDataContext)
}

export const DataProvider = UserDataContext.Provider