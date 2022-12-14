import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AppLayout from './layouts/AppLayout';
import GuestLayout from './layouts/GuestLayout';

import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import ConfirmPassword from './pages/auth/ConfirmPassword';
import VerifyEmail from './pages/auth/VerifyEmail';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout auth={""} />}>
            <Route path="/" index element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>

          <Route element={<GuestLayout />}>
            <Route path="login" element={<Login status={false} canResetPassword={true} />} />
            <Route path="register" element={<Register />} />
            <Route path="forgot-password" element={<ForgotPassword status={false} />} />
            <Route path="confirm-password" element={<ConfirmPassword />} />
            <Route path="reset-password" element={<ResetPassword token={"token"} email={"info@gmail.com"} />} />
            <Route path="verify-email" element={<VerifyEmail status={''} />} />
          </Route>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;