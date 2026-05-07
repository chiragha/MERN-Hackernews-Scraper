import { createContext, useContext, useState, useEffect } from "react";
import api from "../api/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // login
const login = async (email, password) => {
  const { data } = await api.post("/auth/login", {
    email,
    password,
  });

  localStorage.setItem("token", data.token);
  setUser(data.user); 
};

  // register
  const register = async (name, email, password) => {
    const { data } = await api.post("/auth/register", {
      name,
      email,
      password,
    });

    localStorage.setItem("token", data.token);
    setUser(data.user);
  };

  // logout
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  // load user (optional but good)
  const loadUser = async () => {
    try {
      const { data } = await api.get("/auth/me");
      setUser(data.user);
    } catch (err) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, login, register, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);