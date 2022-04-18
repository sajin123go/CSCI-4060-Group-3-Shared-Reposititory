import React from 'react';
// import { Navigate } from 'react-router-dom';
import Home from '../components/screens/Home';
import NotFound from '../components/screens/NotFound';

export const ROUTES = [
  { name: 'Home', path: '/', element: <Home /> },
  // if you do not need a 404 Not Found
  // { name: 'Home', path: '*', element: <Navigate replace to="/" /> },
  { name: 'NotFound', path: '*', element: <NotFound /> },
];
