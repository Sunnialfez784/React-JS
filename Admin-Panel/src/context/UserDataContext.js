import { createContext,useContext } from "react";

export const UserDataContext = createContext({
  data : [
    {
      Fullname : "alfez",
      Email : "alfez@gmail.com",
      Password : "1234",
      ConfirmPassword : "1234"
  }
  ],
  addData : () => {},
  updateData : () => {},
  deleteData : () => {}
})  

export const userData = () =>{
  return useContext(UserDataContext)
}

export const DataProvider = UserDataContext.Provider