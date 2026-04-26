import { useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) ||
      JSON.parse(localStorage.getItem("currentUser")) ||
      null
  );
  const [token, setToken] = useState(localStorage.getItem("accessToken") || "");

  const login = ({ user: nextUser, accessToken }) => {
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

  return (
    <AuthContext.Provider value={{ user, token, isAuthenticated: Boolean(token), login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
