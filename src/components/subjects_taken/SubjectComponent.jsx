import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import PropTypes from "prop-types";

function SubjectComponent({ score, subjectName, color1, realScore }) {
  return (
    <div className="border shadow px-3 py-2">
      <h3>{subjectName}</h3>
      <div className=" w-[180px] h-[80px] lg:w-[220px] lg:h-[120px] flex justify-center">
        <Pie
          data={{
            datasets: [
              {
                label: [],
                data: [score, 100 - score],
                backgroundColor: [color1, "#3527D6"],
              },
            ],
          }}
        />
      </div>
      <div className="flex justify-end">
        <p>{realScore}/100</p>
      </div>
    </div>
  );
}

SubjectComponent.propTypes = {
  score: PropTypes.number.isRequired,
  subjectName: PropTypes.string.isRequired,
  color1: PropTypes.string.isRequired,
  realScore: PropTypes.number.isRequired,
};

export default SubjectComponent;
