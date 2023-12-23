import OverviewComponent from "./OverviewComponent";
import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

function ViewComponent() {
  return (
    <div>
      <h3 className="font-bold text-[#3527D6] my-3">Student Overview</h3>
      <div className="flex gap-3 justify-between">
        <OverviewComponent
          image="./svg/result.svg"
          description="Keep it up"
          title="Result"
        >
          <div className="flex items-center flex-col h-[120px] relative">
            <Doughnut
              data={{
                labels: [],
                datasets: [
                  {
                    data: [10, 90],
                    backgroundColor: ["white", "#3527D6"],
                  },
                ],
              }}
            />
            <div className="absolute top-11 left-[64px]">
              <p className="flex flex-col justify-center items-center leading-5">
                <span className="font-bold text-[30px]">5th</span>{" "}
                <span className="text-[12px]">Position</span>
              </p>
            </div>
          </div>
        </OverviewComponent>
        <OverviewComponent
          image="./svg/attendance.svg"
          description="No. of classes attended"
          title="Attendance"
        >
          <div className="flex items-center flex-col">
            <h1 className="text-[81px] font-bold  text-[#3527D6]">37</h1>
          </div>
        </OverviewComponent>
        <OverviewComponent image="./svg/timetable.svg" title="Timetable">
          <div className="flex items-center flex-col">
            <img src="./img/timetable.png" alt="time-table" />
          </div>
        </OverviewComponent>
        <OverviewComponent
          image="./svg/attendance.svg"
          description="No of activities involved in"
          title="Extracurricular"
        >
          <div className="flex items-center flex-col h-[120px] relative">
            <Doughnut
              data={{
                labels: [],
                datasets: [
                  {
                    data: [10, 90],
                    backgroundColor: ["#D8EEBD", "#3527D6"],
                  },
                ],
              }}
            />
            <div className="absolute top-7 left-[70px]">
              <span className="font-bold text-[50px]">7</span>
            </div>
          </div>
        </OverviewComponent>
      </div>
    </div>
  );
}
export default ViewComponent;
