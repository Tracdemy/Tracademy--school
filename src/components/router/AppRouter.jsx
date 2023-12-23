import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import StudentDashboard from "../pages/studentDashboard/StudentDashboard";
import AdminDashboard from "../pages/adminDashboard/AdminDashboard";
import AdminSignInPage from "../pages/adminSignIn/AdminSignInPage";
import LandingPage from "../pages/landingPage/LandingPage";
import { UserContextProvider } from "../context/UserContext";
const AppRouter = (props) => {

  const {user} = props
  return (
    <div className="appRouter">
      <UserContextProvider>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/student-dashboard" element={<StudentDashboard user={user} />} />
        <Route path="/admin-sign-in" element={<AdminSignInPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/landing-page" element={<LandingPage />} />
      </Routes>
      </UserContextProvider>
    </div>
  );
};

export default AppRouter;
