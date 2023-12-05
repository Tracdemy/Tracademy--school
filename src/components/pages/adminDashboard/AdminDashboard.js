import React from "react";
import "./AdminDashboard.css";
import Navbar from "../../navbar/Navbar.js";
import Footer from "../../footer/Footer.js";
import Sidebar from "../../sidebar/Sidebar.jsx";
// import NoticeBar from "../../noticeboard/NoticeBar.jsx";
import Logout from "../../logout/Logout.jsx";
import Todo from "../../todo/Todo.jsx";
const AdminDashboard = () => {
  return (
    <div className="mx-3 md:mx-10">
      <Navbar />
      <Sidebar />
      <Todo />
      <div className="flex gap-3">
        <Logout />
        <Footer />
      </div>
    </div>
  );
};

export default AdminDashboard;
