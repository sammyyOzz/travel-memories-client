import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { getLoggedInUser } from './redux/auth/auth.slice';

import { userToken } from './utils/services/auth.service'
import { Private } from './utils/services/privateRoute.service';

import Auth from './pages/auth/auth.component';
import ForgotPassword from './pages/auth/forgotPassword.component';
import ResetPassword from './pages/auth/resetPassword.component';
import ViewMemory from './pages/viewMemory/viewMemory.component';
import Home from './pages/home/home.component';
import Stripe from './pages/stripe/stripe.component';


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    if (userToken) {
      dispatch(getLoggedInUser())
    }
  }, [dispatch])

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="auth" element={<Auth />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="/view-memory/:id" element={<Private><ViewMemory /></Private>} />
        <Route path="/payment/:id" element={<Stripe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
