import OverviewComponent from "./OverviewComponent";
import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import "./viewcomponent.css";

function ViewComponent() {
  return (
    <div>
      <h3 className="font-bold text-[#3527D6] my-3">Student Overview</h3>
      <div className="flex gap-3 justify-between view_resize">
        <OverviewComponent
          image="./svg/result.svg"
          description="Keep it up"
          title="Result"
        >
          <div className="relative">
            <div className="flex items-center flex-col h-[120px]">
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

              <div className="absolute top-[56%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 adjusted_left">
                <p className="flex flex-col justify-center items-center leading-5">
                  <span className="font-bold text-[30px]">5th</span>{" "}
                  <span className="text-[12px]">Position</span>
                </p>
              </div>
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
            <div className="absolute top-[56%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 adjusted_left">
              <span className="font-bold text-[50px]">7</span>
            </div>
          </div>
        </OverviewComponent>
      </div>
    </div>
  );
}
export default ViewComponent;
