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

// add routes here, the default route is navigating to main page
function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Navigate replace to="/main" />} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </Router>
  );
}

export default App;

