import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Navbar } from './components/navigation/navbar.component';

import Memories from './pages/memories/memories.component';
import Auth from './pages/auth/auth.component';
import { useDispatch } from 'react-redux';
import { getLoggedInUser } from './redux/auth/auth.slice';


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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
