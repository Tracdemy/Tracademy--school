import Calender from "../../assets/svg/solar_calendar-bold.svg";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";

function SchoolPerformance() {
  return (
    <div className="border shadow rounded py-3 px-4 w-[550px]">
      <div className="flex justify-between gap-4">
        <h3 className="font-bold">School Performance</h3>
        <div className="flex justify-between gap-4">
          <div className="flex gap-2">
            <span className="rounded-full bg-[#D8EEBD]  px-[12px]"></span>
            <p>Students</p>
          </div>
          <div className="flex gap-2">
            <span className="rounded-full bg-[#3527D6]  px-[12px]"></span>
            <p>Teachers</p>
          </div>
          <div className="bg-[#3527D6] rounded-full px-[6px] flex items-center">
            <img src={Calender} alt="calender" />
          </div>
        </div>
      </div>
      <Line
        data={{
          datasets: [
            {
              label: "Students",
              data: [0, 40, 10, 20, 18, 4, 12, 24, 18, 62, 16, 44],
              borderColor: "#D8EEBD",
              backgroundColor: "#D8EEBD",
            },
            {
              label: "Teachers",
              data: [62, 78, 24, 12, 62, 58, 62, 38, 18, 58, 38, 78],
              borderColor: "#3527D6",
              backgroundColor: "#3527D6",
            },
          ],
        }}
        options={{
          scales: {
            x: {
              type: "category",
              labels: [
                "week 1",
                "week 2",
                "week 3",
                "week 4",
                "week 5",
                "week 6",
                "week 7",
                "week 8",
                "week 9",
                "week 10",
                "week 11",
                "week 12",
              ],
            },
          },
          elements: {
            line: {
              tension: 0.1,
              //   borderCapStyle: "line",
            },
            point: {
              radius: 0,
            },
          },
        }}
      />
    </div>
  );
}
export default SchoolPerformance;
