import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

import Performance from "../../assets/svg/your_performance.svg";
function PerformanceComponent() {
  return (
    <div>
      <div className="flex gap-2 my-5 items-center">
        <h2 className="text-[#3527D6] font-bold">Your performance</h2>
        <div className="bg-[#3527D6] px-1 py-1">
          <img src={Performance} alt="performance" />
        </div>
      </div>
      <div className="md:h-[345px]">
        <Bar
          data={{
            labels: [
              "Maths",
              "English",
              "Home Eco",
              "Int Science",
              "PA",
              "Social Stud",
              "French",
              "Tech Drawing",
              "Agric Science",
              "Bus Studies",
            ],
            datasets: [
              {
                label: ["Assignment"],
                data: [950, 270, 400, 150, 550, 750, 20, 650, 200, 50],
                backgroundColor: ["#3527D6", "#715FBA"],
              },
              {
                label: ["Test1"],
                data: [20, 800, 550, 250, 230, 850, 150, 300, 600, 950],
                backgroundColor: ["#D8EEBD", "#3527D6"],
              },
              {
                label: ["Test2"],
                data: [600, 200, 100, 245, 250, 530, 600, 500, 650, 1000],
                backgroundColor: ["#715FBA", "#D8EEBD"],
              },
            ],
          }}
        />
      </div>
    </div>
  );
}
export default PerformanceComponent;
