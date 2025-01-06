import { BrowserRouter as Router, Route, Routes, useNavigate, Link, createBrowserRouter, RouterProvider } from 'react-router-dom';
import React, { useState } from 'react';
import Header from './common/components/header/Header';
import Home from './common/components/Home';
import SignUp from './common/components/SignUp/SignUp';
import SignIn from './common/components/SignIn/SignIn';
import Profile from './common/components/profile/Profile';
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
