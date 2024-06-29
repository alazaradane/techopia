/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useEffect, useState, ReactNode, FC } from 'react';
import axios from 'axios';
import backendUrl from '../../api/index';
import { useNavigate } from 'react-router-dom';

interface User {
  id: number;
  username: string;
  email: string;
  fullname: string;
  password: string;
  role: string;
  image: React.ReactNode;
  join_date: string;
  profilePic: string;  // Add profilePic here
}

interface AuthContextType {
  currentUser: User | null;
  login: (input: React.ReactNode, callback: () => void) => void;
  logout: () => void;
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  login: () => {},
  logout: () => {},
  setCurrentUser: () => {}
});

export const AuthContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(
    JSON.parse(localStorage.getItem('user') || 'null')
  );
  const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(false)

  const login = async (input: React.ReactNode, callback: () => void) => {
    try {
      const res = await axios.post<User>(`${backendUrl}/auth/login`, input, {
        withCredentials: true,
      });
      setCurrentUser(res.data);
      callback();
      setIsLogin(true)
      navigate('/')

    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const logout = async () => {
    try {
      await axios.post(`${backendUrl}/auth/logout`);
      setCurrentUser(null);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
