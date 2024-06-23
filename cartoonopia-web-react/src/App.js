/**
 *Created with IntelliJ IDEA
 *@project       : cartoonopia-web-react
 *@Description   : cartoonopia App enter
 *@Version       : 1.0.0.0
 *@Create        :2024-06-22
 *@Author        :Jianbin
 */

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';
import Register from './pages/Register';
// add routes here, the default route is navigating to main page
function App() {
  return (
      <Router>
        <Routes>
            <Route path="/" element={<Navigate replace to="/main" />} />
            <Route path="/main" element={<Main/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
        </Routes>
      </Router>
  );
}

export default App;

