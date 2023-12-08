import Performance from "../../assets/svg/performance.svg";
import Extracurricular from "../../assets/svg/extracurricullum.svg";
import Subject from "../../assets/svg/subject.svg";
import Parents from "../../assets/svg/people.svg";
import Teachers from "../../assets/svg/teacher.svg";
import Finance from "../../assets/svg/finance.svg";
import Exams from "../../assets/svg/exams.svg";
import Support from "../../assets/svg/support.svg";
import Health from "../../assets/svg/health.svg";

function Sidebar() {
  return (
    <div>
      <div className="bg-[#3527D6] text-white rounded-[2.5rem] w-[200px] h-[580px]">
        <div className="py-5">
          <div className="flex px-4 py-4 gap-2 items-center hover:bg-[#DFDFDF] hover:text-[#3527D6] hover:rounded-xl hover:mx-3  hover:transition hover:delay-300 hover:ease-in-out">
            <span className="bg-[#DFDFDF] py-1 px-1 rounded-full">
              <img src={Performance} alt="perfomance" />
            </span>
            <p>Performance</p>
          </div>
          <div className="flex px-4 py-4 gap-2 items-center hover:bg-[#DFDFDF] hover:text-[#3527D6] hover:rounded-xl hover:mx-3  hover:transition hover:delay-300 hover:ease-in-out">
            <span className="bg-[#DFDFDF] py-1 px-1 rounded-full">
              <img src={Extracurricular} alt="extracurricular" />
            </span>
            <p>Extracurricular</p>
          </div>
          <div className="flex px-4 py-4 gap-2 items-center hover:bg-[#DFDFDF] hover:text-[#3527D6] hover:rounded-xl hover:mx-3  hover:transition hover:delay-300 hover:ease-in-out">
            <span className="bg-[#DFDFDF] py-1 px-1 rounded-full">
              <img src={Subject} alt="subject" />
            </span>
            <p>Subjects</p>
          </div>
          <div className="flex px-4 py-4 gap-2 items-center hover:bg-[#DFDFDF] hover:text-[#3527D6] hover:rounded-xl hover:mx-3  hover:transition hover:delay-300 hover:ease-in-out">
            <span className="bg-[#DFDFDF] py-1 px-1 rounded-full">
              <img src={Parents} alt="parents" />
            </span>
            <p>Parents</p>
          </div>

          <div className="flex px-4 py-4 gap-2 items-center hover:bg-[#DFDFDF] hover:text-[#3527D6] hover:rounded-xl hover:mx-3  hover:transition hover:delay-300 hover:ease-in-out">
            <span className="bg-[#DFDFDF] py-1 px-1 rounded-full">
              <img src={Teachers} alt="teachers" />
            </span>
            <p>Teachers</p>
          </div>
          <div className="flex px-4 py-4 gap-2 items-center hover:bg-[#DFDFDF] hover:text-[#3527D6] hover:rounded-xl hover:mx-3  hover:transition hover:delay-300 hover:ease-in-out">
            <span className="bg-[#DFDFDF] py-1 px-1 rounded-full">
              <img src={Finance} alt="finance" />
            </span>
            <p>Finance</p>
          </div>
          <div className="flex px-4 py-4 gap-2 items-center hover:bg-[#DFDFDF] hover:text-[#3527D6] hover:rounded-xl hover:mx-3  hover:transition hover:delay-300 hover:ease-in-out">
            <span className="bg-[#DFDFDF] py-1 px-1 rounded-full">
              <img src={Exams} alt="perfomance" />
            </span>
            <p>Exams</p>
          </div>
          <div className="flex px-4 py-4 gap-2 items-center hover:bg-[#DFDFDF] hover:text-[#3527D6] hover:rounded-xl hover:mx-3  hover:transition hover:delay-300 hover:ease-in-out">
            <span className="bg-[#DFDFDF] py-1 px-1 rounded-full">
              <img src={Support} alt="support" />
            </span>
            <p>Support</p>
          </div>
          <div className="flex px-4 py-4 gap-2 items-center hover:bg-[#DFDFDF] hover:text-[#3527D6] hover:rounded-xl hover:mx-3 hover:transition hover:delay-300 hover:ease-in-out">
            <span className="bg-[#DFDFDF] py-1 px-1 rounded-full">
              <img src={Health} alt="health" />
            </span>
            <p>Health</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
