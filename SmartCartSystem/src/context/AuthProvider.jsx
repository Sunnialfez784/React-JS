import {useState} from "react";
import {AuthContext} from "./AuthContext";

export const AuthProvider = ({children}) => {
  const [count, setCount] = useState(1);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || JSON.parse(localStorage.getItem("currentUser")) || null);
  const [token, setToken] = useState(localStorage.getItem("accessToken") || "");

  const addBtn = () => {
    if (count < 7) {
      setCount(count + 1);
    }
  };

  const minusBtn = () => {
    if (count > 1) {
      setCount(count - 1);
    }
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

  return <AuthContext.Provider value={{count, addBtn, minusBtn, user, token, isAuthenticated: Boolean(token), login, logout}}>{children}</AuthContext.Provider>;
};
