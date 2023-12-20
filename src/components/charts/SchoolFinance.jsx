import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { useState } from "react";
import ArrowBlack from "../../assets/svg/side_arrow_black.svg";
import ArrowWhite from "../../assets/svg/side_arrow_white.svg";

function SchoolFinance() {
  const [activeButton, setActiveButton] = useState("weekly");

  const handleClick = (button) => {
    setActiveButton(button);
  };

  let label;
  let data1;
  let data2;
  const weeks = ["SUN", "MON", "TUES", "WEDS", "THURS", "FRI", "SAT"];
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUNE",
    "JULY",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const dataWeek1 = [750, 250, 300, 900, 600, 520, 250];
  const dataWeek2 = [240, 450, 490, 500, 250, 300, 400];

  const monthly1 = [750, 250, 300, 900, 600, 520, 250, 300, 400, 500, 450, 350];
  const monthly2 = [240, 450, 490, 500, 250, 300, 400, 250, 200, 700, 900, 750];

  if (activeButton === "weekly") {
    label = weeks;
    data1 = dataWeek1;
    data2 = dataWeek2;
  } else if (activeButton === "monthly") {
    label = months;
    data1 = monthly1;
    data2 = monthly2;
  } else if (activeButton === "") {
    label = [];
    data1 = [];
    data2 = [];
  }

  return (
    <div className="border shadow rounded-md px-6 py-3 w-[415px]">
      <div className="flex justify-between gap-3">
        <h2 className="font-bold">School Finance</h2>
        <div className="flex gap-3 items-center">
          <div className="flex items-center gap-2">
            <div className="relative">
              <button
                className={`rounded-xl px-5 py-[2px] ${
                  activeButton === "weekly"
                    ? "bg-[#3527D6]"
                    : "bg-[white] border"
                } h-[14px] w-2`}
                onClick={() => handleClick("weekly")}
              ></button>
              <span
                className={`rounded-full px-2 py-1 bg-[${
                  activeButton === "weekly" ? "white" : "#3527D6"
                }] absolute top-[6px] left-0 h-[14px] w-2`}
              ></span>
            </div>
            <p className="text-[12px]">Weekly</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <button
                className={`rounded-xl px-5 py-[2px]  ${
                  activeButton === "monthly"
                    ? "bg-[#3527D6]"
                    : "bg-[white] border"
                } h-[14px] w-2`}
                onClick={() => handleClick("monthly")}
              ></button>
              <span
                className={`rounded-full px-2 py-1 bg-[${
                  activeButton === "monthly" ? "white" : "#3527D6"
                }] absolute top-[6px] left-0 h-[14px] w-2`}
              ></span>
            </div>
            <p className="text-[12px]">Monthly</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-8 my-5">
        <div className="flex gap-2 items-center">
          <button className="py-1 px-2 h-8 rounded-full bg-[#D8EEBD]">
            <img src={ArrowBlack} alt="side_arrow_black" />
          </button>
          <div className="leading-4">
            <p className="text-[12px]">Income</p>
            <h3 className="font-bold">7,563,500</h3>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <button className="py-1 px-2 h-8 rounded-full bg-[#3527D6]">
            <img src={ArrowWhite} alt="side_arrow_white" />
          </button>
          <div className="leading-4">
            <p className="text-[12px]">Experse</p>
            <h3 className="font-bold">950,347</h3>
          </div>
        </div>
      </div>
      <div>
        <Line
          data={{
            datasets: [
              {
                label: "Experse",
                data: data2,
                borderColor: "#3527D6",
                backgroundColor: "#3527D6",
                fill: "origin",
                pointRadius: 0,
              },
              {
                label: "Income",
                data: data1,
                borderColor: "#D8EEBD",
                backgroundColor: "#D8EEBD",
                fill: "origin",
                pointRadius: 0,
              },
            ],
          }}
          options={{
            scales: {
              x: {
                type: "category",
                labels: label,
              },
            },
            elements: {
              line: {
                tension: 0.1,
              },
            },
          }}
        />
      </div>
    </div>
  );
}
export default SchoolFinance;
