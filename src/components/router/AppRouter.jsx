import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import StudentDashboard from "../pages/studentDashboard/StudentDashboard";
import AdminDashboard from "../pages/adminDashboard/AdminDashboard";
import AdminSignInPage from "../pages/adminSignIn/AdminSignInPage";
import LandingPage from "../pages/landingPage/LandingPage";
import AdminStudentsGrades from "../pages/adminStudentgrades/AdminStudentGrades";
import ParentCommunication from "../pages/parents_communication/ParentCommunication";
const AppRouter = () => {
  return (
    <div className="appRouter">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/admin-sign-in" element={<AdminSignInPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-studentgrades" element={<AdminStudentsGrades />} />
        <Route
          path="/admin-parentcommunication"
          element={<ParentCommunication />}
        />
        <Route path="/landing-page" element={<LandingPage />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
