import React from "react";
import "./StudentDashboard.css";
import Navbar from "../../navbar/Navbar.js";
import Footer from "../../footer/Footer.js";
import Sidebar from "../../sidebar/Sidebar.jsx";
import NoticeBar from "../../noticeboard/NoticeBar.jsx";
import Logout from "../../logout/Logout.jsx";
import CalanderDetails from "../../calander-details/CalanderDetails.jsx";
import Assignment from "../../assignment/Assignment.jsx";
import Calendar from "../../calendar/Calendar.jsx";
// import StudentComponent from "../../student-component/StudentComponent.jsx";
const StudentDashboard = () => {
  return (
    <div className="mx-3 md:mx-10 my-2 ">
      <Navbar />
      <div className="flex justify-between">
        <div>
          <Sidebar />
          <NoticeBar />
          <Logout />
        </div>
        <div>{/* <StudentComponent /> */}</div>
        <div>
          <Calendar />
          <CalanderDetails />
          <Assignment />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StudentDashboard;
