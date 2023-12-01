import React from "react";
import "./AdminDashboard.css";
import Navbar from "../../navbar/Navbar.js";
import Footer from "../../footer/Footer.js";
const AdminDashboard = () => {
  return (
    <div className="mx-3 md:mx-10">
      <Navbar />
      <Footer />
    </div>
  );
};

export default AdminDashboard;
