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
import studentGrades from "./assets/material-symbols_bar-chart.png"
import { Link } from "react-router-dom";

function StudentSidebar() {
  return (
    <div>
      <div className="bg-[#3527D6] text-white rounded-[2.5rem] 2xl:w-[200px] h-[580px] min-w-fit">
        <div className="py-5">
          <div className="flex px-4 py-3 gap-2 items-center hover:bg-[#DFDFDF] hover:text-[#3527D6] hover:rounded-xl hover:mx-3  hover:transition hover:delay-300 hover:ease-in-out">
            <span className="bg-[#DFDFDF] py-1 px-1 rounded-full">
              <img src={Dashboard} alt="dashboard" />
            </span>
            <Link to="/student-dashboard">Dashboard</Link>
          </div>
          <div className="flex px-4 py-3 gap-2 items-center hover:bg-[#DFDFDF] hover:text-[#3527D6] hover:rounded-xl hover:mx-3  hover:transition hover:delay-300 hover:ease-in-out">
            <span className="bg-[#DFDFDF] py-1 px-1 rounded-full">
              <img src={Performance} alt="perfomance" />
            </span>
            <Link to="#">Performance</Link>
          </div>
          <div className="flex px-4 py-3 gap-2 items-center hover:bg-[#DFDFDF] hover:text-[#3527D6] hover:rounded-xl hover:mx-3  hover:transition hover:delay-300 hover:ease-in-out">
            <span className="bg-[#DFDFDF] py-1 px-1 rounded-full">
              <img src={Extracurricular} alt="extracurricular" />
            </span>
            <Link to="#">Extracurricular</Link>
          </div>
          <div className="flex px-4 py-3 gap-2 items-center hover:bg-[#DFDFDF] hover:text-[#3527D6] hover:rounded-xl hover:mx-3  hover:transition hover:delay-300 hover:ease-in-out">
            <span className="bg-[#DFDFDF] py-1 px-1 rounded-full">
              <img src={studentGrades} alt="extracurricular" />
            </span>
            <Link to="/studentgrades">Student grades</Link>
          </div>
          <div className="flex px-4 py-3 gap-2 items-center hover:bg-[#DFDFDF] hover:text-[#3527D6] hover:rounded-xl hover:mx-3  hover:transition hover:delay-300 hover:ease-in-out">
            <span className="bg-[#DFDFDF] py-1 px-1 rounded-full">
              <img src={Subject} alt="subject" />
            </span>
            <Link to="#">Subjects</Link>
          </div>
          <div className="flex px-4 py-3 gap-2 items-center hover:bg-[#DFDFDF] hover:text-[#3527D6] hover:rounded-xl hover:mx-3  hover:transition hover:delay-300 hover:ease-in-out">
            <span className="bg-[#DFDFDF] py-1 px-1 rounded-full">
              <img src={Parents} alt="parents" />
            </span>
            <Link to="/admin-parentcommunication">Parents</Link>
          </div>

          <div className="flex px-4 py-3 gap-2 items-center hover:bg-[#DFDFDF] hover:text-[#3527D6] hover:rounded-xl hover:mx-3  hover:transition hover:delay-300 hover:ease-in-out">
            <span className="bg-[#DFDFDF] py-1 px-1 rounded-full">
              <img src={Teachers} alt="teachers" />
            </span>
            <Link to="#">Teachers</Link>
          </div>
          <div className="flex px-4 py-4 gap-2 items-center hover:bg-[#DFDFDF] hover:text-[#3527D6] hover:rounded-xl hover:mx-3  hover:transition hover:delay-300 hover:ease-in-out">
            <span className="bg-[#DFDFDF] py-1 px-1 rounded-full">
              <img src={Finance} alt="finance" />
            </span>
            <Link to="#">Finance</Link>
          </div>
          <div className="flex px-4 py-4 gap-2 items-center hover:bg-[#DFDFDF] hover:text-[#3527D6] hover:rounded-xl hover:mx-3  hover:transition hover:delay-300 hover:ease-in-out">
            <span className="bg-[#DFDFDF] py-1 px-1 rounded-full">
              <img src={Exams} alt="perfomance" />
            </span>
            <Link to="#">Exams</Link>
          </div>
          <div className="flex px-4 py-4 gap-2 items-center hover:bg-[#DFDFDF] hover:text-[#3527D6] hover:rounded-xl hover:mx-3  hover:transition hover:delay-300 hover:ease-in-out">
            <span className="bg-[#DFDFDF] py-1 px-1 rounded-full">
              <img src={Support} alt="support" />
            </span>
            <Link to="#">Support</Link>
          </div>
          <div className="flex px-4 py-4 gap-2 items-center hover:bg-[#DFDFDF] hover:text-[#3527D6] hover:rounded-xl hover:mx-3 hover:transition hover:delay-300 hover:ease-in-out">
            <span className="bg-[#DFDFDF] py-1 px-1 rounded-full">
              <img src={Health} alt="health" />
            </span>
            <Link to="#">Health</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default StudentSidebar;
