import React from "react";
import "./adminstudentgrades.css";
import Navbar from "../../navbar/Navbar.js";
import Footer from "../../footer/Footer.js";
import Sidebar from "../../sidebar/Sidebar.jsx";
// import NoticeBar from "../../noticeboard/NoticeBar.jsx";
import Logout from "../../logout/AdminLogout.jsx";
import Todo from "../../todo/Todo.jsx";
import StudentComponent from "../../student-component/StudentComponent.jsx";
import PersonalInformation from "../../personal-info/PersonalInformation.jsx";
import Result from "../../result/Result.jsx";
import PrincipalChart from "../../charts/principalchart/PrincipalChart.jsx";
import { useContext } from "react";
import { TracademyContext } from "../../../context/TracademyContext.jsx";
import AddStudent from "../../addstudent/AddStudent.jsx";

const AdminStudentsGrades = ({ user }) => {
  const { showAdd } = useContext(TracademyContext);

  return (
    <div className="md:mx-3 2xl:mx-10 px-2">
      <Navbar user={user} />
      <div>
        <div className="flex justify-center 2xl:justify-between gap-3 ml-4 mb-4 change_resolution change_direction">
          <div className="hidden xl:block">
            <Sidebar />
            <Todo />
          </div>
          <StudentComponent />
          <PersonalInformation />
          <div className="flex flex-col gap-5 xl:w-[420px] change_flex change-width w-full">
            <Result />
            <PrincipalChart />
          </div>
        </div>
      </div>

      {showAdd && (
        <div className="overlay ">
          <AddStudent />
        </div>
      )}
      <div className="flex gap-3">
        <div className="hidden xl:block">
          <Logout />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AdminStudentsGrades;
