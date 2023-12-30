import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Performance from "../../assets/svg/performance.svg";
import Extracurricular from "../../assets/svg/extracurricullum.svg";
import Subject from "../../assets/svg/subject.svg";
import Parents from "../../assets/svg/people.svg";
import Teachers from "../../assets/svg/teacher.svg";
import Finance from "../../assets/svg/finance.svg";
import Exams from "../../assets/svg/exams.svg";
import Support from "../../assets/svg/support.svg";
import Health from "../../assets/svg/health.svg";
import Dashboard from "../../assets/svg/dashboard.svg";
import studentGrades from "./assets/material-symbols_bar-chart.png";

// Array of objects for the sidebar links
const sidebarLinks = [
  { to: "/admin-dashboard", text: "Dashboard", icon: Dashboard },
  { to: "#", text: "Performance", icon: Performance },
  { to: "#", text: "Extracurricular", icon: Extracurricular },
  { to: "/studentgrades", text: "Student grades", icon: studentGrades },
  { to: "#", text: "Subjects", icon: Subject },
  { to: "/admin-parentcommunication", text: "Parents", icon: Parents },
  { to: "#", text: "Teachers", icon: Teachers },
  { to: "#", text: "Finance", icon: Finance },
  { to: "#", text: "Exams", icon: Exams },
  { to: "#", text: "Support", icon: Support },
  { to: "#", text: "Health", icon: Health },
];

function Sidebar() {
  const location = useLocation();

  return (
    <div>
      <div className="bg-[#3527D6] text-white rounded-[2.5rem] 2xl:w-[200px] h-[580px] min-w-fit">
        <div className="py-5">
          {sidebarLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.to}
              className={`flex px-4 py-3 gap-2 items-center hover:bg-[#DFDFDF] hover:text-[#3527D6] hover:rounded-xl hover:mx-3 hover:transition hover:delay-300 hover:ease-in-out ${
                location.pathname === link.to
                  ? "bg-[#DFDFDF] text-[#3527D6] rounded-xl mx-3 transition delay-300 ease-in-out"
                  : ""
              }`}
            >
              <span className="bg-[#DFDFDF] py-1 px-1 rounded-full">
                <img src={link.icon} alt={link.text} />
              </span>
              {link.text}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
