import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import StudentDashboard from "../pages/studentDashboard/StudentDashboard";
import StudentSubject from "../pages/student_subject/StudentSubject";
import AdminDashboard from "../pages/adminDashboard/AdminDashboard";
import AdminSignInPage from "../pages/adminSignIn/AdminSignInPage";
import LandingPage from "../pages/landingPage/LandingPage";
import AdminStudentsGrades from "../pages/adminStudentgrades/AdminStudentGrades";
import ParentCommunication from "../pages/parents_communication/ParentCommunication";
const AppRouter = (props) => {
  const { user } = props;
  return (
    <div className="appRouter">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/student-dashboard"
          element={<StudentDashboard user={user} />}
        />
        <Route path="/student-subject" element={<StudentSubject />} />
        <Route path="/admin-sign-in" element={<AdminSignInPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard user={user}/>} />
        <Route path="/studentgrades" element={<AdminStudentsGrades />} />
        <Route
          path="/admin-parentcommunication"
          element={<ParentCommunication />}
        />
        <Route exact path="/sign-in" element={<Home />} />
      </Routes>
    </div>
  );
};
export default AppRouter;
