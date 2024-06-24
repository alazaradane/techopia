import React, { useContext } from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

const ProtectedRoute = () => {
  const { currentUser } = useContext(AuthContext);

  return currentUser?.role === 'admin' ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
