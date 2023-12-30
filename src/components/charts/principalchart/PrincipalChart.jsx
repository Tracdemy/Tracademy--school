import Calender from "../../../assets/svg/calender.svg";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { TracademyContext } from "../../../context/TracademyContext";
import { useContext } from "react";

function PrincipalChart() {
  const { personalInfo } = useContext(TracademyContext);

  const Science = [61, 78, 35, 18, 64, 58, 64, 36, 18, 58, 36, 78];
  const Arts = [52, 70, 80, 50, 60, 30, 25, 48, 36, 71, 66, 51];
  const Commercial = [22, 45, 65, 71, 62, 30, 52, 55, 70, 58, 60, 50];

  let data;
  if (personalInfo.department === "Science") {
    data = Science;
  } else if (personalInfo.department === "Art") {
    data = Arts;
  } else if (personalInfo.department === "commercial") {
    data = Commercial;
  } else {
    data = [];
  }

  return (
    <div className=" bg-white  border px-3 py-2 rounded-xl h-[277px]change_width">
      <div className="flex justify-between item-center">
        <h2 className="text-[#3527D6] font-bold text-[20px]">
          {personalInfo.name}'s performance
        </h2>
        <div className="rounded-full bg-[#D8EEBD] py-2 px-[10px]">
          <img src={Calender} alt="calender" />
        </div>
      </div>
      <div>
        <Line
          data={{
            datasets: [
              {
                label: "percentage",
                data: data,
                borderColor: "#3527D6",
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
          }}
        />
      </div>
    </div>
  );
}
export default PrincipalChart;
