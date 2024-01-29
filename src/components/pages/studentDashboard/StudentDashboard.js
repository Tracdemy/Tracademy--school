import React from "react";
import "./StudentDashboard.css";
import Navbar from "../../navbar/Navbar.js";
import Footer from "../../footer/Footer.js";
import NoticeBar from "../../noticeboard/NoticeBar.jsx";
import Logout from "../../logout/StudentLogOut.jsx";
import CalanderDetails from "../../calander-details/CalanderDetails.jsx";
import Assignment from "../../assignment/Assignment.jsx";
import Calendar from "../../calendar/Calendar.jsx";
import Recommended from "../../recommended/Recommended.jsx";
import ViewComponent from "../../studentoverview_component/ViewComponent.jsx";
import Result from "../../result/Result.jsx";
import StudentSidebar from "../../studentSidebar/StudentSidebar.jsx";
import StudentNavbar from "../../navbar/StudentNavbar.jsx";

// import StudentComponent from "../../student-component/StudentComponent.jsx";
const StudentDashboard = ({ user }) => {
  // console.log(user);
  return (
    <div className="mx-3 my-2">
      <StudentNavbar user={user} />
      <div className="flex flex-col items-center lg:flex-row justify-between gap-2">
        <div className="hidden xl:block">
          <StudentSidebar />
          <NoticeBar />
          <Logout user={user} />
        </div>

        <div className="overview md:w-[750px] 2xl:w-[800px] mx-5">
          <ViewComponent />
          <div className="my-3">
            <Result />
          </div>
          <Recommended />
        </div>
        <div className="flowing md:w-[500px] lg:w-full">
          <Calendar />
          <CalanderDetails />
          <Assignment />
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
