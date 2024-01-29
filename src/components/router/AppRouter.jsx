import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import StudentDashboard from "../pages/studentDashboard/StudentDashboard";
import StudentSubject from "../pages/student_subject/StudentSubject";
import AdminDashboard from "../pages/adminDashboard/AdminDashboard";
import AdminSignInPage from "../pages/adminSignIn/AdminSignInPage";
import AdminStudentsGrades from "../pages/adminStudentgrades/AdminStudentGrades";
import ParentCommunication from "../pages/parents_communication/ParentCommunication";
// import NewLandingPage from "../pages/newLandingPage/NewLandingPage";
import ParentStudentGrades from "../pages/parentStudentgrades/ParentStudentGrades";
import StudentParentCommunication from "../pages/student_parents_communication/StudentParentCommunication";
import SignInPage from "../pages/signInPage/SignInPage";
const AppRouter = ({ user }) => {
  return (
    <div className="appRouter">
      <Routes>
        {/* <Route path="/" element={<NewLandingPage />} /> */}
        <Route exact path="/" element={<Home />} />
        <Route
          path="/student-dashboard"
          element={<StudentDashboard user={user} />}
        />
        <Route
          path="/student-subject"
          element={<StudentSubject user={user} />}
        />
        <Route path="/admin-sign-in" element={<AdminSignInPage />} />
        <Route path="/sign" element={<SignInPage />} />
        <Route
          path="/admin-dashboard"
          element={<AdminDashboard user={user} />}
        />
        <Route
          path="/studentgrades"
          element={<AdminStudentsGrades user={user} />}
        />
        <Route
          path="/parent-studentgrades"
          element={<ParentStudentGrades user={user} />}
        />
        <Route
          path="/admin-parentcommunication"
          element={<ParentCommunication user={user} />}
        />
        <Route
          path="/student-parentcommunication"
          element={<StudentParentCommunication user={user} />}
        />
      </Routes>
    </div>
  );
};

export default AppRouter;
