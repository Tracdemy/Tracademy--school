import React from "react";
import "./AdminDashboard.css";
import Navbar from "../../navbar/Navbar.js";
import Footer from "../../footer/Footer.js";
import Sidebar from "../../sidebar/Sidebar.jsx";
// import NoticeBar from "../../noticeboard/NoticeBar.jsx";
import Todo from "../../todo/Todo.jsx";
import Calendar from "../../calendar/Calendar.jsx";
import Events from "../../upcoming-events/Events.jsx";
import Overview from "../../overview_box/Overview.jsx";
import StudentChart from "../../charts/StudentChart.jsx";
import SchoolPerformance from "../../charts/SchoolPerformance.jsx";
import SchoolFinance from "../../charts/SchoolFinance.jsx";
import TeachersList from "../../teachers_list/TeachersList.jsx";
import AdminLogout from "../../logout/AdminLogout.jsx";
const AdminDashboard = (props) => {

  const {user} = props
  return (
    <div className="mx-3 md:mx-10">
      <Navbar />
      <div className="flex justify-between">
        <div>
          <Sidebar />
        </div>
        <div>
          <h3 className="my-2 ">Admin OverView</h3>
          <div className="flex gap-3  mb-4">
            <div className="flex gap-5">
              <Overview
                image="./img/box1.png"
                description="No. of students"
                amount={5347}
              />
              <Overview
                image="./img/box2.png"
                description="No. of teachers"
                amount={155}
              />
              <Overview
                image="./img/box3.png"
                description="No. of Non-Teaching staff"
                amount={78}
              />
              <Overview
                image="./img/box4.png"
                description="No. of events"
                amount={40}
              />
            </div>
          </div>
          <div className="flex my-4 justify-between gap-3">
            <StudentChart />
            <TeachersList />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <select className="text-[#3527D6] outline-none shadow mx-3">
              <option>All Classes</option>
              <option>Jss1</option>
              <option>Jss2</option>
              <option>Jss3</option>
              <option>ss1</option>
              <option>ss2</option>
              <option>ss3</option>
            </select>
            <select className="text-[#3527D6] outline-none shadow mx-3">
              <option>Last Month</option>
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>
          </div>
          <Calendar />
          <Events />
        </div>
      </div>
      <div className="flex justify-between my-4">
        <Todo />
        <SchoolPerformance />
        <SchoolFinance />
      </div>
      <div className="flex gap-3">
        <AdminLogout user={user}/>
        <Footer />
      </div>
    </div>
  );
};

export default AdminDashboard;
