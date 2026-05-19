import {useState} from "react";
import {AuthContext} from "./AuthContext";

export const AuthProvider = ({children}) => {
  const [quantities, setQuantities] = useState({});
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || JSON.parse(localStorage.getItem("currentUser")) || null);
  const [token, setToken] = useState(localStorage.getItem("accessToken") || "");

  const addBtn = (productId) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: prev[productId] ? prev[productId] + 1 : 1,
    }));
  };

  const minusBtn = (productId) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: prev[productId] > 1 ? prev[productId] - 1 : 1,
    }));
  };

  const getQuantity = (productId) => {
    return quantities[productId] || 1;
  };

  const login = ({user: nextUser, accessToken}) => {
    if (nextUser) {
      localStorage.setItem("user", JSON.stringify(nextUser));
      localStorage.setItem("currentUser", JSON.stringify(nextUser));
      setUser(nextUser);
    }

    if (accessToken) {
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("isLoggedIn", "true");
      setToken(accessToken);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("currentUser");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("isLoggedIn");
    setUser(null);
    setToken("");
  };

  return <AuthContext.Provider value={{ quantities,addBtn,minusBtn,getQuantity,user,setUser,token,isAuthenticated: Boolean(token),login,logout,}}>{children}</AuthContext.Provider>
};
