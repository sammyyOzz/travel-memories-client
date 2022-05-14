import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Navbar } from './components/navigation/navbar.component';

import Memories from './pages/memories/memories.component';
import Auth from './pages/auth/auth.component';
import { useDispatch } from 'react-redux';
import { getLoggedInUser } from './redux/auth/auth.slice';
import ForgotPassword from './pages/auth/forgotPassword.component';
import ResetPassword from './pages/auth/resetPassword.component';


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getLoggedInUser())
  }, [dispatch])

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Navigate to="/memories" />} />
        <Route index path="memories" element={<Memories />} />
        <Route path="auth" element={<Auth />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
