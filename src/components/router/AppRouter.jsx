import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import StudentDashboard from "../pages/studentDashboard/StudentDashboard";
import StudentSubject from "../pages/student_subject/StudentSubject";
import AdminDashboard from "../pages/adminDashboard/AdminDashboard";
import AdminSignInPage from "../pages/adminSignIn/AdminSignInPage";
import AdminStudentsGrades from "../pages/adminStudentgrades/AdminStudentGrades";
import ParentCommunication from "../pages/parents_communication/ParentCommunication";
import NewLandingPage from "../pages/newLandingPage/NewLandingPage";
import ParentStudentGrades from "../pages/parentStudentgrades/ParentStudentGrades";
import StudentParentCommunication from "../pages/student_parents_communication/StudentParentCommunication";
const AppRouter = () => {
  return (
    <div className="appRouter">
      <Routes>
        <Route path="/" element={<NewLandingPage />} />
        <Route exact path="/sign" element={<Home />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/student-subject" element={<StudentSubject />} />
        <Route path="/admin-sign-in" element={<AdminSignInPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/studentgrades" element={<AdminStudentsGrades />} />
        <Route path="/parent-studentgrades" element={<ParentStudentGrades />} />
        <Route
          path="/admin-parentcommunication"
          element={<ParentCommunication />}
        />
        <Route
          path="/student-parentcommunication"
          element={<StudentParentCommunication />}
        />
      </Routes>
    </div>
  );
};

export default AppRouter;
