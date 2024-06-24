import { createContext, useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import backendUrl from "../../api/index";


interface User {
  id: number;
  username: string;
  email: string;
  fullname: string,
  password:string,
  role:string,
  image: any
  join_date:string
}


interface AuthContextType {
  currentUser: User | null;
  login: (input: any) => void; 
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  login: () => {},
  logout: () => {}
});

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(JSON.parse(localStorage.getItem("user") || "null"));

  const login = async (input: any) => {
    try {
      const res = await axios.post<User>(`${backendUrl}/auth/login`, input, {
        withCredentials: true
      });
      setCurrentUser(res.data);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const logout = async () => {
    try {
      await axios.post(`${backendUrl}/auth/logout`);
      setCurrentUser(null);
    } catch (error) {
      console.error("Logout error:", error);
      // Handle error state or display error message
    }
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return <AuthContext.Provider value={{ currentUser, login, logout }}>{children}</AuthContext.Provider>;
};
