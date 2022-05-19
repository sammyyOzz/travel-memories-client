import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Navbar } from './components/navigation/navbar.component';

import { useDispatch } from 'react-redux';
import { getLoggedInUser } from './redux/auth/auth.slice';

import { userToken } from './utils/services/auth.service'

import Memories from './pages/memories/memories.component';
import Auth from './pages/auth/auth.component';
import ForgotPassword from './pages/auth/forgotPassword.component';
import ResetPassword from './pages/auth/resetPassword.component';
import ViewMemory from './pages/viewMemory/viewMemory.component';


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    if (userToken) {
      dispatch(getLoggedInUser())
    }
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
        <Route path="/view-memory/:id" element={<ViewMemory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
