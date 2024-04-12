import React from 'react';
import { createBrowserRouter, Outlet, Navigate } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import RegisterPage from './pages/register/RegisterPage';
import LoginPage from './pages/login/LoginPage';
import SearchPage from './pages/search/SearchPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Outlet />,
    children: [
      {
        path : "",
        element: <HomePage />
      },
      {
        path: "login",
        element: <LoginPage />
      },
      {
        path: "register",
        element: <RegisterPage />
      },
      {
        path: "search",
        element: <SearchPage/>
      }
    ]
  }
]);

export default router;
