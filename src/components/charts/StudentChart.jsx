import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

function StudentChart() {
  return (
    <div className="border shadow px-4 py-2 rounded-md">
      <div className="flex justify-between">
        <h3 className="font-bold">Students</h3>
        <select className="outline-none">
          <option>SS1</option>
          <option>SS2</option>
          <option>SS3</option>
        </select>
      </div>
      <div className="change_display">
        <Doughnut
          data={{
            labels: ["Girls", "Boys"],
            datasets: [
              {
                data: [40, 60],
                backgroundColor: ["#D8EEBD", "#3527D6"],
              },
            ],
          }}
        />
      </div>
      <div className="flex justify-evenly my-3">
        <div className="flex gap-2">
          <span className="rounded-full bg-[#3527D6]  px-[12px]"></span>
          <p>Boys</p>
        </div>
        <div className="flex gap-2">
          <span className="rounded-full bg-[#D8EEBD] px-[12px]"></span>
          <p>Girls</p>
        </div>
      </div>
    </div>
  );
}
export default StudentChart;
