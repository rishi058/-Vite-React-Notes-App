import React from 'react';
import { createBrowserRouter, Outlet, Navigate } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import RegisterPage from './pages/register/RegisterPage';
import LoginPage from './pages/login/LoginPage';

const isLoggedIn = () => {
  const token = localStorage.getItem('token');
  return token=="" ? false : true;
};

const ProtectedRoute = ({ children }) => {
  if (!isLoggedIn()) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <ProtectedRoute><HomePage /></ProtectedRoute>
      },
      {
        path: "login",
        element: <LoginPage />
      },
      {
        path: "register",
        element: <RegisterPage />
      }
    ]
  }
]);

export default router;
